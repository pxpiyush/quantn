import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquareText, Shapes, Lock, Flame } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";
import { getMomentum } from "@/lib/momentum";

const domains = [
  {
    icon: MessageSquareText,
    title: "Verbal Reasoning",
    subtitle: "Coding & Decoding, Alphabet Series, Letter Patterns and more",
    path: "/practice/verbal",
    locked: false,
  },
  {
    icon: Shapes,
    title: "Non-Verbal Reasoning",
    subtitle: "Figure series, mirror images, pattern completion — coming soon",
    path: null,
    locked: true,
  },
];

function Doodles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute top-24 right-4 w-16 h-16 text-border opacity-40" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 32 Q16 8, 32 28 Q48 48, 56 24" />
      </svg>
      <svg className="absolute top-52 left-3 w-10 h-10 text-border opacity-30" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="20" cy="20" r="14" strokeDasharray="4 3" />
      </svg>
      <svg className="absolute top-80 right-8 w-8 h-8 text-border opacity-25" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4 L18 12 L26 12 L20 17 L22 25 L16 20 L10 25 L12 17 L6 12 L14 12 Z" />
      </svg>
      <svg className="absolute bottom-60 left-6 w-20 h-4 text-border opacity-30" viewBox="0 0 80 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 12 Q20 4, 40 10 Q60 16, 76 8" />
      </svg>
    </div>
  );
}

export default function PracticeTab() {
  const navigate = useNavigate();
  const momentum = getMomentum();
  const progress = Math.min((momentum / 10) * 100, 100);

  return (
    <PageTransition>
      <div className="min-h-screen pb-44 bg-background relative">
        <Doodles />

        <div className="pt-12">
          <PageHeader
            hero="PRACTICE"
            subtitle="Choose your reasoning domain and start practicing. Verbal covers language-based puzzles, Non-Verbal focuses on visual patterns and figures."
          />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <PressableCard
                lift={!d.locked}
                onClick={() => !d.locked && d.path && navigate(d.path)}
                className={`flex items-center gap-4 ${d.locked ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <motion.div
                  whileTap={{ rotate: d.locked ? 0 : [0, -8, 8, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0"
                >
                  {d.locked ? <Lock size={20} className="text-foreground" /> : <d.icon size={20} className="text-foreground" />}
                </motion.div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{d.title}</p>
                  <p className="text-xs text-muted-foreground">{d.subtitle}</p>
                </div>
                {d.locked && <Lock size={14} className="text-muted-foreground" />}
              </PressableCard>
            </motion.div>
          ))}
        </div>

        {/* Momentum */}
        <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom,8px)+12px)] left-1/2 -translate-x-1/2 w-full max-w-md md:max-w-lg lg:max-w-xl px-5 z-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="rounded-2xl bg-card/95 border border-border shadow-neumorphic-elevated p-4 glass-effect"
          >
            <div className="flex items-center gap-2 mb-2">
              <Flame size={14} className="text-muted-foreground" />
              <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground">MOMENTUM</p>
            </div>
            <div className="flex items-end justify-between mb-2">
              <p className="text-xl font-black text-foreground">{momentum}<span className="text-xs font-medium text-muted-foreground"> / 10</span></p>
              <p className="text-[10px] text-muted-foreground">{Math.round(progress)}%</p>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
