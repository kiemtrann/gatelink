import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    let event;
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
