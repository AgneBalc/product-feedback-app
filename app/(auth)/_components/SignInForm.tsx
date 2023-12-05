"use client";

import { Formik, Form, ErrorMessage } from "formik";
import {
  SignInFormValidator,
  SignInFormValidatorType,
} from "@/lib/validators/user";
import FormField from "@/components/ui/FormField";
import Label from "@/components/ui/Label";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSignIn = async (values: SignInFormValidatorType) => {
    const signInData = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      setError("Wrong username or password!");
    } else {
      router.push("/");
    }
  };

  return (
    <Formik<SignInFormValidatorType>
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(SignInFormValidator)}
      onSubmit={(values) => handleSignIn(values)}
    >
      <Form className="flex flex-col gap-6 w-full">
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
          <Label label="Password" />
          <FormInput type="password" name="password" />
          <ErrorMessage
            name="password"
            component="span"
            className="text-[#D73737]"
          />
        </FormField>
        {error && <p className="text-[#D73737]">{error}</p>}
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
      </Form>
    </Formik>
  );
};

export default SignInForm;