import React from "react";

interface MetrumProps {
  currentBeat: number | null;
  beats: number;
}

const Metrum: React.FC<MetrumProps> = ({ currentBeat, beats }) => {
  return (
    <div className="flex gap-2 items-center px-3 py-1 md:m-4 w-32 rounded-lg border-2 bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
      <div className="uppercase text-sm md:text-xl">BEAT</div>
      <div className="w-12 text-sm md:text-xl lcd-font bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        {currentBeat} / {beats}
      </div>
    </div>
  );
};

export default Metrum;
