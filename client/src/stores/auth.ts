import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { decode } from "jsonwebtoken";
import { AuthJWTPayload } from "@/types/http";
import { ViewPropertiesLens } from "@/lib/lenses";

type State = {
  user: {
    id: number;
    email: string;
  } | null;
};

type Actions = {
  setUser: (user: NonNullable<State["user"]>) => void;
  invalidateSession: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      invalidateSession: () => set({ user: null }),
    }),
    { name: "auth-storage" }
  )
);

// const useAuthStore = create<State & Actions>((set) => ({
//   user: null,
//   login: (user) => {
//     console.log("[login]");
//     set({ user });
//   },
//   logout: () => set({ user: null }),
// }));

export { useAuthStore, type State as AuthStoreState };
