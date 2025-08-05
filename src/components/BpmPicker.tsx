import React, { useRef, useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown, FaPen } from 'react-icons/fa';

interface BpmPickerProps {
  bpm: number;
  setBpm: (bpm: number | ((prev: number) => number)) => void;
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [tempBpm, setTempBpm] = useState<string>(String(bpm));

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Mouse hold handlers
  const startIncrement = () => {
    if (intervalRef.current) return;
    setBpm(prev => (prev < max ? prev + 1 : prev));
    intervalRef.current = setInterval(() => {
      setBpm(prev => (prev < max ? prev + 1 : prev));
    }, 100);
  };

  const startDecrement = () => {
    if (intervalRef.current) return;
    setBpm(prev => (prev > min ? prev - 1 : prev));
    intervalRef.current = setInterval(() => {
      setBpm(prev => (prev > min ? prev - 1 : prev));
    }, 100);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Scroll wheel support
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0 && bpm < max) setBpm(bpm + 1);
    if (e.deltaY < 0 && bpm > min) setBpm(bpm - 1);
  };

  // Editable BPM input
  const handleBpmClick = () => {
    setTempBpm(''); // clears the input
    setIsEditing(true);
  };

  const handleBpmChange = () => {
    const parsed = Number(tempBpm);
    if (!isNaN(parsed)) {
      const clamped = Math.max(min, Math.min(max, parsed));
      setBpm(clamped);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBpmChange();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-64 select-none sm:h-80 md:h-96">
      <div className="px-2 md:px-3 py-1 m-2 text-sm uppercase rounded-lg sm:m-4 md:m-6 lg:m-8 md:text-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
        <p>Tempo</p>
      </div>
      <FaChevronUp
        aria-label="Increase the BPM"
        className="w-10 h-10 cursor-pointer"
        onMouseDown={startIncrement}
        onMouseUp={stopInterval}
        onMouseLeave={stopInterval}
        onTouchStart={startIncrement}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
      />
      <div
        className="relative w-full h-full"
        onWheel={handleWheel}
        ref={listRef}
      >
        <div className="flex absolute top-0 left-0 flex-col justify-center items-stretch w-full h-full transition-all duration-200 lcd-font">
          <div className="flex justify-center w-full">
            <div
              className="text-6xl md:text-8xl group relative"
              style={{
                textAlign: 'center',
                display: 'inline-block',
                margin: '0.2em 0',
                cursor: 'pointer',
              }}
              onClick={handleBpmClick}
            >
              {isEditing ? (
                <div className="relative inline-block">
                  <input
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={tempBpm}
                    onChange={e => setTempBpm(e.target.value)}
                    onBlur={handleBpmChange}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="bg-transparent text-center outline-none text-6xl md:text-8xl appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    style={{ MozAppearance: 'textfield', width: '5.5ch' }}
                    min={min}
                    max={max}
                  />
                  {isEditing &&
                    tempBpm !== '' &&
                    (Number(tempBpm) < min || Number(tempBpm) > max) && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 text-sm font-mono bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded whitespace-nowrap shadow z-50 transition-opacity duration-200 opacity-100">
                        BPM must be between {min} and {max}
                      </div>
                    )}
                </div>
              ) : (
                <>
                  {bpm}
                  <FaPen className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-70 transition-opacity" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <FaChevronDown
        aria-label="Decrease the BPM"
        className="w-10 h-10 cursor-pointer"
        onMouseDown={startDecrement}
        onMouseUp={stopInterval}
        onMouseLeave={stopInterval}
        onTouchStart={startDecrement}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
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
