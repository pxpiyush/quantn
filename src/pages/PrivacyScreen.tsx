import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Server, Eye, Cookie, Heart, FileText, Scale, Ban } from "lucide-react";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    heading: "Terms of Use",
    points: [
      { icon: FileText, title: "Free to Use", desc: "NUMEN is completely free. You may use it for personal, non-commercial exam preparation purposes." },
      { icon: Scale, title: "Content Ownership", desc: "All questions, explanations, and content on NUMEN are original or curated by us. Reproduction, redistribution, or scraping of content is not permitted." },
      { icon: Ban, title: "Fair Use Only", desc: "Do not attempt to reverse-engineer, copy, or redistribute any part of this platform. We reserve the right to update these terms at any time." },
    ],
  },
  {
    heading: "Your Data, Your Device",
    points: [
      { icon: ShieldCheck, title: "Zero Data Collection", desc: "We never collect, store, or share any personal information. Not your name, not your email — nothing." },
      { icon: Server, title: "Everything Stays Local", desc: "Your progress, scores, bookmarks, and mistakes are saved only on your device using local storage. Clearing browser data removes everything." },
    ],
  },
  {
    heading: "What We Don't Do",
    points: [
      { icon: Eye, title: "No Tracking or Analytics", desc: "We don't use Google Analytics, Facebook Pixel, or any tracking tools. Your activity is never monitored." },
      { icon: Cookie, title: "No Cookies", desc: "NUMEN doesn't use cookies of any kind — no session cookies, no advertising cookies, nothing." },
    ],
  },
  {
    heading: "In Simple Words",
    points: [
      { icon: Heart, title: "Built for You, Not Your Data", desc: "NUMEN was made to help you learn mathematics — that's it. We don't run ads and we don't sell data. Your privacy is not a feature, it's a promise." },
    ],
  },
];

export default function PrivacyScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background px-5 pt-14 pb-10">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft size={24} className="text-foreground" />
        </motion.button>

        <div className="inline-flex items-center px-4 py-2 rounded-xl glass-effect bg-card/60 border border-border shadow-neumorphic mb-3">
          <span className="text-base font-black tracking-tight text-foreground">NUMEN</span>
        </div>
        <div className="h-px bg-border mb-4" />
        <h1 className="text-hero text-foreground mb-2">TERMS & PRIVACY</h1>
        <p className="text-xs text-muted-foreground leading-relaxed mb-8">
          Simple, honest, and jargon-free. Here's how NUMEN works and what we promise.
        </p>

        <div className="space-y-8">
          {sections.map((section, si) => (
            <div key={section.heading}>
              <p className="text-[10px] font-bold tracking-widest-custom text-muted-foreground mb-3 px-1">{section.heading.toUpperCase()}</p>
              <div className="space-y-3">
                {section.points.map((p, i) => (
                  <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: si * 0.1 + i * 0.06 }}>
                    <PressableCard className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <p.icon size={18} className="text-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground mb-1">{p.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </PressableCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-10">Last updated: April 2026</p>
      </div>
    </PageTransition>
  );
}