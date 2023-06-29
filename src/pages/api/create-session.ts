import { NextApiRequest, NextApiResponse } from "next";
import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
				success_url: `${process.env.STATIC_URL}/success`,
				cancel_url: `${process.env.STATIC_URL}/cancel`,
				tokens: ['dust', 'samo'],
				items: items,
				shipping_fees: 0.5,
			});

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        error: "Internal server error, Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
