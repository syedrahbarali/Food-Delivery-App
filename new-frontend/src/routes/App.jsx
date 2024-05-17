import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
