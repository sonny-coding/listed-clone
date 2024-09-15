import React from "react";
import { AlignJustify } from "lucide-react";
import HelpDialog from "./HelpDialog";

const Header = () => (
  <div className="w-full flex justify-between [&>*]:hover:cursor-pointer">
    <AlignJustify />
    <HelpDialog />
  </div>
);
export default Header;
