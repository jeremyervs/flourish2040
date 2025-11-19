import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScenarioToggle } from "@/components/ScenarioToggle";
import { SufferingProfile } from "@/components/SufferingProfile";
import { generateScenarioPDF } from "@/utils/generateScenarioPDF";
import { toast } from "sonner";

interface FuturesSectionProps {
  activeScenario: "baseline" | "transformation";
  setActiveScenario: (scenario: "baseline" | "transformation") => void;
}

const baselineData = {
  title: "The Gilded Cage & The Algorithmic Treadmill",
  subtitle: "If we prioritize speed & competition…",
  story: [
    "By 2040, AI has become the invisible infrastructure of daily life, but rather than reducing suffering, it has stratified it. The majority live on what feels like an algorithmic treadmill: their employment determined by gig platforms, their creditworthiness scored by opaque models, their social services allocated by systems they cannot see or challenge.",
    "For most, life is marked by chronic low-grade anxiety. Work is precarious, identity is unstable, and trust in institutions has eroded. People turn to AI companions not out of preference but necessity—human connection has become a luxury commodity. Information is abundant but unreliable; distinguishing truth from synthetic content is exhausting.",
    "Meanwhile, a small elite lives in a 'gilded cage': a life optimized by AI but equally hollow. Their physical health is impeccable thanks to personalized medicine, but they're disconnected from authentic experience, their decisions pre-made by algorithms designed to maximize efficiency rather than meaning.",
  ],
  howMostLive: [
    "Algorithmic gig work with unpredictable income",
    "Opaque AI systems decide loans, benefits, and opportunities",
    "Chronic anxiety and economic instability",
    "Reliance on AI companions for emotional support",
    "Information overwhelm and trust erosion",
  ],
  whoThrives: [
    "Affluent with hyper-personalized, AI-optimized lives",
    "Access to premium healthcare and education",
    "Shielded from algorithmic chaos but emotionally isolated",
    "Detached from authentic human experience",
  ],
  sufferingLevels: [
    { type: "Physical Suffering", level: "medium" as const },
    { type: "Psychological Suffering", level: "high" as const },
    { type: "Social/Relational Suffering", level: "high" as const },
    { type: "Existential Suffering", level: "high" as const },
  ],
};

const transformationData = {
  title: "The Symbiotic Age",
  subtitle: "If we prioritize well-being & accountability…",
  story: [
    "By 2040, we've learned to design AI systems with human flourishing as the north star. A Guaranteed Income has decoupled survival from employment, creating space for a 'Purpose Economy' where people engage in care work, creativity, community building, and lifelong learning without the terror of destitution.",
    "AI has become a connector rather than a replacement. Tools help people find meaningful human relationships, not substitute for them. Algorithmic decisions are transparent, contestable, and designed with equity in mind. A global content authenticity infrastructure helps restore trust in information.",
    "Physical suffering has decreased dramatically thanks to AI-powered personalized healthcare accessible to all. Mental health services are abundant, destigmatized, and effective. While new questions about purpose and identity persist, they're met with robust social support systems designed to help people navigate transition.",
  ],
  howMostLive: [
    "Baseline economic security via Guaranteed Income",
    "Community-centered roles in the Purpose Economy",
    "AI tools that enhance human connection",
    "Transparent, accountable algorithmic systems",
    "Lifelong learning and skill development support",
  ],
  systemsLookLike: [
    "Glass-box algorithms with legal accountability",
    "Global AI safety body and protocols",
    "Content authenticity infrastructure",
    "Health data as public utility enabling equitable care",
    "Universal access to mental health services",
  ],
  sufferingLevels: [
    { type: "Physical Suffering", level: "low" as const },
    { type: "Psychological Suffering", level: "medium" as const },
    { type: "Social/Relational Suffering", level: "low" as const },
    { type: "Existential Suffering", level: "medium" as const },
  ],
};

export const FuturesSection = ({ activeScenario, setActiveScenario }: FuturesSectionProps) => {
  const data = activeScenario === "baseline" ? baselineData : transformationData;

  const handleDownloadPDF = () => {
    try {
      generateScenarioPDF(baselineData, transformationData);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate PDF. Please try again.");
      console.error("PDF generation error:", error);
    }
  };

  return (
    <section id="futures" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16">
      <div className="content-container space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Two Futures of 2040</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Same drivers. Different choices. Different suffering.
          </p>
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="mt-4 gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF Brief
          </Button>
        </div>

        <ScenarioToggle active={activeScenario} onChange={setActiveScenario} />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                activeScenario === "baseline" 
                  ? "bg-accent-risk/20 text-accent-risk border border-accent-risk/30"
                  : "bg-accent-good/20 text-accent-good border border-accent-good/30"
              }`}>
                {data.subtitle}
              </div>
              <h3 className="text-3xl font-bold mb-6">{data.title}</h3>
            </div>

            <div className="space-y-4">
              {data.story.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-elevated space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                {activeScenario === "baseline" ? "How Most People Live" : "How Most People Live"}
              </h4>
              <ul className="space-y-2">
                {(activeScenario === "baseline" ? data.howMostLive : data.howMostLive).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-accent-neutral">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                {activeScenario === "baseline" ? "Who Thrives" : "What Systems Look Like"}
              </h4>
              <ul className="space-y-2">
                {activeScenario === "baseline" 
                  ? baselineData.whoThrives.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-accent-neutral">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  : transformationData.systemsLookLike.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-accent-neutral">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                }
              </ul>
            </div>

            <div className="card-elevated space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Suffering Profile</h4>
              <SufferingProfile levels={data.sufferingLevels} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
