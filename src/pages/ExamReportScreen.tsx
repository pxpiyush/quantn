import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, SkipForward } from "lucide-react";
import { useState } from "react";
import { sanitize } from "@/data/questions";
import { type PYQQuestion } from "@/data/pyq-questions";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

export default function ExamReportScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers = [], questions = [], totalTime = 0 } = (location.state as any) || {};

  // Filter to only reached questions (legacy answers without 'reached' field are treated as reached)
  const reachedAnswers = answers.filter((a: any) => a.reached !== false);

  const answered = reachedAnswers.filter((a: any) => !a.skipped);
  const skipped = reachedAnswers.filter((a: any) => a.skipped);
  const notReached = answers.filter((a: any) => a.reached === false).length;

  const correctCount = answered.filter((a: any) => {
    const q = questions[a.idx];
    return q && sanitize(a.userAnswer) === sanitize(q.correct_option);
  }).length;

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}m ${s % 60}s`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background px-5 pt-14 pb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[13px] font-black tracking-tight text-foreground mb-3 opacity-60">REAZN</p>
          <div className="h-px bg-border mb-4" />
          <h1 className="text-hero text-foreground">REPORT</h1>

          <div className="flex gap-3 mt-6 mb-4">
            <PressableCard className="flex-1 flex flex-col items-center py-5">
              <p className="text-2xl font-black text-foreground">{correctCount}/{answered.length}</p>
              <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">CORRECT</p>
            </PressableCard>
            <PressableCard className="flex-1 flex flex-col items-center py-5">
              <p className="text-2xl font-black text-foreground">{formatTime(totalTime)}</p>
              <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">TIME</p>
            </PressableCard>
          </div>

          <div className="flex gap-3 mb-8">
            <PressableCard className="flex-1 flex flex-col items-center py-4">
              <p className="text-lg font-black text-foreground">{skipped.length}</p>
              <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">SKIPPED</p>
            </PressableCard>
            <PressableCard className="flex-1 flex flex-col items-center py-4">
              <p className="text-lg font-black text-foreground">{reachedAnswers.length}/{questions.length}</p>
              <p className="text-[10px] tracking-widest-custom text-muted-foreground mt-1">ATTEMPTED</p>
            </PressableCard>
          </div>
        </motion.div>

        {/* Only show reached questions */}
        <div className="space-y-3">
          {reachedAnswers.map((ans: any, idx: number) => {
            const q = questions[ans.idx];
            if (!q) return null;
            const isSkipped = ans.skipped;
            const userAns = ans.userAnswer || "";
            const isCorrect = !isSkipped && sanitize(userAns) === sanitize(q.correct_option);
            return <QuestionReviewCard key={idx} q={q} idx={idx} userAnswer={userAns} isCorrect={isCorrect} isSkipped={isSkipped} />;
          })}
        </div>

        {notReached > 0 && (
          <div className="mt-4 rounded-2xl bg-secondary/50 border border-border p-4 text-center">
            <p className="text-xs text-muted-foreground">{notReached} questions were not reached and are not shown</p>
          </div>
        )}

        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/exams")}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm tracking-widest-custom shadow-neumorphic-elevated"
          >
            HOME
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}

function QuestionReviewCard({ q, idx, userAnswer, isCorrect, isSkipped }: { q: PYQQuestion; idx: number; userAnswer: string; isCorrect: boolean; isSkipped: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-card border border-border shadow-neumorphic overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-muted-foreground">Q {idx + 1}</span>
          {isSkipped ? (
            <SkipForward size={14} className="text-muted-foreground" />
          ) : isCorrect ? (
            <Check size={16} className="text-success" />
          ) : (
            <X size={16} className="text-destructive" />
          )}
          {isSkipped && <span className="text-[10px] text-muted-foreground">Skipped</span>}
        </div>
        <p className="text-sm text-foreground mb-3">{sanitize(q.question)}</p>

        <div className="space-y-1.5">
          {q.options.map((opt, i) => {
            const optSan = sanitize(opt);
            const correctSan = sanitize(q.correct_option);
            const userSan = sanitize(userAnswer);
            let cls = "bg-secondary/30 border-transparent";
            if (optSan === correctSan) cls = "bg-success/15 border-success/30";
            if (optSan === userSan && !isCorrect && !isSkipped) cls = "bg-destructive/15 border-destructive/30";

            return (
              <div key={i} className={`px-3 py-2 rounded-lg text-xs text-foreground border ${cls}`}>
                {sanitize(opt)}
              </div>
            );
          })}
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-3 text-xs text-muted-foreground"
        >
          <span>Show Explanation</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border">
              {sanitize(q.explanation)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
