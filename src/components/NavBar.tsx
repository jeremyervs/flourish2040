import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "start", label: "Start" },
  { id: "why", label: "Why This Project" },
  { id: "signals", label: "Signals Today" },
  { id: "drivers", label: "Six Drivers" },
  { id: "futures", label: "Two Futures (2040)" },
  { id: "next", label: "What We Do Next" },
  { id: "process", label: "About Foresight" },
];

export const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / scrollHeight) * 100;
      setProgress(progressPercent);

      // Update active section based on scroll position
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find((el, idx) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom > 200;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-accent-good/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="font-bold text-xl gradient-text tracking-tight">The Future of Suffering</div>
        
        <div className="hidden lg:flex items-center gap-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`transition-all duration-300 rounded-xl ${
                activeSection === section.id
                  ? "text-accent-good bg-accent-good/10 border border-accent-good/30 glow-soft"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>

        <div className="px-4 py-2 rounded-full border-2 border-accent-good/30 bg-accent-good/5 text-xs font-bold text-accent-good backdrop-blur-sm">
          Foresight Microsite
        </div>
      </div>
      
      <div
        className="h-1 bg-gradient-to-r from-accent-good via-accent-neutral to-accent-risk transition-all duration-300 shadow-lg"
        style={{ width: `${progress}%`, boxShadow: '0 0 20px hsl(var(--accent-good) / 0.5)' }}
      />
    </nav>
  );
};
