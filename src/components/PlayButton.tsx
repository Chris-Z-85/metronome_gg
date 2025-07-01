import React from "react";
import { Play, Pause } from "lucide-react";
import { useTheme } from "next-themes";

interface PlayButtonProps {
  isPlaying: boolean;
  onStart: () => Promise<void>;
  onStop: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  onStart,
  onStop,
}) => {
  const handlePlayPauseClick = async () => {
    if (isPlaying) {
      onStop();
    } else {
      await onStart();
    }
  };

  const { resolvedTheme } = useTheme();

  // Responsive icon size
  let iconSize = 40;
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) {
      iconSize = 80;
    } else if (window.innerWidth >= 768) {
      iconSize = 64;
    }
  }

  return (
    <div
      onClick={handlePlayPauseClick}
      className={`
        w-16 h-16
        md:w-20 md:h-20
        lg:w-24 lg:h-24
        p-0 rounded-full flex items-center justify-center
        ${resolvedTheme === "dark" ? "bg-white" : "bg-black"}
        cursor-pointer hover:opacity-90 transition-opacity
      `}
    >
      {isPlaying ? (
        <Pause
          size={iconSize}
          color={resolvedTheme === "dark" ? "black" : "white"}
        />
      ) : (
        <Play
          size={iconSize}
          color={resolvedTheme === "dark" ? "black" : "white"}
        />
      )}
    </div>
  );
};

export default PlayButton;
