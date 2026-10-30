document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const gateScene = document.getElementById('gate-scene');
  const realmScene = document.getElementById('realm-scene');
  const doorFrame = document.querySelector('.door-frame');
  const openGateBtn = document.getElementById('open-gate-btn');
  const resetBtn = document.getElementById('reset-btn');
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const starsCanvas = document.getElementById('stars-canvas');

  // Character Creation Modal Elements
  const characterModal = document.getElementById('character-modal');
  const charNameInput = document.getElementById('char-name-input');
  const rolesGrid = document.getElementById('roles-grid');
  const embarkBtn = document.getElementById('embark-btn');
  const charErrorMsg = document.getElementById('char-error-msg');
  const travelerPill = document.getElementById('traveler-pill');
  const travelerIconDisplay = document.getElementById('traveler-icon-display');
  const travelerRoleDisplay = document.getElementById('traveler-role-display');
  const travelerNameDisplay = document.getElementById('traveler-name-display');
  const floorName = document.getElementById('floor-name');

  // Story Elements
  const chapterBadge = document.getElementById('chapter-badge');
  const enSpeech = document.getElementById('en-speech');
  const thSubtitles = document.getElementById('th-subtitles');
  const artGraphicContainer = document.getElementById('art-graphic-container');
  const fantasySceneBg = document.getElementById('fantasy-scene-bg');
  const storyProgress = document.getElementById('story-progress');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const replayBtn = document.getElementById('replay-btn');
  const voiceWaves = document.getElementById('voice-waves');
  const javisOrb = document.getElementById('javis-companion');

  let currentChapterIndex = 0;
  let typewriterInterval = null;

  // Traveler Profile State
  let travelerProfile = {
    name: "Traveler",
    role: "Seeker of Truth",
    icon: "🧭"
  };

  // Battle State (RPS 5-point duel)
  let battleState = {
    playerScore: 0,
    bossScore: 0,
    targetScore: 5,
    isOver: false,
    bossAction: null
  };

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

  // Helper: Format Personalized Story Text
  function personalizeText(template) {
    if (!template) return '';
    return template
      .replace(/{userName}/g, travelerProfile.name)
      .replace(/{userRole}/g, travelerProfile.role);
  }

  // ==========================================
  // RENDER CHAPTER & TYPEWRITER EFFECT
  // ==========================================
  function renderChapter(index) {
    const rawData = window.storyChapters[index];
    if (!rawData) return;

    window.fantasyAudio.playSwoosh();

    // Floor Indicator Update
    if (floorName) {
      floorName.textContent = `DUNGEON STAGE ${index + 1} / ${window.storyChapters.length}`;
    }

    // Switch Background Music depending on whether it's Battle or Exploration
    if (rawData.isBattle) {
      window.fantasyAudio.startMusic('battle');
    } else {
      window.fantasyAudio.startMusic('explore');
    }

    // Create personalized story data for this traveler
    const formattedEnText = personalizeText(rawData.enText);
    const formattedThText = personalizeText(rawData.thText);

    // Update Badges & Progress
    chapterBadge.textContent = rawData.chapter;
    const progressPercent = ((index + 1) / window.storyChapters.length) * 100;
    storyProgress.style.width = `${progressPercent}%`;

    // Render Fullscreen Thematic Fantasy Background
    if (fantasySceneBg && rawData.bgSvg) {
      fantasySceneBg.className = 'fantasy-scene-bg active ' + (rawData.bgTheme || '');
      fantasySceneBg.innerHTML = rawData.bgSvg;
    }

    // Render Dynamic Graphics or Interactive Battle Arena
    if (rawData.isBattle) {
      initBossBattle();
    } else {
      artGraphicContainer.innerHTML = `
        <div class="visual-card">
          <div class="card-icon-hero">${rawData.icon}</div>
          <h2 style="font-family: var(--font-fantasy); color: var(--primary-gold-bright); margin-top: 10px; font-size: 1.4rem; letter-spacing: 2px;">
            ${rawData.title}
          </h2>
          <div class="items-grid">
            ${rawData.items.map(item => `
              <div class="sub-item-card">
                <span class="sub-item-icon">${item.icon}</span>
                <span class="sub-item-name">${item.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Typewriter effect for English narration
    if (typewriterInterval) clearInterval(typewriterInterval);
    enSpeech.textContent = '';
    thSubtitles.textContent = formattedThText;

    let charIdx = 0;
    typewriterInterval = setInterval(() => {
      if (charIdx < formattedEnText.length) {
        enSpeech.textContent += formattedEnText.charAt(charIdx);
        charIdx++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 28);

    // Jenis speaks the English narrative with the user's name
    speakText(formattedEnText);

    // Update Navigation Buttons State
    prevBtn.disabled = index === 0;
    prevBtn.style.opacity = index === 0 ? '0.4' : '1';
    prevBtn.style.cursor = index === 0 ? 'not-allowed' : 'pointer';

    // In Battle stage, disable Next button until player defeats the boss!
    if (rawData.isBattle && !battleState.isOver) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = '0.35';
      nextBtn.style.cursor = 'not-allowed';
      nextBtn.innerHTML = '⚔️ Defeat Boss to Proceed';
    } else if (index === window.storyChapters.length - 1) {
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
      nextBtn.innerHTML = '&#9876;&#65039; Restart Journey';
    } else {
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
      nextBtn.innerHTML = 'Next &rsaquo;';
    }
  }

  // ==========================================
  // BOSS BATTLE LOGIC (ROCK-PAPER-SCISSORS 5-POINT DUEL)
  // ==========================================
  function initBossBattle() {
    battleState.playerScore = 0;
    battleState.bossScore = 0;
    battleState.isOver = false;

    renderBattleArena();
  }

  function renderBattleArena(resultMessage = '', resultType = '') {
    const pPips = Array.from({ length: 5 }, (_, i) => 
      `<span class="score-pip ${i < battleState.playerScore ? 'filled' : ''}"></span>`
    ).join('');

    const bPips = Array.from({ length: 5 }, (_, i) => 
      `<span class="score-pip ${i < battleState.bossScore ? 'filled' : ''}"></span>`
    ).join('');

    artGraphicContainer.innerHTML = `
      <div class="battle-arena">
        <div class="battle-header">
          <h2 class="battle-title">⚔️ TRIAL OF FATE: 5 CLASHES TO RESCUE NUENG ⚔️</h2>
          <p class="battle-subtitle">First to 5 Points wins! Defeat the Void Warden to free Nueng from the dark stasis!</p>
        </div>

        <div class="battle-fighters">
          <!-- Player Fighter Card -->
          <div class="fighter-card">
            <span class="fighter-avatar">${travelerProfile.icon}</span>
            <span class="fighter-name">${travelerProfile.name}</span>
            <div class="score-display">
              ${pPips}
            </div>
          </div>

          <div class="vs-badge">VS</div>

          <!-- Boss Fighter Card -->
          <div class="fighter-card boss">
            <span class="fighter-avatar">👹</span>
            <span class="fighter-name">Void Warden</span>
            <div class="score-display">
              ${bPips}
            </div>
          </div>
        </div>

        <!-- Result / Clash Banner -->
        <div class="battle-clash-status">
          ${resultMessage ? `<div class="clash-result-banner ${resultType}">${resultMessage}</div>` : ''}
        </div>

        <!-- Combat Choices or Victory Screen -->
        ${battleState.isOver ? `
          <div class="battle-victory-box">
            ${battleState.playerScore >= 5 ? `
              <h3 class="victory-title">🎉 THE VOID WARDEN IS VANQUISHED! 🎉</h3>
              <p class="victory-desc">The dark chains shatter! Nueng is freed and steps toward you with shining eyes!</p>
              <button id="rescue-proceed-btn" class="magical-btn">
                <span class="btn-glow"></span>
                <span class="btn-text">✨ RESCUE NUENG & HEAR HIS MESSAGE ✨</span>
              </button>
            ` : `
              <h3 class="victory-title" style="color: #ff4757;">⚠️ THE WARDEN REPELLED YOUR ASSAULT! ⚠️</h3>
              <p class="victory-desc">Do not give up! Nueng is counting on your courage! Stand back up!</p>
              <button id="retry-battle-btn" class="magical-btn">
                <span class="btn-glow"></span>
                <span class="btn-text">🔄 RETRY THE DUEL 🔄</span>
              </button>
            `}
          </div>
        ` : `
          <div class="battle-action-controls">
            <span class="action-prompt">Choose your mystical strike:</span>
            <div class="rps-btn-group">
              <button class="rps-btn" data-choice="rock">
                <span class="rps-icon">✊</span>
                <span class="rps-label">ROCK</span>
              </button>
              <button class="rps-btn" data-choice="paper">
                <span class="rps-icon">✋</span>
                <span class="rps-label">PAPER</span>
              </button>
              <button class="rps-btn" data-choice="scissors">
                <span class="rps-icon">✌️</span>
                <span class="rps-label">SCISSORS</span>
              </button>
            </div>
          </div>
        `}
      </div>
    `;

    // Bind RPS Button Clicks
    if (!battleState.isOver) {
      artGraphicContainer.querySelectorAll('.rps-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          handleRpsRound(btn.dataset.choice);
        });
      });
    } else {
      const proceedBtn = document.getElementById('rescue-proceed-btn');
      if (proceedBtn) {
        proceedBtn.addEventListener('click', () => {
          window.fantasyAudio.playMagicalClick();
          if (currentChapterIndex < window.storyChapters.length - 1) {
            currentChapterIndex++;
            renderChapter(currentChapterIndex);
          }
        });
      }

      const retryBtn = document.getElementById('retry-battle-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          window.fantasyAudio.playMagicalClick();
          initBossBattle();
        });
      }
    }
  }

  function handleRpsRound(playerChoice) {
    if (battleState.isOver) return;

    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '✊ Rock', paper: '✋ Paper', scissors: '✌️ Scissors' };
    const bossChoice = choices[Math.floor(Math.random() * choices.length)];

    let roundOutcome = ''; // 'win' | 'lose' | 'draw'
    if (playerChoice === bossChoice) {
      roundOutcome = 'draw';
      window.fantasyAudio.playClashDraw();
    } else if (
      (playerChoice === 'rock' && bossChoice === 'scissors') ||
      (playerChoice === 'paper' && bossChoice === 'rock') ||
      (playerChoice === 'scissors' && bossChoice === 'paper')
    ) {
      roundOutcome = 'win';
      battleState.playerScore++;
      window.fantasyAudio.playAttackSound(true);
    } else {
      roundOutcome = 'lose';
      battleState.bossScore++;
      window.fantasyAudio.playAttackSound(false);
    }

    let msg = '';
    if (roundOutcome === 'win') {
      msg = `💥 HIT! ${emojis[playerChoice]} defeats Boss's ${emojis[bossChoice]}! (${battleState.playerScore}/5)`;
    } else if (roundOutcome === 'lose') {
      msg = `⚡ CLASH! Boss's ${emojis[bossChoice]} counters your ${emojis[playerChoice]}! (${battleState.bossScore}/5)`;
    } else {
      msg = `🛡️ STALEMATE! Both countered with ${emojis[playerChoice]}!`;
    }

    // Check Win/Loss conditions
    if (battleState.playerScore >= battleState.targetScore) {
      battleState.isOver = true;
      window.fantasyAudio.playVictoryFanfare();
      speakText(`Incredible strike, ${travelerProfile.name}! The Void Warden is defeated! Nueng is saved!`);
    } else if (battleState.bossScore >= battleState.targetScore) {
      battleState.isOver = true;
      speakText(`Hold strong, ${travelerProfile.name}! Catch your breath and duel the Warden once more!`);
    }

    renderBattleArena(msg, roundOutcome);
  }

  // ==========================================
  // CHARACTER CREATION ROLE SELECTOR
  // ==========================================
  if (rolesGrid) {
    rolesGrid.querySelectorAll('.role-card').forEach(card => {
      card.addEventListener('click', () => {
        window.fantasyAudio.playMagicalClick();
        rolesGrid.querySelectorAll('.role-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        travelerProfile.role = card.dataset.role;
        travelerProfile.icon = card.dataset.icon;
      });
    });
  }

  // ==========================================
  // STEP 1: UNSEAL THE GATES -> OPEN CHARACTER CREATION MODAL
  // ==========================================
  openGateBtn.addEventListener('click', () => {
    window.fantasyAudio.playGateOpeningSound();

    // Trigger Door opening animation
    doorFrame.classList.add('opened');
    openGateBtn.disabled = true;
    openGateBtn.style.opacity = '0';

    // Show Character Creation Ritual modal after the gates swing open
    setTimeout(() => {
      characterModal.classList.remove('hidden');
      if (charNameInput) charNameInput.focus();
    }, 1600);
  });

  // ==========================================
  // STEP 2: EMBARK WITH JENIS INTO REALM
  // ==========================================
  embarkBtn.addEventListener('click', () => {
    const rawName = charNameInput.value.trim();
    if (!rawName) {
      charErrorMsg.classList.remove('hidden');
      charNameInput.focus();
      return;
    }

    charErrorMsg.classList.add('hidden');
    travelerProfile.name = rawName;

    // Update Traveler banner
    travelerNameDisplay.textContent = travelerProfile.name;
    travelerRoleDisplay.textContent = travelerProfile.role;
    travelerIconDisplay.textContent = travelerProfile.icon;

    window.fantasyAudio.playMagicalClick();

    // Close Modal with fade out
    characterModal.classList.add('hidden');

    // Camera zoom & portal fade into realm
    gateScene.style.transform = 'scale(2.2)';
    gateScene.style.opacity = '0';

    setTimeout(() => {
      gateScene.classList.remove('active');
      gateScene.classList.add('hidden');
      gateScene.style.transform = '';

      realmScene.classList.remove('hidden');
      realmScene.classList.add('active');

      // Start Dungeon BGM and Chapter 1
      currentChapterIndex = 0;
      renderChapter(currentChapterIndex);
    }, 1000);
  });

  // Allow pressing Enter in the Name Input
  charNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      embarkBtn.click();
    }
  });

  // ==========================================
  // RESET LOGIC (CLOSE GATE & RE-INITIALIZE)
  // ==========================================
  function resetToBeginning() {
    window.fantasyAudio.playMagicalClick();
    window.fantasyAudio.stopMusic();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (typewriterInterval) clearInterval(typewriterInterval);
    voiceWaves.classList.remove('speaking');

    // Switch scenes back
    realmScene.classList.remove('active');
    realmScene.classList.add('hidden');

    characterModal.classList.add('hidden');
    doorFrame.classList.remove('opened');
    gateScene.classList.remove('hidden');
    gateScene.classList.add('active');
    gateScene.style.opacity = '1';

    openGateBtn.disabled = false;
    openGateBtn.style.opacity = '1';

    currentChapterIndex = 0;
  }

  resetBtn.addEventListener('click', resetToBeginning);

  // Sound FX & BGM Toggle
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
    if (data) speakText(personalizeText(data.enText));
  });

  // Interactive Jenis Click response with user name and dungeon context
  javisOrb.addEventListener('click', () => {
    window.fantasyAudio.playMagicalClick();
    const greetings = [
      `Stay alert, ${travelerProfile.name}! Nueng is waiting for us at the end of this dungeon!`,
      `${travelerProfile.name}, as a ${travelerProfile.role}, your blade will be our greatest hope against the Void Warden!`,
      `We must uncover all of Nueng's true passions to break the Warden's dark seal. Let us march forward!`
    ];
    const phrase = greetings[Math.floor(Math.random() * greetings.length)];
    speakText(phrase);
  });
});