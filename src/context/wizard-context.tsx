import { createContext } from "react";

export const wizardContext = createContext(
  {} as {
    next: () => void;
    back: () => void;
    goTo: (step: number) => void;
    currentStep: number;
    length: number;
  }
);
