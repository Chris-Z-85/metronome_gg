import React, { useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface BpmPickerProps {
  bpm: number;
  setBpm: (bpm: number) => void;
  min?: number;
  max?: number;
}

const BpmPicker: React.FC<BpmPickerProps> = ({ bpm, setBpm, min = 30, max = 300 }) => {
  const listRef = useRef<HTMLDivElement>(null);

  // Handle wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && bpm < max) setBpm(bpm + 1);
    if (e.deltaY < 0 && bpm > min) setBpm(bpm - 1);
  };

  // Handle drag (optional, for touch)
  // You can expand this for touch/mouse drag support

  // Render visible BPMs (current, one above, one below)
  const bpms = [bpm - 1, bpm, bpm + 1].filter(n => n >= min && n <= max);

  return (
    <div className="flex flex-col items-center select-none w-full h-64 sm:h-80 md:h-96">
   <ChevronUp className="w-10 h-10"/>
      <div className="relative w-full h-full overflow-hidden" onWheel={handleWheel} ref={listRef}>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-200">
          {bpms.map((n, i) => (
            <div
              key={n}
              className={
                n === bpm
                  ? 'text-6xl md:text-8xl font-bold'
                  : 'text-4xl md:text-5xl text-gray-400'
              }
              style={{
                margin: i === 1 ? '0.2em 0' : '0.1em 0',
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    <ChevronDown className="w-10 h-10"/>
      <div className="flex items-center justify-center mt-4">
        <span className="text-base md:text-lg text-gray-400 tracking-widest">BPM</span>
      </div>
    </div>
  );
};

export default BpmPicker; 