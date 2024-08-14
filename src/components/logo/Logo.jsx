import "./logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src="./assets/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
