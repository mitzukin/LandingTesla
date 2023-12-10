import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
function App() {
  return (
      <div>
        <BrowserRouter basename="/home">
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}

export default App;
