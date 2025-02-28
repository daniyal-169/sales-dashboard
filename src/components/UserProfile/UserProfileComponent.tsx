import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema } from "../../ZodSchemas/ZodSchemas";



type ProfileFormData = z.infer<typeof profileFormSchema>;

export default function UserProfileComponent() {
    const { isOpen, openModal, closeModal } = useModal();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormData>({
        resolver: zodResolver(profileFormSchema),

    });

    const onSubmit = (data: ProfileFormData) => {
        console.log("Form Submitted:", data);
        closeModal();
    };

    return (
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                        Personal Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                        <InfoField label="First Name" value="Daniyal" />
                        <InfoField label="Last Name" value="Sohail" />
                        <InfoField label="Email Address" value="daniyalsohail@developer.com" />
                        <InfoField label="Phone" value="+09 363 398 46" />
                        <InfoField label="Bio" value="Team Manager" />
                        <InfoField label="Country" value="United States" />
                        <InfoField label="City/State" value="Phoenix, Arizona, United States" />
                    </div>
                </div>

                <button
                    onClick={openModal}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
                >
                    Edit
                </button>
            </div>

            {/* Modal Form */}
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
                <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                            <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                                Edit Your Personal Information
                            </h5>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <FormField label="First Name" error={errors.firstName?.message}>
                                    <input
                                        type="text"
                                        {...register("firstName")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Your First Name"
                                    />
                                </FormField>

                                <FormField label="Last Name" error={errors.lastName?.message}>
                                    <input
                                        type="text"
                                        {...register("lastName")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Your Last Name"
                                    />
                                </FormField>

                                <FormField label="Email Address" error={errors.email?.message}>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Your Email"
                                    />
                                </FormField>

                                <FormField label="Phone" error={errors.phone?.message}>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Your Phone Num"
                                    />
                                </FormField>

                                <FormField label="Country" error={errors.country?.message}>
                                    <input
                                        type="text"
                                        {...register("country")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Your Country Name"
                                    />
                                </FormField>

                                <FormField label="City/State" error={errors.cityState?.message}>
                                    <input
                                        type="text"
                                        {...register("cityState")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2 "
                                        placeholder="Enter Your City Name"
                                    />
                                </FormField>

                                <FormField label="Bio" error={errors.bio?.message}>
                                    <input
                                        type="text"
                                        {...register("bio")}
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none   dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 mt-2"
                                        placeholder="Enter Bio"
                                    />
                                </FormField>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Close
                            </Button>
                            <Button size="sm">Save Changes</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

// Helper component for displaying profile info
const InfoField = ({ label, value }: { label: string; value: string }) => (
    <div>
        <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-800 dark:text-white/90">{value}</p>
    </div>
);

// Helper component for form fields
const FormField = ({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) => (
    <div className="col-span-2 lg:col-span-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        {children}
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
);
