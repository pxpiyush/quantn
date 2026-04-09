import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Sigma, Lock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const domains = [
  {
    icon: Calculator,
    title: "Arithmetic",
    subtitle: "Ratio, Proportion, Percentage, Profit & Loss and fundamental concepts",
    path: "/learn/arithmetic",
    locked: false,
  },
  {
    icon: Sigma,
    title: "Advanced Maths",
    subtitle: "Algebra, Trigonometry, Geometry, Mensuration — coming soon",
    path: null,
    locked: true,
  },
];

export default function LearnTab() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-44 bg-background">
        <div className="pt-12">
          <PageHeader hero="CONCEPTS" subtitle="Master the fundamental concepts behind every mathematics topic. Choose a domain to explore formulas, techniques and shortcuts." />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {domains.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <PressableCard
                lift={!d.locked}
                onClick={() => !d.locked && d.path && navigate(d.path)}
                className={`flex items-center gap-4 ${d.locked ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  {d.locked ? <Lock size={20} className="text-foreground" /> : <d.icon size={20} className="text-foreground" />}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground">{d.title}</p>
                  <p className="text-xs text-muted-foreground">{d.subtitle}</p>
                </div>
                {d.locked && <Lock size={14} className="text-muted-foreground" />}
              </PressableCard>
            </motion.div>
          ))}
        </div>

        {/* Practice Now */}
        <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom,8px)+12px)] left-1/2 -translate-x-1/2 w-full max-w-md px-5 z-40">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/practice")}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm tracking-widest-custom shadow-neumorphic-elevated"
          >
            PRACTICE NOW
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}