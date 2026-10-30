// Audio Synthesizer and Sound FX Engine using Web Audio API
class FantasyAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.bgmOscs = [];
    this.bgmGain = null;
    this.bgmInterval = null;
    this.currentTrack = null; // 'explore' | 'battle' | null
    this.stepCount = 0;
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

  // Attack / Clash sound
  playAttackSound(isWin) {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    if (isWin) {
      // Powerful slashing hit
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);

      // Chime of victory
      const chime = this.ctx.createOscillator();
      const cGain = this.ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(880, now + 0.1);
      chime.frequency.setValueAtTime(1320, now + 0.2);
      cGain.gain.setValueAtTime(0.15, now + 0.1);
      cGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      chime.connect(cGain);
      cGain.connect(this.ctx.destination);
      chime.start(now + 0.1);
      chime.stop(now + 0.4);
    } else {
      // Heavy damage taken impact
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.35);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  }

  // Draw sound (tie)
  playClashDraw() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.setValueAtTime(360, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Victory Fanfare
  playVictoryFanfare() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const notes = [
      { f: 523.25, d: 0.15 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.15 },
      { f: 1046.50, d: 0.6 }
    ];

    let offset = 0;
    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + offset);

      gain.gain.setValueAtTime(0.2, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + n.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + n.d);

      offset += n.d * 0.85;
    });
  }

  // ====================================================
  // PROCEDURAL BGM ENGINE (Explore Ambient & Battle Theme)
  // ====================================================
  startMusic(trackType) {
    if (this.muted) return;
    this.init();
    if (this.currentTrack === trackType) return;
    this.stopMusic();

    this.currentTrack = trackType;
    this.stepCount = 0;

    if (trackType === 'battle') {
      this.runBattleBGM();
    } else {
      this.runExploreBGM();
    }
  }

  runExploreBGM() {
    // Gentle mystical chord progression (Am - F - C - G)
    const scale = [220, 261.63, 329.63, 392, 440, 523.25, 659.25];
    const bpm = 80;
    const intervalTime = (60 / bpm) * 1000;

    this.bgmInterval = setInterval(() => {
      if (this.muted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const note = scale[this.stepCount % scale.length];

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 2.0);

      this.stepCount = (this.stepCount + 1) % 16;
    }, intervalTime);
  }

  runBattleBGM() {
    // Urgent driving bass and epic synth pulse (D-minor battle rhythm)
    const bassline = [146.83, 146.83, 174.61, 146.83, 220.00, 196.00, 164.81, 146.83];
    const bpm = 136;
    const intervalTime = (60 / bpm / 2) * 1000; // 8th notes

    this.bgmInterval = setInterval(() => {
      if (this.muted || !this.ctx) return;
      const now = this.ctx.currentTime;

      // Bass punch
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sawtooth';
      const f = bassline[this.stepCount % bassline.length];
      bassOsc.frequency.setValueAtTime(f / 2, now);

      bassGain.gain.setValueAtTime(0.09, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, now);

      bassOsc.connect(filter);
      filter.connect(bassGain);
      bassGain.connect(this.ctx.destination);
      bassOsc.start(now);
      bassOsc.stop(now + 0.22);

      // Lead tension arpeggio every 4th step
      if (this.stepCount % 4 === 0) {
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        leadOsc.type = 'square';
        leadOsc.frequency.setValueAtTime(f * 2, now);

        leadGain.gain.setValueAtTime(0.035, now);
        leadGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        leadOsc.connect(leadGain);
        leadGain.connect(this.ctx.destination);
        leadOsc.start(now);
        leadOsc.stop(now + 0.3);
      }

      this.stepCount = (this.stepCount + 1) % 32;
    }, intervalTime);
  }

  stopMusic() {
    if (this.bgmInterval) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
    this.currentTrack = null;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopMusic();
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } else {
      if (this.currentTrack) {
        this.startMusic(this.currentTrack);
      } else {
        this.startMusic('explore');
      }
    }
    return this.muted;
  }
}

window.fantasyAudio = new FantasyAudioEngine();