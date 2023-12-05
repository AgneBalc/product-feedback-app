import FormWrapper from "@/components/ui/Form";
import RegisterForm from "../_components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <FormWrapper title="Create account">
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
