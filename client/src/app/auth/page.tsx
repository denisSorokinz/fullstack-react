"use client";

import AuthForm, { AuthFormData } from "@/components/forms/AuthForm";
import { AUTH_OPERATIONS } from "@/constants";
import { useAuthStatus } from "@/hooks/auth";
import { authenticate } from "@/lib/actions";
import { useAuthStore } from "@/stores/auth";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AuthPage() {
  const router = useRouter();

  const login = useAuthStore((store) => store.setUser);
  const isAuthed = useAuthStatus();

  const onSubmit = async (formData: AuthFormData, mode: AUTH_OPERATIONS) => {
    const res = await authenticate({ type: mode, ...formData });

    if (!res.success) {
      toast.error(res.message!);
      return;
    }

    login(res.user!);

    router.push("/");
    toast.success("Logged in");
  };

  const heading = (
    <h1 className="text-center text-2xl font-semibold leading-6 text-slate-700 dark:text-slate-200">
      Authorize to get access
    </h1>
  );
  const footer = (
    <div className="p-4">
      <button
        type="submit"
        className="mx-auto block rounded-md bg-blue-500 px-4 py-2 font-bold text-slate-100 shadow-sm transition-colors hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );

  useEffect(() => {
    isAuthed && redirect("/");
  }, [isAuthed]);

  return <AuthForm onSubmit={onSubmit} heading={heading} footer={footer} />;
}
