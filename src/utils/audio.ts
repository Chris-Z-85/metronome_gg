export function playClick(audioContext: AudioContext, time: number) {
  try {
    const osc = new OscillatorNode(audioContext, {
      type: 'sine',
      frequency: 1000
    });
    
    const gain = new GainNode(audioContext, {
      gain: 0.1
    });

    osc.connect(gain).connect(audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.1);

    // Cleanup
    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 200);
  } catch (error) {
    console.error('Error playing click:', error);
  }
}

export function playStrongClick(audioContext: AudioContext, time: number) {
  try {
    const osc = new OscillatorNode(audioContext, {
      type: 'sine',
      frequency: 1500
    });
    
    const gain = new GainNode(audioContext, {
      gain: 0.15
    });

    osc.connect(gain).connect(audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.1);

    // Cleanup
    setTimeout(() => {
      osc.disconnect();
      gain.disconnect();
    }, 200);
  } catch (error) {
    console.error('Error playing strong click:', error);
  }
} 