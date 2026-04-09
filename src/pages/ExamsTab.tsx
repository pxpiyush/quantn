import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, FileText, Lock, Calculator, Sigma } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

export default function ExamsTab() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader
            hero="EXAMS"
            subtitle="Challenge yourself with mock tests or solve previous year questions. Pick a mode below to start your exam preparation."
          />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {/* Mock Mode Section */}
          <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground pt-2">MOCK MODE</p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <PressableCard
              lift
              onClick={() => navigate("/mock/setup")}
              className="bg-primary/5 border-primary/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">Mock Test</p>
                  <p className="text-xs text-muted-foreground">Full simulation with timer, negative marking and mixed questions from every chapter</p>
                </div>
              </div>
            </PressableCard>
          </motion.div>

          {/* PYQs Section */}
          <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground pt-4">PREVIOUS YEAR QUESTIONS</p>

          {/* Arithmetic */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            <PressableCard
              lift
              onClick={() => navigate("/exams/pyq/verbal")}
              className="flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Calculator size={20} className="text-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-foreground">Arithmetic</p>
                <p className="text-xs text-muted-foreground">Ratio, Proportion and more chapter-wise PYQs</p>
              </div>
            </PressableCard>
          </motion.div>

          {/* Advanced Maths */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            <PressableCard
              className="flex items-center gap-4 opacity-50 cursor-not-allowed"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Lock size={20} className="text-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-foreground">Advanced Maths</p>
                <p className="text-xs text-muted-foreground">Algebra, Trigonometry, Geometry, Mensuration — coming soon</p>
              </div>
              <Lock size={14} className="text-muted-foreground" />
            </PressableCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}