// Story data crafted with smooth, elegant storytelling and heartfelt emotion
const storyChapters = [
  {
    chapter: "CHAPTER I: THE CELESTIAL WELCOME",
    enText: "Welcome, noble travelers. I am Jenis, your celestial guide through this enchanted sanctuary. Come, walk with me, and let us unveil the legend of a truly remarkable soul named Komon.",
    thText: "ยินดีต้อนรับเหล่าผู้กล้าทุกท่านค่ะ... เราชื่อ Jenis ผู้พิทักษ์และผู้นำทางแห่งดินแดนนี้ ก้าวเข้ามาสิคะ แล้วเราจะพาคุณไปสัมผัสเรื่องราวอันน่าหลงใหลของชายที่ชื่อ 'Komon'",
    icon: "✨",
    title: "Celestial Guide Jenis",
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
        <!-- Celestial Aurora & Nebula -->
        <rect width="1000" height="600" fill="url(#skyGrad1)"/>
        <circle cx="500" cy="200" r="380" fill="url(#auroraGlow)"/>
        
        <!-- Distant Floating Citadel -->
        <g opacity="0.45" transform="translate(360, 110) scale(0.7)">
          <path d="M100 240 L160 150 L200 150 L220 90 L240 90 L260 150 L300 150 L360 240 Z" fill="#4d3587"/>
          <line x1="230" y1="90" x2="230" y2="40" stroke="#f5d061" stroke-width="2"/>
          <circle cx="230" cy="36" r="4" fill="#fff2a3"/>
          <ellipse cx="230" cy="245" rx="140" ry="25" fill="#311f5e"/>
        </g>

        <!-- Floating Magic Shards & Runes -->
        <g class="drifting-crystals">
          <polygon points="180,240 195,200 210,240 195,270" fill="#00f2fe" opacity="0.6"/>
          <polygon points="780,210 798,160 816,210 798,250" fill="#f5d061" opacity="0.7"/>
          <polygon points="840,320 850,290 860,320 850,345" fill="#ff71ce" opacity="0.5"/>
          <polygon points="140,350 152,320 164,350 152,375" fill="#05ffa1" opacity="0.5"/>
        </g>

        <!-- Giant Floating Island with Enchanted Trees -->
        <path d="M150 480 Q500 430 850 480 Q680 580 500 595 Q320 580 150 480 Z" fill="url(#floatingIslandGrad)" stroke="#6644a8" stroke-width="2"/>
        <path d="M495 445 L500 370 L505 445 Z" fill="#ffd700" filter="drop-shadow(0 0 8px #ffeb3b)"/>
        <circle cx="280" cy="460" r="28" fill="#582a8a" opacity="0.8"/>
        <circle cx="720" cy="460" r="32" fill="#322268" opacity="0.8"/>
        <ellipse cx="500" cy="455" rx="320" ry="15" fill="#392469" opacity="0.7"/>
      </svg>
    `,
    items: [
      { icon: "🌸", label: "Kindred Spirits" },
      { icon: "📜", label: "The Living Tale" },
      { icon: "🌌", label: "Sanctuary" }
    ]
  },
  {
    chapter: "CHAPTER II: THE HEART OF A CRAFTSMAN",
    enText: "His close companions simply call him Nueng. With keen intellect and passion, he weaves logic into reality as a Software Developer and Engineer, breathing innovation into life right here in Samut Prakan.",
    thText: "ผู้คนคุ้นเคยกับเขาในชื่อ 'หนึ่ง' ชายผู้เปี่ยมด้วยหัวใจของนักสร้างสรรค์... เขาคือนักพัฒนาซอฟต์แวร์และวิศวกรผู้มากฝีมือ ผู้รังสรรค์นวัตกรรมอันมีชีวิตชีวา ณ เมืองสมุทรปราการ",
    icon: "⚡",
    title: "The Visionary Engineer",
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
        
        <!-- Arcane Circuit Lines in the Sky -->
        <g stroke="#00f2fe" stroke-width="1.5" opacity="0.35" fill="none">
          <path d="M50 100 H250 L300 150 H550 L600 200 H950"/>
          <circle cx="250" cy="100" r="4" fill="#00f2fe"/>
          <circle cx="300" cy="150" r="4" fill="#00f2fe"/>
          <circle cx="600" cy="200" r="4" fill="#00f2fe"/>
          <path d="M100 220 H380 L420 180 H700 L740 220 H900"/>
          <circle cx="380" cy="220" r="3" fill="#4facfe"/>
          <circle cx="700" cy="180" r="3" fill="#4facfe"/>
        </g>

        <!-- Floating Holographic Hexagon Rings -->
        <g transform="translate(500, 260)" stroke="#00f2fe" stroke-width="2" fill="none" opacity="0.4">
          <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60"/>
          <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" stroke="#f5d061" opacity="0.6"/>
          <circle cx="0" cy="0" r="50" stroke="#ff71ce" stroke-dasharray="8 6"/>
        </g>

        <!-- High-tech Fantasy Workshop & City Horizon -->
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
    chapter: "CHAPTER III: SYMPHONY OF PASSION",
    enText: "Yet beneath his quiet logic lies a soul set ablaze by music and the roar of machines. From the rhythmic roots of Mor-lam to blistering heavy metal, soulful jazz, nostalgic 70s, 80s, 90s, and breathtaking classical symphonies—his heart beats in tune with them all.",
    thText: "แต่ลึกลงไปในโลกแห่งตรรกะ หัวใจของเขาเต้นระรัวไปด้วยเสียงเพลงและความเร็วของรถยนต์... ไม่ว่าจะเป็นจังหวะหมอลำอันอบอุ่น, ความดุดันของเมทัล, ท่วงทำนองแจ๊ส, บทเพลงยุค 70s-90s หรือคลาสสิกอันงดงาม ดนตรีคือลมหายใจของเขา",
    icon: "🏎️",
    title: "Echoes of Melodies & Speed",
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

        <!-- Giant Neon Synth Sun / Musical Portal -->
        <circle cx="500" cy="300" r="140" fill="url(#synthSun)" filter="drop-shadow(0 0 35px #ff71ce)"/>
        <g stroke="#1e052d" stroke-width="4">
          <line x1="360" y1="290" x2="640" y2="290"/>
          <line x1="370" y1="315" x2="630" y2="315" stroke-width="5"/>
          <line x1="390" y1="345" x2="610" y2="345" stroke-width="6"/>
          <line x1="420" y1="380" x2="580" y2="380" stroke-width="8"/>
        </g>

        <!-- Musical Notation Waves -->
        <path d="M0 240 Q250 160 500 240 T1000 240" fill="none" stroke="#00f2fe" stroke-width="3" opacity="0.7"/>
        <path d="M0 260 Q250 320 500 260 T1000 260" fill="none" stroke="#f5d061" stroke-width="2" opacity="0.6"/>
        
        <text x="220" y="210" font-size="40" fill="#fff" opacity="0.7" filter="drop-shadow(0 0 10px #ff71ce)">𝄞</text>
        <text x="740" y="220" font-size="34" fill="#00f2fe" opacity="0.8" filter="drop-shadow(0 0 10px #00f2fe)">𝄢</text>
        <text x="320" y="160" font-size="28" fill="#ffd700" opacity="0.6">♫</text>
        <text x="660" y="150" font-size="32" fill="#ff71ce" opacity="0.7">♬</text>

        <!-- Infinite Neon Grid Speedway -->
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
    chapter: "CHAPTER IV: A DAY IN THE LIFE",
    enText: "Each day is a beautiful adventure for Nueng. He greets the morning sun with energizing fitness. The daylight hours see him mastering circuitry, writing elegant code, and building apps. As twilight falls, he devotes his energy to Amway. And under the stars, his fingers gently strum the guitar strings into the night.",
    thText: "ในทุกๆ วันของหนึ่งเต็มไปด้วยพลังและความหมาย: ยามเช้าปลุกความสดชื่นด้วยการออกกำลังกาย, กลางวันมุ่งมั่นกับงานวิศวกรรมไฟฟ้าและเขียนโค้ดสร้างแอพ, ยามเย็นทุ่มเทให้กับธุรกิจ Amway, และก่อนนิทรา เขากล่อมค่ำคืนด้วยเสียงกีตาร์อันอบอุ่น",
    icon: "⏳",
    title: "Rhythm of Daily Life",
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

        <!-- Golden Dawn Sun -->
        <circle cx="200" cy="220" r="48" fill="#fffbe0" filter="drop-shadow(0 0 20px #ff9f43)"/>
        
        <!-- Crescent Mystic Moon -->
        <path d="M820 130 A45 45 0 1 0 850 200 A36 36 0 1 1 820 130 Z" fill="#f8fafc" filter="drop-shadow(0 0 16px #38bdf8)"/>

        <!-- Rolling Fantasy Mountains -->
        <path d="M0 600 L0 440 Q160 380 320 460 T680 430 Q840 370 1000 450 L1000 600 Z" fill="#1b1236" opacity="0.8"/>
        <path d="M0 600 L0 500 Q200 450 420 520 Q640 460 820 510 L1000 480 L1000 600 Z" fill="#0e081e"/>

        <!-- Tree with Night Magic -->
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
    chapter: "CHAPTER V: THE FOUR PILLARS",
    enText: "Ask him what truly gives color to his world, and he will smile and name four sacred treasures: The thrill of cars, the solace of music, the warmth of cherished friends, and the freedom of financial wealth.",
    thText: "หากถามว่าสิ่งใดคือคุณค่าที่ขาดไม่ได้ในชีวิตของหนึ่ง... นั่นคือ 4 เสาหลักอันล้ำค่า: ความหลงใหลในยานยนต์, มนต์เสน่ห์แห่งเสียงดนตรี, มิตรภาพอันอบอุ่นของเพื่อนแท้, และอิสรภาพทางการเงิน",
    icon: "💎",
    title: "The Four Precious Treasures",
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

        <!-- Four Ancient Guardian Pillars of Light -->
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
    chapter: "CHAPTER VI: EPILOGUE & HEARTFELT GRATITUDE",
    enText: "And now, as our journey together reaches its tender horizon, Nueng shares a message straight from his heart: Finding Amway was a turning point beyond his wildest dreams—a truly wonderful path. From the bottom of his heart, thank you, brave travelers, for stepping through the gates to discover his story.",
    thText: "และในช่วงเวลาสุดท้ายนี้ หนึ่งอยากส่งผ่านความรู้สึกจากหัวใจถึงทุกท่านว่า... การได้รู้จักธุรกิจ Amway คือสิ่งมหัศจรรย์ที่เกินฝัน และนำพาโอกาสอันงดงามมาสู่ชีวิต... ขอบคุณผู้กล้าทุกท่านจากหัวใจ ที่ร่วมเดินทางมาทำความรู้จักว่า 'หนึ่ง' คือใครในดินแดนแห่งนี้ค่ะ",
    icon: "👑",
    title: "A Heartfelt Tomorrow",
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
        
        <!-- Rising Sun of Infinite Tomorrow -->
        <circle cx="500" cy="400" r="280" fill="url(#ascensionHalo)" filter="drop-shadow(0 0 50px #f59e0b)"/>

        <!-- Radiant Golden Beams -->
        <g stroke="#ffffff" stroke-width="1.5" opacity="0.35">
          <line x1="500" y1="400" x2="200" y2="0"/>
          <line x1="500" y1="400" x2="350" y2="0"/>
          <line x1="500" y1="400" x2="500" y2="0"/>
          <line x1="500" y1="400" x2="650" y2="0"/>
          <line x1="500" y1="400" x2="800" y2="0"/>
        </g>

        <!-- Flight of Golden Stardust -->
        <g fill="#ffffff" opacity="0.8">
          <circle cx="480" cy="220" r="3"/>
          <circle cx="520" cy="190" r="4" filter="drop-shadow(0 0 6px #fff)"/>
          <circle cx="450" cy="170" r="2.5"/>
          <circle cx="550" cy="150" r="3.5"/>
          <circle cx="500" cy="120" r="5" fill="#fde047" filter="drop-shadow(0 0 10px #fde047)"/>
        </g>

        <!-- Cliff of New Beginnings -->
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
