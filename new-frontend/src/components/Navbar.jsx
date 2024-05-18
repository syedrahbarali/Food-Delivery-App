import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loginStatusActions } from "../store/slices/loginStatus.slice";
import { toast } from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.loginStatus);
  let [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      console.log("Logout clicked");
      const response = await fetch(
        "https://voting-app-vrbt.onrender.com/api/v1/user/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      console.log(await response.json());

      if (!response.ok) {
        toast.error("Logout Failed");
        return;
      }

      dispatch(loginStatusActions.setLoginStatus());
      toast.success("Logout Successful");
      navigate("/log-in");
    } catch (error) {
      toast.error("Logout Failed");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className=" flex justify-between items-center py-2">
        <div className="h-20 flex-1 flex items-center">
          <img src="./images/logo.png" className="h-16 md:h-full" />
        </div>

        <nav className="flex-1 hidden lg:block">
          <ul className="h-full flex gap-6 font-semibold items-center">
            <li>
              <Link className="hover:text-red-600 transition-[color]">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition-[color]">
                Candidates List
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-600 transition-[color]">
                Vote Now
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex gap-5 font-semibold items-center">
          <button
            onClick={() => (loginStatus ? handleLogout() : navigate("/log-in"))}
            className="border text-white bg-red-600 px-4 py-3 rounded-xl hover:bg-red-700 transition-[background-color]"
          >
            {loginStatus ? "Logout" : "Login"}
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="border text-white bg-red-600 px-4 py-3 rounded-xl hover:bg-red-700 transition-[background-color]"
          >
            {loginStatus ? "Profile" : "Sign up"}
          </button>
        </div>

        <div className="lg:hidden pr-4">
          {isClicked ? (
            <IoClose
              onClick={() => setIsClicked(!isClicked)}
              className="text-xl"
            />
          ) : (
            <LuMenu
              onClick={() => setIsClicked(!isClicked)}
              className="text-xl"
            />
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`${isClicked ? "block" : "hidden"} w-full`}>
        <ul className="flex flex-col gap-4 items-center font-semibold">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Candidates List</Link>
          </li>
          <li>
            <Link>Vote Now</Link>
          </li>
        </ul>

        <div className="flex gap-4 py-6 justify-center">
          <button
            onClick={() => (loginStatus ? handleLogout() : navigate("/log-in"))}
            className="border text-white bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition-[background-color]"
          >
            {loginStatus ? "Logout" : "Log in"}
          </button>
          <button
            onClick={() => navigate("/sign-up")}
            className="border text-white bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition-[background-color]"
          >
            {loginStatus ? "Profile" : "Sign up"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
