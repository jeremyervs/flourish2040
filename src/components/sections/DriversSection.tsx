import { DriverCard } from "@/components/DriverCard";

const drivers = [
  {
    title: "AI-Driven Labor Market Transformation",
    description: "Automation and AI reshape work across all sectors, from creative fields to cognitive labor, displacing millions while creating new roles.",
    evidence: ["300M jobs exposed", "40% task automation", "Gig economy growth"],
    isNegative: true,
  },
  {
    title: "The Automation of High-Stakes Decisions",
    description: "AI systems increasingly make critical decisions about loans, benefits, healthcare, and criminal justice, often with opaque logic.",
    evidence: ["Algorithmic bias", "Black-box systems", "Accountability gaps"],
    isNegative: true,
  },
  {
    title: "AI's Dual Impact on Human Connection",
    description: "AI enables new forms of connection while simultaneously creating isolation through synthetic relationships and reduced spontaneous interaction.",
    evidence: ["AI companions growing", "Social deficit at work", "Parasocial relationships"],
    isNegative: false,
  },
  {
    title: "The Erosion of Information Integrity",
    description: "Deepfakes, synthetic content, and AI-generated misinformation undermine trust in media, institutions, and shared reality.",
    evidence: ["Unreliable AI sites x10", "Deepfake detection race", "Truth decay"],
    isNegative: true,
  },
  {
    title: "The Geopolitical Race for AI Supremacy",
    description: "Nations compete for AI dominance, creating tensions between innovation speed and safety, with profound implications for global governance.",
    evidence: ["China vs US race", "Export controls", "National security AI"],
    isNegative: true,
  },
  {
    title: "The Dual Mandate of AI in Healthcare",
    description: "AI promises to reduce physical suffering through personalized medicine while raising concerns about data privacy, equity, and algorithmic bias.",
    evidence: ["Digital twins emerging", "90% early detection", "Equity concerns"],
    isNegative: false,
  },
];

export const DriversSection = () => {
  return (
    <section id="drivers" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16 bg-[hsl(var(--bg-section-alt))]">
      <div className="content-container space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Six Forces Re-shaping Suffering & Well-being</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From our scanning, we distilled six "drivers" that push the future in different directions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, idx) => (
            <DriverCard key={idx} {...driver} />
          ))}
        </div>

        <div className="card-elevated max-w-4xl mx-auto p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">The Engine Behind Two Futures</h3>
          <p className="text-muted-foreground">
            These six drivers interact in complex ways. Depending on how we respond to them (through policy, innovation, and cultural choices), they can produce vastly different outcomes for human suffering and well-being by 2040.
          </p>
        </div>
      </div>
    </section>
  );
};
