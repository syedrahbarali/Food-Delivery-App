import { Link, NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <header className="navbar">
        {/*- - - - - Logo  - - - - -*/}
        <div className="navbar__logo">
          <Link to="/">
            <img src="./assets/logo.png" alt="" />
          </Link>
        </div>

        {/* - - - - - Menu - - - - - */}
        <nav className="navbar__menu-container">
          <ul className="navbar__menu">
            <li className="navbar__menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/mobile-app">Mobile app</NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/contact-us">Contact-us</NavLink>
            </li>
          </ul>
        </nav>

        {/* - - - - - Utlis - - - - - */}
        <div className="navbar__utils">
          <RiShoppingCartLine size={24} className="cart" />
          <IoSearchOutline size={24} />
          <Link className="btn btn--primary" to="/sign-in">
            Sign in
          </Link>
          {/* <Link to="/sign-up">Sign up</Link> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
