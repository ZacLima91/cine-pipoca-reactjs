import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import api from "./api";
import { useState } from "react";

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
