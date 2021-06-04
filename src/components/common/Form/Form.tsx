import React, { FormHTMLAttributes, FunctionComponent } from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

interface IFormProps {
  onSubmit?: SubmitHandler<any>;
  formMethods: UseFormReturn;
  className?: string;
  formProps?: Omit<
    Partial<FormHTMLAttributes<HTMLFormElement>>,
    "className" | "onSubmit"
  >;
}

export const Form: FunctionComponent<IFormProps> = ({
  onSubmit = () => {},
  formMethods,
  className,
  formProps,
  children,
}) => {
  return (
    <FormProvider {...formMethods}>
      <form
        {...formProps}
        className={className}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
