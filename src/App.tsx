import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="grid grid-rows-1">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
