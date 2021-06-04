import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { FancyInput } from "../../common/Form/FancyInput/FancyInput";
import { Form } from "../../common/Form/Form";
import { GenderSelector } from "./GenderSelector/GenderSelector";

const style = require("./imcCalculator.module.scss");

export const ImcCalculator: FunctionComponent = () => {
  const formMethods = useForm({
    defaultValues: { gender: "f", height: 150, weight: 50 },
  });

  const [bmi, setBmi] = useState<number | null>(null);

  function handleFormSubmit({ gender, height, weight, age_years, age_months }) {
    const calcBmi = +(+weight / Math.pow(+height / 100, 2)).toFixed(1);

    setBmi(calcBmi);
  }

  function resetBmi() {
    if (bmi) {
      setBmi(null);
    }
  }

  const bmiMap = [
    { from: -Infinity, to: 18.4, text: "Underweight" },
    { from: 18.5, to: 24.9, text: "Normal" },
    { from: 25, to: 29.9, text: "Overweight" },
    { from: 30, to: Infinity, text: "Obese" },
  ];

  const bmiResult = bmi
    ? bmiMap.find(({ from, to }) => bmi >= from && bmi <= to)
    : null;

  return (
    <div className={style.container}>
      <h1 className={style.title}>TESTEAZĂ GREUTATEA COPILULUI TĂU!</h1>
      <Form
        formMethods={formMethods as any}
        onSubmit={handleFormSubmit}
        className={style.form}
      >
        <div className={style.columns}>
          <div className={style.column}>
            <div className={style.block}>
              <span className={style.label}>Vârstă</span>
              <div className={style.inputContainer}>
                <FancyInput
                  name="age_years"
                  type="number"
                  registerOptions={{ setValueAs: (v: string) => +v }}
                  className={style.input}
                />
                <span className={style.inputLabel}>ani</span>
              </div>
              <div className={style.inputContainer}>
                <FancyInput
                  name="age_months"
                  type="number"
                  registerOptions={{ setValueAs: (v: string) => +v }}
                  className={style.input}
                />
                <span className={style.inputLabel}>luni</span>
              </div>
            </div>

            <div className={style.block}>
              <span className={style.label}>Înălțime</span>
              <input
                className={style.slider}
                type="range"
                min="10"
                max="200"
                value={formMethods.watch("height")}
                onChange={({ target: { value } }) => {
                  resetBmi();
                  formMethods.setValue("height", +value);
                }}
              />
              <FancyInput
                name="height"
                type="number"
                registerOptions={{ setValueAs: (v: string) => +v }}
                onBlur={({ target: { value } }) => {
                  resetBmi();
                  if (+value < 10) {
                    formMethods.setValue("height", 10);
                  } else if (+value > 200) {
                    formMethods.setValue("height", 200);
                  }
                }}
                className={style.input}
              />
              <span className={classNames(style.inputLabel, style.hor)}>
                cm
              </span>
            </div>
          </div>

          <div className={style.column}>
            <div className={classNames(style.block, style.blockGender)}>
              <span className={style.label}>Sex</span>
              <GenderSelector />
              {/* <div> */}
              {/* <FancyInput name="age_years" />
              <span>ani</span> */}
              {/* </div> */}
            </div>

            <div className={style.block}>
              <span className={style.label}>Greutate</span>
              <input
                className={style.slider}
                type="range"
                min="0"
                max="100"
                value={formMethods.watch("weight")}
                onChange={({ target: { value } }) => {
                  resetBmi();
                  formMethods.setValue("weight", +value);
                }}
              />
              <FancyInput
                name="weight"
                type="number"
                registerOptions={{ setValueAs: (v: string) => +v }}
                onBlur={({ target: { value } }) => {
                  resetBmi();
                  if (+value < 0) {
                    formMethods.setValue("weight", 0);
                  } else if (+value > 100) {
                    formMethods.setValue("weight", 100);
                  }
                }}
                className={style.input}
              />
              <span className={classNames(style.inputLabel, style.hor)}>
                kg
              </span>
            </div>
          </div>
        </div>

        <button type="submit" className={style.submitBtn}>
          Calculeaza IMC!
        </button>
      </Form>

      {bmiResult && (
        <div className={style.result}>
          Your BMI is {bmi} which means you are {bmiResult.text}
        </div>
      )}
    </div>
  );
};
