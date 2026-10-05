import React, { useEffect, useState } from "react";

const TeacherQuotes = ({ onBack, onNext }) => {
  const quotes = [
    {
      text: "A teacher plants the seeds of knowledge that grow forever.",
      author: "Unknown",
      emoji: "🌱",
    },
    {
      text: "The art of teaching is the art of assisting discovery.",
      author: "Mark Van Doren",
      emoji: "🔍",
    },
    {
      text: "Teaching is the one profession that creates all other professions.",
      author: "Unknown",
      emoji: "🎓",
    },
    {
      text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.",
      author: "Brad Henry",
      emoji: "✨",
    },
    {
      text: "The best teachers are those who show you where to look, but don't tell you what to see.",
      author: "Alexandra K. Trenfor",
      emoji: "🧭",
    },
    {
      text: "To teach is to touch a life forever.",
      author: "Unknown",
      emoji: "💖",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [tilt, setTilt] = useState({});

  // Entrance animation trigger
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  // 3D tilt effect on mouse move over cards
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt((prev) => ({
      ...prev,
      [index]: { rotateX, rotateY, x, y },
    }));
  };

  const handleMouseLeave = (index) => {
    setTilt((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0, x: 0, y: 0 },
    }));
    setActiveCard(null);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[#6b0f1e] px-3 py-6 sm:px-4 sm:py-8 font-sans overflow-hidden">
      {/* ==================== ANIMATED DECORATIVE LAYER ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft glowing rose blobs for depth */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#b14b5e]/25 blur-3xl animate-blob-slow" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#8b1e2b]/40 blur-3xl animate-blob-slower" />

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
        className={`relative w-full max-w-3xl z-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Soft blush glow behind the card */}
        <div className="absolute -inset-1 bg-linear-to-r from-[#b14b5e]/40 via-[#f5e1e5]/20 to-[#b14b5e]/40 rounded-[2.5rem] blur-2xl opacity-70 animate-glow-pulse" />

        {/* White card (solid, warm off-white) */}
        <div className="relative bg-[#fdf6f7] rounded-4xl sm:rounded-[2.5rem] border border-[#f5e1e5]/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] px-5 py-9 sm:px-8 sm:py-12 md:px-10 text-center overflow-hidden">
          {/* Animated top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 top-accent-bar animate-shimmer" />

          {/* Decorative floating elements */}
          <span className="absolute top-5 left-5 sm:top-6 sm:left-8 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-1">
            💬
          </span>
          <span className="absolute top-16 right-5 sm:top-20 sm:right-8 text-xl sm:text-2xl opacity-25 select-none pointer-events-none animate-float-2">
            🌸
          </span>
          <span className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-3">
            🌷
          </span>
          <span className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-4">
            ✨
          </span>

          {/* Header icon with rotating ring */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6b0f1e,#b14b5e,#f5e1e5,#6b0f1e)] animate-spin-slow opacity-50 blur-sm" />
            <div className="relative w-full h-full rounded-full bg-[#f7e9ec] flex justify-center items-center border-4 border-white shadow-wine-md">
              <span className="text-3xl sm:text-4xl animate-heartbeat">💬</span>
            </div>
          </div>

          {/* Heading with animated gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2 bg-linear-to-r from-[#6b0f1e] via-[#8b1e2b] to-[#6b0f1e] bg-clip-text text-transparent animate-gradient-x">
            Words of Wisdom
          </h1>

          {/* Subheading */}
          <p className="text-[#8b3e4b] text-sm sm:text-base md:text-lg font-medium mb-5 sm:mb-6 tracking-wide px-2">
            Beautiful quotes celebrating teachers like Miss Noor-ul-huda Brohi —
            English Department
          </p>

          {/* Animated divider with sliding dot */}
          <div className="relative w-32 sm:w-40 h-1 rounded-full mx-auto mb-7 sm:mb-8 bg-linear-to-r from-transparent via-[#6b0f1e] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-[#b14b5e]/60 animate-slide-dot" />
          </div>

          {/* Quotes Grid with 3D tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-7 sm:mb-8">
            {quotes.map((quote, index) => {
              const t = tilt[index] || { rotateX: 0, rotateY: 0, x: 0, y: 0 };
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transform: `perspective(900px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) scale(${
                      isActive ? 1.02 : 1
                    })`,
                    transition: isActive
                      ? "transform 0.08s ease-out"
                      : "transform 0.5s cubic-bezier(0.2,0.9,0.4,1)",
                    animationDelay: `${index * 0.12 + 0.3}s`,
                  }}
                  className={`quote-card relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-left border-l-[6px] sm:border-l-8 border-[#6b0f1e] shadow-[0_10px_24px_-12px_rgba(107,15,30,0.25)] hover:shadow-[0_20px_38px_-12px_rgba(107,15,30,0.4)] overflow-hidden group animate-card-in ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Animated gradient sheen on hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#b14b5e]/0 to-transparent group-hover:via-[#b14b5e]/8 transition-all duration-700 pointer-events-none" />

                  {/* Spotlight following cursor */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(280px circle at ${t.x}px ${t.y}px, rgba(107,15,30,0.07), transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Quote emoji with bounce on hover */}
                  <div className="relative text-2xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block">
                    {quote.emoji}
                  </div>

                  {/* Quote text */}
                  <p className="relative text-[#4a1e24] text-sm sm:text-base md:text-lg italic font-medium leading-relaxed">
                    “{quote.text}”
                  </p>

                  {/* Author */}
                  <div className="relative mt-3 text-[#6b0f1e]/80 font-semibold not-italic text-xs sm:text-sm text-right">
                    — {quote.author}
                  </div>

                  {/* Decorative corner accent with subtle rotation */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[#6b0f1e]/15 text-3xl sm:text-4xl font-serif select-none pointer-events-none transition-transform duration-500 group-hover:rotate-12 group-hover:text-[#6b0f1e]/25">
                    ”
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-[#6b0f1e] text-xs sm:text-sm font-medium opacity-90 flex-wrap text-center">
            <span className="text-base sm:text-lg animate-heartbeat">🌹</span>
            <span>Every quote here is a tribute to you</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b0f1e] opacity-50" />
            <span
              className="text-base sm:text-lg animate-heartbeat"
              style={{ animationDelay: "0.4s" }}
            >
              💐
            </span>
          </div>

          {/* Buttons — stacked on tiny screens, side-by-side from sm up */}
          <div className="flex flex-col-reverse sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-2 bg-white border-2 border-[#6b0f1e] text-[#6b0f1e] font-semibold text-base sm:text-lg px-6 sm:px-7 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/30"
            >
              <span className="absolute inset-0 bg-[#6b0f1e]/0 group-hover:bg-[#6b0f1e]/5 transition-colors duration-300" />
              <svg
                className="relative w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <span className="relative">Back</span>
            </button>

            {/* Next Button with shimmer */}
            <button
              onClick={onNext}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-2 bg-[#6b0f1e] hover:bg-[#8b1e2b] text-white font-semibold text-base sm:text-lg px-7 sm:px-8 py-3 rounded-full shadow-wine-md hover:shadow-wine-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/40"
            >
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
        </div>
      </div>

      {/* Keyframes & utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }

        /* Card entrance */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-in { animation: cardIn 0.7s cubic-bezier(0.2, 0.9, 0.4, 1) both; }

        /* Floating emoji paths */
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-14px) rotate(18deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-16px) rotate(-4deg); }
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

export default TeacherQuotes;
