import React from 'react';
import BpmPicker from './BpmPicker';
import { Button } from "@/components/ui/button"

interface MetronomeProps {
  bpm: number;
  isPlaying: boolean;
  onStart: () => void;
  onStop: () => void;
  onBpmChange: (bpm: number) => void;
}

const Metronome: React.FC<MetronomeProps> = ({ bpm, isPlaying, onStart, onStop, onBpmChange }) => {
  return (
    <div>
      <div>
        <BpmPicker bpm={bpm} setBpm={onBpmChange} />
      </div>
      <Button onClick={isPlaying ? onStop : onStart}>
        {isPlaying ? 'Stop' : 'Start'}
      </Button>
    </div>
  );
};

export default Metronome; 