import { useEffect, useState, useRef, type JSX } from "react";
import styles from "./styles.module.css";
import { TimerDisplay } from "@/components/CountdownTimer/TimerDisplay";
import { TimerControls } from "@/components/CountdownTimer/TimerControls";

export default function CountdownTimer(): JSX.Element {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startCountdown = () => {
    if (isRunning || count === 0) return;
    setIsRunning(true);
  };

  const resetCountdown = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setCount(10);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = window.setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          if (intervalRef.current !== null) clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className={styles.container}>
      <h2>Countdown Timer</h2>
      <TimerDisplay count={count} />
      <TimerControls
        onStart={startCountdown}
        onReset={resetCountdown}
        isRunning={isRunning}
        count={count}
      />
    </div>
  );
}
