import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Divide, Equal } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const chapters = [
  { title: "Ratio", icon: Divide, subtitle: "Solve real exam questions on ratio and comparison problems", path: "/exams/setup/coding-decoding" },
  { title: "Proportion", icon: Equal, subtitle: "Previous year questions on direct and inverse proportion", path: "/exams/setup/alphabet" },
];

export default function VerbalPYQScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader
            hero="ARITHMETIC PYQs"
            subtitle="Practice previous year questions chapter-wise. Pick a topic and solve real exam questions to understand patterns."
          />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {chapters.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <PressableCard
                lift
                onClick={() => navigate(c.path)}
                className="flex items-center gap-4"
              >
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
      </div>
    </PageTransition>
  );
}