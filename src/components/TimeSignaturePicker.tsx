import React from "react";

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
  beats,
  beatUnit,
  onTimeSignatureChange,
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      {commonTimeSignatures.map((ts) => (
        <div
          key={`${ts.beats}/${ts.beatUnit}`}
          onClick={() => onTimeSignatureChange(ts.beats, ts.beatUnit)}
          className={`border-2 px-4 py-2 rounded-lg text-lg font-medium transition-colors
            ${
              beats === ts.beats && beatUnit === ts.beatUnit
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/90 hover:text-primary-foreground"
            }`}
        >
          {ts.beats}/{ts.beatUnit}
        </div>
      ))}
    </div>
  );
};

export default TimeSignaturePicker;
