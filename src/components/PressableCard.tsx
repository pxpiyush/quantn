import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface PressableCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  lift?: boolean;
}

export default function PressableCard({ children, onClick, className, lift }: PressableCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.96, y: lift ? -2 : 0 }}
      whileHover={{ y: lift ? -4 : -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl bg-card shadow-neumorphic border border-border p-4 transition-shadow active:shadow-[var(--shadow-pressed)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
