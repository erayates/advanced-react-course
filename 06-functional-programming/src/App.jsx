import React from "react";
import { RecursiveComponent } from "./components/recursive";
import { GreenSmallButton, RedButton } from "./components/composition";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <React.Fragment>
      <RecursiveComponent data={myNestedObject} />
      <hr />
      <GreenSmallButton
        text="Click me"
        onClick={() => alert("Button clicked")}
      />
      <RedButton text="Click me" onClick={() => alert("Button clicked")} />
    </React.Fragment>
  );
}

export default App;
