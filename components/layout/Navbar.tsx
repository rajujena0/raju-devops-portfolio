"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a href="#" className="text-2xl font-bold text-white">
          Raju<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume/Raju_Jena_Final.pdf"
          download
          className="hidden items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 md:flex"
        >
          <Download size={18} />
          Resume
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col p-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-slate-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume/Raju_Jena_Final.pdf"
              download
              className="mt-4 rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-slate-950"
            >
              Download Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
}