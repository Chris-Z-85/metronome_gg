import React from "react";
import { GiGClef } from "react-icons/gi";

interface TimeSignaturePickerProps {
  beats: number;
  beatUnit: number;
  onTimeSignatureChange: (beats: number, beatUnit: number) => void;
}

const commonTimeSignatures = [
  { beats: 4, beatUnit: 4 },
  { beats: 3, beatUnit: 4 },
  { beats: 2, beatUnit: 4 },
  { beats: 6, beatUnit: 8 },
];

const TimeSignaturePicker: React.FC<TimeSignaturePickerProps> = ({
  beatUnit,
  beats,
  onTimeSignatureChange,
}) => {
  return (
    <div className="flex gap-2 justify-center items-center m-4">
      <GiGClef className="size-10" />
      {commonTimeSignatures.map((ts) => (
        <div
          key={`${ts.beats}/${ts.beatUnit}`}
          onClick={() => onTimeSignatureChange(ts.beats, ts.beatUnit)}
          className={
            `flex flex-col border-[hsl(var(--foreground))] justify-center items-center w-12 h-12 text-lg font-medium rounded-lg border-2 cursor-pointer text-[hsl(var(--background))] ` +
            `${beats === ts.beats && beatUnit === ts.beatUnit ? "bg-gray-300" : "bg-[hsl(var(--foreground))]"}`
          }
        >
          <span>{ts.beats} </span>
          <span className="-mt-3">{ts.beatUnit}</span>
        </div>
      ))}
    </div>
  );
};

export default TimeSignaturePicker;
