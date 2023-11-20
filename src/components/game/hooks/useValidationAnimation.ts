import { useEffect, useState } from "react";

export function useValidationAnimation() {
  const [state, setState] = useState<ValidationState>("idle");

  const color = {
    idle: "bg-yellow-200",
    missed: "bg-red-400",
    valid: "bg-green-400",
  }[state];

  useEffect(() => {
    const timeoutId = setTimeout(() => setState("idle"), 300);
    return () => clearTimeout(timeoutId);
  });

  return { state, setState, color };
}

type ValidationState = "idle" | "missed" | "valid";
