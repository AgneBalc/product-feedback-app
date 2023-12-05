"use client";

import { Formik, Form, ErrorMessage } from "formik";
import Link from "next/link";
import FormWrapper from "@/components/ui/Form";
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

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const router = useRouter();

  return (
    <FormWrapper title="Sign In">
      <Formik<SignInFormValidatorType>
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(SignInFormValidator)}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="flex flex-col gap-6 w-full">
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
      <div className="mt-4 sm:mt-10 text-right">
        <p>
          If you don't have an account, please{" "}
          <Link
            href="/register"
            className="text-blue text-body-3 underline hover:text-[#8397F8]"
          >
            Register
          </Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default SignInForm;
