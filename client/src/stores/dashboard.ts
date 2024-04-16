import { DashboardContext } from "@/contexts/dashboard";
import { DashboardProps as DashboardState } from "@/stores/dashboard";
import { FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { useContext } from "react";
import { create, createStore, useStore } from "zustand";

type State = {
  filterData: FiltersType | null;
  listings: CarListing[];
};

type Actions = {
  setFilterData: (nextValue: State["filterData"]) => void;
  setListings: (nextValue: State["listings"]) => void;
};

export type DashboardStore = ReturnType<typeof createDashboardStore>;

const createDashboardStore = (initProps?: Partial<State>) => {
  const DEFAULT_PROPS: State = {
    filterData: null,
    listings: [],
  };

  return createStore<State & Actions>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setFilterData: (nextValue) => set({ filterData: nextValue }),
    setListings: (nextValue) => set({ listings: nextValue }),
  }));
};

export const useDashboardStore = <T>(
  selector: (state: State & Actions) => T
): T => {
  const store = useContext(DashboardContext);

  if (!store) throw new Error("missing DashboardContext.Provider");

  return useStore(store, selector);
};

// const useDashboardStore = create<State & Actions>((set) => ({
//   filterData: null,
//   listings: [],
//   setFilterData: (nextValue) => set({ filterData: nextValue }),
//   setListings: (nextValue) => set({ listings: nextValue }),
// }));

export { createDashboardStore, type State as DashboardProps };
