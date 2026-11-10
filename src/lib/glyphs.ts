/** Technical line drawings used for category tiles and article covers (viewBox 240×140). */
export const dim = (x1: number, x2: number, y: number, label: string) =>
  `<path class="d" d="M${x1} ${y}H${x2}M${x1} ${y - 5}v10M${x2} ${y - 5}v10"/><path class="df" d="M${x1} ${y}l7 -3v6zM${x2} ${y}l-7 -3v6z"/><text class="lb" x="${(x1 + x2) / 2}" y="${y - 6}" text-anchor="middle">${label}</text>`;

const ring = (cx: number, cy: number, r: number, n: number, rr: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return `<circle class="fill" cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="${rr}"/>`;
  }).join('');

const GLYPHS: Record<string, string> = {
  hydraulics: `<rect class="fill" x="40" y="48" width="112" height="44" rx="5"/><rect class="soft" x="92" y="52" width="14" height="36"/><rect class="fill" x="106" y="64" width="96" height="12"/><rect class="fill" x="150" y="56" width="12" height="28"/><circle class="fill" cx="208" cy="70" r="9"/><circle class="fill" cx="32" cy="70" r="9"/><path class="s" d="M62 48V34h-8M130 48V34h8"/>${dim(40, 152, 112, 'BORE STROKE')}`,
  'mechanical-systems': `<circle class="s" cx="92" cy="70" r="36" stroke-width="10" stroke-dasharray="7 6" style="stroke-linecap:butt"/><circle class="fill" cx="92" cy="70" r="30"/><circle class="soft" cx="92" cy="70" r="8"/><circle class="s" cx="152" cy="70" r="24" stroke-width="9" stroke-dasharray="6.2 5.4" style="stroke-linecap:butt"/><circle class="fill" cx="152" cy="70" r="19"/><circle class="soft" cx="152" cy="70" r="6"/><path class="d" d="M92 22v96M152 34v72" stroke-dasharray="6 3 1 3"/>${dim(92, 152, 128, 'C/C')}`,
  'bearings-lubrication': `<circle class="fill" cx="120" cy="70" r="52"/><circle class="s" cx="120" cy="70" r="42"/><circle class="s" cx="120" cy="70" r="22"/><circle class="soft" cx="120" cy="70" r="13"/>${ring(120, 70, 32, 9, 8)}<path class="d" d="M56 70h128M120 6v128" stroke-dasharray="6 3 1 3"/>`,
  'industrial-maintenance': `<rect class="fill" x="78" y="20" width="84" height="104" rx="6"/><rect class="soft" x="102" y="14" width="36" height="14" rx="4"/>${[46, 70, 94].map((y) => `<path class="s" d="M92 ${y}l5 5 9-10"/><path class="s" d="M116 ${y + 1}h32"/>`).join('')}<path class="d" d="M60 20v104M54 20h12M54 124h12"/><text class="lb" x="40" y="74">A4</text>`,
  troubleshooting: `<path class="s" d="M30 112V24M30 112h184"/><path class="s" d="M30 108h18l4-14 4 14h20l4-40 4 40h26l4-70 4 70h22l4-28 4 28h24l3-10 3 10h20"/><path class="d" d="M100 34h96" stroke-dasharray="4 3"/><text class="lb" x="198" y="37">1×</text><circle class="soft" cx="108" cy="38" r="5"/>`,
  'tools-techniques': `<circle class="fill" cx="120" cy="58" r="42"/><circle class="s" cx="120" cy="58" r="34" stroke-width="7" stroke-dasharray="1.2 4.14" style="stroke-linecap:butt"/><path class="s" d="M120 58l22-20"/><circle class="soft" cx="120" cy="58" r="5"/><rect class="fill" x="113" y="100" width="14" height="14"/><path class="s" d="M120 114v20"/><circle class="s" cx="120" cy="136" r="3"/><text class="lb" x="146" y="128">0.001"</text>`,
};

export const glyphSvg = (cat: string, cls = 'g') =>
  `<svg class="${cls}" viewBox="0 0 240 140" aria-hidden="true" focusable="false">${GLYPHS[cat] ?? ''}</svg>`;
