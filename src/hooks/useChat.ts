import { useState } from "react";
import { streamChat } from "@/utils/streamChat";

export type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      content: userInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    let assistantContent = "";
    const updateAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1
              ? { ...m, content: assistantContent }
              : m
          );
        }
        return [
          ...prev,
          { role: "assistant", content: assistantContent, timestamp: new Date() },
        ];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg].map(({ role, content }) => ({
          role,
          content,
        })),
        onDelta: updateAssistant,
        onDone: () => setIsLoading(false),
        onError: (errorMsg) => {
          setError(errorMsg);
          setIsLoading(false);
        },
      });
    } catch (e) {
      console.error("Send message error:", e);
      setError("Failed to send message");
      setIsLoading(false);
      setMessages((prev) => prev.slice(0, -1));
    }
  };

  const clearError = () => setError(null);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearError,
  };
};
