import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const horizonData = {
  h1: {
    title: "H1: 2025–2032 – Stabilize & Safeguard",
    choices: [
      {
        type: "Invest",
        title: "Digital Well-being & Grief Tech Research",
        description: "Fund research into AI's psychological impacts and develop evidence-based interventions.",
      },
      {
        type: "Protect",
        title: "Youth from Synthetic Relationships",
        description: "Establish guidelines and education around AI companions and face-tuning technologies.",
      },
      {
        type: "Prototype",
        title: "AI-in-the-Loop Social Services",
        description: "Test transparent, contestable AI decision systems in benefits and healthcare allocation.",
      },
    ],
  },
  h2: {
    title: "H2: 2032–2040 – Transform & Scale",
    choices: [
      {
        type: "Scale",
        title: "Purpose Economy Pilots",
        description: "Expand guaranteed income experiments linked to community-centered work and care roles.",
      },
      {
        type: "Advance",
        title: "Content Authenticity Infrastructure",
        description: "Build public digital infrastructure for verifying content origin and authenticity.",
      },
      {
        type: "Globalize",
        title: "AI Safety & Equity Standards",
        description: "Lead international cooperation on algorithmic accountability and equitable AI governance.",
      },
    ],
  },
};

const sliderText = {
  baseline: "Continuing on our current trajectory, we reach the Baseline world: algorithmic treadmill, gilded cages, and widespread existential suffering. Quick wins, but long-term pain.",
  mixed: "A mixed approach produces uneven outcomes: pockets of innovation and care, but also persistent inequality and suffering. Progress exists but lacks coordination.",
  transformation: "Fully committing to these choices brings us closer to the Transformation world: purpose economy, transparent systems, and collective well-being as the measure of success.",
};

export const NextStepsSection = () => {
  const [sliderValue, setSliderValue] = useState([1]);
  
  const getSliderText = () => {
    const value = sliderValue[0];
    if (value === 0) return sliderText.baseline;
    if (value === 1) return sliderText.mixed;
    return sliderText.transformation;
  };

  return (
    <section id="next" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16 bg-[hsl(var(--bg-section-alt))]">
      <div className="content-container space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">So What? Choices Between Now and 2040</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Foresight doesn't predict the future; it helps us choose which future to create
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(horizonData).map(([key, horizon]) => (
            <div key={key} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent-neutral">{horizon.title}</h3>
              
              <div className="space-y-4">
                {horizon.choices.map((choice, idx) => (
                  <div key={idx} className="card-elevated space-y-2 min-h-[140px] flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded bg-accent-good/20 text-accent-good text-xs font-bold">
                        {choice.type}
                      </span>
                      <h4 className="font-semibold text-foreground">{choice.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{choice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card-elevated max-w-4xl mx-auto p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-center">Interactive: Choose Your Path</h3>
          <p className="text-center text-muted-foreground">
            Slide from Baseline to Transformation to see what each approach means
          </p>
          
          <div className="space-y-6 pt-4">
            {/* Desktop labels - all on one line */}
            <div className="hidden md:block relative h-6 text-sm font-medium">
              <span className="absolute left-0 text-accent-risk">Baseline</span>
              <span className="absolute left-1/2 -translate-x-1/2 text-accent-neutral">Mixed</span>
              <span className="absolute right-0 text-accent-good">Transformation</span>
            </div>
            
            {/* Mobile labels - staggered above and below */}
            <div className="md:hidden relative h-16 text-xs font-medium">
              <span className="absolute left-0 top-0 text-accent-risk">Baseline</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 text-accent-neutral">Mixed</span>
              <span className="absolute right-0 top-0 text-accent-good">Transformation</span>
            </div>
            
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={2}
              step={1}
              className="w-full"
            />
            
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <p className="text-foreground leading-relaxed">{getSliderText()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
