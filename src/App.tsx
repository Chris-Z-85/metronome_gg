import Metronome from "./components/Metronome";
import { useMetronome } from "./hooks/useMetronome";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

function App() {
  const {
    bpm,
    setBpm,
    beats,
    beatUnit,
    currentBeat,
    setTimeSignature,
    isPlaying,
    start,
    stop,
  } = useMetronome();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col justify-center items-center h-auto">
        <ThemeToggle isCollapsed={true} />
        <Metronome
          bpm={bpm}
          beats={beats}
          beatUnit={beatUnit}
          currentBeat={currentBeat}
          isPlaying={isPlaying}
          onStart={start}
          onStop={stop}
          onBpmChange={setBpm}
          onTimeSignatureChange={setTimeSignature}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
