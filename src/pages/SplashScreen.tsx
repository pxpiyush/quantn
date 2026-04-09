import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/practice", { replace: true }), 600);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-massive animate-pulse-opacity text-foreground">REAZN</h1>
        <p className="text-xs font-semibold tracking-widest-custom text-muted-foreground mt-3">
          REASONING, REWIRED !
        </p>
      </motion.div>
      <p className="absolute bottom-8 text-xs text-muted-foreground tracking-widest-custom">
        by Fuselabs
      </p>
    </div>
  );
}
