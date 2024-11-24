import React from "react";

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = React.useState({ name: "", email: "" });

  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  const nextStep = (dataFromStep) => {
    if (currentStepIndex < React.Children.count(children) - 1) {
      const newData = {
        ...data,
        ...dataFromStep,
      };

      setData(newData);
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onDone(data);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return React.cloneElement(currentChild, {
    data,
    setData,
    nextStep,
    prevStep,
  });
};
