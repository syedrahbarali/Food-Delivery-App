import "./foodList.css";
import { food_list } from "../../../public/assets/assets";
import FoodItem from "../foodItem/FoodItem";

const FoodList1 = ({ category }) => {
  return (
    <div className="food-list margin-space">
      <h2>Top dishes near you</h2>
      <div className="food-list__container">
        {food_list.map((item, index) => {
          if (item.category === category) {
            return <FoodItem {...item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodList1;
