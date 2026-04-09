import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";

const alphabet = Array.from({ length: 26 }, (_, i) => ({
  letter: String.fromCharCode(65 + i),
  value: i + 1,
}));



const tips = [
  "Try to memorise alphabet place values at random before going to bed for just 5 mins daily. Consistency beats cramming!",
  "Take a paragraph from any favourite book and convert every letter into its number. This builds speed naturally.",
  "Focus on accuracy first — speed will eventually improve with time automatically. Don't rush the process.",
];

export default function AlphabetValuesScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-32 bg-background">
        <div className="pt-12 px-5">
          <div className="inline-flex items-center px-4 py-2 rounded-xl glass-effect bg-card/60 border border-border shadow-neumorphic mb-4">
            <span className="text-base font-black tracking-tight text-foreground">REAZN</span>
          </div>
          <div className="h-px bg-border mb-4" />

          <div className="flex items-center gap-3 mb-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
              <ArrowLeft size={18} className="text-foreground" />
            </motion.button>
            <h1 className="text-hero text-foreground">ALPHABET<br />PLACE VALUE</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Master the position of every letter with smart tricks — no need to memorise EJOTY!</p>
        </div>

        {/* Alphabet Grid */}
        <div className="px-5 mb-6">
          <PressableCard className="p-3">
            <div className="grid grid-cols-6 gap-1.5">
              {alphabet.map((a, i) => (
                <motion.div
                  key={a.letter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="flex flex-col items-center py-2 rounded-lg bg-secondary"
                >
                  <span className="text-sm font-black text-foreground">{a.letter}</span>
                  <span className="text-[10px] font-semibold text-muted-foreground">{a.value}</span>
                </motion.div>
              ))}
            </div>
          </PressableCard>
        </div>



        {/* Developer Tips */}
        <div className="px-5 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={14} className="text-muted-foreground" />
            <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground">TIPS BY PIYUSH</p>
          </div>
          <div className="space-y-2">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <PressableCard className="p-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-black text-muted-foreground shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="text-xs text-foreground leading-relaxed">{tip}</p>
                  </div>
                </PressableCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
