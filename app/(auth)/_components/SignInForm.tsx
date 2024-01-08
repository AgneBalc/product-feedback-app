"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { login } from "@/lib/actions/login";

const SignInForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  return (
    <form action={formAction} className="flex flex-col gap-6 w-full">
      <FormInput
        label="Username"
        type="text"
        name="username"
        error={state?.fieldErrors?.username}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        error={state?.fieldErrors?.password}
      />
      {state?.error && <p className="text-[#D73737]">{state.error}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button variant="purple" size="md" type="submit">
          Sign in
        </Button>
        <Button
          variant="cancel"
          size="md"
          type="button"
          onClick={() => router.push("/")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
