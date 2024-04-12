"use client";

import { useAuthStatus } from "@/hooks/auth";
import { FC } from "react";

const protectedRoute = (Route: FC) => {
  const Component = () => {
    const isAuthenticated = useAuthStatus();

    return (
      <>{isAuthenticated ? <Route /> : <h1>Please authenticate</h1>}</>
    );
  };

  return Component;
};

export default protectedRoute;
