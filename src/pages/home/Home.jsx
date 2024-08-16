import React from "react";
import Banner from "../../components/banner/Banner";
import ExploreMenu from "../../components/explore-menu/ExploreMenu";
import FoodList from "../../components/food-list/FoodList";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      {/* <ExploreMenu /> */}
      <FoodList />
    </div>
  );
};

export default Home;
