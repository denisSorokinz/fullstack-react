"use client";

import AuthForm, { AuthFormData } from "@/components/AuthForm";
import { AUTH_OPERATIONS } from "@/constants";
import { authenticate } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const onSubmit = async (formData: AuthFormData, mode: AUTH_OPERATIONS) => {
    console.log({ authFormData: formData });

    const res = await authenticate({ type: mode, ...formData });
    console.log({ res });

    if (!res.success) {
      return;
    }

    // router.push("/");
    console.log(`${mode} success`);

    // res = serverAction({ actionType: mode, ...formData })

    /*
    if(!res.success)
      todo: handle errors
      return;

    router.push('/')
    toast.message(`${mode} success`)
    */
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

  return <AuthForm onSubmit={onSubmit} heading={heading} footer={footer} />;
}
