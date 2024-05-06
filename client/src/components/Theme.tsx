"use client";

import { THEMES, ThemeState, useThemeStore } from "@/stores/theme";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { StorageValue } from "zustand/middleware";

const Theme = () => {
  const pathname = usePathname();

  const { didInit, onInit, setDidInit, onPathChange, setTheme, theme } =
    useThemeStore((store) => ({
      didInit: store.didInit,
      onInit: store.onInit,
      setDidInit: store.setDidInit,
      onPathChange: store.onPathChange,
      setTheme: store.setTheme,
      theme: store.theme,
    }));

  useEffect(() => {
    let themeStorage = JSON.parse(
      localStorage.getItem("theme-storage") || "{}"
    ) as StorageValue<ThemeState>;
    let theme = themeStorage.state?.theme;
    console.log({ theme });

    if (theme === null) {
      onInit();
    }
  }, []);

  useEffect(() => {
    if (theme === THEMES.LIGHT)
      document.documentElement.classList.remove("dark");
    if (theme === THEMES.DARK) document.documentElement.classList.add("dark");
  }, [theme]);

  return <></>;
};

export default Theme;
