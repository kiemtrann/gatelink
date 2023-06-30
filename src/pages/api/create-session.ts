import { NextApiRequest, NextApiResponse } from "next";
import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { items } = req.body;
  
	try {
		const response = await candypay.session.create({
			success_url: `${process.env.STATIC_URL}/success`,
			cancel_url: `${process.env.STATIC_URL}/cancel`,
			tokens: ['dust', 'samo', 'shdw'],
			items: [
				{
					name: items[0].title,
					price: items[0].price,
					image: items[0].image,
					quantity: 1,
					size: 'M',
				},
			],
			shipping_fees: 0.5, // optional | value in USD
			metadata: {
				customer_name: 'Jon Doe',
			},
		});

		return res.status(200).json(response);
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Error creating session',
		});
	}
};

export default handler;
