import React from "react";
import HelpDialog from "./HelpDialog";
import { DropDown } from "./DropDown";
import { House } from "lucide-react";

const Header = () => (
  <div className="w-full flex justify-between [&>*]:hover:cursor-pointer items-center">
    <DropDown />
    <div className="flex gap-2 items-center group">
      <House className="w-8 h-8 text-darkGreen group-hover:text-yellowish" />
      <p className="text-3xl font-bold">LISTING</p>
    </div>
    <HelpDialog />
  </div>
);
export default Header;
