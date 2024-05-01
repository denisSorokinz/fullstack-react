import { DashboardContext } from "@/contexts/dashboard";
import { fetchBrands, fetchModelsByBrand } from "@/lib";
import { DashboardStoreState as DashboardState } from "@/stores/dashboard";
import { FilterOption, FiltersType } from "@/types/filters";
import { CarListing } from "@/types/listings";
import { useContext } from "react";
import { create, createStore, useStore } from "zustand";

type State = {
  filterData: FiltersType | null;
  editListingOptions: {
    brands: FilterOption[];
    models: Map<CarListing["brandId"], FilterOption[]>;
    editingListingId: number | null;
    isPending: boolean;
  };
};

type Actions = {
  setFilterData: (nextValue: State["filterData"]) => void;
  selectValue: <T extends keyof State>(key: T) => State[T];
  setIsPendingEdit: (
    nextIsPending: State["editListingOptions"]["isPending"]
  ) => void;
  onToggleEditing: (listing: CarListing) => void;
  updateStore: (nextValue: Partial<State>) => void;
};

export type DashboardStore = ReturnType<typeof createDashboardStore>;
export type DashboardStoreState = State & Actions;

const createDashboardStore = (
  initProps?: Partial<State> & { brands?: FilterOption[] }
) => {
  const DEFAULT_PROPS: State = {
    filterData: null,
    editListingOptions: {
      brands: initProps?.brands || [],
      models: new Map(),
      editingListingId: null,
      isPending: false,
    },
  };

  initProps && delete initProps["brands"];

  return createStore<State & Actions>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setFilterData: (nextValue) => set({ filterData: nextValue }),
    selectValue: (key) => get()[key],
    setIsPendingEdit: (nextIsPending) => {
      const nextOptions: State["editListingOptions"] = get().editListingOptions;
      nextOptions.isPending = nextIsPending;

      return set({ editListingOptions: nextOptions });
    },
    onToggleEditing: async (listing) => {
      const options = get().editListingOptions;
      const nextOptions = {
        ...options,
        editingListingId:
          options.editingListingId !== listing.id ? listing.id : null,
      };

      if (options.brands.length === 0) {
        const brands = await fetchBrands();
        if (brands) nextOptions.brands = brands;
      }

      if (!options.models.get(listing.brandId)) {
        const models = await fetchModelsByBrand(listing.brandId);
        if (models) nextOptions.models.set(listing.brandId, models);
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
