"use client";

import { FC } from "react";
import { useAuthStore } from "@/stores/auth";
import Header from "./";
import Link from "next/link";

const Auth: FC = () => {
  const user = useAuthStore((state) => state.user);

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

  return <Header.NavItem>authorized..</Header.NavItem>;
};

export default Auth;
