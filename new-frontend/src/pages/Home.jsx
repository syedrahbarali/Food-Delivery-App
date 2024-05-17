import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div className="px-4">
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
