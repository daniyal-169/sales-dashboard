import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import ForgotPasswordForm from "../../components/auth/ForgotPassword";

export default function Forgot() {
    return (
        <>
            <PageMeta
                title="React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <AuthLayout>
                <ForgotPasswordForm />
            </AuthLayout>
        </>
    );
}
