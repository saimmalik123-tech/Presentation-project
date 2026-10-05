import { useState } from "react";
import TeacherProfile from "./components/TeacherProfile";
import TeacherMessage from "./components/TeacherMessage";
import TeacherQuotes from "./components/TeacherQuotes";
import TeacherPoetry from "./components/TeacherPoetry";
import StudentMessages from "./components/StudentMessages";
import ThankYouWall from "./components/ThankYouWall";

const App = () => {
  const [page, setPage] = useState("profile");

  return (
    <>
      {page === "profile" && (
        <TeacherProfile onNext={() => setPage("message")} />
      )}
      {page === "message" && (
        <TeacherMessage
          onBack={() => setPage("profile")}
          onNext={() => setPage("quotes")}
        />
      )}
      {page === "quotes" && (
        <TeacherQuotes
          onBack={() => setPage("message")}
          onNext={() => setPage("poetry")}
        />
      )}
      {page === "poetry" && (
        <TeacherPoetry
          onBack={() => setPage("quotes")}
          onNext={() => setPage("students")}
        />
      )}
      {page === "students" && (
        <StudentMessages
          onBack={() => setPage("poetry")}
          onNext={() => setPage("thanks")}
        />
      )}
      {page === "thanks" && (
        <ThankYouWall
          onBack={() => setPage("students")}
          onRestart={() => setPage("profile")}
        />
      )}
    </>
  );
};

export default App;