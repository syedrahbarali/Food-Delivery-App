import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-6">
      <img src="/images/logo.svg" className="h-20 w-20" />

      {/* Navigation Links */}
      <nav className="">
        <ul className="flex gap-10 text-lg">
          <li>
            <Link className="hover:text-red-500 transition-[color]">Home</Link>
          </li>
          <li>
            <Link className="hover:text-red-500 transition-[color]">About</Link>
          </li>
          <li>
            <Link className="hover:text-red-500 transition-[color]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login and Signup */}
      <div className="flex gap-5">
        <button className="p-3 bg-red-500 text-white font-medium rounded-xl hover:opacity-80 transition-[opacity]">
          Login
        </button>
        <button className="p-3 bg-red-500 text-white font-medium rounded-xl hover:opacity-80 transition-[opacity]">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
