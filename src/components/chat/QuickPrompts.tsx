import { Button } from "@/components/ui/button";

interface QuickPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const PROMPTS = [
  "What are the six drivers shaping 2040?",
  "Explain the Baseline vs. Symbiotic futures",
  "What current signals are most concerning?",
  "How can I apply this to my work?",
  "What actions matter most right now?",
];

const QuickPrompts = ({ onSelectPrompt }: QuickPromptsProps) => {
  return (
    <div className="p-4 space-y-3">
      <p className="text-sm text-muted-foreground mb-3">
        Get started with these questions:
      </p>
      <div className="flex flex-col gap-2">
        {PROMPTS.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="text-left justify-start h-auto py-3 px-4 hover:bg-accent-good/10 hover:border-accent-good/50 transition-all"
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickPrompts;
