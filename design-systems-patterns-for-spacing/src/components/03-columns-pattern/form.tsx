import { Column, Columns } from ".";
import { Layers } from "../01-layers-pattern";

const Form = () => {
  return (
    <Columns columns={2}>
      <Column $span={3}>
        <InputGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </InputGroup>
      </Column>

      <Column $span={3}>
        <InputGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </InputGroup>
      </Column>

      <Column $span={4}>
        <InputGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </InputGroup>
      </Column>

      <Column $span={2}>
        <InputGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </InputGroup>
      </Column>

      <Column $span={5}>
        <InputGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </InputGroup>
      </Column>

      <Column $span={1}>
        <InputGroup htmlFor="country" label="Country">
          <input type="text" id="country" />
        </InputGroup>
      </Column>

      <Column>
        <InputGroup htmlFor="phone" label="Phone Number">
          <input type="text" id="phone" />
        </InputGroup>
      </Column>
    </Columns>
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
