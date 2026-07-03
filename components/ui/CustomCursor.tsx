"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl"
      />

      {/* Ring */}

      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full border border-cyan-300"
      />

      {/* Dot */}

      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-cyan-300"
      />
    </>
  );
}