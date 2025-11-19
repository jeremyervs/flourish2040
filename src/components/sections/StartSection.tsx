import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const StartSection = () => {
  return (
    <section id="start" className="relative min-h-screen flex items-center justify-center py-32">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />

      <div className="content-container relative z-10 grid lg:grid-cols-2 gap-16 items-center px-6">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            By 2040, AI will be everywhere.
            <span className="block mt-6 gradient-text animate-pulse-glow">
              The question is: what happens to suffering?
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            This project explores how the universal integration of AI will reshape human suffering and well-being over the next 15 years. We move beyond traditional definitions to investigate emerging existential, psychological, and social challenges.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-foreground text-lg font-medium">Explore two distinct worlds of 2040</p>
            </div>
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-foreground text-lg font-medium">Discover the six forces driving these futures</p>
            </div>
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
              <CheckCircle className="text-accent-good mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-foreground text-lg font-medium">Decide how we respond today</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 animate-slide-up">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Your Journey</h3>
          {[
            { num: "01", label: "Why This Project" },
            { num: "02", label: "Signals Today" },
            { num: "03", label: "Six Drivers" },
            { num: "04", label: "Two Futures (2040)" },
            { num: "05", label: "What We Do Next" },
            { num: "06", label: "About Foresight" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 p-5 rounded-2xl bg-card/60 backdrop-blur-sm border-2 border-accent-good/20 hover:border-accent-good/50 hover:bg-card hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div 
                className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform"
              >
                {step.num}
              </div>
              <div className="text-foreground font-semibold text-lg group-hover:text-accent-good-bright transition-colors">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
