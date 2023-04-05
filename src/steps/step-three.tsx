import React from "react";
import { withNavigation } from "../HOC";

type Props = {
  next?: () => void;
  back?: () => void;
  goTo?: (arg: number) => void;
};

function StepThree({ goTo }: Props) {
  return (
    <div>
      StepThree
      <h1>step 3 / 3</h1>
      {goTo && <button onClick={() => goTo(0)}>go to one</button>}
      {goTo && <button onClick={() => goTo(1)}>go to two</button>}
    </div>
  );
}

export default withNavigation(StepThree);
