export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Raju Jena. All rights reserved.
        </p>

        <p>
          Built with ❤️ using Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}