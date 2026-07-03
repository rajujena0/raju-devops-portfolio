interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}