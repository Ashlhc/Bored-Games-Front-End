import React, { useState, useReducer, useRef, useEffect } from "react";
import useGameState from "../hooks/useGameState";

const Timer = () => {
  const { endGame } = useGameState();
  const [state, dispatch] = useReducer(reducer, {
    isRunning: false,
    time: 0,
  });
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  useEffect(() => {
    if (state.time < 1) {
      endGame();
      dispatch({ type: "stop" });
    }
  }, [state.time]);

  return (
    <div>
      {!state.isRunning && (
        <div>
          <button onClick={() => dispatch({ type: "start" })}>
            Start Game
          </button>
        </div>
      )}
      {`time remaining: ${state.time} second${
        state.time === 1 ? "s" : ""
      } remaining`}
    </div>
  );
};

export default Timer;

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true, time: 30 };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 30 };
    case "tick":
      return { ...state, time: state.time - 1 };
    default:
      throw new Error();
  }
}
