"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let animationFrame = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let startTime: number | null = null;

        // Reset every time it enters the viewport
        setValue(0);

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min(
            (timestamp - startTime) / duration,
            1
          );

          const eased = easeOutCubic(progress);

          setValue(eased * end);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(animate);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, end]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}