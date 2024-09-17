import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  Smile,
  CircleHelp,
} from "lucide-react";

import React from "react";

const HelpDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleHelp className="h-8 w-8 hover:text-horizon" />
      </DialogTrigger>
      <DialogContent className="w-full bg-white">
        <DialogHeader>
          <DialogTitle className={"text-center text-2xl"}>
            Welcome to Listing
          </DialogTitle>
          <DialogDescription className="text-base text-center">
            A listed.fun clone
          </DialogDescription>
          <DialogDescription className="text-base text-center">
            In this game, your goal is to guess the sale price of a recently
            sold property
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <ArrowUp className="text-yellowish" size={24} />
            <span>Guess much higher next time</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ArrowUpRight className="text-yellowish" size={24} />
            <span>Guess a little higher next time</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Smile className="text-darkGreen" size={24} />
            <span>You Win!</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ArrowDownRight className="text-yellowish" size={24} />
            <span>Guess a little lower next time</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ArrowDown className="text-yellowish" size={24} />
            <span>Guess much lower next time</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
