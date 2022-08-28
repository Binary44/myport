import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Defipay from "./components/Pages/Defipay";
import Defimooves from "./components/Pages/Defimooves";
import Deficonect from "./components/Pages/Deficonect";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defipay" element={<Defipay />} />
        <Route path="/defimooves" element={<Defimooves />} />
        <Route path="/deficonnect" element={<Deficonect />} />
      </Routes>
      <Card />
    </div>
  );
}

export default App;
