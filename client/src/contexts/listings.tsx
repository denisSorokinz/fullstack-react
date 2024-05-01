"use client";

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
import { FC, PropsWithChildren, createContext, useRef } from "react";

export const ListingsContext = createContext<ListingsStore | null>(null);

export type ListingsProviderProps = {
  initProps?: Partial<ListingsStoreState>;
};
export const ListingsProvider: FC<PropsWithChildren<ListingsProviderProps>> = ({
  initProps,
  children,
}) => {
  const storeRef = useRef<ListingsStore>();

  // storeRef.current =
  //   storeRef.current || store || createListingsStore(initProps);

  console.log("[render provider]", { refStore: storeRef.current, initProps });
  if (!storeRef.current) {
    console.log("init", { initProps });

    storeRef.current = createListingsStore(initProps);
  }

  return (
    <ListingsContext.Provider value={storeRef.current}>
      {children}
    </ListingsContext.Provider>
  );
};
