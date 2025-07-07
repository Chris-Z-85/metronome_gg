import React from "react";
import BeatIndicator from "./BeatIndicator";

interface BeatBoxProps {
  beats: number;
  currentBeat: number | null;
}

const BeatBox: React.FC<BeatBoxProps> = ({ beats, currentBeat }) => {
  return (
    <div className="flex flex-col justify-between items-center md:m-4">
      <div className="flex gap-4 items-center">
        <div className="vline" />
        {Array.from({ length: beats }, (_, i) => (
          <React.Fragment key={i}>
            <BeatIndicator
              isActive={currentBeat === i + 1}
              isFirstBeat={i === 0}
            />
          </React.Fragment>
        ))}
        <div className="vline" />
      </div>
    </div>
  );
};

export default BeatBox;
