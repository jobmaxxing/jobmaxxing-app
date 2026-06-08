/**
 * JobMaxxing Fox-Tie Logo Icon
 * Geometric fox head merged with a necktie — inspired by the brand logo.
 * Fully SVG, no external deps.
 */

export function LogoIcon({ size = 36, color = '#F97316' }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.72)}
      viewBox="0 0 60 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Left ear ── */}
      <polygon points="18,2 9,23 27,23" fill={color} />

      {/* ── Right ear ── */}
      <polygon points="42,2 33,23 51,23" fill={color} />

      {/* ── Fox head (wide pentagon) ── */}
      <polygon points="8,21 1,40 30,54 59,40 52,21" fill={color} />

      {/* ── White face chevron (fox chin / cheek markings) ── */}
      <polygon points="30,28 16,44 30,38 44,44" fill="white" />

      {/* ── Tie (knot + blade as one shape) ── */}
      <polygon points="22,52 38,52 48,66 30,101 12,66" fill={color} />

      {/* ── White tie-knot dimple ── */}
      <polygon points="30,52 22,62 38,62" fill="white" />
    </svg>
  );
}

/** Full horizontal lockup: icon + wordmark */
export function LogoFull({ iconSize = 36, textSize = 18, color = '#F97316' }) {
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
