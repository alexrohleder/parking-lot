import { GetStaticProps } from "next";
import Card from "../components/Dashboard/Card";
import Layout from "../components/Layout";
import { getTodayEarnings, getTotalAvailability } from "../services/Garage";

type Props = {
  earnings: AsyncReturnType<typeof getTodayEarnings>;
  totalAvailability: AsyncReturnType<typeof getTotalAvailability>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      earnings: await getTodayEarnings(),
      totalAvailability: await getTotalAvailability()
    }
  };
};

export default function Dashboard(props: Props) {
  return (
    <Layout>
      <div className="grid gap-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Total Earnings"
          value={`${props.earnings.amount},- NOK`}
          delta={props.earnings.delta}
          deltaTitleAppendix="from yesterday"
        />
        <Card
          title="Total Availability"
          value={`${props.totalAvailability} spots`}
        />
      </div>
    </Layout>
  );
}
