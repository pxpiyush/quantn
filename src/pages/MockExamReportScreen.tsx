import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, SkipForward, Trophy, Clock, TrendingDown, ChevronDown, ChevronUp, MinusCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";
import { sanitize } from "@/data/questions";
import { useState } from "react";

export default function MockExamReportScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers, questions, totalTime, negativeMarking, category } = (location.state || {}) as any;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  if (!answers || !questions) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No report data</p>
      </div>
    );
  }

  // Only count reached questions for scoring
  const reached = answers.filter((a: any) => a.reached);
  const correct = reached.filter(
    (a: any) => !a.skipped && sanitize(a.userAnswer) === sanitize(questions[a.idx]?.correct_option)
  ).length;
  const wrong = reached.filter(
    (a: any) => !a.skipped && a.userAnswer && sanitize(a.userAnswer) !== sanitize(questions[a.idx]?.correct_option)
  ).length;
  const skipped = reached.filter((a: any) => a.skipped).length;
  const notReached = answers.filter((a: any) => !a.reached).length;

  const score = negativeMarking ? correct * 1 - wrong * 0.25 : correct;
  const maxScore = questions.length;
  const percentage = Math.round((Math.max(0, score) / maxScore) * 100);

  const answeredCount = correct + wrong + skipped;
  const avgTime = answeredCount > 0 ? totalTime / 1000 / answeredCount : 0;

  // Category breakdown (only reached)
  const categoryMap: Record<string, { correct: number; wrong: number; skipped: number }> = {};
  reached.forEach((a: any) => {
    const cat = questions[a.idx]?._category || "Unknown";
    if (!categoryMap[cat]) categoryMap[cat] = { correct: 0, wrong: 0, skipped: 0 };
    if (a.skipped) categoryMap[cat].skipped++;
    else if (sanitize(a.userAnswer) === sanitize(questions[a.idx]?.correct_option)) categoryMap[cat].correct++;
    else categoryMap[cat].wrong++;
  });

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}m ${s % 60}s`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="flex items-center gap-3 px-5 pt-14 pb-2">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate("/exams")}>
            <ArrowLeft size={22} className="text-muted-foreground" />
          </motion.button>
        </div>

        <div className="px-6 mt-4">
          {/* Score card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-card border border-border shadow-neumorphic-elevated p-6 text-center mb-6"
          >
            <Trophy size={32} className="text-primary mx-auto mb-3" />
            <p className="text-4xl font-black text-foreground mb-1">{score.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">out of {maxScore} ({percentage}%)</p>
            {negativeMarking && (
              <p className="text-[10px] text-muted-foreground mt-2 flex items-center justify-center gap-1">
                <TrendingDown size={10} /> Negative marking applied (-0.25)
              </p>
            )}
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <PressableCard className="flex flex-col items-center py-4">
              <CheckCircle2 size={18} className="text-success mb-1" />
              <p className="text-lg font-bold text-foreground">{correct}</p>
              <p className="text-[10px] text-muted-foreground">Correct</p>
            </PressableCard>
            <PressableCard className="flex flex-col items-center py-4">
              <XCircle size={18} className="text-destructive mb-1" />
              <p className="text-lg font-bold text-foreground">{wrong}</p>
              <p className="text-[10px] text-muted-foreground">Wrong</p>
            </PressableCard>
            <PressableCard className="flex flex-col items-center py-4">
              <SkipForward size={18} className="text-muted-foreground mb-1" />
              <p className="text-lg font-bold text-foreground">{skipped}</p>
              <p className="text-[10px] text-muted-foreground">Skipped</p>
            </PressableCard>
            <PressableCard className="flex flex-col items-center py-4">
              <MinusCircle size={18} className="text-muted-foreground mb-1" />
              <p className="text-lg font-bold text-foreground">{notReached}</p>
              <p className="text-[10px] text-muted-foreground">Not Reached</p>
            </PressableCard>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <PressableCard className="flex flex-col items-center py-4">
              <Clock size={18} className="text-muted-foreground mb-1" />
              <p className="text-lg font-bold text-foreground">{avgTime.toFixed(1)}s</p>
              <p className="text-[10px] text-muted-foreground">Avg/Question</p>
            </PressableCard>
            <PressableCard className="flex flex-col items-center py-4">
              <Clock size={18} className="text-muted-foreground mb-1" />
              <p className="text-lg font-bold text-foreground">{formatTime(totalTime)}</p>
              <p className="text-[10px] text-muted-foreground">Total Time</p>
            </PressableCard>
          </div>

          {/* Category breakdown */}
          {Object.keys(categoryMap).length > 1 && (
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-3">SECTION BREAKDOWN</p>
              <div className="space-y-2">
                {Object.entries(categoryMap).map(([cat, stats]) => (
                  <PressableCard key={cat}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">{cat}</p>
                      <div className="flex gap-3 text-xs">
                        <span className="text-success font-bold">{stats.correct}✓</span>
                        <span className="text-destructive font-bold">{stats.wrong}✗</span>
                        <span className="text-muted-foreground">{stats.skipped} skip</span>
                      </div>
                    </div>
                  </PressableCard>
                ))}
              </div>
            </div>
          )}

          {/* Question review — only reached questions */}
          <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-3">QUESTION REVIEW</p>
          <div className="space-y-2.5">
            {answers.map((a: any, i: number) => {
              const question = questions[a.idx];
              if (!question || !a.reached) return null;
              const isCorrect = !a.skipped && sanitize(a.userAnswer) === sanitize(question.correct_option);
              const isExpanded = expandedIdx === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <PressableCard lift onClick={() => setExpandedIdx(isExpanded ? null : i)}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {a.skipped ? (
                          <SkipForward size={14} className="text-muted-foreground" />
                        ) : isCorrect ? (
                          <CheckCircle2 size={14} className="text-success" />
                        ) : (
                          <XCircle size={14} className="text-destructive" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground leading-relaxed line-clamp-2">{sanitize(question.question)}</p>
                      </div>
                      {isExpanded ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
                    </div>

                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="mt-3 pt-3 border-t border-border space-y-2"
                      >
                        {!a.skipped && (
                          <p className="text-xs text-muted-foreground">
                            Your answer: <span className={isCorrect ? "text-success font-semibold" : "text-destructive font-semibold"}>{sanitize(a.userAnswer)}</span>
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Correct: <span className="text-success font-semibold">{sanitize(question.correct_option)}</span>
                        </p>
                        {question.explanation && (
                          <p className="text-xs text-muted-foreground leading-relaxed mt-2">{sanitize(question.explanation)}</p>
                        )}
                      </motion.div>
                    )}
                  </PressableCard>
                </motion.div>
              );
            })}
          </div>

          {/* Not reached info */}
          {notReached > 0 && (
            <div className="mt-4 rounded-2xl bg-secondary/50 border border-border p-4 text-center">
              <p className="text-xs text-muted-foreground">{notReached} questions were not reached and are not shown here</p>
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/exams")}
            className="w-full py-4 mt-6 rounded-2xl bg-primary text-primary-foreground font-bold text-sm shadow-neumorphic-elevated"
          >
            Back to Exams
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
