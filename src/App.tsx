import './App.css'
import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';

function App() {
  const { bpm, setBpm, isPlaying, start, stop } = useMetronome();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Metronome</h1>
      <p>Start your practice</p>
      <Metronome
        bpm={bpm}
        isPlaying={isPlaying}
        onStart={start}
        onStop={stop}
        onBpmChange={setBpm}
      />
    </div>
  );
}

export default App;
