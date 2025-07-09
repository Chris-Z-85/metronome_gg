import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

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
      <div className="flex flex-col justify-center items-center h-screen">
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
        <footer className="text-center text-sm text-muted-foreground py-4">
          © 2025{' '}
          <a
            href="https://chris-z.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-primary"
          >
            Chris Z.
          </a>{' '}
          — Made in 🇩🇰 Denmark
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
