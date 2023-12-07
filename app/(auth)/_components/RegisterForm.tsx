"use client";

import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  UserRegisterSchema,
  UserRegisterSchemaType,
} from "@/lib/validators/user";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserRegisterSchemaType>({
    resolver: zodResolver(UserRegisterSchema),
    mode: "onTouched",
  });

  const handleRegister = async (data: UserRegisterSchemaType) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const responseData = await response.json();
      setError(responseData.field, {
        type: "server",
        message: responseData.message,
      });
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
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
        error={errors.email}
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
