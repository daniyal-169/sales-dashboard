import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Icons
import { ChevronLeftIcon } from "../../icons";
import { forgotPasswordSchema } from "../../ZodSchemas/ZodSchemas";

// Zod schema for validation


// TypeScript type for form data
type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = (data: ForgotPasswordFormData) => {
        console.log("Reset email sent to:", data.email);
        setEmailSent(true);
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
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                            Forgot Password
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your email to receive password reset instructions.
                        </p>
                    </div>

                    {emailSent ? (
                        <p className="text-green-600 text-sm text-center">
                            A password reset link has been sent to your email.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-6">
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

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Sign In Link */}
                    <div className="mt-5">
                        <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                            Remembered your password?{" "}
                            <Link
                                to="/signin"
                                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
