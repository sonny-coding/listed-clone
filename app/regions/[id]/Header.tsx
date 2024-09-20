import React from "react";
import HelpDialog from "./HelpDialog";
import { DropDown } from "./DropDown";
import { House } from "lucide-react";
import Link from "next/link";

const Header = () => (
  <div className="w-full flex justify-between [&>*]:hover:cursor-pointer items-center">
    <DropDown />
    <Link href={"/regions/all"} className="flex gap-2 items-center group">
      <House className="w-8 h-8 text-darkGreen group-hover:text-yellowish" />
      <p className="text-3xl font-bold">LISTING</p>
    </Link>
    <HelpDialog />
  </div>
);
export default Header;
