import "./exploreMore.css";
import { menu_list } from "../../../public/assets/assets";
import { Link } from "react-router-dom";

const ExploreMore = () => {
  return (
    <div className="explore-more margin-space">
      <h2 className="explore-more__title">Explore our menu</h2>
      <p className="explore-more__desc">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="explore-more__menu">
        <div className="explore-more__menu-list">
          {menu_list?.map((item, index) => (
            <Link key={index} to="" className="explore-more__menu-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
