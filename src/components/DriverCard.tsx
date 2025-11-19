interface DriverCardProps {
  title: string;
  description: string;
  evidence: string[];
  isNegative?: boolean;
}

export const DriverCard = ({ title, description, evidence, isNegative = false }: DriverCardProps) => {
  return (
    <div
      className="card-elevated group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-accent-neutral hover:shadow-[0_0_40px_hsl(var(--accent-neutral)/0.3)]"
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-accent-neutral" />
      
      <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10 group-hover:text-accent-neutral-bright transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 text-base relative z-10">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {evidence.map((item, idx) => (
          <span
            key={idx}
            className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium border-2 backdrop-blur-sm transition-all duration-300 bg-accent-neutral/10 text-accent-neutral-bright border-accent-neutral/30 hover:bg-accent-neutral/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
