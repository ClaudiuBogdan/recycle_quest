import { useEffect, useState } from "react";

export function useValidationAnimation() {
  const [state, setState] = useState<ValidationState>("idle");

  const color = {
    idle: "bg-gradient-to-r from-yellow-500 via-black-200 to-yellow-500",
    missed: "bg-gradient-to-r from-red-500 via-black-200 to-red-500",
    valid: "bg-gradient-to-r from-green-500 via-black-200 to-green-500",
  }[state];

  useEffect(() => {
    const timeoutId = setTimeout(() => setState("idle"), 300);
    return () => clearTimeout(timeoutId);
  });

  return { state, setState, color };
}

type ValidationState = "idle" | "missed" | "valid";
