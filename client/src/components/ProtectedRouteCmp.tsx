"use client";

import { useAuthStatus } from "@/hooks/auth";
import { FC, PropsWithChildren } from "react";

const ProtectedRouteCmp: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAuthStatus();

  if (!isAuthenticated) return <h1>Please authenticate</h1>;

  return <>{children}</>;
};

export default ProtectedRouteCmp;
