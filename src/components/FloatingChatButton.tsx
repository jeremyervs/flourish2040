import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatInterface } from "./ChatInterface";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatInterface onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
};