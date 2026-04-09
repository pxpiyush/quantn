import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Pause, Play } from "lucide-react";
import { generateAlphabetQuestion, generateReverseQuestion } from "@/data/questions";
import { incrementMomentum } from "@/lib/momentum";

interface Question {
  letter: string;
  correct: string | number;
  options: (string | number)[];
}

function genQ(type: string): Question {
  if (type === "reverse") {
    const q = generateReverseQuestion();
    return { letter: q.letter, correct: q.correct, options: q.options };
  }
  const q = generateAlphabetQuestion();
  return { letter: q.letter, correct: q.correct, options: q.options };
}

export default function TimedGameScreen() {
  const navigate = useNavigate();
  const { type, mins } = useParams<{ type: string; mins: string }>();
  const durationMs = (parseInt(mins || "1") || 1) * 60 * 1000;

  const [question, setQuestion] = useState<Question>(() => genQ(type || "alphabet"));
  const [selected, setSelected] = useState<string | number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(durationMs);
  const [paused, setPaused] = useState(false);
  const [stats, setStats] = useState({ attempted: 0, correct: 0, incorrect: 0, totalTime: 0 });

  const endTimeRef = useRef(Date.now() + durationMs);
  const pauseOffsetRef = useRef(0);
  const questionStartRef = useRef(Date.now());

  useEffect(() => {
    if (paused || selected !== null) return;
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
  }, [paused, selected]);

  useEffect(() => {
    if (timeLeft <= 0) {
      incrementMomentum();
      navigate("/practice/results", { replace: true, state: { ...stats, duration: durationMs } });
    }
  }, [timeLeft, stats, navigate, durationMs]);

  const handlePause = useCallback(() => {
    if (paused) {
      endTimeRef.current = Date.now() + pauseOffsetRef.current;
      setPaused(false);
    } else {
      pauseOffsetRef.current = endTimeRef.current - Date.now();
      setPaused(true);
    }
  }, [paused]);

  const handleSelect = useCallback(
    (opt: string | number) => {
      if (selected !== null) return;
      setSelected(opt);
      const correct = String(opt) === String(question.correct);
      setIsCorrect(correct);
      const elapsed = (Date.now() - questionStartRef.current) / 1000;

      setStats((s) => ({
        attempted: s.attempted + 1,
        correct: s.correct + (correct ? 1 : 0),
        incorrect: s.incorrect + (correct ? 0 : 1),
        totalTime: s.totalTime + elapsed,
      }));

      setTimeout(() => {
        setQuestion(genQ(type || "alphabet"));
        setSelected(null);
        setIsCorrect(null);
        questionStartRef.current = Date.now();
      }, 200);
    },
    [selected, question, type]
  );

  const formatTime = (ms: number) => {
    const s = Math.ceil(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate("/practice")} className="text-muted-foreground">
          <X size={24} />
        </motion.button>
        <div className="px-4 py-1.5 rounded-full bg-card border border-border shadow-neumorphic">
          <span className="text-sm font-bold text-foreground tabular-nums">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.letter}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="w-32 h-32 rounded-3xl bg-card border border-border shadow-neumorphic-elevated flex items-center justify-center mb-10"
          >
            <span className="text-5xl font-black text-foreground">{question.letter}</span>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {question.options.map((opt) => {
            const isSelected = selected !== null && String(opt) === String(selected);
            const isCorrectOpt = selected !== null && String(opt) === String(question.correct);
            let bg = "bg-card border-border";
            if (isSelected && isCorrect) bg = "bg-success/20 border-success";
            else if (isSelected && !isCorrect) bg = "bg-destructive/20 border-destructive";
            else if (isCorrectOpt && selected !== null) bg = "bg-success/20 border-success";

            return (
              <motion.button
                key={String(opt)}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSelect(opt)}
                className={`${bg} border rounded-2xl py-5 text-center font-bold text-lg text-foreground shadow-neumorphic transition-colors`}
              >
                {String(opt)}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pb-8 pt-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">{stats.attempted}</span> attempted
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handlePause}
          className="w-12 h-12 rounded-full bg-card border border-border shadow-neumorphic flex items-center justify-center"
        >
          {paused ? <Play size={20} className="text-foreground" /> : <Pause size={20} className="text-foreground" />}
        </motion.button>
      </div>
    </div>
  );
}
