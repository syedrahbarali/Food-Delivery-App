import "./explore_menu.css";
import { menu_list } from "../../../public/assets/assets";
import { Link } from "react-router-dom";

const ExploreMenu = () => {
  return (
    <div className="explore-menu space">
      <h3 className="title">Explore our menu</h3>
      <p className="desc hidden-sm">
        Choose a diverse menu featuring a delectable array of dishes.Our mission
        is to satisfy your craving and elevate your dining experience, one
        delicious meal at a time.
      </p>

      <div className="slider space-parent">
        {menu_list.map((menu_item, index) => (
          <div key={index} className="menu-item">
            <Link to={`/menu/${menu_item.menu_name}`}>
              <img
                src={menu_item.menu_image}
                className="menu-img"
                alt={menu_item.menu_name}
              />
              <p className="sub-heading">{menu_item.menu_name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
