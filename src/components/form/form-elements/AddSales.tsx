import ComponentCard from "../../common/ComponentCard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { salesFormSchema } from "../../../ZodSchemas/ZodSchemas";



// Infer TypeScript type from schema
type Inputs = z.infer<typeof salesFormSchema>;

export default function AddSales() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(salesFormSchema),
  });

  const onSubmit = (data: Inputs) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <ComponentCard title="Select Inputs">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block font-light  mb-2 text-white">Name</label>
          <input {...register("name")} id="name" placeholder="Enter Your Name" type="text" className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 " />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-light  mb-2 text-white">Email</label>
          <input {...register("email")} id="email" placeholder="info@gmail.com" type="email" className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 " />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Role Selection */}
        <div>
          <label htmlFor="role" className="block font-light  mb-2 text-white">Role</label>
          <select {...register("role")} id="role" className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ">
            <option value="">Select Role</option>
            <option value="Sales Rep">Sales Rep</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        {/* Reports To Selection */}
        <div>
          <label htmlFor="reportsTo" className="block font-light  mb-2 text-white">Reports To</label>
          <select {...register("reportsTo")} id="reportsTo" className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ">
            <option value="">Select Manager</option>
            <option value="Report to 1">Report to 1</option>
            <option value="Report to 2">Report to 2</option>
          </select>
          {errors.reportsTo && <p className="text-red-500">{errors.reportsTo.message}</p>}
        </div>

        {/* Percentage Field */}
        <div>
          <label htmlFor="percent" className="block font-light  mb-2 text-white">Percentage</label>
          <input {...register("percent", { valueAsNumber: true })} id="percent" type="number" placeholder="Enter percentage" className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 " />
          {errors.percent && <p className="text-red-500">{errors.percent.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </ComponentCard>
  );
}
