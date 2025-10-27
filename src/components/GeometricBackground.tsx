// Reusable Geometric Background Component
export function GeometricBackground() {
  return (
    <>
      {/* GEOMETRIC GRID BACKGROUND - Kotak Kotak */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              {/* Large Squares */}
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="none"
                stroke="black"
                strokeWidth="1.2"
              />
              <rect
                x="20"
                y="20"
                width="20"
                height="20"
                fill="none"
                stroke="black"
                strokeWidth="1.2"
              />

              {/* Small Squares */}
              <rect
                x="5"
                y="5"
                width="7"
                height="7"
                fill="black"
                opacity="0.1"
              />
              <rect
                x="25"
                y="25"
                width="7"
                height="7"
                fill="black"
                opacity="0.1"
              />

              {/* Diagonal Lines */}
              <line
                x1="0"
                y1="0"
                x2="20"
                y2="20"
                stroke="black"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="20"
                y1="20"
                x2="40"
                y2="40"
                stroke="black"
                strokeWidth="0.5"
                opacity="0.3"
              />

              {/* Dots */}
              <circle
                cx="10"
                cy="30"
                r="1.5"
                fill="black"
                opacity="0.2"
              />
              <circle
                cx="30"
                cy="10"
                r="1.5"
                fill="black"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern)"
          />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-200/20 via-pink-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[15%] right-[8%] w-[500px] h-[500px] bg-gradient-to-tl from-blue-200/20 via-cyan-200/20 to-transparent rounded-full blur-3xl" />

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}