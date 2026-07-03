interface Props {
  children: React.ReactNode;
}

export default function ArchitectureLabel({
  children,
}: Props) {
  return (
    <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-center text-sm font-medium text-cyan-300">
      {children}
    </div>
  );
}