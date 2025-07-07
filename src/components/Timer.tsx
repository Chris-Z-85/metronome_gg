import React, { useEffect, useState, useRef } from "react";
import { FaRegClock } from "react-icons/fa6";

interface TimerProps {
  isPlaying: boolean;
}

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const Timer: React.FC<TimerProps> = ({ isPlaying }) => {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="flex items-center font-mono md:text-3xl rounded-lg border-4 border-[hsl(var(--foreground))] lcd-font bg-[hsl(var(--foreground))] text-[hsl(var(--background))]  w-30 md:w-50">
      <span className="inline-flex items-center">
        <FaRegClock className="mx-2 w-5 h-5 md:mx-4 md:w-7 md:h-7" />
      </span>
      <span className="px-3 py-1 align-middle bg-[hsl(var(--background))] text-[hsl(var(--foreground))] w-18 md:w-30">
        {formatTime(elapsed)}
      </span>
    </div>
  );
};

export default Timer;
