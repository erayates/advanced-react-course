import styled from "styled-components";
import { spaceSchema } from "../common/spaces";
import Form from "./form";

interface SplitProps {
  gutter?: keyof typeof spaceSchema;
  columns?: number | string;
  minWidth?: string;
  fraction?: keyof typeof fractions;
}

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div<SplitProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter ?? "l"]};
  grid-template-columns: ${({ fraction }) => fractions[fraction ?? "1/2"]};
`;

const InfoForm = () => {
  return (
    <>
      {/* Using number of columns */}
      <Split fraction="1/2" gutter="xl">
        <div>
          <h3>General Information</h3>
          <span>
            All the information you provide via this form public and will be
            displayed on your profile.
          </span>
        </div>
        <Form />
      </Split>

      {/* Using auto-fit responsive columns */}
      <Split minWidth="300px">
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </Split>

      {/* Using custom grid template */}
      <Split columns="2fr 1fr">
        <div>Wide column</div>
        <div>Narrow column</div>
      </Split>
    </>
  );
};

export default InfoForm;
