import './App.css'
import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';
// import { ThemeProvider } from "@/components/theme-provider"
import {  ThemeToggle } from "@/components/theme-toggle"


function App() {
  const { bpm, setBpm, isPlaying, start, stop } = useMetronome();

  return (
    <>
      <ThemeToggle />
      <Metronome
        bpm={bpm}
        isPlaying={isPlaying}
        onStart={start}
        onStop={stop}
        onBpmChange={setBpm}
      />
    </>
  );
}

export default App;
