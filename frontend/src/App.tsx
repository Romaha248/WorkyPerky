import "./App.css";
import Fotter from "./components/HomePage/Fotter";
import Navbar from "./components/Navbar/Navbar";
// import AllCafes from "./components/AllCafes/AllCafes";
// import AllRoutes from "./components/Routes/AllRoutes";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="grid grid-rows-1">
      <Navbar />
      {/* <AllRoutes /> */}
      <Outlet />
      <Fotter />
      <ScrollRestoration />
    </div>
  );
}

export default App;
