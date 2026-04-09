import { useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Target, FileText, User, FolderHeart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { path: "/learn", label: "LEARN", icon: BookOpen },
  { path: "/practice", label: "PRACTICE", icon: Target },
  { path: "/exams", label: "EXAMS", icon: FileText },
  { path: "/myspace", label: "MY SPACE", icon: FolderHeart },
  { path: "/about", label: "ABOUT", icon: User },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const hiddenPaths = ["/practice/game", "/exams/game", "/practice/results", "/exams/report", "/mock/game", "/mock/report"];
  if (hiddenPaths.some((p) => location.pathname.startsWith(p))) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md pb-[env(safe-area-inset-bottom,8px)]">
      <div className="mx-3 mb-3 glass-effect bg-card/85 dark:bg-card/75 rounded-2xl border border-border shadow-neumorphic-elevated flex items-center justify-around px-1 py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path || location.pathname.startsWith(tab.path + "/");
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all",
                isActive && "bg-primary shadow-neumorphic"
              )}
            >
              <motion.div
                animate={isActive ? { scale: 1.1, y: -1 } : { scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon
                  size={18}
                  className={cn("transition-colors", isActive ? "text-primary-foreground" : "text-muted-foreground")}
                />
              </motion.div>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[7px] font-bold tracking-widest-custom text-primary-foreground"
                >
                  {tab.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
