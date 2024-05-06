"use client";

import { SubmitHandler, set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FC, useState } from "react";
import { AUTH_OPERATIONS } from "@/constants";

const validationSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please provide a valid email"),
    password: z.string().min(4, "Password must be at least 4 characters"),
    confirmPassword: z.string().min(4, "Please confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
export type AuthFormData = z.infer<typeof validationSchema>;

type Props = {
  heading?: JSX.Element;
  footer?: JSX.Element;
  onSubmit: (formData: AuthFormData, mode: AUTH_OPERATIONS) => void;
};
const AuthForm: FC<Props> = ({ onSubmit, heading, footer }) => {
  const [mode, setMode] = useState<AUTH_OPERATIONS>(AUTH_OPERATIONS.LOGIN);
  const toggleMode = () =>
    setMode(
      mode === AUTH_OPERATIONS.LOGIN
        ? AUTH_OPERATIONS.SIGN_UP
        : AUTH_OPERATIONS.LOGIN
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    defaultValues: {
      email: "test15@gmail.com",
      password: "1234",
      confirmPassword: "1234",
    },
    resolver: zodResolver(validationSchema),
  });

  const onValid = (formData: AuthFormData) => onSubmit(formData, mode);

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="flex flex-col gap-2 p-4 md:gap-4">
        {heading}
        <div className="flex flex-col gap-1">
          <label
            className="block text-sm font-bold text-slate-700 dark:text-slate-200"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={`w-full border px-3 py-2 text-sm leading-tight text-slate-700 ${
              errors.email && "border-red-500"
            } focus:shadow-outline appearance-none rounded focus:outline-none`}
            id="email"
            type="email"
            placeholder="email..."
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-2 text-xs italic text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-slate-700 dark:text-slate-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-slate-700 ${
                errors.password && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="password"
              type="password"
              placeholder="password..."
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="block text-sm font-bold text-slate-700 dark:text-slate-200"
              htmlFor="c_password"
            >
              Confirm Password
            </label>
            <input
              className={`w-full border px-3 py-2 text-sm leading-tight text-slate-700 ${
                errors.confirmPassword && "border-red-500"
              } focus:shadow-outline appearance-none rounded focus:outline-none`}
              id="c_password"
              type="password"
              placeholder="password..."
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-xs italic text-red-500">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>
        <hr />
        <strong className="text-slate-700 dark:text-slate-200">
          {mode === AUTH_OPERATIONS.LOGIN && (
            <>
              Don&apos;t have an account?{" "}
              <button
                className="underline underline-offset-4 transition-colors hover:text-blue-600"
                onClick={toggleMode}
              >
                Sign Up
              </button>
            </>
          )}
          {mode === AUTH_OPERATIONS.SIGN_UP && (
            <>
              Already have an account?{" "}
              <button
                className="underline underline-offset-4 transition-colors hover:text-blue-600"
                onClick={toggleMode}
              >
                Login
              </button>
            </>
          )}
        </strong>
      </div>
      {footer}
    </form>
  );
};

export default AuthForm;
