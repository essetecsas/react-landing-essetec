/**
 * Custom hook, return true if prefers-reduced-motion: ON
 * @returns boolean
 */
export function useReducedMotion(): boolean {
  let reduced = false;

  if (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion)").matches
  ) {
    reduced = true;
  }

  return reduced;
}
