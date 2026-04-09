import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, SkipForward, Send, Bookmark, BookmarkCheck, Grid3X3, BookOpen } from "lucide-react";
import { pyqQuestions, type PYQQuestion } from "@/data/pyq-questions";
import { codingDecodingQuestions } from "@/data/coding-decoding";
import { sanitize } from "@/data/questions";
import { saveMistake } from "@/lib/mistake-journal";
import { toggleBookmark, isBookmarked } from "@/lib/bookmarks";

export default function MockExamGameScreen() {
  const navigate = useNavigate();
  const { duration, count } = useParams<{ duration: string; count: string }>();
  const location = useLocation();
  const negativeMarking = (location.state as any)?.negativeMarking ?? true;

  const durationMs = (parseInt(duration || "30") || 30) * 60 * 1000;
  const totalQ = parseInt(count || "50") || 50;

  const questions = useMemo(() => {
    const all: (PYQQuestion & { _category: string })[] = [
      ...codingDecodingQuestions.map((q) => ({ ...q, _category: "Coding & Decoding" })),
      ...pyqQuestions.map((q) => ({ ...q, _category: "English Alphabet" })),
    ];
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, Math.min(totalQ, all.length));
  }, [totalQ]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Map<number, { userAnswer: string; skipped: boolean }>>(new Map());
  const [timeLeft, setTimeLeft] = useState(durationMs);
  const [showPalette, setShowPalette] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [bookmarkedSet, setBookmarkedSet] = useState<Set<number>>(() => new Set());
  const endTimeRef = useRef(Date.now() + durationMs);
  const startRef = useRef(Date.now());
  const submittedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = endTimeRef.current - Date.now();
      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && !submittedRef.current) {
      submittedRef.current = true;
      doSubmit();
    }
  }, [timeLeft]);

  const q = questions[currentIdx];
  const isWarning = timeLeft > 0 && timeLeft <= 5 * 60 * 1000;
  const currentAnswer = answers.get(currentIdx);

  const buildFinalAnswers = () => {
    const finalArr: { idx: number; userAnswer: string; skipped: boolean; reached: boolean }[] = [];
    for (let i = 0; i < questions.length; i++) {
      const a = answers.get(i);
      if (a) {
        finalArr.push({ idx: i, userAnswer: a.userAnswer, skipped: a.skipped, reached: true });
      } else {
        finalArr.push({ idx: i, userAnswer: "", skipped: false, reached: false });
      }
    }
    return finalArr;
  };

  const doSubmit = () => {
    navigate("/mock/report", {
      replace: true,
      state: {
        answers: buildFinalAnswers(),
        questions,
        totalTime: Date.now() - startRef.current,
        negativeMarking,
        category: "mock",
      },
    });
  };

  const handleSelect = (opt: string) => {
    if (currentAnswer) return;
    setSelected(opt);
    const sanitizedOpt = sanitize(opt);
    const isCorrect = sanitizedOpt === sanitize(q.correct_option);
    const newAnswers = new Map(answers);
    newAnswers.set(currentIdx, { userAnswer: sanitizedOpt, skipped: false });
    setAnswers(newAnswers);

    if (!isCorrect) {
      saveMistake({
        question: q.question,
        options: q.options,
        correct_option: q.correct_option,
        explanation: q.explanation,
        exam: q.exam,
        userAnswer: opt,
        category: (q as any)._category || "Mock",
        timestamp: Date.now(),
      });
    }

    setTimeout(() => {
      if (currentIdx + 1 >= questions.length) {
        submittedRef.current = true;
        navigate("/mock/report", {
          replace: true,
          state: {
            answers: (() => {
              const arr: any[] = [];
              for (let i = 0; i < questions.length; i++) {
                const a = newAnswers.get(i);
                if (a) arr.push({ idx: i, ...a, reached: true });
                else arr.push({ idx: i, userAnswer: "", skipped: false, reached: false });
              }
              return arr;
            })(),
            questions,
            totalTime: Date.now() - startRef.current,
            negativeMarking,
            category: "mock",
          },
        });
      } else {
        setCurrentIdx((i) => i + 1);
        setSelected(null);
      }
    }, 200);
  };

  const handleSkip = () => {
    if (currentAnswer) return;
    const newAnswers = new Map(answers);
    newAnswers.set(currentIdx, { userAnswer: "", skipped: true });
    setAnswers(newAnswers);
    if (currentIdx + 1 >= questions.length) {
      submittedRef.current = true;
      doSubmit();
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const handleSubmitEarly = () => {
    submittedRef.current = true;
    doSubmit();
  };

  const handleToggleBookmark = () => {
    const added = toggleBookmark({
      question: q.question,
      options: q.options,
      correct_option: q.correct_option,
      explanation: q.explanation,
      exam: q.exam,
      category: (q as any)._category || "Mock",
      timestamp: Date.now(),
    });
    setBookmarkedSet((prev) => {
      const next = new Set(prev);
      if (added) next.add(currentIdx); else next.delete(currentIdx);
      return next;
    });
  };

  const jumpTo = (idx: number) => {
    if (answers.has(idx)) return;
    setCurrentIdx(idx);
    setSelected(null);
    setShowPalette(false);
  };

  const formatTime = (ms: number) => {
    const s = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(s / 60);
    return `${m}:${String(s % 60).padStart(2, "0")}`;
  };

  if (!q) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate("/exams")}>
          <X size={24} className="text-muted-foreground" />
        </motion.button>
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setShowPalette(!showPalette)}>
            <Grid3X3 size={20} className="text-muted-foreground" />
          </motion.button>
          <p className="text-xs text-muted-foreground">{currentIdx + 1} / {questions.length}</p>
        </div>
        <div className={`px-4 py-1.5 rounded-full bg-card border shadow-neumorphic ${isWarning ? "border-destructive" : "border-border"}`}>
          <span className={`text-sm font-bold tabular-nums ${isWarning ? "text-destructive" : "text-foreground"}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-5 mb-4">
        <div className="h-1 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full bg-foreground/30 rounded-full"
            animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question palette */}
      <AnimatePresence>
        {showPalette && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 mb-4 overflow-hidden"
          >
            <div className="rounded-2xl bg-card border border-border shadow-neumorphic p-4">
              <div className="flex gap-1 mb-2">
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-success/40 inline-block" /> Answered
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1 ml-3">
                  <span className="w-3 h-3 rounded-full bg-primary/40 inline-block" /> Bookmarked
                </span>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1 ml-3">
                  <span className="w-3 h-3 rounded-full bg-secondary inline-block" /> Unanswered
                </span>
              </div>
              <div className="grid grid-cols-10 gap-1.5">
                {questions.map((_, i) => {
                  const isAnswered = answers.has(i);
                  const isBm = bookmarkedSet.has(i);
                  const isCurrent = i === currentIdx;
                  let bg = "bg-secondary text-foreground";
                  if (isAnswered) bg = "bg-success/30 text-success";
                  if (isBm && !isAnswered) bg = "bg-primary/30 text-primary";
                  if (isCurrent) bg += " ring-2 ring-foreground";

                  return (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => jumpTo(i)}
                      className={`w-full aspect-square rounded-lg text-[10px] font-bold flex items-center justify-center ${bg} ${isAnswered ? "opacity-60" : ""}`}
                    >
                      {i + 1}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question */}
      <div className="flex-1 px-5 flex flex-col justify-center">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
          className="rounded-2xl bg-card border border-border shadow-neumorphic-elevated p-6 mb-6 relative"
        >
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleToggleBookmark}
            className="absolute top-4 right-4"
          >
            {bookmarkedSet.has(currentIdx) ? (
              <BookmarkCheck size={20} className="text-primary" />
            ) : (
              <Bookmark size={20} className="text-muted-foreground" />
            )}
          </motion.button>
          <p className="text-sm font-semibold text-foreground leading-relaxed pr-8">{sanitize(q.question)}</p>
          {q.exam && (
            <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-border">
              <BookOpen size={12} className="text-muted-foreground" />
              <p className="text-[10px] text-muted-foreground">{sanitize(q.exam)}</p>
            </div>
          )}
        </motion.div>

        <div className="space-y-2.5">
          {q.options.map((opt, i) => {
            const optSan = sanitize(opt);
            const correctSan = sanitize(q.correct_option);
            const isThisSelected = currentAnswer && !currentAnswer.skipped && sanitize(currentAnswer.userAnswer) === optSan;
            const isThisCorrect = optSan === correctSan;

            let cls = "bg-card border-border";
            if (currentAnswer && !currentAnswer.skipped) {
              if (isThisCorrect) cls = "bg-success/20 border-success";
              else if (isThisSelected) cls = "bg-destructive/20 border-destructive";
            }

            return (
              <motion.button
                key={i}
                whileTap={{ scale: currentAnswer ? 1 : 0.96 }}
                onClick={() => handleSelect(opt)}
                disabled={!!currentAnswer}
                className={`w-full text-left px-5 py-4 rounded-xl border ${cls} shadow-neumorphic transition-colors disabled:cursor-default`}
              >
                <span className="text-sm font-medium text-foreground">{sanitize(opt)}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="flex gap-3 mt-6">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleSkip}
            disabled={!!currentAnswer}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border shadow-neumorphic disabled:opacity-40"
          >
            <SkipForward size={16} />
            Skip
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowSubmitConfirm(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated"
          >
            <Send size={16} />
            Submit
          </motion.button>
        </div>
      </div>

      <div className="h-8" />

      {/* Submit confirmation */}
      {showSubmitConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-foreground/20 glass-effect z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card border border-border rounded-2xl shadow-neumorphic-elevated p-6 w-full max-w-sm"
          >
            <h3 className="text-lg font-bold text-foreground mb-2">End Mock Test?</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Answered: {answers.size} / {questions.length}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Remaining questions will not be scored.
            </p>
            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border"
              >
                Continue
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleSubmitEarly}
                className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated"
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
