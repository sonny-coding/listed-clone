import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleHelp } from "lucide-react";

import React from "react";

const HelpDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleHelp className="h-5 w-5" />
      </DialogTrigger>
      <DialogContent className="w-full bg-white">
        <DialogHeader>
          <DialogTitle>Help Information</DialogTitle>
          <DialogDescription>
            Here are some helpful tips and information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* <p>
            The quantum flux capacitor enables time-travel by harnessing the
            power of interdimensional wormholes.
          </p>
          <p>
            Unicorn tears are a key ingredient in the elixir of eternal youth,
            but they're notoriously difficult to collect.
          </p>
          <p>
            The secret to perfect pancakes lies in whisking the batter with a
            fork made from a mermaid's hairpin.
          </p> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
