import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
	api_keys: {
		public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY as string,
		private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY as string,
	},
	network: 'devnet', // use 'mainnet' for prod and 'devnet' for dev environment
	config: {
		collect_shipping_address: false,
	},
});
