"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 15 + 15,
  delay: Math.random() * 10,
}));

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          className="absolute rounded-full bg-cyan-400/40 blur-[1px]"
        />
      ))}
    </div>
  );
}