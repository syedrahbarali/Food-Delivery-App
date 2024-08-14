import "./auth_btn.css";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const AuthBtn = ({ handleToggleMenu, toggleMenu }) => {
  const location = useLocation();

  return (
    <div className="auth-btn">
      <Link
        className="btn btn-primary"
        to={`${location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`}
      >
        {location.pathname === "./sign-in" ? "Sign up" : "Sign in"}
      </Link>

      <div className="menu visible-sm">
        {toggleMenu ? (
          <IoClose className="icon" onClick={handleToggleMenu} />
        ) : (
          <IoMenu className="icon" onClick={handleToggleMenu} />
        )}
      </div>
    </div>
  );
};

export default AuthBtn;
