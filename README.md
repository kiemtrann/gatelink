<div align="center">
  <a href="https://gatelink.vercel.app">
    <img src="https://res.cloudinary.com/drh6sa2x5/image/upload/v1688110193/gatelink_rpls4z.png" alt="GitHub Readme Tech Stack" />
  </a>
</div>

<div align="center">
  Gatelinks is a marketplace platform designed for selling images, videos, PDFs, and links. It provides a user-friendly interface for creators and businesses to monetize their digital content by offering it for sale to a wider audience. Gatelinks empowers content creators to showcase their work and connect with potential buyers, while providing a seamless purchasing experience for customers.
  <p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/kiemTran_dev" target="_blank">
    <img alt="Twitter: kiemTran\_dev" src="https://img.shields.io/twitter/follow/kiemTran\_dev.svg?style=social" />
  </a>
</p>
</div>

<hr>

## 🐧 Demo
![Alt Text](https://s11.gifyu.com/images/SQ57S.gif)


<hr>

## ⚡ Getting Started

To run Gatelinks locally, follow these steps:

1. Clone the repository: `git clone https://github.com/VanKiem-Tran/gatelink.git`

2. Install dependencies: `cd gatelinks` and `npm install`

3. Set up environment variables: Create a .env file and configure the necessary environment variables such as Candypay API keys, and OAuth.

4. Start the development server: `npm run dev`

5. Open your browser and navigate to http://localhost:3000 to access the Gatelinks application.

Note: Detailed installation and deployment instructions can be found in the project's documentation
<!-- <p align="center">
  <img src="./docs/README.gif" alt="tutorial">
</p> -->

<hr>

## 👉 Features

 - **Sell Digital Content**: Gatelinks allows users to easily upload and sell various types of digital content, including images, videos, PDFs, and links. Content creators can set their own prices and customize the details of each listing.

 - **Secure Transactions**: The platform ensures secure transactions between buyers and sellers. It supports CandyPay - a low-code checkout solution, powering seamless, mobile-native, and effortless Payment infrastructure for web3 businesses, where you can get started accepting Solana payments in a few lines of code!

 - **User Profiles**: Gatelinks provides user profiles for both content creators and buyers. Creators can showcase their portfolio and interact with potential customers, while buyers can discover new content and track their purchases.

 - **Search and Discovery**: Users can search for specific types of content or explore various categories and tags to discover new and interesting digital products. Gatelinks offers robust search functionality to make it easy for buyers to find the content they are looking for.

 - **Rating and Reviews**: Buyers can leave ratings and reviews for the purchased content, enabling creators to build a reputation and gain valuable feedback from their customers.

 - **Revenue Tracking**: Gatelinks provides comprehensive revenue tracking and reporting tools for content creators. Creators can monitor their sales, revenue, and performance metrics to gain insights into their business with Candypay dashboard.

<hr>

## 🔧 Technologies Used

The project utilizes the following technologies and dependencies:

- **@candypay/checkout-sdk** (version 0.1.56): **The CandyPay Checkout SDK** is the core dependency for integrating CandyPay's payment solutions into the project. It provides a set of APIs and functions for handling payments, managing transactions, and handling customer data securely.

- **@heroicons/react** (version 2.0.13): Heroicons is a set of beautiful, open-source icons designed by the Heroicons team. The @heroicons/react package provides a React component wrapper for easily incorporating these icons into the project.

- **@reduxjs/toolkit** (version 1.9.0): Redux Toolkit is a package that simplifies the usage of Redux by providing a set of tools and abstractions. It helps manage the global state of the application, making it easier to handle data flow and state changes.

- **@tailwindcss/line-clamp** (version 0.4.2): Tailwind CSS is a highly customizable CSS framework that provides a utility-first approach to styling. The @tailwindcss/line-clamp package extends Tailwind CSS with a utility class for truncating text content with an ellipsis.

- **@types/react-currency-formatter** (version 1.1.4): This package provides TypeScript type definitions for the react-currency-formatter library. It ensures type safety and enables better code completion and error checking when using react-currency-formatter.

- **antd** (version 5.6.3): Ant Design is a popular UI library for React that offers a wide range of components and styles. It provides a set of customizable and reusable UI components for building modern web applications.

- **axios** (version 1.1.3): Axios is a popular HTTP client library that simplifies making HTTP requests from JavaScript. It provides an easy-to-use API for performing asynchronous requests and handling responses.

- **moment** (version 2.29.4): Moment.js is a widely used JavaScript library for parsing, validating, manipulating, and formatting dates and times. It provides a simple and intuitive API for working with dates and times in JavaScript.

- **next** (latest version): Next.js is a popular React framework for building server-side rendered (SSR) and statically generated (SSG) applications. It offers features like automatic code splitting, server-side rendering, and optimized performance.

- **next-auth** (version 4.16.4): NextAuth is an authentication library for Next.js applications. It simplifies the process of adding authentication, including social logins and JWT authentication, to Next.js projects.

- **react** (version 18.2.0): React is a widely used JavaScript library for building user interfaces. It provides a component-based approach to UI development and facilitates the creation of reusable UI elements.

- **react-currency-formatter** (version 1.1.0): This library provides a React component for formatting currency values in a consistent and localized manner. It simplifies the task of displaying currency amounts with proper formatting.

- **tailwindcss** (version 3.2.1): Tailwind CSS is a highly customizable CSS framework that provides a utility-first approach to styling. It allows for rapid development by composing utility classes to create the desired styles.

- **typescript** (version 4.8.4): TypeScript is a superset of JavaScript that introduces static typing to the language. It enhances code quality, improves maintainability, and provides better tooling support through static type checking.
                                                              |

</details>

<hr>

## How CandyPay Checkout SDK is being used

In the Gatelinks website, the **CandyPay** is utilized to facilitate the payment process and enable seamless transactions for purchasing digital content.

- Integration Setup: The **CandyPay** is included as a dependency in the project's package.json file. The specific version used is "@candypay/checkout-sdk" (version 0.1.56).

- Importing the SDK and initializing the SDK: Within the codebase, the **CandyPay** is imported using the appropriate import statement or require statement, depending on the JavaScript module system in use.

```sh
import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
	api_keys: {
		public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY,
		private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY,
	},
	network: 'devnet', // use 'mainnet' for prod and 'devnet' for dev environment
	config: {
		collect_shipping_address: false,
	},
});
```

- Creating a Payment: When a buyer selects an item for purchase on Gatelinks, the CandyPay Checkout SDK is used to create a payment object. This payment object includes details such as the item being purchased, the price, and any additional metadata.

```sh
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { items } = req.body;
  
	try {
		const response = await candypay.session.create({
			success_url: `${process.env.STATIC_URL}/success`,
			cancel_url: `${process.env.STATIC_URL}/cancel`,
			tokens: ['dust', 'samo', 'shdw'],
			items: [
				{
					name: item.title,
					price: item.price,
					image: item.image,
					quantity: item.quantity,
					size: item.size,
				},
			],
			shipping_fees: item.shipping_fees,
			metadata: {
				customer_name: 'Kiem Tran',
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

```

- Initiating the Checkout: After the payment object is created, the CandyPay Checkout SDK is invoked to initiate the checkout process. This typically involves displaying a checkout form or redirecting the user to a payment page hosted by CandyPay.
<div align="center">
  <a href="https://gatelink.vercel.app">
    <img src="https://res.cloudinary.com/drh6sa2x5/image/upload/v1688121454/Screen_Shot_2023-06-30_at_17.36.19_vzbwpc.png" alt="GitHub Readme Tech Stack" />
  </a>
</div>

- Handling Payment Events: During the checkout process, the CandyPay Checkout SDK emits various events to track the progress and outcome of the payment. These events can be captured and handled within the Gatelinks website to update the user interface, trigger appropriate actions, or display relevant messages.

By incorporating the CandyPay, Gatelinks leverages its features and functionality to enable secure and efficient payment processing for the sale of digital content on the platform. This ensures a seamless and reliable purchasing experience for buyers and content creators alike.


<hr>

## 🧑‍🤝‍🧑 Contribution 

Contributions to Gatelinks are welcome!

If you would like to contribute to the project, please follow these steps:

```sh
Fork the repository.

Create a new branch for your feature or bug fix: git checkout -b my-feature.

Make your changes and commit them: git commit -m "Add my feature".

Push to the branch: git push origin my-feature.

Open a pull request in the main repository.

Please ensure that your code follows the project's coding style and conventions.

Additionally, write clear commit messages and provide a detailed description in your pull request to facilitate the review process.
```

<hr>

## ©️ License 

The Gatelinks project is licensed under the MIT License. You are free to use, modify, and distribute the codebase in accordance with the terms and conditions of the license.

<hr>

## ☎️ Contact  

If you have any questions, suggestions, or feedback regarding Gatelinks, feel free to contact us at `kiemtran.dev@gmail.com`. I appreciate your interest in the project and will get back to you as soon as possible.

For more information, please visit the official [Gatelinks website ](https://gatelink.vercel.app).

Thank you for your interest in Gatelinks. I hope you find the platform useful for selling and monetizing your digital content. Happy selling!
