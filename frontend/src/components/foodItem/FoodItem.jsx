import "./foodItem.css";
import { Link } from "react-router-dom";

const FoodItem = ({ name, image, price, description }) => {
  return (
    <div className="food-item margin-space">
      <Link to="">
        <img className="food-item__image" src={image} alt="" />
      </Link>

      <Link to="">
        <h4 className="food-item__name">{name}</h4>
      </Link>

      <p className="food-item__desc">{description}</p>
      <p className="food-item__price">${price}</p>
    </div>
  );
};

export default FoodItem;
