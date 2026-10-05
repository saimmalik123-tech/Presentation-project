import React, { useEffect, useState } from "react";

const TeacherProfile = ({ onNext }) => {
  const [visible, setVisible] = useState(false);

  // Entrance animation trigger
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[#6b0f1e] px-3 py-6 sm:px-4 sm:py-8 font-sans overflow-hidden">
      {/* ==================== ANIMATED DECORATIVE LAYER ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft glowing rose blobs for depth */}
        <div className="absolute -top-40 -left-40 w-105 h-105 sm:w-130 sm:h-130 rounded-full bg-[#b14b5e]/25 blur-3xl animate-blob-slow" />
        <div className="absolute -bottom-40 -right-40 w-105 h-105 sm:w-130 sm:h-130 rounded-full bg-[#8b1e2b]/40 blur-3xl animate-blob-slower" />

        {/* Fine dot grid in light wine tone */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f5e1e5 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Subtle radial vignette (darker corners) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

        {/* Drifting sparkles in soft blush */}
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute text-[#f5e1e5]/25 select-none animate-drift"
            style={{
              left: `${(i * 15 + 5) % 100}%`,
              top: `${(i * 23 + 9) % 100}%`,
              fontSize: `${0.9 + (i % 3) * 0.5}rem`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${9 + (i % 4)}s`,
            }}
          >
            {["✦", "✧", "·", "❋"][i % 4]}
          </span>
        ))}
      </div>

      {/* ==================== MAIN CARD ==================== */}
      <div
        className={`relative w-full max-w-2xl z-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Soft blush glow behind the card */}
        <div className="absolute -inset-1 bg-linear-to-r from-[#b14b5e]/40 via-[#f5e1e5]/20 to-[#b14b5e]/40 rounded-[2.5rem] blur-2xl opacity-70 animate-glow-pulse" />

        {/* White card (solid, warm off-white) */}
        <div className="relative bg-[#fdf6f7] rounded-4xl sm:rounded-[2.5rem] border border-[#f5e1e5]/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] px-5 py-9 sm:px-8 sm:py-12 text-center overflow-hidden">
          {/* Animated top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 top-accent-bar animate-shimmer" />

          {/* Decorative floating elements */}
          <span className="absolute top-5 right-5 sm:top-5 sm:right-8 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-1">
            🌸
          </span>
          <span className="absolute top-14 right-4 sm:top-16 sm:right-5 text-xl sm:text-2xl opacity-25 select-none pointer-events-none animate-float-2">
            ✨
          </span>
          <span className="absolute top-6 left-5 sm:top-8 sm:left-7 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-3">
            🌷
          </span>
          <span className="absolute bottom-5 right-6 sm:bottom-5 sm:right-10 text-3xl sm:text-4xl opacity-25 select-none pointer-events-none animate-float-4">
            🌼
          </span>

          {/* Avatar circle with initials + rotating ring + pulse */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6">
            {/* Rotating conic gradient ring */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6b0f1e,#b14b5e,#f5e1e5,#6b0f1e)] animate-spin-slow opacity-50 blur-sm" />
            {/* Pulsing expanding ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#6b0f1e]/30 animate-ring-pulse" />
            {/* Avatar */}
            <div className="relative w-full h-full rounded-full bg-[#f7e9ec] flex justify-center items-center border-4 border-white shadow-wine-md">
              <span className="text-[#6b0f1e] text-5xl sm:text-6xl font-light tracking-wider">
                NB
              </span>
            </div>
          </div>

          {/* Teacher name with animated gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-2 mb-1 bg-linear-to-r from-[#6b0f1e] via-[#8b1e2b] to-[#6b0f1e] bg-clip-text text-transparent animate-gradient-x">
            Miss Noor-ul-huda Brohi
          </h1>

          {/* Department badge */}
          <div className="inline-block bg-[#f7e9ec] text-[#6b0f1e] px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-base sm:text-lg font-semibold tracking-wide mt-2 border border-[#6b0f1e]/10 animate-badge-pop">
            English Department
          </div>

          {/* Animated divider with sliding dot */}
          <div className="relative w-32 sm:w-40 h-1 rounded-full mx-auto my-6 sm:my-8 bg-linear-to-r from-transparent via-[#6b0f1e] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-[#b14b5e]/60 animate-slide-dot" />
          </div>

          {/* Quote box with sheen */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 text-left text-[#4a1e24] text-base sm:text-lg md:text-xl italic font-medium leading-relaxed border-l-[6px] sm:border-l-8 border-[#6b0f1e] shadow-[0_10px_24px_-12px_rgba(107,15,30,0.25)] overflow-hidden">
            {/* Animated sheen overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/0 to-transparent animate-sheen pointer-events-none" />

            <p className="relative">
              “A teacher plants the seeds of knowledge that grow forever.”
            </p>
            <div className="relative mt-3 font-semibold not-italic text-right text-sm sm:text-base text-[#6b0f1e]">
              — Thank you, Miss Noor-ul-huda Brohi
            </div>

            {/* Decorative quote mark */}
            <div className="absolute -top-1 -right-1 text-[#6b0f1e]/10 text-5xl sm:text-6xl font-serif select-none pointer-events-none">
              ”
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-7 sm:mt-8 flex justify-center">
            <button
              onClick={onNext}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-2 bg-[#6b0f1e] hover:bg-[#8b1e2b] text-white font-semibold text-base sm:text-lg px-7 sm:px-8 py-3 rounded-full shadow-wine-md hover:shadow-wine-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/40"
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent" />
              <span className="relative">Next</span>
              <svg
                className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 sm:mt-10 text-[#6b0f1e] text-xs sm:text-base font-medium opacity-90 flex-wrap text-center">
            <span className="text-lg sm:text-xl animate-heartbeat">💖</span>
            <span>Happy Teacher's Day</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b0f1e] opacity-50" />
            <span
              className="text-lg sm:text-xl animate-heartbeat"
              style={{ animationDelay: "0.4s" }}
            >
              🌹
            </span>
            <span>With gratitude</span>
          </div>
        </div>
      </div>

      {/* Keyframes & utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }

        /* Floating emoji paths */
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-12px) rotate(6deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-14px) rotate(-18deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(25deg); }
          50% { transform: translateY(-10px) rotate(18deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) rotate(-20deg); }
          50% { transform: translateY(-16px) rotate(-10deg); }
        }
        .animate-float-1 { animation: float1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float3 5.5s ease-in-out infinite; }
        .animate-float-4 { animation: float4 8s ease-in-out infinite; }

        /* Slow spin */
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spinSlow 9s linear infinite; }

        /* Heartbeat */
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          40% { transform: scale(0.95); }
          60% { transform: scale(1.1); }
        }
        .animate-heartbeat { animation: heartbeat 2.4s ease-in-out infinite; }

        /* Gradient text */
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 5s ease infinite;
        }

        /* Sliding dot */
        @keyframes slideDot {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-dot { animation: slideDot 2.5s ease-in-out infinite; }

        /* Shimmer on top bar */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
        }

        /* Blob movement */
        @keyframes blobSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes blobSlower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.08); }
        }
        .animate-blob-slow { animation: blobSlow 16s ease-in-out infinite; }
        .animate-blob-slower { animation: blobSlower 20s ease-in-out infinite; }

        /* Drifting sparkles */
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
          50% { transform: translate(20px, -30px) rotate(180deg); opacity: 0.35; }
        }
        .animate-drift { animation: drift linear infinite; }

        /* Glow behind card */
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.02); }
        }
        .animate-glow-pulse { animation: glowPulse 5s ease-in-out infinite; }

        /* Sheen on quote box */
        @keyframes sheen {
          0%, 100% { background-position: 200% 0; opacity: 0.4; }
          50% { background-position: -50% 0; opacity: 0.7; }
        }
        .animate-sheen {
          background: linear-gradient(
            115deg,
            transparent 30%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          animation: sheen 6s ease-in-out infinite;
        }

        /* Ring pulse on avatar */
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .animate-ring-pulse { animation: ringPulse 2.8s ease-out infinite; }

        /* Badge pop entrance */
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.85); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-badge-pop { animation: badgePop 0.7s ease-out 0.4s both; }

        /* Shadows */
        .shadow-wine-sm { box-shadow: 0 6px 14px -6px rgba(107, 15, 30, 0.15); }
        .shadow-wine-md { box-shadow: 0 12px 24px -10px rgba(107, 15, 30, 0.2); }
        .shadow-wine-lg {
          box-shadow: 0 24px 38px -12px rgba(107, 15, 30, 0.3),
                      0 6px 18px -8px rgba(107, 15, 30, 0.2);
        }

        .top-accent-bar {
          background: linear-gradient(90deg, #6b0f1e 0%, #b14b5e 50%, #f5e1e5 100%);
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TeacherProfile;