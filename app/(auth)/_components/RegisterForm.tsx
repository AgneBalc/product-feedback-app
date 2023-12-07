"use client";

import Label from "@/components/ui/Label";
import FormInput from "@/components/ui/FormInput";
import FormField from "@/components/ui/FormField";
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
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col gap-6 w-full"
    >
      <FormField>
        <Label label="Your name" />
        <FormInput
          type="text"
          placeholder="First and last name"
          {...register("name")}
        />
        {errors.name && <p className="text-[#D73737]">{errors.name.message}</p>}
      </FormField>
      <FormField>
        <Label label="Username" />
        <FormInput type="text" {...register("username")} />
        {errors.username && (
          <p className="text-[#D73737]">{errors.username.message}</p>
        )}
      </FormField>
      <FormField>
        <Label label="Email" />
        <FormInput type="email" {...register("email")} />
        {errors.email && (
          <p className="text-[#D73737]">{errors.email.message}</p>
        )}
      </FormField>
      <FormField>
        <Label label="Password" />
        <FormInput
          type="password"
          placeholder="at least 6 characters"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-[#D73737]">{errors.password.message}</p>
        )}
      </FormField>
      <FormField>
        <Label label="Re-enter password" />
        <FormInput type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="text-[#D73737]">{errors.confirmPassword.message}</p>
        )}
      </FormField>
      <FormField>
        <Label label="Image (URL link)" />
        <FormInput type="url" {...register("image")} />
        {errors.image && (
          <p className="text-[#D73737]">{errors.image.message}</p>
        )}
      </FormField>
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
