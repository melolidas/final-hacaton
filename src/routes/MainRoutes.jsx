import React from "react";
import Form from "../pages/Form";
import Listings from "../components/Listings/Listings";
import { Route, Routes } from "react-router-dom";
// import Card from "../components/Cards/card";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/listing" element={<Listings />} />
      {/* <Route path="/card" element={<Card />} /> */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
