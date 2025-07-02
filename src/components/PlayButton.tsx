import React from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

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
      className="cursor-pointer hover:opacity-80 transition-opacity"
    >
      {isPlaying ? (
        <FaRegCirclePause size={iconSize} />
      ) : (
        <FaRegCirclePlay size={iconSize} />
      )}
    </div>
  );
};

export default PlayButton;
