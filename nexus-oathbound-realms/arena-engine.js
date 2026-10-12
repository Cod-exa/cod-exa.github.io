/**
 * Nexus: Card Duel & Deckbuilder — Interactive Arena Engine
 * Tactile Card Preview, 3D Perspective Tilt, & Duel Simulator
 */
(() => {
  const cardsData = {
    sun: [
      {
        id: 'sun_paladin',
        nameTr: 'Aethelgard Şövalyesi',
        nameEn: 'Aethelgard Paladin',
        fractionTr: 'Güneş Tapınağı • Muhafız',
        fractionEn: 'Sun Citadel • Guardian',
        mana: 4,
        attack: 5,
        health: 6,
        symbol: '⚔️',
        rarityTr: 'EFSANEVİ',
        rarityEn: 'LEGENDARY',
        abilityTr: 'Savaş Narası: Bitişik dost birimlere +2 Zırh ve Kutsal Kalkan bahşeder.',
        abilityEn: 'Battlecry: Grant +2 Armor and Divine Shield to adjacent allies.'
      },
      {
        id: 'sun_healer',
        nameTr: 'Işığın Habercisi Solara',
        nameEn: 'Solara the Dawn Herald',
        fractionTr: 'Güneş Tapınağı • Rahip',
        fractionEn: 'Sun Citadel • Cleric',
        mana: 2,
        attack: 2,
        health: 4,
        symbol: '✨',
        rarityTr: 'NADİR',
        rarityEn: 'RARE',
        abilityTr: 'Şifa Aurası: Her turun sonunda kahramanınızın canını 3 yeniler.',
        abilityEn: 'Healing Aura: Restore 3 health to your hero at the end of each turn.'
      }
    ],
    shadow: [
      {
        id: 'shadow_assassin',
        nameTr: 'Hiçlik Suikastçısı',
        nameEn: 'Void Infiltrator',
        fractionTr: 'Gölge Tarikatı • Suikastçı',
        fractionEn: 'Shadow Syndicate • Assassin',
        mana: 3,
        attack: 4,
        health: 3,
        symbol: '🗡️',
        rarityTr: 'EPİK',
        rarityEn: 'EPIC',
        abilityTr: 'Gizlilik: Hasar verdiği düşman birimleri her tur 2 Çürüme hasarı alır.',
        abilityEn: 'Stealth: Enemies damaged suffer 2 Decay damage every turn.'
      },
      {
        id: 'shadow_shade',
        nameTr: 'Gece Gezgini Malakor',
        nameEn: 'Malakor the Nightstalker',
        fractionTr: 'Gölge Tarikatı • Gölge',
        fractionEn: 'Shadow Syndicate • Shade',
        mana: 5,
        attack: 6,
        health: 4,
        symbol: '🌑',
        rarityTr: 'EFSANEVİ',
        rarityEn: 'LEGENDARY',
        abilityTr: 'Son Nefes: Yok edildiğinde rakibin rastgele 2 kartını susturur.',
        abilityEn: 'Deathrattle: Silence 2 random enemy battlefield units upon death.'
      }
    ],
    rune: [
      {
        id: 'rune_vael',
        nameTr: 'Rün Efendisi Vael',
        nameEn: 'Archmage Vael',
        fractionTr: 'Rün Muhafızları • Büyücü',
        fractionEn: 'Runeward Enclave • Mage',
        mana: 6,
        attack: 6,
        health: 7,
        symbol: '🔮',
        rarityTr: 'MİTİK',
        rarityEn: 'MYTHIC',
        abilityTr: 'Rünik Yankı: Oynanan her büyü kartında rastgele bir hedefe 3 Rün Oku fırlatır.',
        abilityEn: 'Runic Echo: Whenever a spell is played, launch 3 Runic Bolts at random foes.'
      },
      {
        id: 'rune_golem',
        nameTr: 'Kadim Rünik Golem',
        nameEn: 'Ancient Runic Golem',
        fractionTr: 'Rün Muhafızları • Yapı',
        fractionEn: 'Runeward Enclave • Construct',
        mana: 5,
        attack: 4,
        health: 8,
        symbol: '🗿',
        rarityTr: 'NADİR',
        rarityEn: 'RARE',
        abilityTr: 'Kışkırtma: Tüm düşman birimler önce bu golemi hedef almak zorundadır.',
        abilityEn: 'Taunt: Enemies must target this colossal construct first.'
      }
    ],
    dragon: [
      {
        id: 'dragon_pyre',
        nameTr: 'Kızıl Ejderha Wyrm',
        nameEn: 'Crimson Pyre Drake',
        fractionTr: 'Ejderha Ocağı • Ejderha',
        fractionEn: 'Dragon Pyre • Dragon',
        mana: 7,
        attack: 8,
        health: 8,
        symbol: '🐉',
        rarityTr: 'MİTİK',
        rarityEn: 'MYTHIC',
        abilityTr: 'Alev Nefesi: Sahaya indiğinde tüm rakip birimlere 4 Yangın hasarı vurur.',
        abilityEn: 'Firebreath: Deal 4 Fire damage to all opposing battlefield units.'
      }
    ]
  };

  let currentFaction = 'sun';
  let currentCard = cardsData.sun[0];
  let maxMana = 10;
  let currentMana = 10;

  // Web Audio FX Generator
  let audioCtx = null;
  function playArcaneSound(type = 'summon') {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      if (type === 'summon') {
        // Magical arpeggio / chord chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.18);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } else {
        // Recharge chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (e) {}
  }

  function getLang() {
    return document.documentElement.lang === 'tr' ? 'tr' : 'en';
  }

  function updateCardView() {
    const isTr = getLang() === 'tr';
    const cardEl = document.getElementById('inspectCard');
    if (!cardEl) return;

    const manaGem = cardEl.querySelector('.card-mana-gem');
    const rarityPill = cardEl.querySelector('.card-rarity-pill');
    const artSymbol = cardEl.querySelector('.card-art-symbol');
    const titleEl = cardEl.querySelector('.card-display-title');
    const fractionEl = cardEl.querySelector('.card-display-fraction');
    const abilityEl = cardEl.querySelector('.card-display-ability');
    const attackBadge = cardEl.querySelector('.stat-attack');
    const healthBadge = cardEl.querySelector('.stat-health');

    if (manaGem) manaGem.textContent = currentCard.mana;
    if (rarityPill) rarityPill.textContent = isTr ? currentCard.rarityTr : currentCard.rarityEn;
    if (artSymbol) artSymbol.textContent = currentCard.symbol;
    if (titleEl) titleEl.textContent = isTr ? currentCard.nameTr : currentCard.nameEn;
    if (fractionEl) fractionEl.textContent = isTr ? currentCard.fractionTr : currentCard.fractionEn;
    if (abilityEl) abilityEl.textContent = isTr ? currentCard.abilityTr : currentCard.abilityEn;
    if (attackBadge) attackBadge.textContent = currentCard.attack;
    if (healthBadge) healthBadge.textContent = currentCard.health;
  }

  function updateManaView() {
    const manaVal = document.getElementById('manaVal');
    if (manaVal) manaVal.textContent = `${currentMana}/${maxMana}`;

    const crystals = document.querySelectorAll('.mana-crystals-row .crystal');
    crystals.forEach((crystal, idx) => {
      crystal.classList.toggle('filled', idx < currentMana);
    });
  }

  function renderRoster() {
    const rosterBox = document.getElementById('cardRoster');
    if (!rosterBox) return;
    const isTr = getLang() === 'tr';
    rosterBox.innerHTML = '';

    const list = cardsData[currentFaction] || [];
    list.forEach(c => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `roster-card-btn ${c.id === currentCard.id ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${isTr ? c.nameTr : c.nameEn}</span>
        <span class="roster-mana-badge">${c.mana}</span>
      `;
      btn.addEventListener('click', () => {
        currentCard = c;
        renderRoster();
        updateCardView();
      });
      rosterBox.appendChild(btn);
    });
  }

  function appendCombatLog(msg) {
    const logBox = document.getElementById('combatLog');
    if (!logBox) return;
    const timeStr = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.className = 'combat-log-line';
    line.innerHTML = `<span class="log-tag">[${timeStr}]</span> <span>${msg}</span>`;
    logBox.prepend(line);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Faction tabs
    document.querySelectorAll('.faction-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.faction-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFaction = tab.dataset.faction || 'sun';
        currentCard = (cardsData[currentFaction] && cardsData[currentFaction][0]) || cardsData.sun[0];
        renderRoster();
        updateCardView();
      });
    });

    // 3D Tilt Effect on mousemove over the card
    const cardEl = document.getElementById('inspectCard');
    if (cardEl) {
      cardEl.addEventListener('mousemove', (e) => {
        const rect = cardEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = -(y / rect.height) * 16;
        const rotY = (x / rect.width) * 16;
        cardEl.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      });
      cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    }

    // Play card button
    const playBtn = document.getElementById('playCardBtn');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        const isTr = getLang() === 'tr';
        if (currentMana < currentCard.mana) {
          appendCombatLog(
            isTr 
              ? `⚠️ Yetersiz mana! (${currentCard.mana} Mana gerekiyor, mevcut: ${currentMana})` 
              : `⚠️ Insufficient mana! (${currentCard.mana} required, current: ${currentMana})`
          );
          return;
        }

        currentMana -= currentCard.mana;
        updateManaView();
        playArcaneSound('summon');

        const cardName = isTr ? currentCard.nameTr : currentCard.nameEn;
        appendCombatLog(
          isTr 
            ? `⚔️ ${cardName} sahaya sürüldü! (-${currentCard.mana} Mana, ${currentCard.attack} Saldırı / ${currentCard.health} Can)` 
            : `⚔️ ${cardName} summoned to arena! (-${currentCard.mana} Mana, ${currentCard.attack} Atk / ${currentCard.health} HP)`
        );
      });
    }

    // Reset arena button
    const resetBtn = document.getElementById('resetArenaBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const isTr = getLang() === 'tr';
        currentMana = maxMana;
        updateManaView();
        playArcaneSound('recharge');
        appendCombatLog(isTr ? '✨ Mana hazneleri yenilendi (10/10).' : '✨ Mana crystals replenished (10/10).');
      });
    }

    renderRoster();
    updateCardView();
    updateManaView();
  });

  window.addEventListener('codexa:languagechange', () => {
    renderRoster();
    updateCardView();
  });
})();
