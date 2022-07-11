import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import {
  OurCoffe,
  MainPage,
  ForPleasure,
  ItemDetails,
} from "./Components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/our-coffe" element={<OurCoffe />} />
        <Route path="/for-pleasure" element={<ForPleasure />} />
        <Route path="/our-coffe/:itemDetails" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
