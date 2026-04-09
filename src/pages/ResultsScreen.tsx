import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

function getInsight(correct: number, attempted: number, avgSpeed: number) {
  const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
  if (accuracy >= 90 && avgSpeed < 3) return "🔥 Blazing speed with laser accuracy. You're exam-ready!";
  if (accuracy >= 80) return "💪 Great accuracy! Focus on shaving off a few seconds per question.";
  if (accuracy >= 60) return "📈 Good progress. Review your weak areas and try again.";
  if (avgSpeed > 5) return "⏱️ You're taking too long per question. Trust your instincts more.";
  return "🧠 Keep practicing. Consistency is the key to momentum.";
}

export default function ResultsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as any) || {};
  const { attempted = 0, correct = 0, incorrect = 0, totalTime = 0 } = state;
  const avgSpeed = attempted > 0 ? (totalTime / attempted).toFixed(1) : "0";

  const cards = [
    { label: "ATTEMPTED", value: attempted },
    { label: "AVG SPEED", value: `${avgSpeed}s` },
    { label: "CORRECT", value: correct },
    { label: "INCORRECT", value: incorrect },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background px-5 pt-16 pb-10 flex flex-col">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-xl glass-effect bg-card/60 border border-border shadow-neumorphic mb-3">
            <span className="text-base font-black tracking-tight text-foreground">NUMEN</span>
          </div>
          <div className="h-px bg-border mb-4" />
          <h1 className="text-hero text-foreground mb-8">RESULTS</h1>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {cards.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}>
              <PressableCard className="flex flex-col items-center py-6">
                <p className="text-3xl font-black text-foreground">{c.value}</p>
                <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground mt-1">{c.label}</p>
              </PressableCard>
            </motion.div>
          ))}
        </div>

        <PressableCard className="mb-8 !bg-secondary/50">
          <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-2">AI INSIGHT</p>
          <p className="text-sm text-foreground leading-relaxed">
            {getInsight(correct, attempted, parseFloat(String(avgSpeed)))}
          </p>
        </PressableCard>

        <div className="mt-auto space-y-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(-2)}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm tracking-widest-custom shadow-neumorphic-elevated"
          >
            RETEST
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/practice")}
            className="w-full py-4 rounded-2xl bg-card border border-border text-foreground font-bold text-sm tracking-widest-custom shadow-neumorphic"
          >
            HOME
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
