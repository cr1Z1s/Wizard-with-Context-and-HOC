import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wizard from "./wizard";

import StepOne from "./steps/step-one";
import StepThree from "./steps/step-three";
import StepTwo from "./steps/step-two";

function App() {
  const steps = [
    <StepOne name="some random prop" />,
    <StepTwo />,
    <StepThree />,
  ];

  return (
    <div className="App">
      <h3>Context HOC</h3>
      <Wizard initialStep={0} steps={steps} />
    </div>
  );
}

export default App;
