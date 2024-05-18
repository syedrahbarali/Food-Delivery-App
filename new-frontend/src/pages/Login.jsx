import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginStatusActions } from "../store/slices/loginStatus.slice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let adhaarNumber = useRef();
  let password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://voting-app-vrbt.onrender.com/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adhaarNumber: adhaarNumber.current.value,
          password: password.current.value,
        }),
      }
    );

    console.log(await response.json());

    if (response.status === 200) {
      dispatch(loginStatusActions.setLoginStatus());
      toast.success("Login Successful");
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="py-10 text-3xl text-blue-950 font-medium lg:text-center lg:text-4xl">
        Register to <span className="font-bold text-red-600">Vote</span>
      </h1>

      <div className="lg:w-4/12 mx-auto">
        <form action="" className="flex flex-col gap-5 font-normal">
          <div className="flex flex-col">
            <label className="w-fit" htmlFor="adhaar-number">
              Adhaar Number
            </label>
            <input
              ref={adhaarNumber}
              className="border border-black rounded-md p-2"
              type="number"
              id="adhaar-number"
              placeholder="Enter your Adhaar Number"
            />
          </div>

          <div className="flex flex-col">
            <label className="w-fit" htmlFor="adhaar-number">
              Password
            </label>
            <input
              ref={password}
              className="border border-black rounded-md p-2"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={(e) => handleLogin(e)}
            className="p-3 bg-red-500 text-white font-medium rounded-xl hover:opacity-80 transition-[opacity]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
