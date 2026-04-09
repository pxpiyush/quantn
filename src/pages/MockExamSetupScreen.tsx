import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Hash, AlertCircle, Zap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";

const durations = [
  { label: "30 min", value: 30 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
];

const questionCounts = [
  { label: "50 Questions", value: 50 },
  { label: "100 Questions", value: 100 },
];

export default function MockExamSetupScreen() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(30);
  const [count, setCount] = useState(50);
  const [negativeMarking, setNegativeMarking] = useState(true);

  const handleStart = () => {
    navigate(`/mock/game/${duration}/${count}`, {
      state: { negativeMarking },
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="flex items-center gap-3 px-5 pt-14 pb-2">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)}>
            <ArrowLeft size={22} className="text-muted-foreground" />
          </motion.button>
        </div>

        <div className="pt-2">
          <PageHeader
            hero="MOCK TEST"
            subtitle="Simulate a real exam with countdown timer, negative marking, and question navigator. Build exam-day confidence."
          />
        </div>

        <div className="px-6 space-y-6 mt-6">
          {/* Duration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={14} className="text-muted-foreground" />
              <p className="text-xs font-bold tracking-widest-custom text-muted-foreground">DURATION</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {durations.map((d) => (
                <PressableCard
                  key={d.value}
                  lift
                  onClick={() => setDuration(d.value)}
                  className={`flex items-center justify-center py-4 transition-all ${
                    duration === d.value ? "ring-2 ring-primary bg-primary/10 scale-[1.02]" : "opacity-60"
                  }`}
                >
                  <p className={`text-sm font-bold ${duration === d.value ? "text-foreground" : "text-muted-foreground"}`}>{d.label}</p>
                </PressableCard>
              ))}
            </div>
          </div>

          {/* Question count */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Hash size={14} className="text-muted-foreground" />
              <p className="text-xs font-bold tracking-widest-custom text-muted-foreground">QUESTIONS</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {questionCounts.map((q) => (
                <PressableCard
                  key={q.value}
                  lift
                  onClick={() => setCount(q.value)}
                  className={`flex items-center justify-center py-4 transition-all ${
                    count === q.value ? "ring-2 ring-primary bg-primary/10 scale-[1.02]" : "opacity-60"
                  }`}
                >
                  <p className={`text-sm font-bold ${count === q.value ? "text-foreground" : "text-muted-foreground"}`}>{q.label}</p>
                </PressableCard>
              ))}
            </div>
          </div>

          {/* Negative marking toggle */}
          <PressableCard lift onClick={() => setNegativeMarking(!negativeMarking)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-bold text-foreground">Negative Marking</p>
                  <p className="text-xs text-muted-foreground">-0.25 per wrong answer</p>
                </div>
              </div>
              <div
                className={`w-12 h-7 rounded-full flex items-center transition-colors ${
                  negativeMarking ? "bg-primary" : "bg-secondary"
                }`}
              >
                <motion.div
                  animate={{ x: negativeMarking ? 22 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 rounded-full bg-background shadow-sm"
                />
              </div>
            </div>
          </PressableCard>

          {/* Marking scheme */}
          <div className="rounded-2xl bg-card border border-border shadow-neumorphic p-5">
            <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-3">MARKING SCHEME</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Correct answer</span>
                <span className="font-bold text-success">+1.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Wrong answer</span>
                <span className="font-bold text-destructive">{negativeMarking ? "-0.25" : "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Skipped</span>
                <span className="font-bold text-muted-foreground">0.00</span>
              </div>
            </div>
          </div>

          {/* Start button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleStart}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-neumorphic-elevated flex items-center justify-center gap-2"
          >
            <Zap size={18} />
            Start Mock Test
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
