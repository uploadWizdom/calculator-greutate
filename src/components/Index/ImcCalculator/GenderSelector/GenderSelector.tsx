import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { useEffectOnce } from "react-use";
import FemaleIcon from "../../../../icons/FemaleIcon";
import MaleIcon from "../../../../icons/MaleIcon";

const style = require("./genderSelector.module.scss");

export const GenderSelector: FunctionComponent = () => {
  const { register, watch, setValue } = useFormContext();

  useEffectOnce(() => {
    register("gender");
  });

  const selectedGender = watch("gender");

  const options = [
    { text: "feminin", value: "f", icon: FemaleIcon },
    { text: "masculin", value: "m", icon: MaleIcon },
  ];

  return (
    <div>
      {options.map(({ text, value, icon: Icon }, index) => (
        <button
          key={index}
          onClick={() => setValue("gender", value)}
          className={classNames(style.button, style[value], {
            [style.active]: value === selectedGender,
          })}
        >
          <Icon className={style.icon} />
          <span className={style.text}>{text}</span>
        </button>
      ))}
    </div>
  );
};
