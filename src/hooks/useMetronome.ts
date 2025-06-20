import { useCallback, useEffect, useRef, useState } from 'react';
import { playClick } from '../utils/audio';

const SCHEDULE_AHEAD_TIME = 0.1; // seconds
const LOOKAHEAD = 25; // ms

export function useMetronome() {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tick, setTick] = useState(0); // For UI updates
  const nextNoteTime = useRef(0);
  const timerID = useRef<number | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);

  const nextTick = useCallback(() => {
    setTick(t => t + 1);
  }, []);

  const scheduleNote = useCallback((time: number) => {
    playClick(audioCtx.current!, time);
    nextTick();
  }, [nextTick]);

  const scheduler = useCallback(() => {
    if (!audioCtx.current) return;
    while (nextNoteTime.current < audioCtx.current.currentTime + SCHEDULE_AHEAD_TIME) {
      scheduleNote(nextNoteTime.current);
      const secondsPerBeat = 60.0 / bpm;
      nextNoteTime.current += secondsPerBeat;
    }
    timerID.current = setTimeout(scheduler, LOOKAHEAD);
  }, [bpm, scheduleNote]);

  const start = useCallback(() => {
    if (!audioCtx.current) {
      audioCtx.current = new window.AudioContext();
    }
    nextNoteTime.current = audioCtx.current.currentTime + 0.05;
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
    if (timerID.current) {
      clearTimeout(timerID.current);
      timerID.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      scheduler();
      return stop;
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, bpm, scheduler]);

  return { bpm, setBpm, isPlaying, start, stop, tick };
} 