import React from "react";
import { NavLink } from "react-router-dom";

interface IconLinkProps {
  title: string;
  icon: string;
  link: string;
}

const IconLink = ({ title, icon, link }: IconLinkProps) => {
  return (
    <NavLink to={link}>
      <h4 className="center nav-text-cl pr-10 text-2xl">
        {title}
        <img src={icon} className="center h-6 w-6 ml-2" />
      </h4>
    </NavLink>
  );
};

export default IconLink;
