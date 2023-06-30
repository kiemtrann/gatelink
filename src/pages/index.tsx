import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { IProduct, ISession } from "../../typings";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

import items from '../pages/api/items.json'

type Props = {
  products: IProduct[];
};

const Home = ({ products }: Props) => {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Gatelinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  
  // Get user logged in credentials
  const session: ISession | null = await getSession(context);
  if (!session) {
    return {
			props: {
				products: items,
			},
		};
  }


  return {
    props: {
      products: items,
      session,
    },
  };
};
