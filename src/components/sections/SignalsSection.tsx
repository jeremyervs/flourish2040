import { SignalCard } from "@/components/SignalCard";
import { Zap, MessageSquare, Landmark } from "lucide-react";

const signals = [
  {
    category: "Mental Health & Well-being",
    title: "AI Mental Health Tools: Promise vs Peril",
    description: "Apps like Woebot and Wysa offer 24/7 support, but studies show some give unsafe advice and lack regulation.",
    source: "https://news.stanford.edu/stories/2025/06/ai-mental-health-care-tools-dangers-risks",
  },
  {
    category: "Trust & Information",
    title: "AI and the Erosion of Shared Truth",
    description: "Deepfakes, synthetic content, and AI-generated misinformation undermine public trust and shared reality.",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11165650/",
  },
  {
    category: "Social Connection",
    title: "The Social Deficit at Work",
    description: "Remote work and AI mediation reduce spontaneous human interaction, leading to increased workplace isolation.",
    source: "https://www.psychologytoday.com/us/blog/urban-survival/202507/is-ai-making-us-lonelier-at-work",
  },
  {
    category: "Purpose & Meaning",
    title: "The AI Crisis of Purpose",
    description: "Young workers face existential questions as AI takes over cognitive tasks once central to identity and meaning.",
    source: "https://digitaleconomy.stanford.edu/wp-content/uploads/2025/08/Canaries_BrynjolfssonChandarChen.pdf",
  },
  {
    category: "Governance",
    title: "Innovation Outpacing Policy",
    description: "Regulatory frameworks lag years behind AI capabilities, creating dangerous governance gaps.",
    source: "https://portulansinstitute.org/multi-stakeholder-ai-governance/",
  },
  {
    category: "Healthcare",
    title: "Personalized AI Medicine",
    description: "Digital twins and AI diagnostics promise to dramatically reduce physical suffering through early intervention.",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12274247/",
  },
];

const timeline = [
  {
    date: "2017",
    title: '"Attention Is All You Need"',
    description: "Transformer paper published, enabling modern AI capabilities.",
    icon: Zap,
  },
  {
    date: "Nov 2022",
    title: "ChatGPT Launch",
    description: "Public AI moment that changed everything about accessibility and adoption.",
    icon: MessageSquare,
  },
  {
    date: "Jan 23, 2025",
    title: "US AI Executive Order",
    description: "Federal government prioritizes rapid AI adoption across agencies.",
    icon: Landmark,
  },
];

export const SignalsSection = () => {
  return (
    <section id="signals" className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-16">
      <div className="content-container space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Signals from Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We began by scanning current hot topics and weak signals in AI & suffering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal, idx) => (
            <SignalCard key={idx} {...signal} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <h3 className="text-2xl font-semibold text-center">From Headlines to Futures</h3>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="relative grid md:grid-cols-3 gap-8">
              {timeline.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <div key={idx} className="relative h-full">
                    <div className="card-elevated text-center space-y-3 h-full min-h-[240px] flex flex-col justify-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-good text-background mx-auto">
                        <Icon size={24} />
                      </div>
                      <div className="text-accent-neutral font-bold text-lg">{event.date}</div>
                      <h4 className="text-foreground font-semibold">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
