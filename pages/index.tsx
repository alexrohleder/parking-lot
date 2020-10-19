import { GetStaticProps } from "next";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { getTodayEarnings, getAvailability } from "../services/Garage";

type Props = {
  earnings: AsyncReturnType<typeof getTodayEarnings>;
  availability: AsyncReturnType<typeof getAvailability>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      earnings: await getTodayEarnings(),
      availability: await getAvailability(),
    },
  };
};

export default function Dashboard(props: Props) {
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
        <Card title="Total Earnings" value={`${props.earnings.amount},- NOK`} />
        <Card
          title="Total Availability"
          value={`${props.availability.totalAvailableSpots} spots`}
        />
        <div className="hidden sm:block placeholder" />
        <div className="hidden lg:block placeholder" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="hidden sm:block h-64 placeholder" />
        <div className="hidden sm:block h-64 placeholder" />
      </div>
    </Layout>
  );
}
