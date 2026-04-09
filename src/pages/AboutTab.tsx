import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Heart, Shield, Sun, Moon, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";
import { useTheme } from "@/contexts/ThemeContext";

export default function AboutTab() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const [tipFlipped, setTipFlipped] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader hero="ABOUT" subtitle="Built with love for every aspirant out there. Meet the developer, toggle your theme, and connect with NUMEN." />
        </div>

        <div className="px-6 space-y-4 mt-4">
          {/* Theme toggle */}
          <PressableCard lift onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {theme === "dark" ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
                <div>
                  <p className="text-sm font-bold text-foreground">Appearance</p>
                  <p className="text-xs text-muted-foreground">{theme === "dark" ? "Dark mode active" : "Light mode active"} — tap to switch</p>
                </div>
              </div>
              <div className={`w-12 h-7 rounded-full flex items-center transition-colors ${theme === "dark" ? "bg-primary" : "bg-secondary"}`}>
                <motion.div
                  animate={{ x: theme === "dark" ? 22 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 rounded-full bg-background shadow-sm"
                />
              </div>
            </div>
          </PressableCard>

          {/* Quick info */}
          <PressableCard className="!bg-secondary/50">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-1">WHAT IS NUMEN?</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  QUANTN is a free, first mathematics practice platform for SSC, Banking, Railways and all competitive exam aspirants. Practice arithmetic, take mock tests, track your mistakes and improve daily.
                </p>
              </div>
            </div>
          </PressableCard>

          {/* Flippable Developer Card */}
          <div className="perspective-[1000px]" onClick={() => setFlipped(!flipped)}>
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative h-64 cursor-pointer"
            >
              <div
                className="absolute inset-0 rounded-2xl bg-card border border-border shadow-neumorphic-elevated p-6 flex flex-col items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-3">DEVELOPER</p>
                <img
                  src="https://lh3.googleusercontent.com/d/1KxC5nqRaPGFRk4ufyaUuFDTHrqwQDxkk"
                  alt="Developer signature"
                  className="w-40 h-auto object-contain mb-3 dark:invert dark:brightness-150"
                />
                <p className="text-sm text-muted-foreground text-center">Hope This Helps You</p>
              </div>
              <div
                className="absolute inset-0 rounded-2xl bg-card border border-border shadow-neumorphic-elevated p-6 flex flex-col items-center justify-center gap-3"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-2">CONNECT</p>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => { e.stopPropagation(); window.open("https://instagram.com/pxpiyush/", "_blank"); }}
                  className="w-full py-3 rounded-xl bg-secondary flex items-center justify-center gap-2 text-sm font-bold text-foreground shadow-neumorphic"
                >
                  <Instagram size={16} /> Instagram
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => { e.stopPropagation(); window.open("https://linkedin.com/in/pxpiyush", "_blank"); }}
                  className="w-full py-3 rounded-xl bg-secondary flex items-center justify-center gap-2 text-sm font-bold text-foreground shadow-neumorphic"
                >
                  <Linkedin size={16} /> LinkedIn
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <PressableCard lift onClick={() => window.open("https://instagram.com/numenapp", "_blank")} className="flex flex-col items-center justify-center py-5">
              <Heart size={18} className="text-foreground mb-2" />
              <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground text-center">FOLLOW US</p>
            </PressableCard>
            <div className="perspective-[1000px]" onClick={() => setTipFlipped(!tipFlipped)}>
              <motion.div
                animate={{ rotateY: tipFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative h-24 cursor-pointer"
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-card border border-border shadow-neumorphic flex flex-col items-center justify-center py-5"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-lg mb-1.5">☕</span>
                  <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground text-center">TIP DEV</p>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl bg-card border border-border shadow-neumorphic flex flex-col items-center justify-center py-5 px-4"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">मैं चाय नहीं पीता पर, धन्यवाद 🙏</p>
                </div>
              </motion.div>
            </div>
          </div>

          <PressableCard lift onClick={() => navigate("/about/privacy")} className="flex flex-col items-center justify-center gap-2 py-5">
            <Shield size={18} className="text-foreground" />
            <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground text-center">TERMS & PRIVACY</p>
          </PressableCard>

          {/* Version */}
          <p className="text-center text-[10px] text-muted-foreground/50 pt-4">NUMEN v1.0 · Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </PageTransition>
  );
}
