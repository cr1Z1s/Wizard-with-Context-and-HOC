import React from "react";
import { withNavigation } from "../HOC";

type Props = {
  next?: () => void;
  back?: () => void;
  goTo?: (arg: number) => void;
};

function StepTwo({ next, back }: Props) {
  return (
    <div>
      StepTwo
      <h1>step 2 / 3</h1>
      <button onClick={back}>back</button>
      <button onClick={next}>next</button>
    </div>
  );
}

export default withNavigation(StepTwo);
