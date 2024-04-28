"use client";

import {
  DashboardStoreState,
  DashboardStore,
  createDashboardStore,
} from "@/stores/dashboard";
import { ListingsStore, ListingsStoreState } from "@/stores/listings";
import { FilterOption } from "@/types/filters";
import { FC, PropsWithChildren, createContext, useRef } from "react";

export const ListingsContext = createContext<ListingsStore | null>(null);

export type ListingsProviderProps = { initProps: Partial<ListingsStoreState> };
export const ListingsProvider: FC<PropsWithChildren<ListingsProviderProps>> = ({
  children,
  initProps,
}) => {
  const store = useRef<ListingsStore>(null);
  if (!store.current) (store as any).current = createDashboardStore(initProps);

  return (
    <ListingsContext.Provider value={store.current}>
      {children}
    </ListingsContext.Provider>
  );
};
