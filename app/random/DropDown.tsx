import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Info } from "lucide-react";

export function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AlignJustify className="hover:text-horizon h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-60 border-2 border-yellowish rounded-sm text-3xl text-horizon p-1"
      >
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}

        {/* <DropdownMenuItem className="text-2xl font-semibold py-6 px-4 hover:bg-white">
          GitHub
        </DropdownMenuItem> */}
        <DropdownMenuItem className="p-0 transition-none">
          <Link
            href={"/"}
            className="text-lg font-semibold py-4 px-4 hover:bg-horizon w-full hover:text-white"
          >
            Random Game
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0 transition-none">
          <Link
            href={"/"}
            className="text-lg font-semibold py-4 px-4 hover:bg-horizon w-full hover:text-white"
          >
            Phoenix
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem>
          About
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
