import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum THEMES {
  "LIGHT",
  "DARK",
}

type State = {
  theme: THEMES.LIGHT | THEMES.DARK | null;
  didInit: boolean;
};

type Actions = {
  setTheme: (nextTheme: State["theme"]) => void;
  setDidInit: (nextValue: State["didInit"]) => void;
  onInit: () => void;
  onPathChange: () => void;
  toggleTheme: () => void;
};

const useThemeStore = create(
  persist<State & Actions>(
    (set, get) => ({
      theme: null,
      didInit: false,
      onInit: () => {
        console.log("init with:", get().theme);

        const nextTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? THEMES.DARK
          : THEMES.LIGHT;

        // if (nextTheme === THEMES.LIGHT)
        //   document.documentElement.classList.remove("dark");
        // if (nextTheme === THEMES.DARK)
        //   document.documentElement.classList.add("dark");

        set({ theme: nextTheme });
      },
      onPathChange: () => {
        const { theme: current } = get();
        console.log({ current });

        if (current === THEMES.LIGHT)
          document.documentElement.classList.remove("dark");
        if (current === THEMES.DARK)
          document.documentElement.classList.add("dark");
      },
      setDidInit: (nextValue) => set({ didInit: nextValue }),
      toggleTheme: () => {
        const { theme: current } = get();

        if (current === THEMES.LIGHT)
          document.documentElement.classList.add("dark");
        if (current === THEMES.DARK)
          document.documentElement.classList.remove("dark");

        set(() => ({
          theme: current === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
        }));
      },
      setTheme: (nextTheme) => ({ theme: nextTheme }),
    }),
    { name: "theme-storage" }
  )
);

export { useThemeStore, type State as ThemeState };
