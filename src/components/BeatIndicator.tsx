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
      className={`rounded-full border-2 w-12 h-6 md:w-14 md:h-8 lg:w-16 lg:h-10
    ${isFirstBeat ? "border-[hsl(var(--foreground))]" : "border-[hsl(var(--backgorund))]"}
    ${
      isActive
        ? isFirstBeat
          ? "bg-gray-300"
          : "bg-[hsl(var(--foreground))]"
        : "bg-transparent"
    }
  `}
    ></div>
  );
};

export default BeatIndicator;
