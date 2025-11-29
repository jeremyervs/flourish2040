import { useEffect, useRef } from "react";
import { Message } from "@/hooks/useChat";
import TypingIndicator from "./TypingIndicator";
import { motion } from "framer-motion";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              message.role === "user"
                ? "bg-accent-good/20 border border-accent-good/30 text-foreground"
                : "bg-secondary/80 border border-border text-foreground shadow-lg"
            }`}
          >
            <p className="text-sm whitespace-pre-wrap leading-relaxed">
              {message.content}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </motion.div>
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
