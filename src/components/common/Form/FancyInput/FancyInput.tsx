import classNames from "classnames";
import React, {
  DetailedHTMLProps,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";
import {
  FieldName,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

const style = require("./fancyInput.module.scss");

interface IFancyInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  type?: "text" | "number";
  registerOptions?: RegisterOptions<FieldValues, FieldName<any>>;
  className?: string;
}

export const FancyInput: FunctionComponent<IFancyInputProps> = ({
  name,
  type,
  registerOptions,
  className,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(name, registerOptions)}
      {...props}
      type={type}
      className={classNames(style.input, className)}
    />
  );
};
