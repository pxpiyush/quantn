import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { X, BookOpen, SkipForward, Send, Bookmark, BookmarkCheck } from "lucide-react";
import { pyqQuestions, type PYQQuestion } from "@/data/pyq-questions";
import { codingDecodingQuestions } from "@/data/coding-decoding";
import { sanitize } from "@/data/questions";
import { saveMistake } from "@/lib/mistake-journal";
import { toggleBookmark } from "@/lib/bookmarks";

export default function ExamGameScreen() {
  const navigate = useNavigate();
  const { category, count } = useParams<{ category: string; count: string }>();
  const location = useLocation();
  const customQuestions = (location.state as any)?.customQuestions;

  const sourceQuestions: PYQQuestion[] = customQuestions
    ? customQuestions
    : category === "coding-decoding"
    ? codingDecodingQuestions
    : pyqQuestions;

  const totalQ = Math.min(parseInt(count || "25"), sourceQuestions.length);

  const questions = useMemo(() => {
    const arr = [...sourceQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, totalQ);
  }, [totalQ, sourceQuestions]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ idx: number; userAnswer: string; skipped: boolean; reached: boolean }[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [bookmarkedSet, setBookmarkedSet] = useState<Set<number>>(() => new Set());
  const startRef = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setElapsed(Date.now() - startRef.current), 100);
    return () => clearInterval(interval);
  }, []);

  const q = questions[currentIdx];
  const categoryLabel = category === "coding-decoding" ? "Coding & Decoding" : "English Alphabet";

  const goToReport = (finalAnswers: typeof answers) => {
    navigate("/exams/report", {
      replace: true,
      state: { answers: finalAnswers, questions, totalTime: Date.now() - startRef.current, category },
    });
  };

  const handleSelect = (opt: string) => {
    if (selected !== null) return;
    setSelected(opt);
    const sanitizedOpt = sanitize(opt);
    const isCorrect = sanitizedOpt === sanitize(q.correct_option);
    const newAnswers = [...answers, { idx: currentIdx, userAnswer: sanitizedOpt, skipped: false, reached: true }];
    setAnswers(newAnswers);

    if (!isCorrect) {
      saveMistake({
        question: q.question,
        options: q.options,
        correct_option: q.correct_option,
        explanation: q.explanation,
        exam: q.exam,
        userAnswer: opt,
        category: categoryLabel,
        timestamp: Date.now(),
      });
    }

    setTimeout(() => {
      if (currentIdx + 1 >= totalQ) {
        // Mark remaining as not reached
        const answeredSet = new Set(newAnswers.map(a => a.idx));
        const allAnswers = [...newAnswers];
        for (let i = 0; i < totalQ; i++) {
          if (!answeredSet.has(i)) allAnswers.push({ idx: i, userAnswer: "", skipped: false, reached: false });
        }
        goToReport(allAnswers);
      } else {
        setCurrentIdx((i) => i + 1);
        setSelected(null);
      }
    }, 200);
  };

  const handleSkip = () => {
    if (selected !== null) return;
    const newAnswers = [...answers, { idx: currentIdx, userAnswer: "", skipped: true, reached: true }];
    setAnswers(newAnswers);
    if (currentIdx + 1 >= totalQ) {
      const answeredSet = new Set(newAnswers.map(a => a.idx));
      const allAnswers = [...newAnswers];
      for (let i = 0; i < totalQ; i++) {
        if (!answeredSet.has(i)) allAnswers.push({ idx: i, userAnswer: "", skipped: false, reached: false });
      }
      goToReport(allAnswers);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
    }
  };

  const handleSubmitEarly = () => {
    // Current question = skipped if not answered
    const finalAnswers = selected === null
      ? [...answers, { idx: currentIdx, userAnswer: "", skipped: true, reached: true }]
      : answers;
    // Mark remaining as NOT reached
    const answeredSet = new Set(finalAnswers.map(a => a.idx));
    const allAnswers = [...finalAnswers];
    for (let i = 0; i < totalQ; i++) {
      if (!answeredSet.has(i)) allAnswers.push({ idx: i, userAnswer: "", skipped: false, reached: false });
    }
    goToReport(allAnswers);
  };

  const handleToggleBookmark = () => {
    const added = toggleBookmark({
      question: q.question,
      options: q.options,
      correct_option: q.correct_option,
      explanation: q.explanation,
      exam: q.exam,
      category: categoryLabel,
      timestamp: Date.now(),
    });
    setBookmarkedSet((prev) => {
      const next = new Set(prev);
      if (added) next.add(currentIdx); else next.delete(currentIdx);
      return next;
    });
  };

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  if (!q) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate("/exams")}>
          <X size={24} className="text-muted-foreground" />
        </motion.button>
        <p className="text-xs text-muted-foreground">{currentIdx + 1} / {totalQ}</p>
        <div className="px-4 py-1.5 rounded-full bg-card border border-border shadow-neumorphic">
          <span className="text-sm font-bold text-foreground tabular-nums">{formatTime(elapsed)}</span>
        </div>
      </div>

      <div className="px-5 mb-4">
        <div className="h-1 rounded-full bg-secondary overflow-hidden">
          <motion.div className="h-full bg-foreground/30 rounded-full" animate={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>

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
            const isThisSelected = selected !== null && sanitize(selected) === optSan;
            const isThisCorrect = optSan === correctSan;
            let cls = "bg-card border-border";
            if (selected !== null) {
              if (isThisCorrect) cls = "bg-success/20 border-success";
              else if (isThisSelected) cls = "bg-destructive/20 border-destructive";
            }
            return (
              <motion.button key={i} whileTap={{ scale: 0.96 }} onClick={() => handleSelect(opt)} className={`w-full text-left px-5 py-4 rounded-xl border ${cls} shadow-neumorphic transition-colors`}>
                <span className="text-sm font-medium text-foreground">{sanitize(opt)}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="flex gap-3 mt-6">
          <motion.button whileTap={{ scale: 0.96 }} onClick={handleSkip} disabled={selected !== null} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border shadow-neumorphic disabled:opacity-40">
            <SkipForward size={16} /> Skip
          </motion.button>
          <motion.button whileTap={{ scale: 0.96 }} onClick={() => setShowSubmitConfirm(true)} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated">
            <Send size={16} /> Submit Test
          </motion.button>
        </div>
      </div>

      <div className="h-8" />

      {showSubmitConfirm && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-foreground/20 glass-effect z-50 flex items-center justify-center p-6">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card border border-border rounded-2xl shadow-neumorphic-elevated p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-foreground mb-2">End Test Early?</h3>
            <p className="text-sm text-muted-foreground mb-1">You've answered {answers.length} of {totalQ} questions.</p>
            <p className="text-sm text-muted-foreground mb-6">Remaining questions will not be shown in the report.</p>
            <div className="flex gap-3">
              <motion.button whileTap={{ scale: 0.96 }} onClick={() => setShowSubmitConfirm(false)} className="flex-1 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border">Continue</motion.button>
              <motion.button whileTap={{ scale: 0.96 }} onClick={handleSubmitEarly} className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated">Submit</motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
