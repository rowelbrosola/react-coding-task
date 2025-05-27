import type { JSX } from "react";
import styles from "./styles.module.css";

interface TimerControlsProps {
  onStart: () => void;
  onReset: () => void;
  isRunning: boolean;
  count: number;
}

export function TimerControls({
  onStart,
  onReset,
  isRunning,
  count,
}: TimerControlsProps): JSX.Element {
  return (
    <div className={styles.buttons}>
      <button
        onClick={onStart}
        disabled={isRunning || count === 0}
        className={styles.button}
      >
        Start
      </button>
      <button onClick={onReset} className={styles.button}>
        Reset
      </button>
    </div>
  );
}
