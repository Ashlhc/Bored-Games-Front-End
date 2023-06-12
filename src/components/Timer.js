import React, { useState, useReducer, useRef, useEffect } from "react";

const Timer = ({onLoseGame}) => {
  const [state, dispatch] = useReducer(reducer, {
    isRunning: false,
    time: 30,
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
      onLoseGame();
      dispatch({ type: "stop" });
    }
  }, [state.time]);

  useEffect(() => {
    dispatch({type: 'start'})
  },[])

  return (
    <div className="timer">
      {`time remaining: ${state.time}`}
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
      return { isRunning: false, time: 3 };
    case "tick":
      return { ...state, time: state.time - 1 };
    default:
      throw new Error();
  }
}