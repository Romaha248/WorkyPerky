import React from "react";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import inst from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Fotter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50">
      <div className="center justify-center mt-6">
        <a
          href="mailto:romanbezverkhyi5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 mx-6"
        >
          <img src={email} alt="email" className="h-full w-full" />
        </a>
        <a
          href="https://github.com/Romaha248"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 mx-6"
        >
          <img src={github} alt="github" className="h-full w-full" />
        </a>
        <a
          href="https://www.instagram.com/tiurip_ip_ip/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 mx-6"
        >
          <img src={inst} alt="inst" className="h-full w-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-bezverkhyi-039b0b350/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 w-14 mx-6"
        >
          <img src={linkedin} alt="linkedin" className="h-full w-full" />
        </a>
      </div>
      <div className="center justify-center">
        <h1 className="mt-1 mr-1">©</h1>
        <h1 className="my-3">{currentYear} WorkyPerky</h1>
      </div>
    </footer>
  );
};

export default Fotter;
