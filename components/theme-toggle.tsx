"use client";

import { Sparkles, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@wrksz/themes/client";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {isDark ? (
        <MoonStar className="h-5 w-5 transition-all duration-300" />
      ) : (
        <Sparkles className="h-5 w-5 transition-all duration-300" />
      )}
    </Button>
  );
}