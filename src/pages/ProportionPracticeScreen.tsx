import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProportionPracticeScreen() {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader hero="PROPORTION" subtitle="Practice direct, inverse and compound proportion problems." />
        </div>
        <div className="px-6 mt-6">
          <PressableCard className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-sm font-bold tracking-widest-custom text-muted-foreground">COMING SOON</p>
            <p className="text-xs text-muted-foreground mt-2">Proportion practice questions will be added here.</p>
          </PressableCard>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(-1)}
            className="mt-6 w-full py-4 rounded-2xl bg-secondary text-foreground font-bold text-sm tracking-widest-custom flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> BACK
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}
