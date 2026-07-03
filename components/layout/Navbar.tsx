"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setScrolled(window.scrollY > 20);

      // Active section
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "architecture",
        "github",
        "contact",
      ];

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
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
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Raju<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive =
              active === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume/Raju_Jena_Final.pdf"
          download
          className="hidden items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400 md:flex"
        >
          <Download size={18} />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col p-6">
            {navItems.map((item) => {
              const isActive =
                active === item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-3 transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

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