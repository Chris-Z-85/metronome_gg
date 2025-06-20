export function playClick(audioCtx: AudioContext, time: number) {
  const osc = audioCtx.createOscillator();
  const envelope = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.value = 1000;
  envelope.gain.value = 1;
  osc.connect(envelope);
  envelope.connect(audioCtx.destination);
  osc.start(time);
  envelope.gain.setValueAtTime(1, time);
  envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
  osc.stop(time + 0.05);
} 