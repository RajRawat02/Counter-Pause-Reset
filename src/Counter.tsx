import React, { useEffect, useRef, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);

  const timer = useRef<any>();

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const startTimer = () => {
    timer.current = setInterval(() => {
      return setCounter((x) => x + 1);
    }, 1000);

    if (pause) setPause(false);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    setPause(true);
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    setCounter(0);
    setPause(true);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={pause ? startTimer : stopTimer}>
        {pause ? 'start' : 'stop'}
      </button>
      <div>{counter}</div>
      <button onClick={resetTimer}>Reset Counter</button>
    </>
  );
}
