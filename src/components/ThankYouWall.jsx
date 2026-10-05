import { useEffect, useState } from "react";

const ThankYouWall = ({ onBack, onRestart }) => {
  const students = [
    { name: "Saim", rollNo: "139",},
    { name: "Huamil", rollNo: "163",},
    { name: "Hussain", rollNo: "49", },
  ];

  // Floating hearts animation
  const [hearts, setHearts] = useState([]);

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHearts(generated);
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-50 to-white p-4 font-sans overflow-hidden">
      {/* Floating hearts background animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="absolute -bottom-12.5 opacity-40"
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

      {/* Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-4xl shadow-[0_20px_35px_-8px_rgba(179,65,111,0.25),0_10px_15px_-6px_rgba(179,65,111,0.15)] border border-pink-100 px-6 md:px-10 py-12 text-center overflow-hidden z-10">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-700 via-pink-200 to-white"></div>

        {/* Decorative floating elements */}
        <span className="absolute top-6 left-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">🎉</span>
        <span className="absolute top-20 right-8 text-2xl opacity-20 rotate-12 select-none pointer-events-none">🌸</span>
        <span className="absolute bottom-8 left-10 text-3xl opacity-20 rotate-6 select-none pointer-events-none">🌷</span>
        <span className="absolute bottom-6 right-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">✨</span>

        {/* Header icon */}
        <div className="w-24 h-24 rounded-full bg-pink-100 flex justify-center items-center mx-auto mb-5 border-4 border-white shadow-[0_12px_20px_-8px_rgba(179,65,111,0.25)] animate-pulse-slow">
          <span className="text-5xl">💐</span>
        </div>

        {/* Heading */}
        <h1 className="text-rose-700 text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
          Thank You, Miss. Ayesha Arain
        </h1>

        {/* Subheading */}
        <p className="text-rose-700/80 text-base md:text-lg font-medium mb-6 max-w-xl mx-auto leading-relaxed">
          For your patience, your passion, and the countless ways you've
          shaped us into the engineers we're becoming — we are forever grateful.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-linear-to-r from-rose-700 to-pink-200 rounded-full mx-auto mb-8"></div>

        {/* Message box */}
        <div className="bg-pink-100 rounded-3xl p-6 md:p-8 text-left border-l-8 border-rose-700 shadow-[inset_0_0_0_1px_#fff,0_6px_12px_-6px_rgba(179,65,111,0.3)] mb-8">
          <p className="text-rose-700 text-base md:text-lg italic font-medium leading-relaxed">
            “You didn't just teach us Software Engineering — you taught us
            how to think, how to fail, how to rise, and how to build the
            future with our own hands. Every line of code we write carries
            a piece of your guidance.”
          </p>
          <div className="mt-4 text-rose-700 font-semibold not-italic text-right text-base">
            — With love, <br />
            Your Students 💖
          </div>
        </div>

        {/* Thank You Wall — student names */}
        <div className="mb-8">
          <h2 className="text-rose-700 text-xl md:text-2xl font-bold tracking-tight mb-5">
            🎓 From the Wall of Gratitude 🎓
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {students.map((student, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-rose-700/20 hover:border-rose-700 rounded-2xl px-5 py-4 shadow-[0_6px_12px_-6px_rgba(179,65,111,0.3)] hover:shadow-[0_12px_22px_-8px_rgba(179,65,111,0.5)] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-default"
              >
                <div className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-300">
                  {student.emoji}
                </div>
                <div className="text-rose-700 font-bold text-base whitespace-nowrap">
                  {student.name}
                </div>
                <div className="text-rose-700/60 text-xs font-medium">
                  Roll No: {student.rollNo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature line */}
        <div className="flex justify-center items-center gap-3 mb-8 text-rose-700 text-sm md:text-base font-semibold flex-wrap">
          <span className="text-lg">🌹</span>
          <span>Happy Teacher's Day, Miss Ayesha Arain</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-700 opacity-50"></span>
          <span className="text-lg">💖</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 bg-white border-2 border-rose-700 text-rose-700 hover:bg-pink-100 font-semibold text-lg px-7 py-3 rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back</span>
          </button>

          {/* Restart Button */}
          <button
            onClick={onRestart}
            className="group inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-[0_10px_20px_-8px_rgba(179,65,111,0.6)] hover:shadow-[0_14px_24px_-8px_rgba(179,65,111,0.75)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-pink-200"
          >
            <svg
              className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-500"
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
            <span>Start Over</span>
          </button>
        </div>
      </div>

      {/* Custom keyframes */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-110vh) rotate(360deg);
              opacity: 0;
            }
          }
          @keyframes pulseSlow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 12px 20px -8px rgba(179,65,111,0.25);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 16px 28px -8px rgba(179,65,111,0.4);
            }
          }
          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ThankYouWall;