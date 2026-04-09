import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CursorGlow() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme !== "dark") return;
    const el = ref.current;
    if (!el) return;

    let raf: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
        el.style.opacity = "1";
      });
    };
    const onLeave = () => { el.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return <div ref={ref} className="cursor-glow" style={{ opacity: 0 }} />;
}
