import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, timeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId); // This represents the cleanup function
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      timeUp();
    }
  }, [timeLeft, timeUp]);

  return (
    <div>
      {timeLeft > 0 ? `${timeLeft} seconds remaining` : 'Out of time!'}
    </div>
  );
}

export default Timer;
