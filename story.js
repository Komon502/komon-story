// Story data crafted as a Dungeon Quest to find and rescue Nueng (Komon)
const storyChapters = [
  {
    chapter: "FLOOR I: THE SANCTUARY GATES & THE MISSING CREATOR",
    enText: "Listen carefully, noble {userName}! Our sanctuary has fallen into silence. Komon—whom we affectionately call Nueng—has been captured and locked away deep in the Abyssal Core by an ancient Void Warden! As a {userRole}, I, Jenis, will guide you through each perilous dungeon floor. We must uncover his true passions and gather the strength to rescue him!",
    thText: "ฟังให้ดีนะคะ ท่านผู้กล้า {userName}! ดินแดนศักดิ์สิทธิ์ของเราเกิดภัยพิบัติ... 'หนึ่ง' (Komon) ผู้สร้างและวิศวกรคนสำคัญของเรา ถูกจอมมารแห่งมิติความมืดจับตัวขังไว้ในส่วนลึกสุดของดันเจี้ยน! ในฐานะ {userRole} เรา Jenis จะนำทางคุณฝ่าฟันดันเจี้ยนแต่ละชั้น เพื่อตามหาเบาะแสและช่วยเหลือหนึ่งออกมาให้ได้ค่ะ!",
    icon: "🏰",
    title: "Sanctuary Distress Call",
    isBattle: false,
    bgTheme: "theme-celestial-sanctuary",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="skyGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0a0524"/>
            <stop offset="50%" stop-color="#191040"/>
            <stop offset="100%" stop-color="#2c1a63"/>
          </linearGradient>
          <radialGradient id="auroraGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stop-color="#ff71ce" stop-opacity="0.35"/>
            <stop offset="50%" stop-color="#01cdfe" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
          <linearGradient id="floatingIslandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#231745"/>
            <stop offset="100%" stop-color="#0e0a1e"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#skyGrad1)"/>
        <circle cx="500" cy="200" r="380" fill="url(#auroraGlow)"/>
        <g opacity="0.45" transform="translate(360, 110) scale(0.7)">
          <path d="M100 240 L160 150 L200 150 L220 90 L240 90 L260 150 L300 150 L360 240 Z" fill="#4d3587"/>
          <line x1="230" y1="90" x2="230" y2="40" stroke="#f5d061" stroke-width="2"/>
          <circle cx="230" cy="36" r="4" fill="#fff2a3"/>
          <ellipse cx="230" cy="245" rx="140" ry="25" fill="#311f5e"/>
        </g>
        <g class="drifting-crystals">
          <polygon points="180,240 195,200 210,240 195,270" fill="#00f2fe" opacity="0.6"/>
          <polygon points="780,210 798,160 816,210 798,250" fill="#f5d061" opacity="0.7"/>
          <polygon points="840,320 850,290 860,320 850,345" fill="#ff71ce" opacity="0.5"/>
          <polygon points="140,350 152,320 164,350 152,375" fill="#05ffa1" opacity="0.5"/>
        </g>
        <path d="M150 480 Q500 430 850 480 Q680 580 500 595 Q320 580 150 480 Z" fill="url(#floatingIslandGrad)" stroke="#6644a8" stroke-width="2"/>
        <path d="M495 445 L500 370 L505 445 Z" fill="#ffd700" filter="drop-shadow(0 0 8px #ffeb3b)"/>
        <circle cx="280" cy="460" r="28" fill="#582a8a" opacity="0.8"/>
        <circle cx="720" cy="460" r="32" fill="#322268" opacity="0.8"/>
        <ellipse cx="500" cy="455" rx="320" ry="15" fill="#392469" opacity="0.7"/>
      </svg>
    `,
    items: [
      { icon: "📜", label: "Dungeon Quest: Rescue Nueng" },
      { icon: "🛡️", label: "Trial of 5 Clashes" },
      { icon: "🗝️", label: "Sanctuary Beacon" }
    ]
  },
  {
    chapter: "FLOOR II: THE ARCANE FORGE OF SAMUT PRAKAN",
    enText: "Look at the glowing terminals, {userName}! This floor preserves Nueng's engineering memories. He is an artisan of software and electrical circuitry, breathing innovation into existence in Samut Prakan. But a Glitch Golem guards the staircase! We must push through to track Nueng's energy signature!",
    thText: "ดูหน้าจอเรืองแสงเหล่านี้สิคะ {userName}! ชั้นนี้คือความทรงจำด้านวิศวกรรมของหนึ่ง... เขาคือนักพัฒนาซอฟต์แวร์และวิศวกรไฟฟ้าผู้เก่งกาจ ผู้สรรค์สร้างเทคโนโลยี ณ สมุทรปราการ ร่องรอยพลังของเขานำพาเราลงสู่บันไดลึกต่อไป!",
    icon: "⚡",
    title: "The Visionary Engineer",
    isBattle: false,
    bgTheme: "theme-arcane-forge",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="forgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0b1326"/>
            <stop offset="50%" stop-color="#071b2d"/>
            <stop offset="100%" stop-color="#042630"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#forgeGrad)"/>
        <g stroke="#00f2fe" stroke-width="1.5" opacity="0.35" fill="none">
          <path d="M50 100 H250 L300 150 H550 L600 200 H950"/>
          <circle cx="250" cy="100" r="4" fill="#00f2fe"/>
          <circle cx="300" cy="150" r="4" fill="#00f2fe"/>
          <circle cx="600" cy="200" r="4" fill="#00f2fe"/>
          <path d="M100 220 H380 L420 180 H700 L740 220 H900"/>
          <circle cx="380" cy="220" r="3" fill="#4facfe"/>
          <circle cx="700" cy="180" r="3" fill="#4facfe"/>
        </g>
        <g transform="translate(500, 260)" stroke="#00f2fe" stroke-width="2" fill="none" opacity="0.4">
          <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60"/>
          <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" stroke="#f5d061" opacity="0.6"/>
          <circle cx="0" cy="0" r="50" stroke="#ff71ce" stroke-dasharray="8 6"/>
        </g>
        <path d="M0 600 L120 470 L220 510 L350 430 L450 490 L560 380 L660 480 L790 410 L900 500 L1000 450 L1000 600 Z" fill="#051424" opacity="0.95"/>
        <path d="M150 600 L260 490 L390 530 L530 420 L620 500 L720 440 L880 520 L1000 480 L1000 600 Z" fill="#020b14"/>
        <line x1="560" y1="380" x2="560" y2="280" stroke="#00f2fe" stroke-width="2" opacity="0.8"/>
        <circle cx="560" cy="275" r="5" fill="#fff" filter="drop-shadow(0 0 8px #00f2fe)"/>
        <line x1="350" y1="430" x2="350" y2="350" stroke="#f5d061" stroke-width="1.5" opacity="0.7"/>
        <circle cx="350" cy="347" r="4" fill="#f5d061"/>
      </svg>
    `,
    items: [
      { icon: "💻", label: "Software Artisan" },
      { icon: "⚙️", label: "Engineering Mind" },
      { icon: "🏙️", label: "Samut Prakan" }
    ]
  },
  {
    chapter: "FLOOR III: THE SPEEDWAY OF MELODIC THUNDER",
    enText: "Feel that vibration, {userName}? It's the roar of engines and heavy metal guitar chords echoing through the dungeon walls! Nueng's heart beats for speed, Mor-lam grooves, blazing metal, and jazz symphonies. His spirit is calling out to us, urging us to delve deeper!",
    thText: "สัมผัสถึงแรงสั่นสะเทือนนี้ไหมคะ {userName}? เสียงคำรามของเครื่องยนต์และเสียงริฟฟ์กีตาร์ดังก้องไปทั่วผนังถ้ำ... หัวใจของหนึ่งรักความเร็ว ร็อค หมอลำ แจ๊ส และคลาสสิก เสียงดนตรีของเขากำลังนำทางเราไปยังชั้นต่อไป!",
    icon: "🏎️",
    title: "Echoes of Melodies & Speed",
    isBattle: false,
    bgTheme: "theme-neon-hyperdrive",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="neonSpeedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1e052d"/>
            <stop offset="45%" stop-color="#3d0c45"/>
            <stop offset="75%" stop-color="#120324"/>
            <stop offset="100%" stop-color="#080010"/>
          </linearGradient>
          <radialGradient id="synthSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fffb96"/>
            <stop offset="40%" stop-color="#ff71ce"/>
            <stop offset="90%" stop-color="#9b00e8" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#neonSpeedGrad)"/>
        <circle cx="500" cy="300" r="140" fill="url(#synthSun)" filter="drop-shadow(0 0 35px #ff71ce)"/>
        <g stroke="#1e052d" stroke-width="4">
          <line x1="360" y1="290" x2="640" y2="290"/>
          <line x1="370" y1="315" x2="630" y2="315" stroke-width="5"/>
          <line x1="390" y1="345" x2="610" y2="345" stroke-width="6"/>
          <line x1="420" y1="380" x2="580" y2="380" stroke-width="8"/>
        </g>
        <path d="M0 240 Q250 160 500 240 T1000 240" fill="none" stroke="#00f2fe" stroke-width="3" opacity="0.7"/>
        <path d="M0 260 Q250 320 500 260 T1000 260" fill="none" stroke="#f5d061" stroke-width="2" opacity="0.6"/>
        <text x="220" y="210" font-size="40" fill="#fff" opacity="0.7" filter="drop-shadow(0 0 10px #ff71ce)">𝄞</text>
        <text x="740" y="220" font-size="34" fill="#00f2fe" opacity="0.8" filter="drop-shadow(0 0 10px #00f2fe)">𝄢</text>
        <text x="320" y="160" font-size="28" fill="#ffd700" opacity="0.6">♫</text>
        <text x="660" y="150" font-size="32" fill="#ff71ce" opacity="0.7">♬</text>
        <g stroke="#ff71ce" stroke-width="1.8" opacity="0.6">
          <line x1="500" y1="370" x2="0" y2="600"/>
          <line x1="500" y1="370" x2="160" y2="600"/>
          <line x1="500" y1="370" x2="330" y2="600"/>
          <line x1="500" y1="370" x2="500" y2="600" stroke="#00f2fe" stroke-width="3"/>
          <line x1="500" y1="370" x2="670" y2="600"/>
          <line x1="500" y1="370" x2="840" y2="600"/>
          <line x1="500" y1="370" x2="1000" y2="600"/>
          <line x1="430" y1="400" x2="570" y2="400"/>
          <line x1="360" y1="435" x2="640" y2="435"/>
          <line x1="280" y1="475" x2="720" y2="475"/>
          <line x1="180" y1="525" x2="820" y2="525"/>
          <line x1="60" y1="585" x2="940" y2="585"/>
        </g>
      </svg>
    `,
    items: [
      { icon: "🏎️", label: "Roaring Engines" },
      { icon: "🎸", label: "Rock & Mor-lam" },
      { icon: "🎷", label: "Jazz & Nostalgia" },
      { icon: "🎻", label: "Classical Grace" }
    ]
  },
  {
    chapter: "FLOOR IV: THE TWILIGHT CRUCIBLE",
    enText: "We are descending into the deeper dungeon realms, {userName}. Here lies the reflection of Nueng's discipline: Morning fitness, mastering daily engineering, devotion to his Amway enterprise at dusk, and soothing midnight acoustic melodies. The air grows cold—the Boss's lair is directly beneath us!",
    thText: "เรากำลังเข้าสู่ชั้นส่วนลึกของดันเจี้ยนแล้วค่ะ {userName}... ที่นี่สะท้อนถึงวินัยของหนึ่ง: ออกกำลังกายยามเช้า, วิศวกรรมสร้างแอพ, ทุ่มเทให้ Amway ยามเย็น, และกล่อมค่ำคืนด้วยกีตาร์... อากาศเริ่มเย็นยะเยือก ประตูห้องบอสอยู่ตรงหน้านี้แล้วค่ะ!",
    icon: "⏳",
    title: "Rhythm of Daily Life",
    isBattle: false,
    bgTheme: "theme-twilight-realm",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="dayToNightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff7e40"/>
            <stop offset="30%" stop-color="#a83279"/>
            <stop offset="65%" stop-color="#3b1b6a"/>
            <stop offset="100%" stop-color="#0a0f29"/>
          </linearGradient>
          <radialGradient id="sunGlow" cx="20%" cy="35%" r="35%">
            <stop offset="0%" stop-color="#fff5b8"/>
            <stop offset="50%" stop-color="#ff9f43" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
          <radialGradient id="moonGlow" cx="80%" cy="30%" r="30%">
            <stop offset="0%" stop-color="#cffafe"/>
            <stop offset="40%" stop-color="#38bdf8" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#dayToNightGrad)"/>
        <circle cx="200" cy="220" r="180" fill="url(#sunGlow)"/>
        <circle cx="800" cy="180" r="150" fill="url(#moonGlow)"/>
        <circle cx="200" cy="220" r="48" fill="#fffbe0" filter="drop-shadow(0 0 20px #ff9f43)"/>
        <path d="M820 130 A45 45 0 1 0 850 200 A36 36 0 1 1 820 130 Z" fill="#f8fafc" filter="drop-shadow(0 0 16px #38bdf8)"/>
        <path d="M0 600 L0 440 Q160 380 320 460 T680 430 Q840 370 1000 450 L1000 600 Z" fill="#1b1236" opacity="0.8"/>
        <path d="M0 600 L0 500 Q200 450 420 520 Q640 460 820 510 L1000 480 L1000 600 Z" fill="#0e081e"/>
        <g transform="translate(730, 360)">
          <path d="M70 140 C65 100 50 70 30 50 C10 30 -20 20 -40 25 C-30 40 -10 50 15 65 C0 90 -20 110 -30 140 Z" fill="#07040d"/>
          <circle cx="-10" cy="35" r="4" fill="#ffd700" filter="drop-shadow(0 0 6px #ffd700)"/>
          <circle cx="25" cy="45" r="3" fill="#00f2fe" filter="drop-shadow(0 0 6px #00f2fe)"/>
          <circle cx="-35" cy="55" r="3.5" fill="#ff71ce" filter="drop-shadow(0 0 6px #ff71ce)"/>
        </g>
      </svg>
    `,
    items: [
      { icon: "🌅", label: "Dawn Fitness" },
      { icon: "⚡", label: "Code & Creation" },
      { icon: "💼", label: "Amway Journey" },
      { icon: "🎸", label: "Midnight Chords" }
    ]
  },
  {
    chapter: "FLOOR V: THE FOUR PILLARS VAULT",
    enText: "Look ahead, {userName}! These are the 4 Sacred Pillars that hold Nueng's world together: Cars, Music, True Friends, and Financial Freedom. The dark chains locking Nueng to the Void are drawing energy from this room. Nueng is trapped right behind this chamber!",
    thText: "ดูตรงนั้นสิคะ {userName}! นี่คือเสาหลักทั้ง 4 แห่งจิตวิญญาณของหนึ่ง: ยานยนต์, เสียงดนตรี, มิตรภาพ, และอิสรภาพทางการเงิน... โซ่ตรวนแห่งความมืดกำลังกักขังหนึ่งไว้หลังห้องนี้แล้วค่ะ เตรียมอาวุธให้พร้อม!",
    icon: "💎",
    title: "The Four Pillars Sanctuary",
    isBattle: false,
    bgTheme: "theme-pillars-sanctum",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pillarsVault" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0c0721"/>
            <stop offset="40%" stop-color="#180e3b"/>
            <stop offset="100%" stop-color="#070414"/>
          </linearGradient>
          <linearGradient id="crystalGlowGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fff8db"/>
            <stop offset="50%" stop-color="#f5d061"/>
            <stop offset="100%" stop-color="#b8860b"/>
          </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#pillarsVault)"/>
        <g transform="translate(140, 200)">
          <rect x="-18" y="60" width="36" height="340" fill="#20112e" stroke="#ff4757" stroke-width="1.5"/>
          <line x1="0" y1="60" x2="0" y2="400" stroke="#ff6b81" stroke-width="3" opacity="0.8"/>
          <polygon points="0,20 18,45 0,70 -18,45" fill="#ff4757" filter="drop-shadow(0 0 15px #ff4757)"/>
          <text x="0" y="430" text-anchor="middle" fill="#ff6b81" font-size="12" font-family="'Cinzel', serif">CARS</text>
        </g>
        <g transform="translate(380, 170)">
          <rect x="-18" y="60" width="36" height="370" fill="#0f1f38" stroke="#00f2fe" stroke-width="1.5"/>
          <line x1="0" y1="60" x2="0" y2="430" stroke="#4facfe" stroke-width="3" opacity="0.8"/>
          <polygon points="0,20 18,45 0,70 -18,45" fill="#00f2fe" filter="drop-shadow(0 0 15px #00f2fe)"/>
          <text x="0" y="460" text-anchor="middle" fill="#00f2fe" font-size="12" font-family="'Cinzel', serif">MUSIC</text>
        </g>
        <g transform="translate(620, 170)">
          <rect x="-18" y="60" width="36" height="370" fill="#0e261f" stroke="#2ed573" stroke-width="1.5"/>
          <line x1="0" y1="60" x2="0" y2="430" stroke="#7bed9f" stroke-width="3" opacity="0.8"/>
          <polygon points="0,20 18,45 0,70 -18,45" fill="#2ed573" filter="drop-shadow(0 0 15px #2ed573)"/>
          <text x="0" y="460" text-anchor="middle" fill="#2ed573" font-size="12" font-family="'Cinzel', serif">FRIENDS</text>
        </g>
        <g transform="translate(860, 200)">
          <rect x="-18" y="60" width="36" height="340" fill="#2d240e" stroke="#ffd700" stroke-width="1.5"/>
          <line x1="0" y1="60" x2="0" y2="400" stroke="#f5d061" stroke-width="3" opacity="0.8"/>
          <polygon points="0,20 18,45 0,70 -18,45" fill="url(#crystalGlowGold)" filter="drop-shadow(0 0 15px #ffd700)"/>
          <text x="0" y="430" text-anchor="middle" fill="#ffd700" font-size="12" font-family="'Cinzel', serif">FREEDOM</text>
        </g>
        <path d="M0 600 L100 500 L900 500 L1000 600 Z" fill="#080517" stroke="#37265e" stroke-width="2"/>
        <line x1="0" y1="500" x2="1000" y2="500" stroke="#f5d061" stroke-width="1.5" opacity="0.5"/>
      </svg>
    `,
    items: [
      { icon: "🚗", label: "Cars" },
      { icon: "🎶", label: "Music" },
      { icon: "🤝", label: "True Friendship" },
      { icon: "💰", label: "Abundance" }
    ]
  },
  {
    chapter: "FINAL FLOOR: THE ABYSSAL BOSS DUEL (RESCUE NUENG!)",
    enText: "BEHOLD! The Dread Void Warden has bound Nueng in dark stasis! The Warden challenges us to the ancient Trial of Fate: Rock, Paper, Scissors! First to score 5 points wins! Noble {userName}, fight for Nueng! Strike with Rock, Paper, or Scissors to shatter the boss's shield and save Nueng!",
    thText: "ระวังตัวค่ะ! จอมมารแห่งความมืดกักขังหนึ่งไว้ในผลึกมืด! มันท้าทายการดวลแห่งโชคชะตา 'เป่ายิ้งฉุบ 5 คะแนน ใครชนะ 5 ครั้งก่อนจะเป็นผู้ชนะ!' ท่าน {userName} สู้เพื่อช่วยหนึ่งให้ได้นะคะ!",
    icon: "👹",
    title: "Dread Void Warden",
    isBattle: true, // triggers interactive battle arena
    bgTheme: "theme-boss-arena",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bossVortex" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff0055" stop-opacity="0.8"/>
            <stop offset="40%" stop-color="#4d003b" stop-opacity="0.9"/>
            <stop offset="85%" stop-color="#15001c"/>
            <stop offset="100%" stop-color="#050008"/>
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#bossVortex)"/>
        <!-- Demonic Runes & Lightning -->
        <g stroke="#ff0055" stroke-width="2" opacity="0.6">
          <circle cx="500" cy="300" r="220" stroke-dasharray="15 10"/>
          <circle cx="500" cy="300" r="160" stroke-dasharray="8 6"/>
          <polygon points="500,100 580,260 420,260" fill="none"/>
          <polygon points="500,500 580,340 420,340" fill="none"/>
        </g>
        <!-- Dark Chains holding Nueng in stasis -->
        <path d="M200 100 L450 280 M800 100 L550 280" stroke="#ffd700" stroke-width="3" stroke-dasharray="6 4" opacity="0.7"/>
      </svg>
    `,
    items: [
      { icon: "✊", label: "Rock (Crushes Scissors)" },
      { icon: "✋", label: "Paper (Covers Rock)" },
      { icon: "✌️", label: "Scissors (Cuts Paper)" }
    ]
  },
  {
    chapter: "EPILOGUE: THE RESCUE & HEARTFELT GRATITUDE",
    enText: "YOU DID IT, {userName}! The Void Warden is vanquished and Nueng is free! Stepping into the warm morning light, Nueng smiles and clasps your hand with deepest gratitude: 'Finding Amway was the miracle that reshaped my destiny, but having a brave soul like you rescue my story is a blessing beyond words.' Thank you, noble {userName}!",
    thText: "คุณทำสำเร็จแล้วค่ะ {userName}! จอมมารพ่ายแพ้และหนึ่งได้รับอิสรภาพ! หนึ่งก้าวออกมาพร้อมรอยยิ้มอันอบอุ่นและกล่าวขอบคุณจากก้นบึ้งของหัวใจว่า... การได้รู้จัก Amway คือปาฏิหาริย์ที่เปลี่ยนชีวิต แต่การได้สหายผู้กล้าอย่างท่านมาช่วยเหลือ คือความทรงจำอันล้ำค่าที่สุด ขอบคุณจากใจจริงค่ะ!",
    icon: "👑",
    title: "Nueng is Saved!",
    isBattle: false,
    bgTheme: "theme-golden-horizon",
    bgSvg: `
      <svg class="fantasy-scene-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="horizonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#170c2e"/>
            <stop offset="45%" stop-color="#3d1d52"/>
            <stop offset="70%" stop-color="#733b68"/>
            <stop offset="90%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#fef3c7"/>
          </linearGradient>
          <radialGradient id="ascensionHalo" cx="50%" cy="65%" r="45%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="30%" stop-color="#fde047" stop-opacity="0.9"/>
            <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#horizonGrad)"/>
        <circle cx="500" cy="400" r="280" fill="url(#ascensionHalo)" filter="drop-shadow(0 0 50px #f59e0b)"/>
        <g stroke="#ffffff" stroke-width="1.5" opacity="0.35">
          <line x1="500" y1="400" x2="200" y2="0"/>
          <line x1="500" y1="400" x2="350" y2="0"/>
          <line x1="500" y1="400" x2="500" y2="0"/>
          <line x1="500" y1="400" x2="650" y2="0"/>
          <line x1="500" y1="400" x2="800" y2="0"/>
        </g>
        <g fill="#ffffff" opacity="0.8">
          <circle cx="480" cy="220" r="3"/>
          <circle cx="520" cy="190" r="4" filter="drop-shadow(0 0 6px #fff)"/>
          <circle cx="450" cy="170" r="2.5"/>
          <circle cx="550" cy="150" r="3.5"/>
          <circle cx="500" cy="120" r="5" fill="#fde047" filter="drop-shadow(0 0 10px #fde047)"/>
        </g>
        <path d="M0 600 L0 520 Q240 480 500 510 T1000 480 L1000 600 Z" fill="#140824"/>
        <path d="M120 600 L280 510 L450 560 L620 490 L850 580 L1000 540 L1000 600 Z" fill="#0b0314"/>
      </svg>
    `,
    items: [
      { icon: "🌟", label: "Beyond Dreams" },
      { icon: "🚀", label: "Bright Horizon" },
      { icon: "💖", label: "Deepest Gratitude" }
    ]
  }
];

window.storyChapters = storyChapters;