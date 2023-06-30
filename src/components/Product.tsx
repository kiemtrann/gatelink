import { StarIcon } from "@heroicons/react/24/solid";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { IProduct } from "../../typings";
import { addToBasket } from "../slices/basketSlice";

type Props = {
  product: IProduct;
};

const Context = React.createContext({ name: 'Default' });

const Product: React.FC<Props> = ({ product }: Props) => {
  const { id, title, price, description, category, image, rating } = product;
  const { rate } = rating;
  const hasFast = rate > 4 ? true : false;
  const dispatch = useDispatch();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement, name: string) => {
		api.success({
			message: `Notification`,
			description: (
				<Context.Consumer>
					{() => `Hello, you added ${name} to your shopping cart!`}
				</Context.Consumer>
			),
			placement,
		});
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
    // Send product to Redux Store as a basket slice action
    dispatch(addToBasket({...product, hasFast}));
    openNotification('top', title);
  };

  return (
		<>
			{contextHolder}
			<div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
				<p className="absolute top-2 right-2 text-xs italic text-gray-400">
					{category}
				</p>
				<img
					className="object-contain w-40 h-40 mx-auto rounded"
					src={image}
					width={600}
					height={800}
					alt={title}
				/>
				<h4 className="my-3">{title}</h4>
				<div className="flex">
					{Array(Math.round(rate))
						.fill(0)
						.map((_, i) => (
							<StarIcon key={i.toString()} className="h-5 text-yellow-500" />
						))}
				</div>
				<p className="text-xs my-2 line-clamp-2">{description}</p>
				<div className="mb-5">
					<Currency quantity={price} currency="CAD" />
				</div>
				<button onClick={addItemToBasket} className="mt-auto button">
					Add to Basket
				</button>
			</div>
		</>
	);
};

export default Product;
