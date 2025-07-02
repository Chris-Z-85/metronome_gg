import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface BeatIndicatorProps {
  isActive: boolean;
  isFirstBeat: boolean;
}

const BeatIndicator: React.FC<BeatIndicatorProps> = ({
  isActive,
  isFirstBeat,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "rounded-full border-2",
        "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
        isFirstBeat ? "border-primary" : "border-secondary",
        isActive ? "animate-beat-pulse" : ""
      )}
      style={
        isActive
          ? {
              background: isFirstBeat
                ? "grey"
                : theme === "dark"
                  ? "white"
                  : "black",
            }
          : { background: "transparent" }
      }
    />
  );
};

export default BeatIndicator;
