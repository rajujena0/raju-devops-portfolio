import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
}

export default function GlowCard({ children }: GlowCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}