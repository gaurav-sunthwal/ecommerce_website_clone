import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import "./Styling/Genural.css";
import Navbar from "./Pages/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar/>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
