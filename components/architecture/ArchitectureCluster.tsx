interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ArchitectureCluster({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-slate-950/70 p-8">
      <h3 className="mb-8 text-center text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      {children}
    </div>
  );
}