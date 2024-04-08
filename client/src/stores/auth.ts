import { create } from "zustand";

type State = {
  accessToken: string | null;
  user: {
    id: number;
    email: string;
  } | null;
};

type Actions = {
  updateAccessToken: (nextToken: State["accessToken"]) => void;
};

const useAuthStore = create<State & Actions>()((set) => ({
  accessToken: null,
  user: null,
  updateAccessToken: (nextToken) => set({ accessToken: nextToken }),
}));

export { useAuthStore };
