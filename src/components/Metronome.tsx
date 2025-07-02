import React from "react";
import BpmPicker from "./BpmPicker";
import TimeSignaturePicker from "./TimeSignaturePicker";
import MetronomeOutline from "./MetronomeOutline";
import PlayButton from "./PlayButton";
import BeatBox from "./BeatBox";
import { useTheme } from "next-themes";

interface MetronomeProps {
  bpm: number;
  beats: number;
  beatUnit: number;
  currentBeat: number | null;
  isPlaying: boolean;
  onStart: () => Promise<void>;
  onStop: () => void;
  onBpmChange: (bpm: number) => void;
  onTimeSignatureChange: (beats: number, beatUnit: number) => void;
}

const Metronome: React.FC<MetronomeProps> = ({
  bpm,
  beats,
  beatUnit,
  currentBeat,
  isPlaying,
  onStart,
  onStop,
  onBpmChange,
  onTimeSignatureChange,
}) => {
  const { theme } = useTheme();
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <MetronomeOutline />
      <div className="flex absolute inset-0 flex-col">
        <div className="flex flex-col justify-evenly items-center h-[70%]">
          <BpmPicker bpm={bpm} setBpm={onBpmChange} />
          <PlayButton isPlaying={isPlaying} onStart={onStart} onStop={onStop} />
        </div>
        <div className="flex flex-col gap-4 justify-evenly items-center h-[30%]">
          <div
            className="flex gap-4 items-center px-3 py-1 m-2 rounded-lg"
            style={
              theme === "dark"
                ? {
                    background: "white",
                    color: "black",
                  }
                : { background: "black", color: "white" }
            }
          >
            <div className="text-base uppercase md:text-lg">BEAT:</div>
            <div className="text-xl lcd-font">
              {currentBeat} / {beats}
            </div>
          </div>
          <BeatBox beats={beats} currentBeat={currentBeat} />
          <TimeSignaturePicker
            beats={beats}
            beatUnit={beatUnit}
            onTimeSignatureChange={onTimeSignatureChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Metronome;
