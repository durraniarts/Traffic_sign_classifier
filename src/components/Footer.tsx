import { Github, Instagram, Linkedin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-24 bg-white flex justify-center items-center px-12">
      <div className="flex basis-1/2">
        <Link
          to={"/about-application"}
          className="text-black text-nowrap text-lg font-serif font-semibold border-b border-black"
        >
          All About This Application{" "}
        </Link>
      </div>
      <div className="basis-1/2 flex justify-end gap-12">
        {" "}
        <Github width={24} height={24} className="text-black" />
        <Linkedin width={24} height={24} className="text-black" />
        <Instagram width={24} height={24} className="text-black" />
        <Phone width={24} height={24} className="text-black" />
      </div>
    </footer>
  );
};

export default Footer;
