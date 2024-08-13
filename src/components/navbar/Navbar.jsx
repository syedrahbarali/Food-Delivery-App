import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import AuthBtn from "../auth-btn/AuthBtn";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="header">
      <div className="nav container">
        <Logo />

        <ul
          className={`nav-list hidden-sm ${
            toggleMenu ? "nav-list-visible" : ""
          }`}
        >
          <li className="nav-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact-us"}>Contact us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/mobile-app"}>Mobile App</NavLink>
          </li>
        </ul>

        <div className="utilities">
          <div className="utility-icons hidden-sm">
            <CiSearch className="icon" />
            <FiShoppingCart className="icon" />
          </div>

          <AuthBtn
            handleToggleMenu={handleToggleMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
