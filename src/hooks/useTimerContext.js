import React from 'react';

const timerContext = React.createContext();

export function useTimerContext() {
  return React.useContext(timerContext);
}

export default timerContext;