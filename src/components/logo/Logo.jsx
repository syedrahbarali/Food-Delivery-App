import { Link } from "react-router-dom";
import "./logo.css";

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
