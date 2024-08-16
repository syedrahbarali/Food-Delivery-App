import { Link } from "react-router-dom";
import "./food_price_card.css";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const FoodPriceCard = ({ image, name, price, description, rating }) => {
  console.log(rating - (rating % 1));
  return (
    <div className="food_price-card">
      <div className="food-img">
        <img src={image} alt={name} />
        {/* TODO: Here, add Add to Cart button */}
      </div>

      <div className="food-details space">
        <p className="sub-heading">{name}</p>
        <p className="desc hidden-sm">{description}</p>

        <div className="rating">
          {Array(rating - (rating % 1))
            .fill()
            .map((_, index) => (
              <FaStar key={index} color="var(--primary-color)" />
            ))
            .concat(
              Array(rating % 1 > 0 ? 1 : 0).fill(
                <FaRegStarHalfStroke
                  key={Math.random()}
                  color="var(--primary-color)"
                />
              )
            )
            .concat(
              Array(Math.floor(5 - rating)).fill(
                <FaRegStar key={Math.random()} color="var(--primary-color)" />
              )
            )}
          ({rating})
        </div>

        <span className="sub-heading price">${price}</span>
      </div>
    </div>
  );
};

export default FoodPriceCard;
