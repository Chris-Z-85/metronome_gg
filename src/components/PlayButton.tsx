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

  return (
    <div
      onClick={handlePlayPauseClick}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    >
      {isPlaying ? (
        <FaRegCirclePause className="text-5xl md:text-9xl" />
      ) : (
        <FaRegCirclePlay className="text-5xl md:text-9xl" />
      )}
    </div>
  );
};

export default PlayButton;
