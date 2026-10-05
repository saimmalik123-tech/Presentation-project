import { useEffect, useState, useRef } from "react";

const StudentMessages = ({ onBack, onNext }) => {
  const messages = [
    {
      name: "Saim",
      rollNo: "139",
      initials: "S",
      emoji: "🌹",
      message:
        "Miss. Noor-ul-huda Brohi, you made English Literature feel less like a subject and more like a superpower. Thank you for believing in me when I didn't believe in myself.",
    },
    {
      name: "Huamil",
      rollNo: "163",
      initials: "H",
      emoji: "🌸",
      message:
        "Your lectures were never just about texts — they were about thinking, expression, and never giving up. You're the best teacher I've ever had.",
    },
    {
      name: "Hussain",
      rollNo: "49",
      initials: "H",
      emoji: "✨",
      message:
        "Every time I interpreted a poem successfully, I remembered your voice guiding me. You taught us not just how to read, but how to think like scholars.",
    },
  ];

  // For staggered reveal animation
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const [tilt, setTilt] = useState({});

  useEffect(() => {
    // Trigger entrance animations
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // 3D tilt effect on mouse move over cards
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
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
    <div className="relative min-h-screen flex justify-center items-center bg-[#6b0f1e] p-4 md:p-6 font-sans overflow-hidden">
      {/* ==================== ANIMATED DECORATIVE LAYER (on wine background) ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft glowing rose blobs for depth */}
        <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-[#b14b5e]/25 blur-3xl animate-blob-slow" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full bg-[#8b1e2b]/40 blur-3xl animate-blob-slower" />

        {/* Fine dot grid in light wine tone */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #f5e1e5 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Subtle radial vignette (darker corners) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

        {/* Floating sparkles in soft blush */}
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute text-[#f5e1e5]/25 select-none animate-drift"
            style={{
              left: `${(i * 13 + 7) % 100}%`,
              top: `${(i * 27 + 11) % 100}%`,
              fontSize: `${1 + (i % 3) * 0.5}rem`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${9 + (i % 4)}s`,
            }}
          >
            {["✦", "✧", "·", "❋"][i % 4]}
          </span>
        ))}
      </div>

      {/* ==================== MAIN CARD ==================== */}
      <div
        className={`relative w-full max-w-4xl z-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Soft blush glow behind the card */}
        <div className="absolute -inset-1 bg-linear-to-r from-[#b14b5e]/40 via-[#f5e1e5]/20 to-[#b14b5e]/40 rounded-[3rem] blur-2xl opacity-70 animate-glow-pulse" />

        {/* White card (solid, warm off-white) */}
        <div className="relative bg-[#fdf6f7] rounded-[2.5rem] border border-[#f5e1e5]/40 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] px-6 md:px-12 py-12 text-center overflow-hidden">
          {/* Animated top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 top-accent-bar animate-shimmer" />

          {/* Decorative floating emojis */}
          <span className="absolute top-6 left-8 text-3xl opacity-25 select-none pointer-events-none animate-float-1">
            💌
          </span>
          <span className="absolute top-20 right-8 text-2xl opacity-25 select-none pointer-events-none animate-float-2">
            🌸
          </span>
          <span className="absolute bottom-8 left-10 text-3xl opacity-25 select-none pointer-events-none animate-float-3">
            🌷
          </span>
          <span className="absolute bottom-6 right-8 text-3xl opacity-25 select-none pointer-events-none animate-float-4">
            ✨
          </span>

          {/* Header icon with rotating ring */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#6b0f1e,#b14b5e,#f5e1e5,#6b0f1e)] animate-spin-slow opacity-50 blur-sm" />
            <div className="relative w-full h-full rounded-full bg-[#f7e9ec] flex justify-center items-center border-4 border-white shadow-wine-md">
              <span className="text-4xl animate-heartbeat">💌</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3 bg-linear-to-r from-[#6b0f1e] via-[#8b1e2b] to-[#6b0f1e] bg-clip-text text-transparent animate-gradient-x">
            Messages from Your Students
          </h1>

          {/* Subheading */}
          <p className="text-[#8b3e4b] text-base md:text-lg font-medium mb-6 tracking-wide">
            Heartfelt words for Miss Noor-ul-huda Brohi — English Department
          </p>

          {/* Divider with animated dot */}
          <div className="relative w-40 h-1 rounded-full mx-auto mb-10 bg-linear-to-r from-transparent via-[#6b0f1e] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-[#b14b5e]/60 animate-slide-dot" />
          </div>

          {/* Message Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {messages.map((msg, index) => {
              const t = tilt[index] || { rotateX: 0, rotateY: 0, x: 0, y: 0 };
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
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
                    animationDelay: `${index * 0.15 + 0.3}s`,
                  }}
                  className={`relative bg-white rounded-3xl p-6 md:p-7 text-left border-l-[6px] border-[#6b0f1e] shadow-[0_10px_24px_-12px_rgba(107,15,30,0.25)] hover:shadow-[0_20px_38px_-12px_rgba(107,15,30,0.4)] overflow-hidden group animate-card-in ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Animated gradient sheen on hover */}
                  <div className="absolute inset-0 bg-linear-to-tr from-[#6b0f1e]/0 via-[#b14b5e]/0 to-[#6b0f1e]/0 group-hover:from-[#6b0f1e]/5 group-hover:via-[#b14b5e]/8 group-hover:to-[#6b0f1e]/5 transition-all duration-700 pointer-events-none" />

                  {/* Spotlight following cursor */}
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(300px circle at ${t.x}px ${t.y}px, rgba(107,15,30,0.08), transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Student header */}
                  <div className="relative flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 shrink-0">
                      <div className="absolute inset-0 rounded-full border-2 border-[#6b0f1e]/30 animate-ring-pulse" />
                      <div className="relative w-full h-full rounded-full bg-[#fdf6f7] flex justify-center items-center border-2 border-[#6b0f1e]/20 shadow-wine-sm">
                        <span className="text-[#6b0f1e] text-sm font-bold tracking-wide">
                          {msg.initials}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[#6b0f1e] font-bold text-base truncate">
                        {msg.name}
                      </div>
                      <div className="text-[#8b3e4b] text-xs font-medium">
                        Roll No: {msg.rollNo}
                      </div>
                    </div>

                    <div className="text-2xl shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                      {msg.emoji}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative w-full h-px bg-[#6b0f1e]/10 mb-4 overflow-hidden">
                    <div className="absolute inset-0 w-0 group-hover:w-full bg-linear-to-r from-[#6b0f1e] to-transparent transition-all duration-700" />
                  </div>

                  {/* Message text */}
                  <p className="relative text-[#4a1e24] text-sm md:text-base italic leading-relaxed">
                    “{msg.message}”
                  </p>

                  <div className="absolute top-3 right-4 text-[#6b0f1e]/10 text-5xl font-serif select-none pointer-events-none transition-transform duration-500 group-hover:rotate-12 group-hover:text-[#6b0f1e]/20">
                    ”
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="flex justify-center items-center gap-3 mb-10 text-[#6b0f1e] text-sm md:text-base font-medium flex-wrap">
            <span className="text-xl animate-heartbeat">🌹</span>
            <span>From all of us, to you</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6b0f1e] opacity-50" />
            <span
              className="text-xl animate-heartbeat"
              style={{ animationDelay: "0.4s" }}
            >
              💐
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button
              onClick={onBack}
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-white border-2 border-[#6b0f1e] text-[#6b0f1e] font-semibold text-lg px-7 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/30"
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

            <button
              onClick={onNext}
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#6b0f1e] hover:bg-[#8b1e2b] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-wine-md hover:shadow-wine-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#b14b5e]/40"
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

      {/* All keyframes & custom animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap');
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-in { animation: cardIn 0.7s cubic-bezier(0.2, 0.9, 0.4, 1) both; }

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

        @keyframes spinSlow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spinSlow 8s linear infinite; }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          40% { transform: scale(0.95); }
          60% { transform: scale(1.1); }
        }
        .animate-heartbeat { animation: heartbeat 2.4s ease-in-out infinite; }

        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 5s ease infinite;
        }

        @keyframes slideDot {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-dot { animation: slideDot 2.5s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
        }

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

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
          50% { transform: translate(20px, -30px) rotate(180deg); opacity: 0.35; }
        }
        .animate-drift { animation: drift linear infinite; }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.02); }
        }
        .animate-glow-pulse { animation: glowPulse 5s ease-in-out infinite; }

        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ring-pulse { animation: ringPulse 2.5s ease-out infinite; }

        .shadow-wine-sm { box-shadow: 0 6px 14px -6px rgba(107, 15, 30, 0.15); }
        .shadow-wine-md { box-shadow: 0 12px 24px -10px rgba(107, 15, 30, 0.2); }
        .shadow-wine-lg {
          box-shadow: 0 24px 38px -12px rgba(107, 15, 30, 0.3),
                      0 6px 18px -8px rgba(107, 15, 30, 0.2);
        }

        .top-accent-bar {
          background: linear-gradient(90deg, #6b0f1e 0%, #b14b5e 50%, #f5e1e5 100%);
        }

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

export default StudentMessages;
