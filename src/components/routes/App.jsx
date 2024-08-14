import "./App.css";
import Navbar from "../navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
