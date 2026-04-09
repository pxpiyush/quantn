import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookmarkX, Play, Bookmark, ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";
import { getBookmarks, removeBookmark, clearBookmarks, type BookmarkEntry } from "@/lib/bookmarks";
import { sanitize } from "@/data/questions";

export default function BookmarksScreen() {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState<BookmarkEntry[]>(() => getBookmarks());
  const [filter, setFilter] = useState<string>("all");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const categories = useMemo(() => Array.from(new Set(bookmarks.map((b) => b.category))), [bookmarks]);

  const filtered = useMemo(
    () => (filter === "all" ? bookmarks : bookmarks.filter((b) => b.category === filter)),
    [bookmarks, filter]
  );

  const handleRemove = (question: string) => {
    removeBookmark(question);
    setBookmarks(getBookmarks());
  };

  const handleClear = () => {
    clearBookmarks();
    setBookmarks([]);
    setShowClearConfirm(false);
  };

  const handlePractice = () => {
    const questions = filtered.map((b) => ({
      question: b.question,
      options: b.options,
      correct_option: b.correct_option,
      explanation: b.explanation,
      exam: b.exam,
    }));
    navigate("/exams/game/bookmarks/" + questions.length, {
      state: { customQuestions: questions, category: "bookmarks" },
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
            hero="BOOKMARKS"
            subtitle="Questions you saved for later review. Practice them again to master tricky concepts and build confidence."
          />
        </div>

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
              All ({bookmarks.length})
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
                {cat}
              </motion.button>
            ))}
          </div>
        )}

        {/* Actions */}
        {filtered.length > 0 && (
          <div className="px-6 mt-4 flex gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handlePractice}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-neumorphic-elevated"
            >
              <Play size={16} />
              Practice Bookmarks ({filtered.length})
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowClearConfirm(true)}
              className="px-4 py-3 rounded-xl bg-destructive/10 text-destructive font-semibold text-sm border border-destructive/20"
            >
              <BookmarkX size={16} />
            </motion.button>
          </div>
        )}

        {/* Bookmarks list */}
        <div className="px-6 mt-4 space-y-3">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Bookmark size={40} className="text-muted-foreground/30 mb-4" />
              <p className="text-sm font-semibold text-muted-foreground">No bookmarks yet</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Tap the bookmark icon during exams to save questions
              </p>
            </div>
          ) : (
            filtered.map((b, i) => (
              <motion.div
                key={b.question + i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <PressableCard lift onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground leading-relaxed line-clamp-2">
                        {sanitize(b.question)}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">{b.category}</p>
                    </div>
                    {expandedIdx === i ? <ChevronUp size={16} className="text-muted-foreground mt-1" /> : <ChevronDown size={16} className="text-muted-foreground mt-1" />}
                  </div>

                  {expandedIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-3 pt-3 border-t border-border"
                    >
                      <p className="text-xs text-muted-foreground mb-2">
                        Answer: <span className="font-semibold text-success">{sanitize(b.correct_option)}</span>
                      </p>
                      {b.explanation && (
                        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{sanitize(b.explanation)}</p>
                      )}
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(b.question);
                        }}
                        className="text-[10px] text-destructive font-semibold"
                      >
                        Remove Bookmark
                      </motion.button>
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
            <h3 className="text-lg font-bold text-foreground mb-2">Clear All Bookmarks?</h3>
            <p className="text-sm text-muted-foreground mb-6">This will remove all {bookmarks.length} saved bookmarks.</p>
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
