import React from "react";
import BeatIndicator from "./BeatIndicator";

interface BeatBoxProps {
  beats: number;
  currentBeat: number;
}

const BeatBox: React.FC<BeatBoxProps> = ({ beats, currentBeat }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="text-lg font-medium text-muted-foreground p-1.5">
        BEAT: {currentBeat} / {beats}
      </div>
      <div className="flex gap-4">
        {Array.from({ length: beats }, (_, i) => (
          <BeatIndicator
            key={`${i}-${currentBeat}`}
            isActive={currentBeat === i + 1}
            isFirstBeat={i === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default BeatBox;
