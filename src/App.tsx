import "./App.css";
import Fotter from "./components/HomePage/Fotter";
import Navbar from "./components/Navbar/Navbar";
// import AllCafes from "./components/AllCafes/AllCafes";
import AllRoutes from "./components/Routes/AllRoutes";

function App() {
  return (
    <div className="grid grid-rows-1">
      <Navbar />
      <AllRoutes />
      <Fotter />
    </div>
  );
}

export default App;
