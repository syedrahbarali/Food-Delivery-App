import { menu_list } from "../../../public/assets/assets";
import "./exploreMore.css";
import { useState } from "react";
import FoodList1 from "../foodList/FoodList";

const ExploreMore = () => {
  const [currCategory, setCurrCategory] = useState("Salad");

  return (
    <div className="explore-more margin-space">
      <h2 className="explore-more__heading">Explore our menu</h2>
      <p className="explore-more__desc">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="explore-more__menu-container">
        <div className="explore-more__menu">
          {menu_list.map((item, index) => (
            <div key={index} className="explore-more__menu-item">
              <img
                onClick={() => setCurrCategory(item.menu_name)}
                className={`explore-more__menu-image ${
                  item.menu_name === currCategory ? " category-active" : ""
                } `}
                src={item.menu_image}
                alt=""
              />
              <p className="explore-more__menu-category">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <FoodList1 category={currCategory} />
    </div>
  );
};

export default ExploreMore;
