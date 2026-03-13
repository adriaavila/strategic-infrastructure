import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-20 rounded-full border border-white/10 bg-white/5" />;
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-10 w-20 items-center rounded-full border border-foreground/10 bg-card/70 backdrop-blur-xl px-1.5 transition-colors hover:border-brand-secondary/30"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <span className="absolute inset-1 rounded-full bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-70" />
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-dark shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-10"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <span className="absolute left-3 flex items-center text-white/70 transition-opacity group-hover:text-white/90">
        <Moon className={`h-3.5 w-3.5 transition-opacity ${isDark ? "opacity-0" : "opacity-100"}`} />
      </span>
      <span className="absolute right-3 flex items-center text-foreground/70 transition-opacity group-hover:text-foreground/90">
        <Sun className={`h-3.5 w-3.5 transition-opacity ${isDark ? "opacity-100" : "opacity-0"}`} />
      </span>
    </button>
  );
};
