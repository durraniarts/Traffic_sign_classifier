import React from "react";
import { Home, Info, Telescope, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <nav className="w-full  bg-[#000000] text-white flex items-center justify-between px-12 py-4">
      <div className="flex items-center">
        <h4 className="font-bold text-2xl">Sign Classifier</h4>
      </div>
      <div
        className="flex w-1/5
       justify-between"
      >
        <Link to={"/"}>
          <Home width={24} height={24} color="white" />
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={"/explore-all-signs"}>
                <Telescope color="white" width={24} height={24} className="" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white mt-4">
              <p className="text-md  text-black font-bold ">All Signs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={"/about-application"}>
                <Info color="white" width={24} height={24} />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white mt-4">
              <p className="text-md  text-black font-bold ">
                About This Application
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={"/about-developer"}>
                <User color="white" width={24} height={24} />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white mt-4">
              <p className="text-md  text-black font-bold ">About Me</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default Navbar;
