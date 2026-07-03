"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const COUNT = 12;

export default function MouseTrail() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {Array.from({ length: COUNT }).map((_, i) => {
        const sx = useSpring(x, {
          stiffness: 200 - i * 10,
          damping: 25,
        });

        const sy = useSpring(y, {
          stiffness: 200 - i * 10,
          damping: 25,
        });

        return (
          <motion.div
            key={i}
            style={{
              x: sx,
              y: sy,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9998]"
          >
            <div
              className="rounded-full bg-cyan-400"
              style={{
                width: 12 - i * 0.6,
                height: 12 - i * 0.6,
                opacity: (COUNT - i) / COUNT / 2,
                transform: "translate(-50%,-50%)",
                filter: "blur(1px)",
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
}