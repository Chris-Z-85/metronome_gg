import './App.css'
import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';


function App() {
  const { bpm, setBpm, isPlaying, start, stop } = useMetronome();

  return (
    <div className="flex flex-1 items-center justify-center w-full h-full">
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
