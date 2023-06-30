import moment from "moment";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { IOrder, ISession } from "../../typings";
import Header from "../components/Header";
import Order from "../components/Order";

type Props = {
  orders: IOrder[];
};

const Orders = ({ orders }: Props) => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-l max-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-[fast_blue]">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Get user logged in credentials
  const session: ISession | null = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  const orders = {};
 
  return {
    props: {
      orders,
    },
  };
};
