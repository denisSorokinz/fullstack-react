"use client";

import { THEMES, useThemeStore } from "@/stores/theme";
import { Button } from "../shadcn/button";
import { DarkTheme, LightTheme } from "../icons";

type ThemeType = "light" | "dark";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore((store) => ({
    theme: store.theme,
    toggleTheme: store.toggleTheme,
  }));

  return (
    <Button onClick={toggleTheme} variant={"ghost"} className="transition-none">
      {theme === THEMES.LIGHT && <DarkTheme />}
      {theme === THEMES.DARK && <LightTheme />}
    </Button>
  );
};

export default ThemeToggle;
