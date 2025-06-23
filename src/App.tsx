import './App.css'
import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';
import {  ThemeToggle } from "@/components/theme-toggle"


function App() {
  const { bpm, setBpm, isPlaying, start, stop } = useMetronome();

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeToggle isCollapsed={true}/>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-md px-4">
            <Metronome
              bpm={bpm}
              isPlaying={isPlaying}
              onStart={start}
              onStop={stop}
              onBpmChange={setBpm}
            />
          </div>
        </div>
  </div>
  );
}

export default App;
