"use client";

import {
  DashboardProps,
  DashboardStore,
  createDashboardStore,
} from "@/stores/dashboard";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react";
import { useStore } from "zustand";

export const DashboardContext = createContext<DashboardStore | null>(null);

type ProviderProps = { initProps: DashboardProps };
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
