import React from "react";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();

  return (
    <div className="flex gap-2 justify-center items-center">
      {commonTimeSignatures.map((ts) => (
        <div
          key={`${ts.beats}/${ts.beatUnit}`}
          onClick={() => onTimeSignatureChange(ts.beats, ts.beatUnit)}
          className="px-4 py-2 text-lg font-medium rounded-lg border-2 cursor-pointer"
          style={
            theme === "dark"
              ? {
                  background:
                    beats === ts.beats && beatUnit === ts.beatUnit
                      ? "grey"
                      : "white",
                  color: "black",
                }
              : {
                  background:
                    beats === ts.beats && beatUnit === ts.beatUnit
                      ? "grey"
                      : "black",
                  color: "white",
                }
          }
        >
          {ts.beats}/{ts.beatUnit}
        </div>
      ))}
    </div>
  );
};

export default TimeSignaturePicker;
