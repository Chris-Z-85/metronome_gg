import React, { useRef } from 'react';

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
    <div className="flex flex-col items-center select-none" style={{ height: 120, width: 120 }}>
      <div className="relative w-full h-full overflow-hidden" onWheel={handleWheel} ref={listRef}>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-200">
          {bpms.map((n, i) => (
            <div
              key={n}
              className={
                n === bpm
                  ? 'text-5xl font-bold text-white'
                  : 'text-3xl text-gray-400 opacity-50'
              }
              style={{
                margin: i === 1 ? '0.2em 0' : '0.1em 0',
                filter: n === bpm ? 'none' : 'blur(1px)',
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <span className="text-xs text-gray-400 tracking-widest">BPM</span>
      </div>
    </div>
  );
};

export default BpmPicker; 