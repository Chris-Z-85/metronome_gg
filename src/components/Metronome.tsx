import React from "react";
import BpmPicker from "./BpmPicker";
import TimeSignaturePicker from "./TimeSignaturePicker";
import { ThemeToggle } from "@/components/theme-toggle";
import MetronomeOutline from "./MetronomeOutline";
import PlayButton from "./PlayButton";
import BeatBox from "./BeatBox";

interface MetronomeProps {
  bpm: number;
  beats: number;
  beatUnit: number;
  currentBeat: number;
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
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <MetronomeOutline />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex flex-col justify-around items-center h-[70%]">
          <BpmPicker bpm={bpm} setBpm={onBpmChange} />
          <PlayButton isPlaying={isPlaying} onStart={onStart} onStop={onStop} />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center h-[30%]">
          <BeatBox beats={beats} currentBeat={currentBeat} />
          <TimeSignaturePicker
            beats={beats}
            beatUnit={beatUnit}
            onTimeSignatureChange={onTimeSignatureChange}
          />
          <ThemeToggle isCollapsed={true} />
        </div>
      </div>
    </div>
  );
};

export default Metronome;
