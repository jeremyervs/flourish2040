import { ExternalLink } from "lucide-react";

interface SignalCardProps {
  category: string;
  title: string;
  description: string;
  source?: string;
}

export const SignalCard = ({ category, title, description, source }: SignalCardProps) => {
  return (
    <div className="card-elevated group hover:-translate-y-2 transition-all duration-500">
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent-neutral/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="mb-4 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-neutral/20 to-accent-neutral/10 text-accent-neutral-bright text-xs font-bold border-2 border-accent-neutral/30 backdrop-blur-sm">
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent-neutral-bright transition-colors relative z-10">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 relative z-10">
        {description}
      </p>
      
      {source && (
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent-good hover:text-accent-good-bright transition-colors font-semibold relative z-10 group/link"
        >
          <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
          Source
        </a>
      )}
    </div>
  );
};
