document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const gateScene = document.getElementById('gate-scene');
  const realmScene = document.getElementById('realm-scene');
  const doorFrame = document.querySelector('.door-frame');
  const openGateBtn = document.getElementById('open-gate-btn');
  const resetBtn = document.getElementById('reset-btn');
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const starsCanvas = document.getElementById('stars-canvas');

  // Story Elements
  const chapterBadge = document.getElementById('chapter-badge');
  const enSpeech = document.getElementById('en-speech');
  const thSubtitles = document.getElementById('th-subtitles');
  const artGraphicContainer = document.getElementById('art-graphic-container');
  const storyProgress = document.getElementById('story-progress');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const replayBtn = document.getElementById('replay-btn');
  const voiceWaves = document.getElementById('voice-waves');
  const javisOrb = document.getElementById('javis-companion');

  let currentChapterIndex = 0;
  let typewriterInterval = null;
  let maleVoice = null;

  // ==========================================
  // STARFIELD ANIMATION
  // ==========================================
  function initStarfield() {
    const ctx = starsCanvas.getContext('2d');
    let width = (starsCanvas.width = window.innerWidth);
    let height = (starsCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = starsCanvas.width = window.innerWidth;
      height = starsCanvas.height = window.innerHeight;
    });

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    }));

    function render() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(s => {
        s.alpha += s.speed * s.direction;
        if (s.alpha >= 1) {
          s.alpha = 1;
          s.direction = -1;
        } else if (s.alpha <= 0.1) {
          s.alpha = 0.1;
          s.direction = 1;
        }

        ctx.fillStyle = `rgba(245, 208, 97, ${s.alpha * 0.7})`;
        ctx.shadowBlur = s.size * 3;
        ctx.shadowColor = '#00f2fe';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(render);
    }
    render();
  }
  initStarfield();

  // ==========================================
  // AI VOICE SYNTHESIS (EMOTIONAL FEMALE VOICE)
  // ==========================================
  let femaleVoice = null;

  function setupVoice() {
    if (!('speechSynthesis' in window)) return;

    function pickVoice() {
      const voices = window.speechSynthesis.getVoices();
      
      // Look for natural, expressive female voices in modern browsers
      // (Microsoft Zira, Jenny, Aria, Sonia, Google US English Female, Samantha, Victoria, Karen)
      const femaleKeywords = [
        'Jenny', 'Aria', 'Sonia', 'Zira', 'Samantha', 'Victoria', 'Karen', 'Moira',
        'Google US English', 'Natural', 'Female'
      ];

      femaleVoice = voices.find(v => 
        v.lang.startsWith('en') && femaleKeywords.some(name => v.name.toLowerCase().includes(name.toLowerCase()))
      ) || voices.find(v => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Woman')))
        || voices.find(v => v.lang.startsWith('en'))
        || voices[0];
    }

    pickVoice();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = pickVoice;
    }
  }
  setupVoice();

  function speakText(text, onComplete) {
    if (!('speechSynthesis' in window) || window.fantasyAudio.muted) {
      if (onComplete) setTimeout(onComplete, 2500);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (femaleVoice) utterance.voice = femaleVoice;

    // Tuning for a smooth, warm, expressive female tone
    utterance.pitch = 1.08;
    utterance.rate = 0.93;

    utterance.onstart = () => {
      voiceWaves.classList.add('speaking');
    };

    utterance.onend = () => {
      voiceWaves.classList.remove('speaking');
      if (onComplete) onComplete();
    };

    utterance.onerror = () => {
      voiceWaves.classList.remove('speaking');
      if (onComplete) onComplete();
    };

    window.speechSynthesis.speak(utterance);
  }

  // ==========================================
  // RENDER CHAPTER & TYPEWRITER EFFECT
  // ==========================================
  function renderChapter(index) {
    const data = window.storyChapters[index];
    if (!data) return;

    window.fantasyAudio.playSwoosh();

    // Update Badges & Progress
    chapterBadge.textContent = data.chapter;
    const progressPercent = ((index + 1) / window.storyChapters.length) * 100;
    storyProgress.style.width = `${progressPercent}%`;

    // Render Dynamic Graphics
    artGraphicContainer.innerHTML = `
      <div class="visual-card">
        <div class="card-icon-hero">${data.icon}</div>
        <h2 style="font-family: var(--font-fantasy); color: var(--primary-gold-bright); margin-top: 10px; font-size: 1.4rem; letter-spacing: 2px;">
          ${data.title}
        </h2>
        <div class="items-grid">
          ${data.items.map(item => `
            <div class="sub-item-card">
              <span class="sub-item-icon">${item.icon}</span>
              <span class="sub-item-name">${item.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Typewriter effect for English narration
    if (typewriterInterval) clearInterval(typewriterInterval);
    enSpeech.textContent = '';
    thSubtitles.textContent = data.thText;

    let charIdx = 0;
    const fullText = data.enText;
    typewriterInterval = setInterval(() => {
      if (charIdx < fullText.length) {
        enSpeech.textContent += fullText.charAt(charIdx);
        charIdx++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 28);

    // Speak voice
    speakText(data.enText);

    // Update Navigation Buttons State
    prevBtn.disabled = index === 0;
    prevBtn.style.opacity = index === 0 ? '0.4' : '1';
    prevBtn.style.cursor = index === 0 ? 'not-allowed' : 'pointer';

    if (index === window.storyChapters.length - 1) {
      nextBtn.innerHTML = '⚔️ Restart Journey';
    } else {
      nextBtn.innerHTML = 'Next ❯';
    }
  }

  // ==========================================
  // DOOR OPENING SEQUENCE
  // ==========================================
  openGateBtn.addEventListener('click', () => {
    window.fantasyAudio.playGateOpeningSound();

    // 1. Trigger Door opening animation
    doorFrame.classList.add('opened');
    openGateBtn.disabled = true;
    openGateBtn.style.opacity = '0';

    // 2. Camera zoom & portal fade into realm
    setTimeout(() => {
      gateScene.style.transform = 'scale(2.2)';
      gateScene.style.opacity = '0';

      setTimeout(() => {
        gateScene.classList.remove('active');
        gateScene.classList.add('hidden');
        gateScene.style.transform = '';

        realmScene.classList.remove('hidden');
        realmScene.classList.add('active');

        // Start story from Chapter 1
        currentChapterIndex = 0;
        renderChapter(currentChapterIndex);
      }, 1000);
    }, 1800);
  });

  // ==========================================
  // RESET LOGIC (CLOSE GATE & RE-INITIALIZE)
  // ==========================================
  function resetToBeginning() {
    window.fantasyAudio.playMagicalClick();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (typewriterInterval) clearInterval(typewriterInterval);
    voiceWaves.classList.remove('speaking');

    // Switch scenes back
    realmScene.classList.remove('active');
    realmScene.classList.add('hidden');

    doorFrame.classList.remove('opened');
    gateScene.classList.remove('hidden');
    gateScene.classList.add('active');
    gateScene.style.opacity = '1';

    openGateBtn.disabled = false;
    openGateBtn.style.opacity = '1';

    currentChapterIndex = 0;
  }

  resetBtn.addEventListener('click', resetToBeginning);

  // Sound FX Toggle
  toggleSoundBtn.addEventListener('click', () => {
    const isMuted = window.fantasyAudio.toggleMute();
    toggleSoundBtn.querySelector('.icon').textContent = isMuted ? '🔇' : '🔊';
    toggleSoundBtn.querySelector('.label').textContent = isMuted ? 'Muted' : 'Sound FX';
  });

  // Chapter Navigation
  nextBtn.addEventListener('click', () => {
    window.fantasyAudio.playMagicalClick();
    if (currentChapterIndex < window.storyChapters.length - 1) {
      currentChapterIndex++;
      renderChapter(currentChapterIndex);
    } else {
      currentChapterIndex = 0;
      renderChapter(currentChapterIndex);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentChapterIndex > 0) {
      window.fantasyAudio.playMagicalClick();
      currentChapterIndex--;
      renderChapter(currentChapterIndex);
    }
  });

  replayBtn.addEventListener('click', () => {
    window.fantasyAudio.playMagicalClick();
    const data = window.storyChapters[currentChapterIndex];
    if (data) speakText(data.enText);
  });

  // Interactive Jenis Click response
  javisOrb.addEventListener('click', () => {
    window.fantasyAudio.playMagicalClick();
    const greetings = [
      "I am right here with you, dear adventurer.",
      "Nueng's story is filled with so much warmth and inspiration, isn't it?",
      "Take your time, let the wonder unfold."
    ];
    const phrase = greetings[Math.floor(Math.random() * greetings.length)];
    speakText(phrase);
  });
});
