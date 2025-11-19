interface SufferingLevel {
  type: string;
  level: "low" | "medium" | "high";
}

interface SufferingProfileProps {
  levels: SufferingLevel[];
}

export const SufferingProfile = ({ levels }: SufferingProfileProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-accent-good/20 border-accent-good";
      case "medium":
        return "bg-accent-neutral/20 border-accent-neutral";
      case "high":
        return "bg-accent-risk/20 border-accent-risk";
      default:
        return "bg-muted border-border";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "low":
        return "w-1/4";
      case "medium":
        return "w-1/2";
      case "high":
        return "w-3/4";
      default:
        return "w-1/4";
    }
  };

  return (
    <div className="space-y-4">
      {levels.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-foreground font-medium">{item.type}</span>
            <span className="text-muted-foreground capitalize">{item.level}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getLevelColor(item.level)} ${getLevelWidth(item.level)}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
