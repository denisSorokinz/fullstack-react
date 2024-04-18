import { DashboardContext } from "@/contexts/dashboard";
import { fetchBrands, fetchModelsByBrand } from "@/lib";
import { DashboardStoreState as DashboardState } from "@/stores/dashboard";
import { FilterOption, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { useContext } from "react";
import { create, createStore, useStore } from "zustand";

type State = {
  filterData: FiltersType | null;
  listings: CarListing[];
  editListingOptions: {
    brands: FilterOption[];
    models: Map<CarListing["brandId"], FilterOption[]>;
  };
};

type Actions = {
  setFilterData: (nextValue: State["filterData"]) => void;
  setListings: (nextValue: State["listings"]) => void;
  onToggleEditing: (brandId: CarListing["brandId"]) => void;
  updateStore: (nextValue: Partial<State>) => void;
};

export type DashboardStore = ReturnType<typeof createDashboardStore>;
export type DashboardStoreState = State & Actions;

const createDashboardStore = (
  initProps?: Partial<State> & { brands?: FilterOption[] }
) => {
  const DEFAULT_PROPS: State = {
    filterData: null,
    listings: [],
    editListingOptions: {
      brands: initProps?.brands || [],
      models: new Map(),
    } as any,
  };

  initProps && delete initProps["brands"];

  return createStore<State & Actions>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setFilterData: (nextValue) => set({ filterData: nextValue }),
    setListings: (nextValue) => set({ listings: nextValue }),
    onToggleEditing: async (brandId) => {
      const options = get().editListingOptions;
      const nextOptions = { ...options };

      if (options.brands.length === 0) {
        const brands = await fetchBrands();
        if (brands) nextOptions.brands = brands;
      }

      if (!options.models.get(brandId)) {
        const models = await fetchModelsByBrand(brandId);
        if (models) nextOptions.models.set(brandId, models);
      }

      return set({ editListingOptions: nextOptions });
    },
    updateStore: (nextValue) => set({ ...nextValue }),
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

export { createDashboardStore };
