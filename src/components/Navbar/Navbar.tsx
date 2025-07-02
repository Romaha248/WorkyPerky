import React, { useEffect, useState } from "react";
import IconLink from "./IconLink";
import allCities from "../../assets/earth.png";
import login from "../../assets/loginTab.png";
import register from "../../assets/add.png";
import plus from "../../assets/plus.png";
import logo from "../../assets/workyperky.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-bg p-4 center justify-between fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "opacity-85 backdrop-blur-sm shadow-md" : "opacity-100"
      }`}
    >
      <NavLink to={"/"} className="center">
        <img src={logo} className="w-8 h-8 rounded-2xl mr-2.5" />
        <h1 className="text-3xl mr-10 nav-text-cl">WorkyPerky</h1>
      </NavLink>
      <div className="center">
        <IconLink title="ALL CITIES" icon={allCities} link="/cities" />
        <IconLink title="LOGIN" icon={login} link="/login" />
        <IconLink title="REGISTER" icon={register} link="/register" />
        <IconLink title="SUGGEST PLACES" icon={plus} link="/suggest" />
      </div>
    </nav>
  );
};

export default Navbar;
