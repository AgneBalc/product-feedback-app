"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { UserValidator, UserValidatorType } from "@/lib/validators/user";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import FormField from "@/components/ui/FormField";
import Form from "@/components/ui/Form";
import Button from "@/components/ui/Button";

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
    <Form title="Create account">
      <FormField>
        <Label label="Your name" htmlFor="name" />
        <Input type="text" id="name" placeholder="First and last name" />
      </FormField>
      <FormField>
        <Label label="Username" htmlFor="username" />
        <Input type="text" id="username" />
      </FormField>
      <FormField>
        <Label label="Email" htmlFor="email" />
        <Input type="email" id="email" />
      </FormField>
      <FormField>
        <Label label="Password" htmlFor="password" />
        <Input
          type="password"
          id="password"
          placeholder="at least 6 characters"
        />
      </FormField>
      <FormField>
        <Label label="Re-enter password" htmlFor="confirmPassword" />
        <Input type="confirmPassword" id="confirmPassword" />
      </FormField>
      <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
        <Button variant="purple" size="md">
          Create Account
        </Button>
        <Button variant="cancel" size="md">
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
