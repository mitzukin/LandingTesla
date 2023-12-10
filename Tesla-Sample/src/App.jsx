import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter basename="/LandingTesla">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Use "home" as the default route */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
