"use client";

import AuthForm, { AuthFormData } from "@/components/forms/AuthForm";
import { AUTH_OPERATIONS } from "@/constants";
import { useAuthStatus } from "@/hooks/auth";
import { authenticate } from "@/lib/actions";
import { useAuthStore } from "@/stores/auth";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();

  const login = useAuthStore((store) => store.setUser);
  const isAuthed = useAuthStatus();

  const onSubmit = async (formData: AuthFormData, mode: AUTH_OPERATIONS) => {
    console.log("[onSubmit]");

    const res = await authenticate({ type: mode, ...formData });

    if (!res.success) {
      // todo: show error toast
      return;
    }

    console.log("[before-login]");

    login(res.user);

    router.push("/");
    // toast.success('Authentication success')
  };

  const heading = (
    <h3 className="text-center text-base font-semibold leading-6 text-gray-900">
      Authorize to get access
    </h3>
  );
  const footer = (
    <div className="bg-gray-50 p-4 sm:flex sm:flex-row-reverse">
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto"
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
