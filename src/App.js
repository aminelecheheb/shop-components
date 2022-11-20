// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// pages
import Laptops from "./pages/Laptops";
// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
      </AnimatePresence>
      {/* </Router> */}
    </>
  );
}

export default App;
