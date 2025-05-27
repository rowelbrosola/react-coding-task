import type { JSX } from "react";
import styles from "./styles.module.css";

interface TimerDisplayProps {
  count: number;
}

export function TimerDisplay({ count }: TimerDisplayProps): JSX.Element {
  return <div className={styles.display}>{count > 0 ? count : "Done!"}</div>;
}
