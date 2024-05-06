import { ListViewType } from "@/components/carListings/List";
import { ListingsContext } from "@/contexts/listings";
import { fetchCarListings } from "@/lib";
import { toggleListingFavorites } from "@/lib/actions";
import { FilterValuesType } from "@/types/filters";
import { PaginationMeta } from "@/types/http";
import { CarListing } from "@/types/listings";
import { useContext } from "react";
import { createStore, useStore } from "zustand";

type State = {
  listings: CarListing[];
  view: ListViewType;
  favoriteIds: Array<CarListing["id"]>;
  pagination: PaginationMeta;
};

type Actions = {
  setListings: (nextValue: State["listings"]) => void;
  setPagination: (nextValue: State["pagination"]) => void;
  onToggleFavorite: (listingId: State["listings"][number]["id"]) => void;
  onChangePage: (
    nextPage: State["pagination"]["page"],
    filters?: Partial<FilterValuesType>
  ) => void;
  selectListings: () => State["listings"];
  selectValue: <T extends keyof State>(key: T) => State[T];
};

export type ListingsStore = ReturnType<typeof createListingsStore>;
export type ListingsStoreState = State & Actions;

export const createListingsStore = (initProps?: Partial<State>) => {
  const DEFAULT_PROPS: State = {
    listings: [],
    favoriteIds: [],
    view: "cards",
    pagination: {
      page: 1,
      pageSize: 20,
      totalItems: 0,
    },
  };

  return createStore<State & Actions>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setListings: (nextValue) => set({ listings: nextValue }),
    setPagination: (nextValue) => set({ pagination: nextValue }),
    onToggleFavorite: async (listingId) => {
      const { success, data } = await toggleListingFavorites(listingId);

      if (!success) return;

      return set(({ favoriteIds }) => {
        const nextFavoriteIds = favoriteIds.filter((id) => id !== listingId);
        if (data!.isFavorited) nextFavoriteIds.push(listingId);

        console.log(favoriteIds, nextFavoriteIds);

        return { favoriteIds: nextFavoriteIds };
      });
    },
    onChangePage: async (nextPage, filters) => {
      console.log("[onChangePage]");

      const { pagination } = get();

      const nextPaginationMeta: typeof pagination = {
        ...pagination,
        page: nextPage,
      };

      const { listings: nextListings } = (await fetchCarListings(
        filters,
        nextPaginationMeta
      ))!;

      return set({ pagination: nextPaginationMeta, listings: nextListings });
    },
    selectListings: () => get().listings,
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
