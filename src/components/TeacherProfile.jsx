
const TeacherProfile = ({ onNext }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-50 to-white p-4 font-sans">
      {/* Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-4xl shadow-[0_20px_35px_-8px_rgba(179,65,111,0.25),0_10px_15px_-6px_rgba(179,65,111,0.15)] border border-pink-100 px-8 py-12 text-center overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-700 via-pink-200 to-white"></div>

        {/* Decorative floating elements */}
        <span className="absolute top-5 right-8 text-3xl opacity-20 rotate-12 select-none pointer-events-none">
          🌸
        </span>
        <span className="absolute top-16 right-5 text-2xl opacity-20 -rotate-12 select-none pointer-events-none">
          ✨
        </span>
        <span className="absolute top-8 left-7 text-3xl opacity-20 rotate-25 select-none pointer-events-none">
          🌷
        </span>
        <span className="absolute bottom-5 right-10 text-4xl opacity-20 -rotate-20 select-none pointer-events-none">
          🌼
        </span>

        {/* Avatar circle with initials */}
        <div className="w-32 h-32 rounded-full bg-pink-100 flex justify-center items-center mx-auto mb-6 border-4 border-white shadow-[0_12px_20px_-8px_rgba(179,65,111,0.25)]">
          <span className="text-rose-700 text-6xl font-light tracking-wider">
            AA
          </span>
        </div>

        {/* Teacher name */}
        <h1 className="text-rose-700 text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-2 mb-1">
          Miss. Ayesha Arain
        </h1>

        {/* Department badge */}
        <div className="inline-block bg-pink-100 text-rose-700 px-6 py-2 rounded-full text-lg font-semibold tracking-wide mt-2 border border-rose-700/10">
          Software Engineering
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-linear-to-r from-rose-700 to-pink-200 rounded-full mx-auto my-8"></div>

        {/* Quote box */}
        <div className="bg-pink-100 rounded-3xl p-6 md:p-7 text-left text-rose-700 text-lg md:text-xl italic font-medium leading-relaxed border-l-8 border-rose-700 shadow-[inset_0_0_0_1px_#fff,0_6px_12px_-6px_rgba(179,65,111,0.3)]">
          “A teacher plants the seeds of knowledge that grow forever.”
          <div className="mt-3 font-semibold not-italic text-right">
            — Thank you, Miss Arain
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-center">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center gap-4 mt-10 text-rose-700 text-base font-medium opacity-90 flex-wrap">
          <span className="text-xl">💖</span>
          <span>Happy Teacher's Day</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-700 opacity-50"></span>
          <span className="text-xl">🌹</span>
          <span>With gratitude</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
