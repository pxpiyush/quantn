import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const durations = [
  { mins: 1, label: "1 MIN", sub: "Sprint" },
  { mins: 3, label: "3 MIN", sub: "Focus" },
  { mins: 5, label: "5 MIN", sub: "Endurance" },
];

export default function DurationScreen() {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader hero="DURATION" subtitle="Pick a time limit that suits your mood. Start small and build up your endurance over time." />
        </div>

        <div className="px-6 space-y-4 mt-6">
          {durations.map((d, i) => (
            <motion.div key={d.mins} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
              <PressableCard lift onClick={() => navigate(`/practice/game/${type}/${d.mins}`)} className="flex flex-col items-center justify-center py-8">
                <p className="text-3xl font-black text-foreground">{d.label}</p>
                <p className="text-xs font-semibold tracking-widest-custom text-muted-foreground mt-1">{d.sub.toUpperCase()}</p>
              </PressableCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
