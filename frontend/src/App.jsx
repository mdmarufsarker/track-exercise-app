import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// components
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
