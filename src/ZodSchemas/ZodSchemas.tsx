import { z } from "zod"


// Define Zod validation schema
export const salesFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    role: z.string().min(1, "Role is required"),
    reportsTo: z.string().min(1, "Reports To is required"),
    percent: z.coerce.number().min(0, "Percentage must be at least 0").max(100, "Percentage cannot exceed 100"),
});

// for user Profile
export const profileFormSchema = z.object({
    firstName: z.string().min(2, "First Name must be at least 2 characters"),
    lastName: z.string().min(2, "Last Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    country: z.string().min(2, "Country is required"),
    cityState: z.string().min(2, "City/State is required"),
    bio: z.string().optional(),
});


// for signup


export const signUpSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
    terms: z.boolean().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});



// for signin
export const signInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
});

// for forgotpassword
export const forgotPasswordSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email format"),
});