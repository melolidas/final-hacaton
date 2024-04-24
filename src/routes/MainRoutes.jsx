import React from "react";
import Form from "../pages/Form";
import { Route, Routes } from "react-router-dom";
// import Card from "../components/Cards/card";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
