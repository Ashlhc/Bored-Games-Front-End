import React, { useState } from 'react';

const Timer = ({ timeLeft, timeUp }) => {
  timeLeft = 30;
  const timeInterval = setInterval(function () {
      if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
      } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
      } else {
      clearInterval(timeInterval);
      // timer.textContent = "Out of time!"
      // setterWin()
      }
  }, 1000);

  return (
    <div>
      {timeLeft > 0 ? `${timeLeft} seconds remaining` : 'Out of time!'}
    </div>
  );
}

export default Timer;