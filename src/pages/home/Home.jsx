import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="featured">
        <div className="featured-item">
          <h1 className="item-title">Revenue</h1>
          <div className="amount">
            <span>$2,415</span>
            <span className="oscillator">
              -11.4 <ArrowDropDown className="icon" />
            </span>
          </div>
          <p className="desc">Compared to last month</p>
        </div>
        <div className="featured-item">
          <h1 className="item-title">Sales</h1>
          <div className="amount">
            <span>$1,275</span>
            <span className="oscillator">
              -9.76 <ArrowDropDown className="icon" />
            </span>
          </div>
          <p className="desc">Compared to last month</p>
        </div>
        <div className="featured-item">
          <h1 className="item-title">Cost</h1>
          <div className="amount">
            <span>$3,176</span>
            <span className="oscillator">
              +7.15 <ArrowDropUp className="icon green" />
            </span>
          </div>
          <p className="desc">Compared to last month</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
