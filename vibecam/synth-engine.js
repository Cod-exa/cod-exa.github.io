/**
 * VibeCam Live Synthesizer Engine (Web Simulation)
 * Renders real-time math models and optical shader effects onto HTML5 canvas
 */
(() => {
  // DOM Elements
  const canvas = document.getElementById('synthCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const imgElement = document.getElementById('synthImage');
  const distortionSlider = document.getElementById('distSlider');
  const rgbSlider = document.getElementById('rgbSlider');
  const distValLabel = document.getElementById('distVal');
  const rgbValLabel = document.getElementById('rgbVal');
  const xyPad = document.getElementById('xyPad');
  const xyCursor = document.getElementById('xyCursor');
  const xyValLabel = document.getElementById('xyVal');
  const seedCodeLabel = document.getElementById('seedCode');
  const liveFormulaText = document.getElementById('liveFormula');
  const copySeedBtn = document.getElementById('copySeedBtn');
  const holdAbBtn = document.getElementById('holdAbBtn');
  const sceneChips = document.querySelectorAll('.scene-chip');
  const modelBtns = document.querySelectorAll('.model-btn');

  // State
  let distortion = 0.45;
  let rgbShift = 0.35;
  let xyX = 0.5;
  let xyY = 0.5;
  let currentModelId = 'chladni';
  let isHoldOriginal = false;
  let animationTime = 0;
  let isDraggingPad = false;

  const ACADEMIC_MODELS = {
    chladni: {
      name: 'CHLADNI CYMATICS',
      accent: '#00f5d4',
      prefix: 'CHL',
      getFormula: (d, r, x, y) => {
        const n = Math.round(2 + x * 10);
        const m = Math.round(2 + y * 10);
        const q = (40 + d * 60).toFixed(1);
        return `\\Psi_{${n},${m}}(x,y) = \\cos(${n}\\pi x)\\cos(${m}\\pi y) - \\cos(${m}\\pi x)\\cos(${n}\\pi y) = 0 \\quad [Q=${q}]`;
      },
      render: (ctx, w, h, t, d, r, x, y) => {
        const n = 2 + x * 8;
        const m = 2 + y * 8;
        ctx.save();
        ctx.strokeStyle = '#00f5d4';
        ctx.lineWidth = 1.6 + d * 1.5;
        ctx.globalAlpha = 0.4 + 0.4 * Math.sin(t * 3);

        const count = 45;
        for (let i = 0; i < count; i++) {
          const p = (i / count);
          const px = w * p;
          const chladniVal = Math.cos(n * Math.PI * p) * Math.cos(m * Math.PI * 0.5) -
                             Math.cos(m * Math.PI * p) * Math.cos(n * Math.PI * 0.5);
          const py = h * 0.5 + chladniVal * (h * 0.35);

          ctx.fillStyle = (i % 2 === 0 ? '#00f5d4' : '#39ff14');
          ctx.beginPath();
          ctx.arc(px, py, 2.5 + (d * 3), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    turing: {
      name: 'TURING LAB',
      accent: '#39ff14',
      prefix: 'TUR',
      getFormula: (d, r, x, y) => {
        const f = (0.015 + x * 0.065).toFixed(3);
        const k = (0.045 + y * 0.025).toFixed(3);
        const ratio = (2.0 + d * 6.0).toFixed(1);
        return `\\frac{\\partial u}{\\partial t} = D_u \\nabla^2 u + u^2 v - (${f}+${k})u \\quad [D_u/D_v=${ratio}]`;
      },
      render: (ctx, w, h, t, d, r, x, y) => {
        ctx.save();
        const rings = Math.floor(5 + d * 10);
        const cx = w * x;
        const cy = h * y;

        for (let ri = 1; ri <= rings; ri++) {
          const radius = (ri * 24 * (1 + x * 2)) % (w * 0.6);
          const alpha = Math.abs(Math.sin(radius * 0.08 - t * 2 + y * 5));
          ctx.strokeStyle = ri % 2 === 0 ? '#39ff14' : '#00f5d4';
          ctx.lineWidth = 1.8;
          ctx.globalAlpha = Math.min(0.85, 0.2 + 0.5 * alpha);

          ctx.beginPath();
          const segments = 28;
          for (let s = 0; s <= segments; s++) {
            const angle = (s / segments) * Math.PI * 2;
            const rWarp = radius + Math.sin(angle * 4 + t * 2) * (5 + d * 15);
            const px = cx + Math.cos(angle) * rWarp;
            const py = cy + Math.sin(angle) * rWarp;
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }
    },
    lorenz: {
      name: 'LORENZ CHAOS',
      accent: '#ff007f',
      prefix: 'LOR',
      getFormula: (d, r, x, y) => {
        const rho = (10 + x * 38).toFixed(1);
        return `\\dot{x}=10(y-x), \\; \\dot{y}=x(${rho}-z)-y, \\; \\dot{z}=xy-2.67z`;
      },
      render: (ctx, w, h, t, d, r, x, y) => {
        ctx.save();
        const originX = w * x;
        const originY = h * y;
        const rho = 12 + x * 36;
        const sigma = 10;
        const beta = 8 / 3;
        const dt = 0.012;
        let lx = 0.1, ly = 0.0, lz = 0.0;
        const scale = 5.0 + d * 8.0;

        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.85;

        ctx.beginPath();
        for (let i = 0; i < 220; i++) {
          const dx = sigma * (ly - lx);
          const dy = lx * (rho - lz) - ly;
          const dz = lx * ly - beta * lz;
          lx += dx * dt; ly += dy * dt; lz += dz * dt;

          const sx = originX + lx * scale;
          const sy = originY + (lz - rho * 0.5) * scale * 0.8;
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
        ctx.restore();
      }
    },
    soliton: {
      name: 'KERR SOLITON',
      accent: '#9d4edd',
      prefix: 'SOL',
      getFormula: (d, r, x, y) => {
        const n2 = (1.2 + x * 4.8).toFixed(2);
        const lmb = Math.round(400 + y * 300);
        return `i\\frac{\\partial \\psi}{\\partial z} + \\frac{1}{2}\\nabla^2\\psi + ${n2}|\\psi|^2\\psi = 0 \\quad [\\lambda=${lmb}\\text{nm}]`;
      },
      render: (ctx, w, h, t, d, r, x, y) => {
        ctx.save();
        const cx = w * x;
        const cy = h * y;
        const waves = Math.floor(4 + d * 8);

        for (let i = 1; i <= waves; i++) {
          const rad = i * 26 + ((t * 24) % 30);
          ctx.strokeStyle = i % 2 === 0 ? '#ff007f' : '#00f5d4';
          ctx.lineWidth = 2.0;
          ctx.globalAlpha = Math.max(0.1, 0.8 - (rad / (w * 0.7)));
          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Cross spikes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.8;
        const sLen = 22 + d * 30;
        ctx.beginPath();
        ctx.moveTo(cx - sLen, cy); ctx.lineTo(cx + sLen, cy);
        ctx.moveTo(cx, cy - sLen); ctx.lineTo(cx, cy + sLen);
        ctx.stroke();
        ctx.restore();
      }
    },
    bluenoise: {
      name: 'BLUE NOISE',
      accent: '#ffb703',
      prefix: 'BLU',
      getFormula: (d, r, x, y) => {
        const qGrid = (4 + (1 - y) * 16).toFixed(1);
        const th = (0.2 + x * 0.6).toFixed(2);
        return `e_{x,y} = I_{x,y} - B_{x,y}, \\; \\sum W_{i,j} e_{i,j} \\quad [P_{\\text{grid}}=${qGrid}\\text{px}, \\theta=${th}]`;
      },
      render: (ctx, w, h, t, d, r, x, y) => {
        ctx.save();
        const step = 20 - (y * 8);
        const th = 0.2 + x * 0.6;
        for (let py = 8; py < h; py += step) {
          for (let px = 8; px < w; px += step) {
            const energy = (Math.sin(px * 0.05 + t) * Math.cos(py * 0.05) + 1) / 2;
            if (energy > th) {
              ctx.fillStyle = energy > 0.7 ? '#ffb703' : '#00f5d4';
              ctx.globalAlpha = 0.4 + energy * 0.4;
              ctx.beginPath();
              ctx.arc(px, py, 1.5 + energy * 2.5 * d, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        ctx.restore();
      }
    }
  };

  function updateUiState() {
    const model = ACADEMIC_MODELS[currentModelId];
    if (!model) return;

    // Update labels
    distValLabel.textContent = Math.round(distortion * 100) + '%';
    rgbValLabel.textContent = Math.round(rgbShift * 100) + '%';
    xyValLabel.textContent = `(${Math.round(xyX * 100)}, ${Math.round(xyY * 100)})`;

    // Update Formula Seed Code
    const pD = String(Math.round(distortion * 999)).padStart(3, '0');
    const pR = String(Math.round(rgbShift * 999)).padStart(3, '0');
    const pX = String(Math.round((xyX * 0.5 + xyY * 0.5) * 999)).padStart(3, '0');
    const seed = `#${model.prefix}-${pD}-${pR}-${pX}`;
    seedCodeLabel.textContent = seed;

    // Update LaTeX equation
    liveFormulaText.textContent = model.getFormula(distortion, rgbShift, xyX, xyY);

    // Apply visual filter shifts on underlying image
    if (isHoldOriginal) {
      imgElement.style.filter = 'none';
      imgElement.style.transform = 'none';
    } else {
      const contrast = 100 + distortion * 45;
      const saturate = 100 + rgbShift * 80;
      const hue = Math.round(rgbShift * 40 - 20);
      const chromaShift = (rgbShift * 6).toFixed(1);

      imgElement.style.filter = `contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg) drop-shadow(-${chromaShift}px 0px 0px rgba(0,245,212,0.6)) drop-shadow(${chromaShift}px 0px 0px rgba(255,0,127,0.6))`;
      imgElement.style.transform = `scale(${1 + distortion * 0.04})`;
    }
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }

  function loop() {
    resizeCanvas();
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    if (!isHoldOriginal) {
      animationTime += 0.035;
      const model = ACADEMIC_MODELS[currentModelId];
      if (model && model.render) {
        model.render(ctx, w, h, animationTime, distortion, rgbShift, xyX, xyY);
      }
    }

    requestAnimationFrame(loop);
  }

  // Event Listeners: Sliders
  distortionSlider.addEventListener('input', (e) => {
    distortion = parseFloat(e.target.value);
    updateUiState();
  });

  rgbSlider.addEventListener('input', (e) => {
    rgbShift = parseFloat(e.target.value);
    updateUiState();
  });

  // XY Touchpad interaction
  function updateXy(e) {
    const rect = xyPad.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    xyX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    xyY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    xyCursor.style.left = (xyX * 100) + '%';
    xyCursor.style.top = (xyY * 100) + '%';
    updateUiState();
  }

  xyPad.addEventListener('mousedown', (e) => {
    isDraggingPad = true;
    updateXy(e);
  });
  window.addEventListener('mousemove', (e) => {
    if (isDraggingPad) updateXy(e);
  });
  window.addEventListener('mouseup', () => {
    isDraggingPad = false;
  });

  xyPad.addEventListener('touchstart', (e) => {
    isDraggingPad = true;
    updateXy(e);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (isDraggingPad) updateXy(e);
  }, { passive: true });
  window.addEventListener('touchend', () => {
    isDraggingPad = false;
  });

  // Hold A/B comparison
  const setOriginal = (orig) => {
    isHoldOriginal = orig;
    holdAbBtn.classList.toggle('active', orig);
    updateUiState();
  };
  holdAbBtn.addEventListener('mousedown', () => setOriginal(true));
  holdAbBtn.addEventListener('mouseup', () => setOriginal(false));
  holdAbBtn.addEventListener('mouseleave', () => setOriginal(false));
  holdAbBtn.addEventListener('touchstart', (e) => { e.preventDefault(); setOriginal(true); });
  holdAbBtn.addEventListener('touchend', (e) => { e.preventDefault(); setOriginal(false); });

  // Scene Switching
  sceneChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sceneChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const src = chip.dataset.src;
      if (src) {
        imgElement.src = src;
      }
    });
  });

  // Model Switching
  modelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModelId = btn.dataset.model || 'chladni';
      updateUiState();
    });
  });

  // Copy Seed Recipe
  copySeedBtn.addEventListener('click', () => {
    const seed = seedCodeLabel.textContent;
    const formula = liveFormulaText.textContent;
    const textToCopy = `VibeCam Recipe: ${seed}\nLaTeX: ${formula}\nSynthesized with VibeCam Cyber Synth Camera (CodExa)`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const origText = copySeedBtn.textContent;
      copySeedBtn.textContent = '✓ COPIED!';
      copySeedBtn.style.background = '#00f5d4';
      copySeedBtn.style.color = '#000';
      setTimeout(() => {
        copySeedBtn.textContent = origText;
        copySeedBtn.style.background = '';
        copySeedBtn.style.color = '';
      }, 2000);
    });
  });

  // Initialize
  updateUiState();
  requestAnimationFrame(loop);
})();
