"use client";

import {
  DashboardStoreState,
  DashboardStore,
  createDashboardStore,
} from "@/stores/dashboard";
import { FilterOption } from "@/types/filters";
import {
  FC,
  PropsWithChildren,
  createContext,
  useRef,
} from "react";

export const DashboardContext = createContext<DashboardStore | null>(null);

export type DashboardProviderProps = { initProps: Partial<DashboardStoreState> & { brands?: FilterOption[] } };
export const DashboardProvider: FC<PropsWithChildren<DashboardProviderProps>> = ({
  children,
  initProps,
}) => {
  const store = useRef<DashboardStore>();
  if (!store.current) (store).current = createDashboardStore(initProps);

  return (
    <DashboardContext.Provider value={store.current}>
      {children}
    </DashboardContext.Provider>
  );
};
