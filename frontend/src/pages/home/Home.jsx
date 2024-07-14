import ExploreMore from "../../components/exploreMore/ExploreMore";
import SlideBanner from "../../components/slideBanner/SlideBanner";
import "./home.css";

const Home = () => {
  return (
    <div className="home margin-space">
      <SlideBanner />
      <ExploreMore />
    </div>
  );
};

export default Home;
