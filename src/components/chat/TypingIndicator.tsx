const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-accent-good rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-accent-good rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-accent-good rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
      </div>
      <span className="text-sm text-muted-foreground ml-2">AI is thinking...</span>
    </div>
  );
};

export default TypingIndicator;
