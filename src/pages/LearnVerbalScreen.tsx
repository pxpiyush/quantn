import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Divide, Equal, Clock, Lock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const concepts = [
  { icon: Divide, title: "Ratio", desc: "Learn how to compare quantities, simplify ratios and solve problems", path: "/learn/ratio" },
  { icon: Equal, title: "Proportion", desc: "Master direct, inverse and compound proportion concepts", path: "/learn/proportion" },
  { icon: Clock, title: "Percentage", desc: "Percentage conversions and applications — coming soon", path: null },
];

export default function LearnVerbalScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader hero="ARITHMETIC" subtitle="Learn the core arithmetic concepts — ratio, proportion, and percentage tricks that appear in every exam." />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {concepts.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <PressableCard
                lift={!!c.path}
                onClick={() => c.path && navigate(c.path)}
                className={`flex items-center gap-4 ${!c.path ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  {!c.path ? <Lock size={20} className="text-foreground" /> : <c.icon size={20} className="text-foreground" />}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
                {!c.path && <Lock size={14} className="text-muted-foreground" />}
              </PressableCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}