"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { UserValidator, UserValidatorType } from "@/lib/validators/user";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import FormField from "@/components/ui/FormField";

const RegisterForm = () => {
  const form = useForm<UserValidatorType>({
    resolver: zodResolver(UserValidator),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    },
  });

  const onSubmit = (values: UserValidatorType) => {
    console.log(values);
  };

  return (
    <form className="bg-white">
      <FormField>
        <Label label="Username" htmlFor="username" />
        <Input id="username" />
      </FormField>
    </form>
  );
};

export default RegisterForm;
