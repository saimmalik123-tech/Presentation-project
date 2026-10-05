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

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-50 to-white p-4 font-sans">
      {/* Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-4xl shadow-[0_20px_35px_-8px_rgba(179,65,111,0.25),0_10px_15px_-6px_rgba(179,65,111,0.15)] border border-pink-100 px-6 md:px-10 py-12 text-center overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-700 via-pink-200 to-white"></div>

        {/* Decorative floating elements */}
        <span className="absolute top-6 left-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">💬</span>
        <span className="absolute top-20 right-8 text-2xl opacity-20 rotate-12 select-none pointer-events-none">🌸</span>
        <span className="absolute bottom-8 left-10 text-3xl opacity-20 rotate-6 select-none pointer-events-none">🌷</span>
        <span className="absolute bottom-6 right-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">✨</span>

        {/* Header icon */}
        <div className="w-20 h-20 rounded-full bg-pink-100 flex justify-center items-center mx-auto mb-5 border-4 border-white shadow-[0_12px_20px_-8px_rgba(179,65,111,0.25)]">
          <span className="text-4xl">💬</span>
        </div>

        {/* Heading */}
        <h1 className="text-rose-700 text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2">
          Words of Wisdom
        </h1>

        {/* Subheading */}
        <p className="text-rose-700/70 text-base md:text-lg font-medium mb-6">
          Beautiful quotes celebrating teachers like Miss. Ayesha Arain
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-linear-to-r from-rose-700 to-pink-200 rounded-full mx-auto mb-8"></div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="group relative bg-pink-100 rounded-3xl p-5 md:p-6 text-left border-l-8 border-rose-700 shadow-[inset_0_0_0_1px_#fff,0_6px_12px_-6px_rgba(179,65,111,0.3)] hover:shadow-[0_10px_20px_-8px_rgba(179,65,111,0.5)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {/* Quote emoji */}
              <div className="text-2xl mb-2">{quote.emoji}</div>

              {/* Quote text */}
              <p className="text-rose-700 text-base md:text-lg italic font-medium leading-relaxed">
                “{quote.text}”
              </p>

              {/* Author */}
              <div className="mt-3 text-rose-700/80 font-semibold not-italic text-sm text-right">
                — {quote.author}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 text-rose-700/20 text-3xl font-serif select-none pointer-events-none">
                ”
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="flex justify-center items-center gap-3 mb-8 text-rose-700 text-sm font-medium opacity-90 flex-wrap">
          <span className="text-lg">🌹</span>
          <span>Every quote here is a tribute to you</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-700 opacity-50"></span>
          <span className="text-lg">💐</span>
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

          {/* Next Button */}
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-[0_10px_20px_-8px_rgba(179,65,111,0.6)] hover:shadow-[0_14px_24px_-8px_rgba(179,65,111,0.75)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-pink-200"
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
    </div>
  );
};

export default TeacherQuotes;