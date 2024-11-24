import React from "react";

export const ControlledFlow = ({
  children,
  onDone,
  currentIndex,
  onPrev,
  onNext,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const nextStep = (dataFromStep) => {
    onNext(dataFromStep);
  };

  const prevStep = () => {
    onPrev();
  };

  if (!React.isValidElement(currentChild)) return null;

  return React.cloneElement(currentChild, {
    nextStep,
    prevStep,
  });
};
