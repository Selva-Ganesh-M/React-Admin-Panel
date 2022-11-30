import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Widgets from "../../components/widgets/Widgets";

import { userData } from "../../data/chartDummyData";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets />
    </div>
  );
};

export default Home;
