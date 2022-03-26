import React, { useState, useRef } from "react";

function ManualCounter() {
  const [count, setCount] = useState(0);
  const intervalId = useRef<number | null>(null);

  const startCounter = () => {
    intervalId.current = window.setInterval(
      () => setCount((count) => count + 1),
      1000
    );
  };

  const stopCounter = () => {
    if (intervalId.current) {
      window.clearInterval(intervalId.current);
    }
  };

  return (
    <>
      <p>자동 카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
}