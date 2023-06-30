import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { IProduct } from "../../typings";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

type Props = {
  product: IProduct;
};

const CheckoutProduct = ({ product }: Props) => {
  const { id, title, price, description, category, image, rating, hasFast } =
    product;
  const { rate } = rating;
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const createSession = async () => {
    setIsLoading(true);
    const { data } = await axios.post('/api/create-session', {
			items: [product],
		});
    // const url = data.payment_url.replace("checkout", "pos"); add this for POS mode
    router.push(data.payment_url);
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasFast,
    };
    // Send product id to Redux Store to remove from basket
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    // Send product to Redux Store as a basket slice action
    dispatch(removeFromBasket({id}));
  };

  return (
		<div className="grid grid-cols-5">
			<img
				className="object-contain"
				src={image}
				width={200}
				height={200}
				alt={title}
			/>
			{/* middle */}
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex">
					{Array(Math.round(rate))
						.fill(0)
						.map((_, i) => (
							<StarIcon key={i.toString()} className="h-5 text-yellow-500" />
						))}
				</div>
				<p className="text-xs my-2 line-clamp-3">{description}</p>
				<Currency quantity={price} currency="CAD" />
				<div className="flex flex-col space-y-2 my-auto justify-self-end">
					<button
						onClick={createSession}
						className="w-fit mt-6 ml-6 !h-10 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-700"
					>
						{isLoading ? (
							<svg
								className="animate-spin w-32"
								fill="none"
								height="20"
								viewBox="0 0 20 20"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
									fill="#fff"
								/>
							</svg>
						) : (
							<span className="px-6 py-4 w-fit">Checkout</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutProduct;
