"use client";

import { FC } from "react";
import { useAuthStore } from "@/stores/auth";
import Header from "./";
import Link from "next/link";
import { logout } from "@/lib/actions";

const Auth: FC = () => {
  const { user, invalidateSession } = useAuthStore((state) => ({
    user: state.user,
    invalidateSession: state.invalidateSession,
  }));

  const handleLogout = () => {
    logout();
    invalidateSession();
  };

  if (!user)
    return (
      <Header.NavItem>
        <Link
          href="/auth"
          className="py-2 text-primary text-slate-500 hover:text-slate-700 dark:text-slate-100"
          aria-current="page"
        >
          Auth
        </Link>
      </Header.NavItem>
    );

  return (
    <>
      <Header.NavItem>
        <Link
          href="/dashboard"
          className="py-2 text-primary text-slate-500 hover:text-slate-700 dark:text-slate-100"
          aria-current="page"
        >
          Dashboard
        </Link>
      </Header.NavItem>
      <Header.NavItem>
        <button onClick={handleLogout}>Logout</button>
      </Header.NavItem>
    </>
  );
};

export default Auth;
