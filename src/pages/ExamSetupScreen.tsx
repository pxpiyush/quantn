// Exam setup with category support
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";
import { codingDecodingQuestions } from "@/data/coding-decoding";
import { pyqQuestions } from "@/data/pyq-questions";

const configOptions = [
  { count: 25, label: "25 QUESTIONS", sub: "Quick Round" },
  { count: 50, label: "50 QUESTIONS", sub: "Standard" },
  { count: 100, label: "100 QUESTIONS", sub: "Full Test" },
  { count: Infinity, label: "UNLIMITED", sub: "All Questions" },
];

const categoryMeta: Record<string, { title: string; subtitle: string; maxQ: number }> = {
  "coding-decoding": {
    title: "CODING & DECODING",
    subtitle: "Crack the code patterns from previous year SSC & competitive exam questions. Test your decoding speed and accuracy.",
    maxQ: codingDecodingQuestions.length,
  },
  alphabet: {
    title: "ALPHABET TEST",
    subtitle: "Master alphabet positions, reverse letters and rearrangement puzzles from real exam papers.",
    maxQ: pyqQuestions.length,
  },
};

export default function ExamSetupScreen() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const meta = categoryMeta[category || "alphabet"] || categoryMeta.alphabet;

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader hero={meta.title} subtitle={meta.subtitle} />
        </div>

        <div className="px-6 space-y-4 mt-6">
          {configOptions.map((c, i) => {
            const isUnlimited = c.count === Infinity;
            const actualCount = isUnlimited ? meta.maxQ : c.count;
            const available = actualCount <= meta.maxQ;
            return (
              <motion.div key={isUnlimited ? "unlimited" : c.count} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                <PressableCard
                  lift={available}
                  onClick={() => available && navigate(`/exams/game/${category}/${actualCount}`)}
                  className={`flex flex-col items-center justify-center py-8 ${!available ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  <p className="text-3xl font-black text-foreground">{isUnlimited ? `${meta.maxQ} QUESTIONS` : c.label}</p>
                  <p className="text-xs font-semibold tracking-widest-custom text-muted-foreground mt-1">{c.sub.toUpperCase()}</p>
                  {!available && <p className="text-[10px] text-muted-foreground mt-2">Only {meta.maxQ} questions available</p>}
                </PressableCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
