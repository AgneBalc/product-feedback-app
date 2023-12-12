"use client";

import { UserSignInSchema, UserSignInType } from "@/lib/validators/user";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserSignInType>({
    resolver: zodResolver(UserSignInSchema),
    mode: "onTouched",
  });

  const handleSignIn = async (data: UserSignInType) => {
    await signIn("credentials", { ...data, redirect: false }).then(
      (callback) => {
        if (callback?.error) {
          setError("root", {
            type: "server",
            message: callback.error,
          });
        }

        if (callback?.ok) {
          router.push("/");
        }
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="flex flex-col gap-6 w-full"
    >
      <FormInput
        label="Username"
        type="text"
        {...register("username")}
        error={errors.username}
      />
      <FormInput
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      {errors.root && <p className="text-[#D73737]">{errors.root.message}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button
          variant="purple"
          size="md"
          type="submit"
          disabled={isSubmitting}
        >
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
