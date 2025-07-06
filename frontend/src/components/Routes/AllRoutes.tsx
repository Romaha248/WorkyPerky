import React from "react";
import { Route, Routes } from "react-router-dom";

import AllCities from "../AllCities/AllCities";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import AllCafes from "../AllCafes/AllCafes";
// import ScrollToTop from "../../addons/ScrollToTop";
import SuggestPlace from "../SuggestPlace/SuggestPlace";

const AllRoutes: React.FC = () => (
  <>
    {/* <ScrollToTop /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cities" element={<AllCities />} />
      <Route path="/cities/:cafe" element={<AllCafes />} />
      <Route path="/suggest" element={<SuggestPlace />} />
    </Routes>
    {/* <ScrollRestoration /> */}
  </>
);

export default AllRoutes;
