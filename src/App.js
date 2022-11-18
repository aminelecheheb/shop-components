// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Laptops from "./pages/Laptops";
// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
      </Routes>
    </Router>
  );
}

export default App;
