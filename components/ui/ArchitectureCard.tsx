"use client";

interface Props {
  children: React.ReactNode;
}

export default function ArchitectureCard({
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {children}
    </div>
  );
}