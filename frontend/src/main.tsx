import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Authentication/LoginPage";
import RegisterPage from "./components/Authentication/RegisterPage";
import AllCities from "./components/AllCities/AllCities";
import AllCafes from "./components/AllCafes/AllCafes";
import SuggestPlace from "./components/SuggestPlace/SuggestPlace";
import CafePage from "./components/AllCafes/CafePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // shared layout with <Outlet /> + <ScrollRestoration />
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "cities", element: <AllCities /> },
      { path: "cities/:place", element: <AllCafes /> },
      { path: "cities/:place/:cafe", element: <CafePage /> },
      { path: "suggest", element: <SuggestPlace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
