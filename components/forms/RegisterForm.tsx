"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { UserRegisterSchema, UserRegisterType } from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/lib/actions/user.actions";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserRegisterType>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: UserRegisterType) => {
    const response = await registerUser(data);

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
        label="Your full name"
        type="text"
        {...register("name")}
        error={errors.name}
      />
      <FormInput
        label="Username"
        type="text"
        {...register("username")}
        error={errors.username}
      />
      <FormInput
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="at least 6 characters"
        {...register("password")}
        error={errors.password}
      />
      <FormInput
        label="Re-enter password"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <FormInput
        label="Image (URL link)"
        type="url"
        {...register("image")}
        error={errors.image}
      />
      {errors.root && <p className="text-[#D73737]">{errors.root.message}</p>}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button
          variant="purple"
          size="md"
          type="submit"
          disabled={isSubmitting}
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
