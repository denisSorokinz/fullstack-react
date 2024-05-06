"use client";

import { BASE_NEXT_URL } from "@/constants";
import { fetchCarListings } from "@/lib";
import { getAuthorizedResource } from "@/lib/actions";
import {
  DashboardStoreState,
  DashboardStore,
  createDashboardStore,
} from "@/stores/dashboard";
import {
  ListingsStore,
  ListingsStoreState,
  createListingsStore,
} from "@/stores/listings";
import { CarListing } from "@/types/listings";
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const ListingsContext = createContext<ListingsStore | null>(null);

export const ListingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [listings, setListings] = useState<ListingsStoreState["listings"]>([]);
  const [pagination, setPagination] = useState<
    ListingsStoreState["pagination"]
  >({ page: 1, pageSize: 20, totalItems: 0 });
  const [favoriteIds, setFavoriteIds] = useState<
    ListingsStoreState["favoriteIds"]
  >([]);

  const initProps: Partial<ListingsStoreState> = {
    listings,
    favoriteIds,
    pagination,
    view: "list",
  };

  useEffect(() => {
    const cb = async () => {
      const { listings: nextListings, pagination: nextPagination } =
        (await fetchCarListings())!;
      setListings(nextListings!);
      setPagination(nextPagination!);

      const res = await getAuthorizedResource<{
        favorites: Array<CarListing["id"]>;
      }>(`${BASE_NEXT_URL}/users/favorites`);
      const nextFavoriteIds = res.success && res.data?.favorites;
      if (nextFavoriteIds) setFavoriteIds(nextFavoriteIds);
    };

    cb();
  }, []);

  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.setState((store) => ({ ...store, ...initProps }));
    }
  }, [listings, pagination, favoriteIds]);

  const storeRef = useRef<ListingsStore>();
  if (!storeRef.current) storeRef.current = createListingsStore(initProps);

  return (
    <ListingsContext.Provider value={storeRef.current}>
      {children}
    </ListingsContext.Provider>
  );
};
