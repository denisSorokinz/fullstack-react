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

type ProviderProps = { initProps: Partial<DashboardStoreState> & { brands?: FilterOption[] } };
export const DashboardProvider: FC<PropsWithChildren<ProviderProps>> = ({
  children,
  initProps,
}) => {
  const store = useRef<DashboardStore>(null);
  if (!store.current) (store as any).current = createDashboardStore(initProps);

  return (
    <DashboardContext.Provider value={store.current}>
      {children}
    </DashboardContext.Provider>
  );
};
