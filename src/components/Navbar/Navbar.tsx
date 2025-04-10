import React from "react";
import IconLink from "./IconLink";
import allCities from "../../assets/earth.png";
import login from "../../assets/loginTab.png";
import register from "../../assets/add.png";
import plus from "../../assets/plus.png";
import logo from "../../assets/workyperky.png";

const Navbar = () => {
  return (
    <nav className="nav-bg p-4 center justify-between fixed top-0 left-0 w-full z-50">
      <div className="center">
        <img src={logo} className="w-8 h-8 rounded-2xl mr-2.5" />
        <h1 className="text-3xl mr-10 nav-text-cl">WorkyPerky</h1>
      </div>
      <div className="center">
        <IconLink title="ALL CITIES" icon={allCities} />
        <IconLink title="LOGIN" icon={login} />
        <IconLink title="REGISTER" icon={register} />
        <IconLink title="SUGGEST PLACES" icon={plus} />
      </div>
    </nav>
  );
};

export default Navbar;
