import React, { useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

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

  return (
    <div className="flex flex-col items-center w-full h-64 select-none sm:h-80 md:h-96">
      <div className="px-2 md:px-3 py-1 m-2 text-sm uppercase rounded-lg sm:m-4 md:m-6 lg:m-8 md:text-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
        <p>Tempo</p>
      </div>
      <FaChevronUp
        aria-label="Increase the BPM"
        className="w-10 h-10 cursor-pointer"
        onClick={handleUp}
      />
      <div
        className="overflow-hidden relative w-full h-full"
        onWheel={handleWheel}
        ref={listRef}
      >
        <div className="flex absolute top-0 left-0 flex-col justify-center items-stretch w-full h-full transition-all duration-200 lcd-font">
          <div className="flex justify-center w-full">
            <div
              className="text-6xl md:text-8xl"
              style={{
                textAlign: "center",
                display: "inline-block",
                margin: "0.2em 0",
              }}
            >
              {bpm}
            </div>
          </div>
        </div>
      </div>
      <FaChevronDown
        aria-label="Decrease the BPM"
        className="w-10 h-10 cursor-pointer"
        onClick={handleDown}
      />
      <div className="flex justify-center items-center mt-4">
        <span className="px-2 md:px-3 py-1 m-2 text-sm uppercase rounded-lg sm:m-4 md:m-6 lg:m-8 md:text-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
          BPM
        </span>
      </div>
    </div>
  );
};

export default BpmPicker;
