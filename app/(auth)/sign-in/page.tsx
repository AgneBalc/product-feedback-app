import FormWrapper from "@/components/ui/Form";
import SignInForm from "../../../components/forms/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <FormWrapper title="Sign In" image="/shared/icon-edit-feedback.svg">
      <SignInForm />
      <div className="mt-4 sm:mt-10 text-right">
        <p>
          If you don&apos;t have an account, please{" "}
          <Link
            href="/register"
            className="text-blue text-body-3 underline hover:text-[#8397F8]"
          >
            Register
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default SignInPage;
