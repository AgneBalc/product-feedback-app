"use client";

import { UserValidator, UserValidatorType } from "@/lib/validators/user";
import Label from "@/components/ui/Label";
import FormInput from "@/components/ui/FormInput";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/ui/Form";
import { ErrorMessage, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Link from "next/link";

const initialValues = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: "",
};

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = async (values: UserValidatorType) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        image: values.image,
      }),
    });

    if (response.ok) {
      router.back();
    } else {
      console.error("Registration failed");
    }
  };

  return (
    <FormWrapper title="Create account">
      <Formik<UserValidatorType>
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(UserValidator)}
        onSubmit={(values) => handleRegister(values)}
      >
        <Form className="flex flex-col gap-6 w-full">
          <FormField>
            <Label label="Your name" />
            <FormInput
              type="text"
              name="name"
              placeholder="First and last name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <FormField>
            <Label label="Username" />
            <FormInput type="text" name="username" />
            <ErrorMessage
              name="username"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <FormField>
            <Label label="Email" />
            <FormInput type="email" name="email" />
            <ErrorMessage
              name="email"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <FormField>
            <Label label="Password" />
            <FormInput
              type="password"
              name="password"
              placeholder="at least 6 characters"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <FormField>
            <Label label="Re-enter password" />
            <FormInput type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <FormField>
            <Label label="Image (URL link)" />
            <FormInput type="url" name="image" />
            <ErrorMessage
              name="image"
              component="span"
              className="text-[#D73737]"
            />
          </FormField>
          <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-4 sm:mt-2">
            <Button variant="purple" size="md" type="submit">
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
        </Form>
      </Formik>
      <div className="mt-4 sm:mt-10 text-right">
        <p>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-blue text-body-3 underline hover:text-[#8397F8]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default RegisterForm;
