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

const percent = (n1: number, n2: number) => (n1 * 100) / n2 + "%";

export default function Dashboard({ earnings, availability }: Props) {
  return (
    <Layout title="Parking Dashboard">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
        <Card title="Total Earnings">
          <div className="text-3xl font-bold">{earnings.amount},- NOK</div>
        </Card>
        <Card title="Total Availability">
          <div className="text-3xl font-bold">
            {availability.totalAvailableSpots} spots
          </div>
        </Card>
        <div className="hidden sm:block placeholder" />
        <div className="hidden lg:block placeholder" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col gap-4">
          <div className="placeholder h-48" />
          <div className="flex gap-4">
            <div className="w-full">
              <Card title="Class Diagram">
                Follow{" "}
                <a href="/class-diagram.svg" target="_blank">
                  this link
                </a>{" "}
                to see.
              </Card>
            </div>
            <div className="placeholder w-full" />
          </div>
          <div className="placeholder h-64" />
        </div>
        <div className="flex flex-col gap-4">
          <Card title="Spots Overview">
            <table>
              <thead>
                <tr>
                  <th>Floor</th>
                  <th>Total Spots</th>
                  <th>Available Spots</th>
                  <th>Available %</th>
                </tr>
              </thead>
              <tbody>
                {availability.floors.map((floor) => (
                  <tr key={floor.level}>
                    <td>Level {floor.level}</td>
                    <td>{floor.totalSpots}</td>
                    <td>{floor.totalAvailableSpots}</td>
                    <td>
                      {percent(floor.totalAvailableSpots, floor.totalSpots)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="font-bold">Total:</td>
                  <td>{availability.totalSpots}</td>
                  <td>{availability.totalAvailableSpots}</td>
                  <td>
                    {percent(
                      availability.totalAvailableSpots,
                      availability.totalSpots
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </Card>
          <div className="hidden lg:block placeholder h-48" />
        </div>
      </div>
    </Layout>
  );
}
