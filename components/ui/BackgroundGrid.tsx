export default function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}