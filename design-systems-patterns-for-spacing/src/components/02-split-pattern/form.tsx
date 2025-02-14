import { Layers } from "../01-layers-pattern";

const Form = () => {
  return (
    <Layers gutter="xl">
      <InputGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </InputGroup>
      <InputGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </InputGroup>
      <InputGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </InputGroup>
      <InputGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </InputGroup>
      <InputGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </InputGroup>
      <InputGroup htmlFor="country" label="Country">
        <input type="text" id="country" />
      </InputGroup>
      <InputGroup htmlFor="phone" label="Phone Number">
        <input type="text" id="phone" />
      </InputGroup>
    </Layers>
  );
};

export const InputGroup = (props: any) => {
  return (
    <Layers gutter="m">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Layers>
  );
};

export default Form;
