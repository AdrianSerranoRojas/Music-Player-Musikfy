import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
