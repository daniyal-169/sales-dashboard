import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Icons (Replace with actual icons)
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import { signUpSchema } from "../../ZodSchemas/ZodSchemas";

// TypeScript type for form data
type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>

      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <h1 className="mb-2 font-semibold text-gray-800 text-xl dark:text-white sm:text-2xl">
          Sign Up
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your details to create an account!
        </p>

        {/* Sign up with Google */}
        <button className="mt-5 flex w-full items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
          {/* Google SVG */} Sign up with Google
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400 dark:bg-gray-900">
              Or
            </span>
          </div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="info@gmail.com"
              className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
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
                className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
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

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full mt-1 px-4 py-2 text-gray-900 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="text-gray-500 size-5" />
                ) : (
                  <EyeCloseIcon className="text-gray-500 size-5" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms & Privacy */}
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
            <input
              {...register("terms")}
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
            />
            I agree to the{" "}
            <Link to="/terms" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
              Terms & Conditions
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-5 text-sm text-center text-gray-700 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
