// Audio Synthesizer and Sound FX Engine using Web Audio API
class FantasyAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Gate Unsealing / Creaking Magical Sound
  playGateOpeningSound() {
    if (this.muted) return;
    this.init();

    const now = this.ctx.currentTime;
    
    // Deep Sub-Bass Rumble
    const rumbleOsc = this.ctx.createOscillator();
    const rumbleGain = this.ctx.createGain();
    rumbleOsc.type = 'sawtooth';
    rumbleOsc.frequency.setValueAtTime(60, now);
    rumbleOsc.frequency.exponentialRampToValueAtTime(30, now + 2.5);
    
    rumbleGain.gain.setValueAtTime(0.01, now);
    rumbleGain.gain.linearRampToValueAtTime(0.35, now + 0.5);
    rumbleGain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);
    
    rumbleOsc.connect(rumbleGain);
    rumbleGain.connect(this.ctx.destination);
    rumbleOsc.start(now);
    rumbleOsc.stop(now + 3.0);

    // Magical Celestial Chime
    const notes = [440, 554.37, 659.25, 830.61, 1046.50];
    notes.forEach((freq, idx) => {
      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(freq, now + 0.3 + (idx * 0.15));

      chimeGain.gain.setValueAtTime(0.001, now + 0.3 + (idx * 0.15));
      chimeGain.gain.linearRampToValueAtTime(0.12, now + 0.35 + (idx * 0.15));
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0 + (idx * 0.15));

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);
      chimeOsc.start(now + 0.3 + (idx * 0.15));
      chimeOsc.stop(now + 2.5 + (idx * 0.15));
    });
  }

  // Hover / Click magic beep
  playMagicalClick() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.18);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Portal swoosh when changing scenes/chapters
  playSwoosh() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.6, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(2400, now + 0.3);
    filter.frequency.exponentialRampToValueAtTime(400, now + 0.6);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + 0.6);
  }

  toggleMute() {
    this.muted = !this.muted;
    if (window.speechSynthesis && this.muted) {
      window.speechSynthesis.cancel();
    }
    return this.muted;
  }
}

window.fantasyAudio = new FantasyAudioEngine();
