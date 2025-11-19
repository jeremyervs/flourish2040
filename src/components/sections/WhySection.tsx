export const WhySection = () => {
  return (
    <section id="why" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16 bg-[hsl(var(--bg-section-alt))]">
      <div className="content-container space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Why This Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding what we asked and why it matters for a culture of health
          </p>
        </div>

        <div className="space-y-8">
          <div className="card-elevated space-y-4 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-accent-good">The Question We Asked</h3>
            <p className="text-lg text-foreground leading-relaxed">
              "How might the universal integration of AI reshape the landscape of human suffering and well-being over the next 15 years?"
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium border border-border">
                Type: Exploratory
              </span>
              <span className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium border border-border">
                Geographic Scope: United States
              </span>
              <span className="px-3 py-1.5 rounded-full bg-secondary text-sm font-medium border border-border">
                Time Horizon: H1 (2025–2032) · H2 (2032–2040) · H3 (2040+)
              </span>
            </div>
          </div>

          <div className="card-elevated space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-accent-neutral">Why This Matters for a 'Culture of Health'</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              This project explores the future of human suffering in a world where Artificial Intelligence is an inescapable, ubiquitous variable. It moves beyond traditional definitions of suffering (disease, scarcity, physical pain) to investigate the emerging existential, psychological, and social challenges of the coming era.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              AI will act as both a potential solution to old problems and a catalyst for new, unprecedented forms of human distress. We're seeing the rise of algorithmic anxiety, widespread crises of purpose, and deep social isolation, all symptoms of a world changing faster than our capacity to adapt.
            </p>

            <div className="p-6 rounded-xl bg-accent-good/10 border border-accent-good/20">
              <p className="text-foreground italic text-lg">
                "What if reducing suffering itself became the definition of progress?"
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              For a foundation focused on building a Culture of Health, this foresight provides both a moral and strategic imperative: to shift from merely patching the holes AI creates in our social fabric to proactively guiding innovation toward a future where our collective purpose is to build a wiser, more compassionate, and less pained world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
