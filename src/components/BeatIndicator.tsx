import React from "react";
import { cn } from "@/lib/utils";

interface BeatIndicatorProps {
  isActive: boolean;
  isFirstBeat: boolean;
}

const BeatIndicator: React.FC<BeatIndicatorProps> = ({
  isActive,
  isFirstBeat,
}) => {
  return (
    <div
      className={cn(
        "rounded-full border-2",
        "w-8 h-6 md:w-10 md:h-8 lg:w-12 lg:h-10",
        isFirstBeat ? "border-primary" : "border-secondary",
        isActive ? "animate-beat-pulse" : ""
      )}
      style={
        isActive
          ? {
              background: isFirstBeat
                ? "hsl(var(--primary))"
                : "hsl(var(--secondary))",
            }
          : { background: "transparent" }
      }
    />
  );
};

export default BeatIndicator;
