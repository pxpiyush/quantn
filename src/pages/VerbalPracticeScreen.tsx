import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Divide, Equal, Lightbulb } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const chapters = [
  { icon: Divide, title: "Ratio", subtitle: "Practice comparing quantities and simplifying ratios", path: "/practice/ratio" },
  { icon: Equal, title: "Proportion", subtitle: "Master direct, inverse and compound proportions", path: "/practice/proportion" },
];

export default function VerbalPracticeScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader
            hero="ARITHMETIC"
            subtitle="Practice fundamental arithmetic concepts — ratio, proportion and more to build speed and accuracy."
          />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {chapters.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <PressableCard lift onClick={() => navigate(c.path)} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <c.icon size={20} className="text-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                </div>
              </PressableCard>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom,8px)+12px)] left-1/2 -translate-x-1/2 w-full max-w-md px-5 z-40">
          <PressableCard className="!bg-card/95 border-dashed glass-effect">
            <div className="flex items-start gap-3">
              <Lightbulb size={18} className="text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold tracking-widest-custom text-muted-foreground mb-1">EXAM TIP</p>
                <p className="text-sm font-bold text-foreground">a:b = a/b</p>
                <p className="text-xs text-muted-foreground mt-1">Ratio is just a fraction. Always simplify to lowest terms first!</p>
              </div>
            </div>
          </PressableCard>
        </div>
      </div>
    </PageTransition>
  );
}