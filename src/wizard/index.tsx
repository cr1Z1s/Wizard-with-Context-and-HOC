import React, { createContext, useState } from "react";
import StepOne from "../steps/step-one";
import StepThree from "../steps/step-three";
import StepTwo from "../steps/step-two";

import { wizardContext } from "../context/wizard-context";

type Props = {
  initialStep: number;
  steps: JSX.Element[];
};

function Wizard({ initialStep, steps }: Props) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const next = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep((prv) => prv + 1);
    }
  };

  const back = () => {
    if (currentStep !== 0) {
      setCurrentStep((prv) => prv - 1);
    }
  };

  const goTo = (step: number) => {
    setCurrentStep(step);
  };

  const length = steps?.length;

  const contextValue = { next, back, goTo, currentStep, length };

  return (
    <wizardContext.Provider value={contextValue}>
      <div>
        Wizard
        {steps[currentStep]}
      </div>
    </wizardContext.Provider>
  );
}

export default Wizard;
