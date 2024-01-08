"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { register } from "@/lib/actions/register";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  return (
    <form action={formAction} className="flex flex-col gap-6 w-full">
      <FormInput
        label="Your full name"
        type="text"
        name="name"
        error={state?.fieldErrors?.name}
      />
      <FormInput
        label="Username"
        type="text"
        name="username"
        error={state?.fieldErrors?.username}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        error={state?.fieldErrors?.email}
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="at least 6 characters"
        name="password"
        error={state?.fieldErrors?.password}
      />
      <FormInput
        label="Re-enter password"
        type="password"
        name="confirmPassword"
        error={state?.fieldErrors?.confirmPassword}
      />
      <FormInput
        label="Image (URL link)"
        type="url"
        name="image"
        error={state?.fieldErrors?.image}
      />
      {state?.error && <p className="text-[#D73737]">{state.error}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button
          variant="purple"
          size="md"
          type="submit"
          // disabled={isSubmitting}
        >
          Create Account
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

export default RegisterForm;
