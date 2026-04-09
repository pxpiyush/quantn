import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Trash2, RotateCcw, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";
import { getMistakes, clearMistakes, removeMistake, type MistakeEntry } from "@/lib/mistake-journal";
import { sanitize } from "@/data/questions";

export default function MistakeJournalScreen() {
  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState<MistakeEntry[]>(() => getMistakes());
  const [filter, setFilter] = useState<string>("all");
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(mistakes.map((m) => m.category));
    return Array.from(cats);
  }, [mistakes]);

  const filtered = useMemo(
    () => (filter === "all" ? mistakes : mistakes.filter((m) => m.category === filter)),
    [mistakes, filter]
  );

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    mistakes.forEach((m) => {
      stats[m.category] = (stats[m.category] || 0) + 1;
    });
    return stats;
  }, [mistakes]);

  const handleClear = () => {
    clearMistakes();
    setMistakes([]);
    setShowClearConfirm(false);
  };

  const handleRemove = (question: string) => {
    removeMistake(question);
    setMistakes(getMistakes());
  };

  const handleRetry = () => {
    const retryQuestions = filtered.map((m) => ({
      question: m.question,
      options: m.options,
      correct_option: m.correct_option,
      explanation: m.explanation,
      exam: m.exam,
    }));
    navigate("/exams/game/mistakes/" + retryQuestions.length, {
      state: { customQuestions: retryQuestions, category: "mistakes" },
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
            hero="MISTAKES"
            subtitle="Review questions you got wrong. Learn from your errors and retry them to strengthen your weak areas."
          />
        </div>

        {/* Weakness summary */}
        {mistakes.length > 0 && (
          <div className="px-6 mt-4">
            <div className="flex gap-2 flex-wrap">
              {Object.entries(categoryStats).map(([cat, count]) => (
                <motion.span
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-xs font-semibold text-destructive"
                >
                  {cat}: {count}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        {categories.length > 1 && (
          <div className="px-6 mt-4 flex gap-2 overflow-x-auto no-scrollbar">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${
                filter === "all" ? "bg-foreground text-background border-foreground" : "bg-secondary text-foreground border-border"
              }`}
            >
              All ({mistakes.length})
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${
                  filter === cat ? "bg-foreground text-background border-foreground" : "bg-secondary text-foreground border-border"
                }`}
              >
                {cat} ({categoryStats[cat]})
              </motion.button>
            ))}
          </div>
        )}

        {/* Actions */}
        {filtered.length > 0 && (
          <div className="px-6 mt-4 flex gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleRetry}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated"
            >
              <RotateCcw size={16} />
              Retry Mistakes ({filtered.length})
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowClearConfirm(true)}
              className="px-4 py-3 rounded-xl bg-destructive/10 text-destructive font-semibold text-sm border border-destructive/20"
            >
              <Trash2 size={16} />
            </motion.button>
          </div>
        )}

        {/* Questions list */}
        <div className="px-6 mt-4 space-y-3">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <AlertTriangle size={40} className="text-muted-foreground/30 mb-4" />
              <p className="text-sm font-semibold text-muted-foreground">No mistakes yet</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Questions you answer incorrectly will appear here</p>
            </div>
          ) : (
            filtered.map((m, i) => (
              <motion.div
                key={m.question + i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <PressableCard lift onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-relaxed line-clamp-2">
                        {sanitize(m.question)}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/10 text-destructive font-semibold">
                          Your: {sanitize(m.userAnswer)}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-success/10 text-success font-semibold">
                          Correct: {sanitize(m.correct_option)}
                        </span>
                      </div>
                    </div>
                    {expandedIdx === i ? <ChevronUp size={16} className="text-muted-foreground mt-1" /> : <ChevronDown size={16} className="text-muted-foreground mt-1" />}
                  </div>

                  {expandedIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-3 pt-3 border-t border-border"
                    >
                      {m.explanation && (
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{sanitize(m.explanation)}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground">{m.category}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(m.question);
                          }}
                          className="text-[10px] text-destructive font-semibold"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </PressableCard>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Clear confirmation */}
      {showClearConfirm && (
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
            <h3 className="text-lg font-bold text-foreground mb-2">Clear All Mistakes?</h3>
            <p className="text-sm text-muted-foreground mb-6">This will permanently remove all {mistakes.length} recorded mistakes.</p>
            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm border border-border"
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleClear}
                className="flex-1 py-3 rounded-xl bg-destructive text-destructive-foreground font-semibold text-sm"
              >
                Clear All
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </PageTransition>
  );
}
