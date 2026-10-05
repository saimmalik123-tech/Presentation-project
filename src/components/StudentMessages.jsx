const StudentMessages = ({ onBack, onNext }) => {
  const messages = [
    {
      name: "Saim",
      rollNo: "139",
      initials: "S",
      message:
        "Miss. Ayesha Arain, you made Software Engineering feel less like a subject and more like a superpower. Thank you for believing in me when I didn't believe in myself.",
    },
    {
      name: "Huamil",
      rollNo: "163",
      initials: "H",
      message:
        "Your lectures were never just about code — they were about thinking, problem-solving, and never giving up. You're the best teacher I've ever had.",
    },
    {
      name: "Hussain",
      rollNo: "49",
      initials: "H",
      message:
        "Every time I debugged my code successfully, I remembered your voice guiding me. You taught us not just how to code, but how to think like engineers.",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-50 to-white p-4 font-sans">
      {/* Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-4xl shadow-[0_20px_35px_-8px_rgba(179,65,111,0.25),0_10px_15px_-6px_rgba(179,65,111,0.15)] border border-pink-100 px-6 md:px-10 py-12 text-center overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-700 via-pink-200 to-white"></div>

        {/* Decorative floating elements */}
        <span className="absolute top-6 left-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">💌</span>
        <span className="absolute top-20 right-8 text-2xl opacity-20 rotate-12 select-none pointer-events-none">🌸</span>
        <span className="absolute bottom-8 left-10 text-3xl opacity-20 rotate-6 select-none pointer-events-none">🌷</span>
        <span className="absolute bottom-6 right-8 text-3xl opacity-20 -rotate-12 select-none pointer-events-none">✨</span>

        {/* Header icon */}
        <div className="w-20 h-20 rounded-full bg-pink-100 flex justify-center items-center mx-auto mb-5 border-4 border-white shadow-[0_12px_20px_-8px_rgba(179,65,111,0.25)]">
          <span className="text-4xl">💌</span>
        </div>

        {/* Heading */}
        <h1 className="text-rose-700 text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-2">
          Messages from Your Students
        </h1>

        {/* Subheading */}
        <p className="text-rose-700/70 text-base md:text-lg font-medium mb-6">
          Heartfelt words for Miss. Ayesha Arain — Software Engineering
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-linear-to-r from-rose-700 to-pink-200 rounded-full mx-auto mb-8"></div>

        {/* Message Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="group relative bg-pink-100 rounded-3xl p-5 md:p-6 text-left border-l-8 border-rose-700 shadow-[inset_0_0_0_1px_#fff,0_6px_12px_-6px_rgba(179,65,111,0.3)] hover:shadow-[0_12px_22px_-8px_rgba(179,65,111,0.5)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {/* Student header */}
              <div className="flex items-center gap-3 mb-3">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center border-2 border-rose-700/20 shadow-[0_4px_8px_-2px_rgba(179,65,111,0.25)] shrink-0">
                  <span className="text-rose-700 text-sm font-bold tracking-wide">
                    {msg.initials}
                  </span>
                </div>

                {/* Name + Roll No */}
                <div className="flex-1 min-w-0">
                  <div className="text-rose-700 font-bold text-base truncate">
                    {msg.name}
                  </div>
                  <div className="text-rose-700/60 text-xs font-medium">
                    Roll No: {msg.rollNo} · Software Engineering
                  </div>
                </div>

                {/* Emoji */}
                <div className="text-2xl shrink-0">{msg.emoji}</div>
              </div>

              {/* Divider inside card */}
              <div className="w-full h-px bg-rose-700/10 mb-3"></div>

              {/* Message text */}
              <p className="text-rose-700/90 text-sm md:text-base italic leading-relaxed">
                “{msg.message}”
              </p>

              {/* Decorative quote mark */}
              <div className="absolute top-3 right-3 text-rose-700/10 text-4xl font-serif select-none pointer-events-none">
                ”
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="flex justify-center items-center gap-3 mb-8 text-rose-700 text-sm font-medium opacity-90 flex-wrap">
          <span className="text-lg">🌹</span>
          <span>From all of us, to you</span>
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

export default StudentMessages;