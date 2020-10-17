import { GetStaticProps } from "next";
import Card from "../components/Dashboard/Card";
import Layout from "../components/Layout";
import { getTodayEarnings } from "../services/Garage";

type Props = {
  earnings: AsyncReturnType<typeof getTodayEarnings>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      earnings: await getTodayEarnings()
    },

    revalidate: 3600 // re-compute every 1hr
  };
};

export default function Dashboard(props: Props) {
  return (
    <Layout>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Total Earnings"
          description="Information today"
          value={`${props.earnings.amount},- NOK`}
          delta={props.earnings.delta}
          deltaTitleAppendix="from yesterday"
        />
      </div>
    </Layout>
  );
}
