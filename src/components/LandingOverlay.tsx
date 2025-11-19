import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface LandingOverlayProps {
  onEnter: () => void;
}

export const LandingOverlay = ({ onEnter }: LandingOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while overlay is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(onEnter, 600);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in overflow-y-auto">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent-good/5 via-transparent to-accent-risk/5" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent-good) / 0.15) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, hsl(var(--accent-risk) / 0.12) 0%, transparent 50%)`
      }} />
      
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-accent-good/40 bg-accent-good/5 backdrop-blur-sm text-sm font-semibold text-accent-good mb-4 animate-scale-in glow-soft">
          <div className="w-2 h-2 rounded-full bg-accent-good animate-pulse" />
          Foresight Microsite
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-pulse-glow">
          The Future of Suffering
          <span className="block mt-4 gradient-text text-5xl md:text-7xl">
            Redefining Well-being in a Post-AI World
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          A guided journey to 2040 and back
        </p>

        <Button
          size="lg"
          onClick={handleEnter}
          className="group mt-12 bg-gradient-to-r from-accent-good to-accent-good-bright hover:from-accent-good-bright hover:to-accent-good text-background font-bold px-12 py-7 text-xl rounded-full transition-all duration-500 hover:scale-110 glow-good shadow-2xl border-2 border-accent-good/20"
        >
          Enter the Future
          <ChevronDown className="ml-3 w-6 h-6 group-hover:translate-y-2 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};
