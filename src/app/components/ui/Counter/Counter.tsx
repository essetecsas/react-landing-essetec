"use client";
import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { FC, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration: number;
  animationOptions?: KeyframeOptions;
};

export const Counter: FC<AnimatedCounterProps> = ({
  from,
  to,
  duration,
  animationOptions,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element || !isInView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [ref, isInView, from, to]);

  return <span ref={ref} />;
};
