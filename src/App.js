// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Items from "./pages/Items";
// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
