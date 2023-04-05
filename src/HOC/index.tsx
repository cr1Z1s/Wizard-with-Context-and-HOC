import { useContext } from "react";
import { wizardContext } from "../context/wizard-context";

export const withNavigation = (Component: any) => {
  return (props: any) => {
    const contextProps = useContext(wizardContext);
    return <Component {...props} {...contextProps} />;
  };
};
