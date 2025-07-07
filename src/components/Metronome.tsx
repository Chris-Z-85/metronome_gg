import React, { useState } from "react";
import BpmPicker from "./BpmPicker";
import TimeSignaturePicker from "./TimeSignaturePicker";
import MetronomeOutline from "./MetronomeOutline";
import PlayButton from "./PlayButton";
import BeatBox from "./BeatBox";
import Timer from "./Timer";
import Metrum from "./Metrum";

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
  const [timerKey, setTimerKey] = useState(0);

  const handleStart = async () => {
    if (!isPlaying) {
      setTimerKey((k) => k + 1);
    }
    await onStart();
  };

  return (
    <div className="relative w-full max-w-[650px] aspect-[986/1417] mx-auto overflow-hidden">
      <MetronomeOutline />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex flex-col justify-evenly items-center flex-[7] w-full max-w-[80%] px-4 sm:px-8 md:px-12 mx-auto">
          <BpmPicker bpm={bpm} setBpm={onBpmChange} />
          <PlayButton
            isPlaying={isPlaying}
            onStart={handleStart}
            onStop={onStop}
          />
          <Timer isPlaying={isPlaying} key={timerKey} />
        </div>
        <div className="flex flex-col justify-evenly items-center flex-[3] w-full max-w-[80%] px-4 sm:px-8 md:px-12 mx-auto">
          <Metrum currentBeat={currentBeat} beats={beats} />
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
