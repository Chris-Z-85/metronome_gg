import React from 'react';
import BpmPicker from './BpmPicker';

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
        <label htmlFor="bpm">BPM: </label>
        <input
          id="bpm"
          type="number"
          min={30}
          max={300}
          value={bpm}
          onChange={e => onBpmChange(Number(e.target.value))}
        />
        <BpmPicker bpm={bpm} setBpm={onBpmChange} />
      </div>
      <button onClick={isPlaying ? onStop : onStart}>
        {isPlaying ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Metronome; 