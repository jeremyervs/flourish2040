import { useChat } from "@/hooks/useChat";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import QuickPrompts from "./QuickPrompts";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const { messages, isLoading, error, sendMessage, clearError } = useChat();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      clearError();
    }
  }, [error, toast, clearError]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[400px] h-[600px] max-h-[80vh] z-50 flex flex-col
                     bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-xl
                     border border-border rounded-3xl shadow-2xl overflow-hidden
                     md:w-[400px] sm:w-[calc(100vw-3rem)] sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-accent-good/10 to-transparent">
              <div>
                <h3 className="font-semibold text-lg">AI Foresight Guide</h3>
                <p className="text-xs text-muted-foreground">Exploring 2040 together</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-destructive/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages or Quick Prompts */}
            {messages.length === 0 ? (
              <QuickPrompts onSelectPrompt={sendMessage} />
            ) : (
              <MessageList messages={messages} isLoading={isLoading} />
            )}

            {/* Input */}
            <MessageInput onSend={sendMessage} disabled={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
