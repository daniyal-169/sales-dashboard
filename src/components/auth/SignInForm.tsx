import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Icons (Replace with actual icons)
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import { signInSchema } from "../../ZodSchemas/ZodSchemas";



// TypeScript type for form data
type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex flex-col flex-1">


      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <h1 className="mb-2 font-semibold text-[#01B6D5] text-center text-title-sm dark:text-white/90 sm:text-title-md">
          Login to Sales Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
          ENter your credentials to access sales insights and reports
        </p>


        {/* Sign In Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="info@gmail.com"
              className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#01B6D5] dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#01B6D5] dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? (
                  <EyeIcon className="text-gray-500 size-5" />
                ) : (
                  <EyeCloseIcon className="text-gray-500 size-5" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
              <input
                {...register("rememberMe")}
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-[#01B6D5]"
              />
              Keep me logged in
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-[#01B6D5] hover:text-[#015F6F] dark:text-blue-400"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#01B6D5] rounded-md hover:bg-[#015F6F] focus:outline-none focus:ring-2 focus:ring-[#01B6D5]"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-5 text-sm text-center text-gray-700 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-[#01B6D5] hover:text-[#015F6F] dark:text-blue-400">
            Sign Up
          </Link>
        </p>

        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400 dark:bg-gray-900">
              Or
            </span>
          </div>
        </div>

        {/* Sign in with Google */}
        <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
              fill="#4285F4"
            />
            <path
              d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
              fill="#34A853"
            />
            <path
              d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
              fill="#FBBC05"
            />
            <path
              d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
              fill="#EB4335"
            />
          </svg>
          Sign in with Google
        </button>


      </div>
    </div>
  );
}
