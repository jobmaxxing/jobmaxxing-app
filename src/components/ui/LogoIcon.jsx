/**
 * JobMaxxing Fox-Tie Logo Icon
 * Geometric fox head merged with a necktie — inspired by the brand logo.
 * Fully SVG, no external deps.
 */

export function LogoIcon({ size = 36, color = '#FF7324' }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.72)}
      viewBox="411 181 213 731"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Left ear ── */}
      <polygon points="457,181 421,280 486,280" fill={color} />

      {/* ── Right ear ── */}
      <polygon points="575,181 546,280 612,280" fill={color} />

      {/* ── Fox head (triangle pointing down) ── */}
      <polygon points="422,303 611,303 516.5,431" fill={color} />

      {/* ── Nose (small brown triangle) ── */}
      <polygon points="497,432 536,432 516.5,467" fill="#853014" />

      {/* ── Tie (collar notch + blade) ── */}
      <polygon points="465,430 516.5,517 568,430 624,815 516.5,912 411,815" fill={color} />
    </svg>
  );
}

/** Full horizontal lockup: icon + wordmark */
export function LogoFull({ iconSize = 36, textSize = 18, color = '#FF7324' }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <LogoIcon size={iconSize} color={color} />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: textSize,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          background: `linear-gradient(135deg, ${color}, #FB923C)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        JOBMAXXING
      </span>
    </span>
  );
}
