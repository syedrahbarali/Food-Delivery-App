import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

// https://xhamster42.desi/videos/new-viral-hot-indian-mbbs-student-fuck-with-bf-in-her-hostel-with-horny-mouning-dirty-talk-xhjAHTV?pw=
