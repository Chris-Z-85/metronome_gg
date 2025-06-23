import React from 'react';
import BpmPicker from './BpmPicker';
import { Button } from "@/components/ui/button"
import { Play, Pause } from 'lucide-react';
interface MetronomeProps {
  bpm: number;
  isPlaying: boolean;
  onStart: () => void;
  onStop: () => void;
  onBpmChange: (bpm: number) => void;
}

const Metronome: React.FC<MetronomeProps> = ({ bpm, isPlaying, onStart, onStop, onBpmChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BpmPicker bpm={bpm} setBpm={onBpmChange} />
      <Button onClick={isPlaying ? onStop : onStart}>
        {isPlaying ? <Pause/> : <Play/>}
      </Button>
    </div>
  );
};

export default Metronome; 