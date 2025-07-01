import { useCallback, useEffect, useRef, useState } from 'react';
import { playClick, playStrongClick } from '../utils/audio';

export function useMetronome() {
  const [bpm, setBpm] = useState(120);
  const [beats, setBeats] = useState(4);
  const [beatUnit, setBeatUnit] = useState(4);
  const [currentBeat, setCurrentBeat] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtx = useRef<AudioContext | null>(null);
  const intervalId = useRef<number | null>(null);
  const nextBeat = useRef(1);

  const scheduleNote = useCallback(() => {
    if (!audioCtx.current) return;
    setCurrentBeat(nextBeat.current);
    const time = audioCtx.current.currentTime;
    if (nextBeat.current === 1) {
      playStrongClick(audioCtx.current, time);
    } else {
      playClick(audioCtx.current, time);
    }
    nextBeat.current = (nextBeat.current % beats) + 1;
  }, [beats]);

  const start = useCallback(async () => {
    try {
      if (!audioCtx.current) {
        audioCtx.current = new window.AudioContext();
      }
      if (audioCtx.current.state === 'suspended') {
        await audioCtx.current.resume();
      }
      setCurrentBeat(null);
      nextBeat.current = 1;
      setIsPlaying(true);
    } catch (error) {
      console.error('Error starting metronome:', error);
    }
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, []);

  const setTimeSignature = useCallback((newBeats: number, newBeatUnit: number) => {
    setBeats(newBeats);
    setBeatUnit(newBeatUnit);
    setCurrentBeat(1);
    nextBeat.current = 1;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = (60 / bpm) * 1000;
      scheduleNote();
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
      intervalId.current = window.setInterval(scheduleNote, interval);
    } else {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, [bpm, isPlaying, scheduleNote]);

  useEffect(() => {
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
      if (audioCtx.current) {
        audioCtx.current.close();
      }
    };
  }, []);

  return {
    bpm,
    setBpm,
    beats,
    beatUnit,
    currentBeat,
    setTimeSignature,
    isPlaying,
    start,
    stop
  };
} 