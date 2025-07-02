import React, { useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useTheme } from "next-themes";

interface BpmPickerProps {
  bpm: number;
  setBpm: (bpm: number) => void;
  min?: number;
  max?: number;
}

const BpmPicker: React.FC<BpmPickerProps> = ({
  bpm,
  setBpm,
  min = 30,
  max = 300,
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  // Handle wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && bpm < max) setBpm(bpm + 1);
    if (e.deltaY < 0 && bpm > min) setBpm(bpm - 1);
  };

  // Click handlers for chevrons
  const handleUp = () => {
    if (bpm < max) setBpm(bpm + 1);
  };
  const handleDown = () => {
    if (bpm > min) setBpm(bpm - 1);
  };

  const bpms = [bpm - 1, bpm, bpm + 1].filter((n) => n >= min && n <= max);

  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center w-full h-64 select-none sm:h-80 md:h-96">
      <div
        className="px-3 py-1 m-2 text-base uppercase rounded-lg sm:m-4 md:m-6 lg:m-8 md:text-lg"
        style={
          theme === "dark"
            ? {
                background: "white",
                color: "black",
              }
            : { background: "black", color: "white" }
        }
      >
        <p>Tempo</p>
      </div>

      <FaChevronUp className="w-10 h-10 cursor-pointer" onClick={handleUp} />
      <div
        className="overflow-hidden relative w-full h-full"
        onWheel={handleWheel}
        ref={listRef}
      >
        <div className="flex absolute top-0 left-0 flex-col justify-center items-stretch w-full h-full transition-all duration-200 lcd-font">
          {bpms.map((n, i) => (
            <div className="flex justify-center w-full" key={n}>
              <div
                className={
                  n === bpm
                    ? "text-6xl md:text-8xl"
                    : "text-4xl md:text-5xl text-gray-400"
                }
                style={{
                  textAlign: "center",
                  display: "inline-block",
                  margin: i === 1 ? "0.2em 0" : "0.1em 0",
                }}
              >
                {n}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FaChevronDown
        className="w-10 h-10 cursor-pointer"
        onClick={handleDown}
      />
      <div className="flex justify-center items-center mt-4">
        <span
          className="px-3 py-1 m-2 text-base uppercase rounded-lg sm:m-4 md:m-6 lg:m-8 md:text-lg"
          style={
            theme === "dark"
              ? {
                  background: "white",
                  color: "black",
                }
              : { background: "black", color: "white" }
          }
        >
          BPM
        </span>
      </div>
    </div>
  );
};

export default BpmPicker;
