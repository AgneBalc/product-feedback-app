"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { UserSignInSchema, UserSignInType } from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/lib/actions/user.actions";
import Loading from "@/app/loading";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserSignInType>({
    resolver: zodResolver(UserSignInSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: UserSignInType) => {
    const response = await login(data);

    if (response?.error) {
      setError("root", {
        type: "server",
        message: response.error,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          {isSubmitting ? (
            <span className="flex gap-2">
              <Loading className="fill-blue w-3 h-3 sm:w-4 sm:h-4" />
              <span>Loading...</span>
            </span>
          ) : (
            "Sign in"
          )}
        </Button>
        <Button
          variant="cancel"
          size="md"
          type="button"
          disabled={isSubmitting}
          onClick={() => router.push("/")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
