import React from "react";

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
      className={`rounded-full border-2 w-8 h-4 md:w-14 md:h-7
    ${isFirstBeat ? "border-[hsl(var(--foreground))]" : "border-[hsl(var(--backgorund))]"}
    ${
      isActive
        ? isFirstBeat
          ? "bg-gray-500"
          : "bg-[hsl(var(--foreground))]"
        : "bg-transparent"
    }
  `}
    ></div>
  );
};

export default BeatIndicator;
