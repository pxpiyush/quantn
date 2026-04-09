import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb, Star } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PressableCard from "@/components/PressableCard";

const pairs = [
  { left: "A", right: "Z", pos: [1, 26] },
  { left: "B", right: "Y", pos: [2, 25] },
  { left: "C", right: "X", pos: [3, 24] },
  { left: "D", right: "W", pos: [4, 23] },
  { left: "E", right: "V", pos: [5, 22] },
  { left: "F", right: "U", pos: [6, 21] },
  { left: "G", right: "T", pos: [7, 20] },
  { left: "H", right: "S", pos: [8, 19] },
  { left: "I", right: "R", pos: [9, 18] },
  { left: "J", right: "Q", pos: [10, 17] },
  { left: "K", right: "P", pos: [11, 16] },
  { left: "L", right: "O", pos: [12, 15] },
  { left: "M", right: "N", pos: [13, 14] },
];

const tricks = [
  { pair: "A ↔ Z", trick: "A-Z — easy to remember! 🔤" },
  { pair: "B ↔ Y", trick: "Bye 👋" },
  { pair: "C ↔ X", trick: "Crax 🍪" },
  { pair: "D ↔ W", trick: "Dew 🧃" },
  { pair: "E ↔ V", trick: "EV Cars 🚗 or Evening 🌆" },
  { pair: "F ↔ U", trick: "Fun 🔞" },
  { pair: "G ↔ T", trick: "GT650 🏍️ or GT Road" },
  { pair: "H ↔ S", trick: "High School 📚" },
  { pair: "I ↔ R", trick: "Indian Railways 🚆 or IR Sensor" },
  { pair: "J ↔ Q", trick: "Jacqueline 💃" },
  { pair: "K ↔ P", trick: "Kanpur (city) or PK (movie) 🎬" },
  { pair: "L ↔ O", trick: "Love 🫶" },
  { pair: "M ↔ N", trick: "Man 🦸‍♂️" },
];

const tips = [
  "Try to memorise reverse letter pairs at random before going to bed for just 5 mins daily. Consistency beats cramming!",
  "Take a paragraph from any favourite book and convert every word into its reverse letter form, word by word. This builds speed naturally.",
  "Focus on accuracy first — speed will eventually improve with time automatically. Don't rush the process.",
];

export default function ReverseLetterPairsScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-32 bg-background">
        <div className="pt-12 px-5">
          <div className="inline-flex items-center px-4 py-2 rounded-xl glass-effect bg-card/60 border border-border shadow-neumorphic mb-4">
            <span className="text-base font-black tracking-tight text-foreground">NUMEN</span>
          </div>
          <div className="h-px bg-border mb-4" />

          <div className="flex items-center gap-3 mb-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
              <ArrowLeft size={18} className="text-foreground" />
            </motion.button>
            <h1 className="text-hero text-foreground">REVERSE<br />LETTER PAIRS</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Every letter pair adds up to 27. Master them with fun memory tricks!</p>
        </div>

        {/* Pairs Grid */}
        <div className="px-5 mb-6">
          <PressableCard className="p-3">
            <div className="space-y-1.5">
              {pairs.map((p, i) => (
                <motion.div
                  key={p.left}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary"
                >
                  <span className="text-xs font-bold text-muted-foreground">{p.pos[0]}</span>
                  <span className="text-sm font-black text-foreground">{p.left}</span>
                  <span className="text-xs text-muted-foreground">↔</span>
                  <span className="text-sm font-black text-foreground">{p.right}</span>
                  <span className="text-xs font-bold text-muted-foreground">{p.pos[1]}</span>
                </motion.div>
              ))}
            </div>
          </PressableCard>
        </div>

        {/* Memory Tricks */}
        <div className="px-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Star size={14} className="text-muted-foreground" />
            <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground">SMART TRICKS</p>
          </div>
          <div className="space-y-2">
            {tricks.map((t, i) => (
              <motion.div
                key={t.pair}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.04 }}
              >
                <PressableCard className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-black text-foreground">{t.pair.replace(" ↔ ", "·")}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground">{t.pair}</p>
                    <p className="text-[11px] text-muted-foreground leading-snug">{t.trick}</p>
                  </div>
                </PressableCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tips */}
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
