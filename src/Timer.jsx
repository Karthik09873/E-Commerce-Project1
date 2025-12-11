// Timer.js
import { useEffect, useState } from "react";


function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); // 600 seconds = 10 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds → MM:SS
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="timer-box">
      <p>⏳ Offer valid for: {mins}:{secs}</p>
    </div>
  );
}

export default Timer;
