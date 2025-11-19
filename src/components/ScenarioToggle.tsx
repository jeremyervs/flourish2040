import { motion } from "framer-motion";

interface ScenarioToggleProps {
  active: "baseline" | "transformation";
  onChange: (scenario: "baseline" | "transformation") => void;
}

export const ScenarioToggle = ({ active, onChange }: ScenarioToggleProps) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative inline-flex rounded-full bg-card/50 backdrop-blur-xl p-1.5 border-2 border-accent-good/20 shadow-2xl">
        <motion.div
          className="absolute inset-y-1.5 rounded-full"
          style={{
            width: "calc(50% - 6px)",
            background: active === "baseline" 
              ? "linear-gradient(135deg, hsl(var(--accent-risk)) 0%, hsl(var(--accent-risk-bright)) 100%)"
              : "linear-gradient(135deg, hsl(var(--accent-good)) 0%, hsl(var(--accent-good-bright)) 100%)",
            boxShadow: active === "baseline" ? "var(--glow-risk)" : "var(--glow-good)",
          }}
          animate={{
            left: active === "baseline" ? "6px" : "calc(50% + 0px)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
        
        <button
          onClick={() => onChange("baseline")}
          className={`relative z-10 w-[160px] sm:w-[200px] md:w-[220px] py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 text-center ${
            active === "baseline" ? "text-background scale-105" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Baseline World
        </button>
        
        <button
          onClick={() => onChange("transformation")}
          className={`relative z-10 w-[160px] sm:w-[200px] md:w-[220px] py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 text-center ${
            active === "transformation" ? "text-background scale-105" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Transformation World
        </button>
      </div>
    </div>
  );
};
