import { useState, useEffect } from "react";

const TeacherPoetry = ({ onBack, onNext }) => {
  const poemLines = [
    "To the one who lights the path,",
    "With patience, care, and gentle grace,",
    "You taught us code, and so much more,",
    "And made our classroom a sacred place.",
    "",
    "In every line of logic written,",
    "In every bug we learned to mend,",
    "Your voice still guides us softly forward,",
    "A mentor, leader, and a friend.",
    "",
    "Miss Arain, this verse is yours —",
    "A thank you whispered, warm and true,",
    "For shaping minds and touching hearts,",
    "Today, we celebrate YOU. 💖",
  ];

  const fullText = poemLines.join("\n");

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset when component mounts
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 45); // typing speed (ms per character)

      return () => clearTimeout(timeout);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsComplete(true);
    }
  }, [currentIndex, fullText]);

  // Skip typing animation
  const handleSkip = () => {
    setDisplayedText(fullText);
    setCurrentIndex(fullText.length);
    setIsComplete(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-50 to-white p-4 font-sans">
      {/* Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-4xl shadow-[0_20px_35px_-8px_rgba(179,65,111,0.25),0_10px_15px_-6px_rgba(179,65,111,0.15)] border border-pink-100 px-8 py-12 text-center overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-700 via-pink-200 to-white"></div>

        {/* Decorative floating elements */}
        <span className="absolute top-6 left-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">📜</span>
        <span className="absolute top-20 right-8 text-2xl opacity-20 rotate-12 select-none pointer-events-none">🌸</span>
        <span className="absolute bottom-8 left-10 text-3xl opacity-20 rotate-6 select-none pointer-events-none">🌷</span>
        <span className="absolute bottom-6 right-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">✨</span>

        {/* Header icon */}
        <div className="w-20 h-20 rounded-full bg-pink-100 flex justify-center items-center mx-auto mb-5 border-4 border-white shadow-[0_12px_20px_-8px_rgba(179,65,111,0.25)]">
          <span className="text-4xl">📜</span>
        </div>

        {/* Heading */}
        <h1 className="text-rose-700 text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2">
          A Poem for You
        </h1>

        {/* Subheading */}
        <p className="text-rose-700/70 text-base md:text-lg font-medium mb-6">
          Written with love for Miss. Ayesha Arain
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-linear-to-r from-rose-700 to-pink-200 rounded-full mx-auto mb-8"></div>

        {/* Poem box with typing animation */}
        <div className="relative bg-pink-100 rounded-3xl p-6 md:p-8 text-left border-l-8 border-rose-700 shadow-[inset_0_0_0_1px_#fff,0_6px_12px_-6px_rgba(179,65,111,0.3)] min-h-85">
          <pre className="whitespace-pre-wrap text-rose-700 text-base md:text-lg italic font-medium leading-relaxed font-serif m-0">
            {displayedText}
            {/* Blinking cursor */}
            {!isComplete && (
              <span className="inline-block w-0.5 h-5 bg-rose-700 ml-0.5 animate-pulse align-middle"></span>
            )}
          </pre>

          {/* Skip button */}
          {!isComplete && (
            <button
              onClick={handleSkip}
              className="absolute bottom-3 right-4 text-rose-700/70 hover:text-rose-700 text-xs font-semibold tracking-wide underline decoration-dotted transition-colors duration-200"
            >
              Skip ⏭
            </button>
          )}

          {/* Signature (appears after typing completes) */}
          {isComplete && (
            <div className="mt-4 text-rose-700 font-semibold not-italic text-right text-base animate-[fadeIn_0.8s_ease-in]">
              — With gratitude, <br />
              Your Students 💖
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className="flex justify-center items-center gap-3 mt-8 text-rose-700 text-sm font-medium opacity-90 flex-wrap">
          <span className="text-lg">🌹</span>
          <span>Happy Teacher's Day, Miss Arain</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-700 opacity-50"></span>
          <span className="text-lg">💐</span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">
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

          {/* Next Button — disabled until typing completes */}
          <button
            onClick={onNext}
            disabled={!isComplete}
            className={`group inline-flex items-center gap-2 font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-200 ${
              isComplete
                ? "bg-rose-700 hover:bg-rose-800 text-white shadow-[0_10px_20px_-8px_rgba(179,65,111,0.6)] hover:shadow-[0_14px_24px_-8px_rgba(179,65,111,0.75)] hover:-translate-y-0.5 active:translate-y-0"
                : "bg-rose-700/30 text-white/70 cursor-not-allowed"
            }`}
          >
            <span>Next</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom fadeIn keyframe (Tailwind JIT will inline this) */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default TeacherPoetry;