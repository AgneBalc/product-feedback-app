import FormWrapper from "@/components/shared/FormWrapper";
import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <FormWrapper title="Create account" image="/shared/icon-new-feedback.svg">
      <RegisterForm />
      <div className="mt-4 sm:mt-10 text-right">
        <p>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-blue text-body-3 underline hover:text-[#8397F8]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default RegisterPage;
