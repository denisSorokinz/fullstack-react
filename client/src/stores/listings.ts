import { ListingsContext } from "@/contexts/listings";
import { CarListing } from "@/types/listings";
import { useContext } from "react";
import { createStore, useStore } from "zustand";

type State = {
  listings: CarListing[];
  view: "cards" | "list";
  favoriteIds: Array<CarListing["id"]>;
  page: number;
};

type Actions = {
  setListings: (nextValue: State["listings"]) => void;
  onToggleFavorite: (listingId: State["listings"][number]["id"]) => void;
  onChangePage: (nextPage: State["page"]) => void;
  selectValue: <T extends keyof State>(key: T) => State[T];
};

export type ListingsStore = ReturnType<typeof createDashboardStore>;
export type ListingsStoreState = State & Actions;

const createDashboardStore = (initProps?: Partial<State>) => {
  const DEFAULT_PROPS: State = {
    listings: [],
    favoriteIds: [],
    page: 1,
    view: "cards",
  };

  return createStore<State & Actions>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setListings: (nextValue) => set({ listings: nextValue }),
    onToggleFavorite: (listingId) => {
      // todo
    },
    onChangePage: (nextPage) => {
      // todo
    },
    selectValue: (key) => get()[key],
  }));
};

export const useListingsStore = <T>(
  selector: (state: State & Actions) => T
): T => {
  const store = useContext(ListingsContext);

  if (!store) throw new Error("missing ListingsContext.Provider");

  return useStore(store, selector);
};
