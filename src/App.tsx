import "./App.css";
import AllCities from "./components/AllCities/AllCities";
import Fotter from "./components/HomePage/Fotter";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Authentication/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./components/Authentication/RegisterPage";

function App() {
  return (
    <div className="grid grid-rows-1">
      <Navbar />
      {/* <HomePage /> */}
      {/* <AllCities /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
      <Fotter />
    </div>
  );
}

export default App;
