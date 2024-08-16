import "./food_list.css";
import { food_list } from "../../../public/assets/assets";
import FoodPriceCard from "../food_price-card/FoodPriceCard";
import ExploreMenu from "../explore-menu/ExploreMenu";
import { useState } from "react";

const FoodList = () => {
  const [category, setCategory] = useState("Salad");

  return (
    <>
      <ExploreMenu setCategory={setCategory} />
      <div className="food-list space-children">
        {food_list
          .filter((food_item, index) => food_item.category === category)
          .map((food_item, index) => (
            <FoodPriceCard key={index} {...food_item} />
          ))}
      </div>
    </>
  );
};

export default FoodList;
