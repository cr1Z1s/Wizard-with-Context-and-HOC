import React, { useState } from "react";
import { withNavigation } from "../HOC";

type Props = {
  next?: () => void;
  back?: () => void;
  name?: string;
};

function StepOne({ next, name }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      StepOne {name}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h1>step 1 / 3</h1>
      <button disabled>back</button>
      <button onClick={next}>next</button>
    </div>
  );
}

export default withNavigation(StepOne);
