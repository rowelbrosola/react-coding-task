import type { JSX } from "react";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({
  message,
}: ErrorMessageProps): JSX.Element {
  return <p style={{ color: "red" }}>Error: {message}</p>;
}
