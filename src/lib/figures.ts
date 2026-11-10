import { dim } from './glyphs';

const ring = (cx: number, cy: number, r: number, n: number, rr: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return `<circle class="fill" cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="${rr}"/>`;
  }).join('');

const MONO = 'font-family="JetBrains Mono, monospace"';

export const FIGURES = {
  'cylinder-cutaway': {
    label:
      'Cutaway of a double-acting hydraulic cylinder: barrel, piston with seals and wear band, rod, gland with rod seal and wiper, ports A and B. The wear zones on the bore and rod are highlighted.',
    svg: `<svg class="g" viewBox="0 0 760 300" role="img" aria-label="LABEL">
<rect width="760" height="300" fill="var(--blueprint)"/>
<rect class="fill" x="70" y="96" width="400" height="108" rx="6"/>
<rect x="78" y="104" width="384" height="92" fill="var(--paper)" stroke="var(--steel)" stroke-width="1.5"/>
<rect class="fill" x="48" y="88" width="30" height="124" rx="4"/>
<circle class="fill" cx="34" cy="150" r="16"/><circle class="soft" cx="34" cy="150" r="6"/>
<rect class="fill" x="452" y="88" width="44" height="124" rx="4"/>
<rect x="452" y="128" width="8" height="44" fill="var(--cobalt-faint)" stroke="currentColor" stroke-width="2"/>
<rect x="486" y="128" width="8" height="44" fill="var(--cobalt-faint)" stroke="currentColor" stroke-width="2"/>
<rect class="soft" x="236" y="106" width="44" height="88"/>
<rect x="244" y="104" width="7" height="92" fill="var(--navy)"/><rect x="265" y="104" width="7" height="92" fill="var(--navy)"/>
<rect x="254" y="104" width="8" height="92" fill="var(--steel)"/>
<rect class="fill" x="280" y="132" width="370" height="36"/>
<path d="M300 132h150" stroke="var(--orange)" stroke-width="5"/>
<path d="M120 104h108" stroke="var(--orange)" stroke-width="5"/>
<rect class="fill" x="650" y="126" width="30" height="48" rx="4"/>
<circle class="fill" cx="700" cy="150" r="20"/><circle class="soft" cx="700" cy="150" r="7"/>
<path class="s" d="M120 96V70h-24M410 96V70h24"/>
<path class="d" d="M20 150h720" stroke-dasharray="10 4 2 4"/>
<g ${MONO} font-size="11" fill="var(--ink)" letter-spacing=".5">
<path class="d" d="M96 70l-36-32"/><text x="22" y="32">PORT A (CAP END)</text>
<path class="d" d="M434 70l40-34"/><text x="436" y="30">PORT B (ROD END)</text>
<path class="d" d="M258 196l-30 64"/><text x="120" y="276">PISTON SEALS + WEAR BAND</text>
<path class="d" d="M456 172l40 72"/><text x="440" y="262">ROD SEAL</text>
<path class="d" d="M490 172l70 54"/><text x="540" y="240">WIPER</text>
<path class="d" d="M370 132l60-72"/><text x="520" y="80" fill="var(--orange-ink)">ROD: SCORING, PITTING</text><path class="d" d="M430 60h86"/>
<path class="d" d="M170 104l-50-60"/><text x="140" y="40" fill="var(--orange-ink)">BORE: SCORING, OVALITY</text>
<path class="d" d="M560 168v26"/><text x="590" y="186">CHROME ROD</text>
</g>
<g>${dim(78, 462, 226, 'BARREL / BORE Ø')}</g>
<text x="740" y="292" text-anchor="end" ${MONO} font-size="10" fill="var(--muted)" letter-spacing="1.5">DWG. WT-014 · DOUBLE-ACTING CYLINDER · NOT TO SCALE</text>
</svg>`,
  },
  'bearing-section': {
    label: 'Cross-section of a deep groove ball bearing with labelled outer ring, inner ring, balls and the load zone at the bottom.',
    svg: `<svg class="g" viewBox="0 0 640 300" role="img" aria-label="LABEL">
<rect width="640" height="300" fill="var(--blueprint)"/>
<circle class="fill" cx="200" cy="150" r="120"/><circle class="s" cx="200" cy="150" r="98"/><circle class="s" cx="200" cy="150" r="62"/><circle class="soft" cx="200" cy="150" r="40"/>
${ring(200, 150, 80, 8, 16)}
<path d="M120 236A120 120 0 0 0 280 236" fill="none" stroke="var(--orange)" stroke-width="6" stroke-linecap="round"/>
<path class="d" d="M60 150h280M200 10v280" stroke-dasharray="10 4 2 4"/>
<g ${MONO} font-size="12" fill="var(--ink)">
<path class="d" d="M310 80l110-16"/><text x="428" y="68">OUTER RING (FIXED)</text>
<path class="d" d="M238 150l182-34"/><text x="428" y="120">INNER RING (TURNS WITH SHAFT)</text>
<path class="d" d="M296 150l124 22"/><text x="428" y="176">ROLLING ELEMENT</text>
<text x="428" y="250" fill="var(--orange-ink)">LOAD ZONE (GRAVITY LOAD)</text><path class="d" d="M270 250h150"/>
</g>
<text x="626" y="292" text-anchor="end" ${MONO} font-size="10" fill="var(--muted)" letter-spacing="1.5">DWG. WT-001 · DEEP GROOVE BALL BEARING</text>
</svg>`,
  },
} as const;
export type FigureName = keyof typeof FIGURES;
export const figureSvg = (name: FigureName, style = '') => {
  const f = FIGURES[name];
  return f.svg.replace('LABEL', f.label).replace('class="g"', `class="g"${style ? ` style="${style}"` : ''}`);
};
