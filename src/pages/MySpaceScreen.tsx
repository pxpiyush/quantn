import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookX, Bookmark, TrendingUp, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PressableCard from "@/components/PressableCard";
import PageTransition from "@/components/PageTransition";
import { getMistakes } from "@/lib/mistake-journal";
import { getBookmarks } from "@/lib/bookmarks";

const items = [
  {
    icon: BookX,
    title: "Mistake Journal",
    subtitle: "Review every wrong answer and retry your weak spots",
    path: "/mistakes",
    countFn: () => getMistakes().length,
  },
  {
    icon: Bookmark,
    title: "Bookmarks",
    subtitle: "Revisit questions you saved for later practice",
    path: "/bookmarks",
    countFn: () => getBookmarks().length,
  },
];

export default function MySpaceScreen() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pb-28 bg-background">
        <div className="pt-12">
          <PageHeader
            hero="MY SPACE"
            subtitle="Your personal study hub — track mistakes, review bookmarks, and monitor your progress all in one place."
          />
        </div>

        <div className="px-6 space-y-3 mt-4">
          {items.map((item, i) => {
            const count = item.countFn();
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <PressableCard
                  lift
                  onClick={() => navigate(item.path)}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  </div>
                  {count > 0 && (
                    <span className="text-xs font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  )}
                </PressableCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
