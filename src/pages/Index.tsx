import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { LandingOverlay } from "@/components/LandingOverlay";
import { StartSection } from "@/components/sections/StartSection";
import { WhySection } from "@/components/sections/WhySection";
import { SignalsSection } from "@/components/sections/SignalsSection";
import { DriversSection } from "@/components/sections/DriversSection";
import { FuturesSection } from "@/components/sections/FuturesSection";
import { NextStepsSection } from "@/components/sections/NextStepsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { NewsTicker } from "@/components/NewsTicker";

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [activeScenario, setActiveScenario] = useState<"baseline" | "transformation">("baseline");

  return (
    <>
      {showOverlay && <LandingOverlay onEnter={() => setShowOverlay(false)} />}
      {!showOverlay && (
        <>
          <NavBar />
          <div className="pt-16 pb-12">
            <StartSection />
            <WhySection />
            <SignalsSection />
            <DriversSection />
            <FuturesSection 
              activeScenario={activeScenario}
              setActiveScenario={setActiveScenario}
            />
            <NextStepsSection />
            <ProcessSection />
          </div>
          <NewsTicker activeScenario={activeScenario} />
        </>
      )}
    </>
  );
};

export default Index;
