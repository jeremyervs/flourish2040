import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatWindow from "./ChatWindow";
import { motion } from "framer-motion";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", damping: 15 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl
                   bg-accent-good hover:bg-accent-good/90
                   border-2 border-accent-good/50
                   hover:scale-110 transition-all duration-300
                   glow-good"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatButton;
