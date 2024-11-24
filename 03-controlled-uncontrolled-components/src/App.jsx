import "./App.css";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { ControlledForm } from "./components/controlled-form";
import { UncontrolledModal } from "./components/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-modal";
import React from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/ControlledFlow";

// Form, Modal, and Flow components are used to demonstrate the difference between controlled and uncontrolled components

// Form component contains UncontrolledForm and ControlledForm components
const Form = () => {
  return (
    <React.Fragment>
      <UncontrolledForm />
      <hr />
      <ControlledForm />
    </React.Fragment>
  );
};

// Modal component contains UncontrolledModal and ControlledModal components
const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <React.Fragment>
      <UncontrolledModal />
      <hr />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ControlledModal onClose={onClose} isOpen={isOpen}>
        <p style={{ color: "black" }}>This is a controlled modal</p>
      </ControlledModal>
    </React.Fragment>
  );
};

const StepOne = ({ nextStep }) => {
  return (
    <React.Fragment>
      <p>Step One</p>
      <button onClick={() => nextStep({ name: "Eray" })}>Next</button>
    </React.Fragment>
  );
};

const StepTwo = ({ prevStep, nextStep }) => {
  return (
    <React.Fragment>
      <p>Step Two</p>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => nextStep({ email: "eray.ates@outlook.com" })}>
        Next
      </button>
    </React.Fragment>
  );
};

const StepThree = ({ prevStep, nextStep }) => {
  return (
    <React.Fragment>
      <p>Step Three</p>

      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </React.Fragment>
  );
};

// UncontrolledFlowParent component contains UncontrolledFlow component
const UncontrolledFlowParent = () => {
  return (
    <UncontrolledFlow
      onDone={(data) => {
        console.log(data);
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>
  );
};

// ControlledFlowParent component contains ControlledFlow component
const ControlledFlowParent = () => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const [data, setData] = React.useState({ name: "", email: "" });

  const nextStep = (dataFromStep) => {
    if (currentStepIndex < 2) {
      // Since we know we have 3 steps (0, 1, 2)
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

  const onDone = (data) => {
    console.log(data);
  };

  return (
    <ControlledFlow
      currentIndex={currentStepIndex}
      onNext={nextStep}
      onPrev={prevStep}
      onDone={onDone}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </ControlledFlow>
  );
};

function App() {
  return (
    <React.Fragment>
      <Form />
      <hr />
      <Modal />
      <hr />
      <UncontrolledFlowParent />
      <hr />
      <ControlledFlowParent />
    </React.Fragment>
  );
}

export default App;
