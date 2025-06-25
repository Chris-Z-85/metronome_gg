import React from 'react';
import BpmPicker from './BpmPicker';
import { Play, Pause } from 'lucide-react';
import {  ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes";

interface MetronomeProps {
  bpm: number;
  isPlaying: boolean;
  onStart: () => void;
  onStop: () => void;
  onBpmChange: (bpm: number) => void;
}

const Metronome: React.FC<MetronomeProps> = ({ bpm, isPlaying, onStart, onStop, onBpmChange }) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full max-w-[600px] mx-auto relative">
      <div
        className="dark:fill-white fill-black w-full"
        style={{
          aspectRatio: '986/1417',
          width: '100%',
          height: 'auto',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 986 1417"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <g
            transform="translate(0,1417) scale(0.1,-0.1)"
            fill="currentColor"
          >
            <path d="M3801 14144 c-128 -34 -257 -149 -308 -276 -26 -62 -889 -3354 -1549
              -5908 -103 -399 -191 -732 -196 -740 -20 -37 -1738 -6641 -1744 -6705 -7 -80
              11 -167 52 -253 36 -74 134 -170 219 -212 l70 -35 4545 -5 c2500 -3 4565 -2
              4590 2 124 21 261 131 324 259 50 104 63 179 49 277 -7 42 -122 498 -256 1012
              -134 514 -249 960 -255 990 -7 30 -37 143 -67 250 -30 107 -689 2625 -1465
              5595 -776 2970 -1420 5425 -1432 5455 -40 103 -117 191 -216 247 -117 66 -59
              63 -1237 62 -903 0 -1078 -3 -1124 -15z m2139 -264 c75 -11 134 -47 161 -100
              14 -28 2483 -9447 2505 -9560 l7 -30 -3682 0 c-3345 0 -3681 1 -3681 16 0 24
              798 3074 815 3114 20 48 86 296 90 341 6 68 1586 6093 1607 6126 24 41 67 72
              121 89 33 10 246 13 1017 13 553 0 1003 -3 1040 -9z m2754 -9987 c17 -59 876
              -3355 881 -3384 15 -79 -39 -174 -120 -210 -38 -18 -208 -19 -4525 -19 -4341
              0 -4486 1 -4526 19 -55 25 -101 83 -115 146 -10 46 -9 63 15 156 57 220 857
              3285 861 3297 4 9 765 12 3764 12 3572 0 3760 -1 3765 -17z"/>
          </g>
        </svg>
       
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pointerEvents: 'auto',
            rowGap: '1.5rem',
          }}
        >
          <div className="flex flex-col items-center w-full">
            <BpmPicker bpm={bpm} setBpm={onBpmChange} />
          </div>
          <div className="flex flex-col items-center w-full gap-10 h-auto">
            <div
              onClick={isPlaying ? onStop : onStart}
              className={`w-40 h-40 p-0 rounded-full flex items-center justify-center ${
                resolvedTheme === "dark" ? "bg-white" : "bg-black"
              }`}
            >
              {isPlaying
                ? <Pause size={64} color={resolvedTheme === "dark" ? "black" : "white"} />
                : <Play size={64} color={resolvedTheme === "dark" ? "black" : "white"} />}
            </div>
            <ThemeToggle isCollapsed={true}/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Metronome; 