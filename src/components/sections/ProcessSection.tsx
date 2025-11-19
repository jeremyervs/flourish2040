import { Search, Target, TrendingUp, GitBranch, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Define the Domain",
    description: "Establish clear scope, key questions, and time horizons to guide the exploration.",
  },
  {
    icon: Search,
    title: "Scan the Environment",
    description: "Collect current conditions, hot topics, and weak signals through systematic scanning.",
  },
  {
    icon: TrendingUp,
    title: "Identify Drivers",
    description: "Distill key forces of change that will shape the future in multiple directions.",
  },
  {
    icon: GitBranch,
    title: "Build Scenarios",
    description: "Create plausible alternative futures showing how drivers could interact.",
  },
  {
    icon: Lightbulb,
    title: "Derive Implications",
    description: "Extract strategic choices and next steps for near, medium, and long-term horizons.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16">
      <div className="content-container space-y-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">How Foresight Helped Us See These Futures</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic method for exploring uncertainty and making better decisions
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-good via-accent-neutral to-accent-risk -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="card-elevated text-center space-y-4 h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-good/20 border border-accent-good">
                      <Icon className="text-accent-good" size={28} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-accent-neutral">Step {idx + 1}</div>
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card-elevated max-w-4xl mx-auto p-8 space-y-6 text-center">
          <h3 className="text-2xl font-semibold gradient-text">
            What if we applied this foresight lens to our other priority areas?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Foresight isn't a one-time exercise; it's an ongoing practice. By building this capability within your organization, you can systematically explore uncertainty across all your strategic priorities: from youth well-being to community resilience to health equity. The method is the same; only the domain changes.
          </p>
          <p className="text-foreground font-medium">
            The future is not predetermined. It's a choice we make together, informed by rigorous imagination.
          </p>
        </div>

        <div className="text-center pt-12 space-y-4">
          <div className="text-sm text-muted-foreground">
            A foresight project by Jeremy Ervins
          </div>
          <div className="text-xs text-muted-foreground">
            Created for Houston Foresight | 2025
          </div>
        </div>
      </div>
    </section>
  );
};
