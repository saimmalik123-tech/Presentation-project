import { useEffect, useState } from "react";

const ThankYouWall = ({ onBack, onRestart }) => {
  const students = [
    { name: "Saim", rollNo: "139", emoji: "🌹" },
    { name: "Huamil", rollNo: "163", emoji: "🌸" },
    { name: "Hussain", rollNo: "49", emoji: "✨" },
  ];

  // Floating hearts animation
  const [hearts, setHearts] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heartEmojis = ["💖", "🌸", "✨", "🌹", "💐", "🌷", "💗", "🌺"];
    const generated = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 1 + Math.random() * 1.5,
    }));
    setHearts(generated);

    // Entrance animation trigger
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

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
        {[...Array(6)].map((_, i) => (
          <span
            key={`sparkle-${i}`}
            className="absolute text-[#f5e1e5]/25 select-none animate-drift"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 29 + 9) % 100}%`,
              fontSize: `${0.9 + (i % 3) * 0.5}rem`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${10 + (i % 4)}s`,
            }}
          >
            {["✦", "✧", "·", "❋"][i % 4]}
          </span>
        ))}
      </div>

      {/* Floating hearts background animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute -bottom-12 opacity-40"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}rem`,
              animation: `floatUp ${heart.duration}s linear ${heart.delay}s infinite`,
            }}
          >
            {heart.emoji}
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
        <div className="absolute -inset-1 bg-gradient-to-r from-[#b14b5e]/40 via-[#f5e1e5]/20 to-[#b14b5e]/40 rounded-[2.5rem] blur-2xl opacity-70 animate-glow-pulse" />

        {/* White card (solid, warm off-white) */}
        <div className="relative bg-[#fdf6f7] rounded-[2rem] sm:rounded-[2.5rem] border border-[#f5e1e5]/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] px-5 py-9 sm:px-8 sm:py-12 md:px-10 text-center overflow-hidden">
          {/* Animated top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 top-accent-bar animate-shimmer" />

          {/* Decorative floating elements */}
          <span className="absolute top-5 left-5 sm:top-6 sm:left-8 text-2xl sm:text-3xl opacity-25 select-none pointer-events-none animate-float-1">
            🎉
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

          {/* Header icon with rotating ring + pulse */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6b0f1e,#b14b5e,#f5e1e5,#6b0f1e)] animate-spin-slow opacity-50 blur-sm" />
            <div className="absolute inset-0 rounded-full border-2 border-[#6b0f1e]/30 animate-ring-pulse" />
            <div className="relative w-full h-full rounded-full bg-[#f7e9ec] flex justify-center items-center border-4 border-white shadow-wine-md animate-pulse-slow">
              <span className="text-4xl sm:text-5xl animate-heartbeat">💐</span>
            </div>
          </div>

          {/* Heading with animated gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 bg-gradient-to-r from-[#6b0f1e] via-[#8b1e2b] to-[#6b0f1e] bg-clip-text text-transparent animate-gradient-x px-2">
            Thank You, Miss Noor-ul-huda Brohi
          </h1>

          {/* Subheading */}
          <p className="text-[#8b3e4b] text-sm sm:text-base md:text-lg font-medium mb-6 max-w-xl mx-auto leading-relaxed px-2">
            For your patience, your passion, and the countless ways you've
            shaped us into the scholars we're becoming — we are forever
            grateful.
          </p>

          {/* Animated divider with sliding dot */}
          <div className="relative w-32 sm:w-40 h-1 rounded-full mx-auto mb-7 sm:mb-8 bg-gradient-to-r from-transparent via-[#6b0f1e] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-[#b14b5e]/60 animate-slide-dot" />
          </div>

          {/* Message box with sheen */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-left border-l-[6px] sm:border-l-8 border-[#6b0f1e] shadow-[0_10px_24px_-12px_rgba(107,15,30,0.25)] mb-7 sm:mb-8 overflow-hidden">
            {/* Animated sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent animate-sheen pointer-events-none" />

            <p className="relative text-[#4a1e24] text-sm sm:text-base md:text-lg italic font-medium leading-relaxed">
              “You didn't just teach us English — you taught us how to think,
              how to express, how to feel deeply, and how to find our own voice
              in every text we read. Every essay we write carries a piece of
              your guidance.”
            </p>
            <div className="relative mt-4 text-[#6b0f1e] font-semibold not-italic text-right text-sm sm:text-base">
              — With love, <br />
              Your Students 💖
            </div>

            {/* Decorative quote mark */}
            <div className="absolute -top-1 -right-1 text-[#6b0f1e]/10 text-5xl sm:text-6xl font-serif select-none pointer-events-none">
              ”
            </div>
          </div>

          {/* Thank You Wall — student names with roll numbers */}
          <div className="mb-7 sm:mb-8">
            <h2 className="text-[#6b0f1e] text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-4 sm:mb-5">
              🎓 From the Wall of Gratitude 🎓
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {students.map((student, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
                  className={`student-card group bg-white border-2 border-[#6b0f1e]/20 hover:border-[#6b0f1e] rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-[0_8px_20px_-10px_rgba(107,15,30,0.3)] cursor-default animate-card-in ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {student.emoji}
                  </div>
                  <div className="text-[#6b0f1e] font-bold text-sm sm:text-base whitespace-nowrap">
                    {student.name}
                  </div>
                  <div className="text-[#8b3e4b] text-[10px] sm:text-xs font-medium">
                    Roll No: {student.rollNo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signature line */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-7 sm:mb-8 text-[#6b0f1e] text-xs sm:text-sm md:text-base font-semibold flex-wrap text-center">
            <span className="text-base sm:text-lg animate-heartbeat">🌹</span>
            <span>Happy Teacher's Day, Miss Noor-ul-huda Brohi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b0f1e] opacity-50" />
            <span
              className="text-base sm:text-lg animate-heartbeat"
              style={{ animationDelay: "0.4s" }}
            >
              💖
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

            {/* Restart Button with shimmer */}
            <button
              onClick={onRestart}
              className="group relative overflow-hidden inline-flex justify-center items-center gap-2 bg-[#6b0f1e] hover:bg-[#8b1e2b] text-white font-semibold text-base sm:text-lg px-7 sm:px-8 py-3 rounded-full shadow-wine-md hover:shadow-wine-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/40"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <svg
                className="relative w-5 h-5 transform group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <span className="relative">Start Over</span>
            </button>
          </div>
        </div>
      </div>

      {/* Keyframes & utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }

        /* Floating hearts rising */
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Pulse slow on header icon */
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 12px 20px -8px rgba(107, 15, 30, 0.25);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 16px 28px -8px rgba(107, 15, 30, 0.4);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

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

        /* Sheen on message box */
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

        /* Ring pulse on header icon */
        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .animate-ring-pulse { animation: ringPulse 2.8s ease-out infinite; }

        /* Student card hover */
        .student-card {
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1);
        }
        .student-card:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 16px 24px -10px rgba(107, 15, 30, 0.3);
        }

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

export default ThankYouWall;
