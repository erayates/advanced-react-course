import styled from "styled-components";
import { Split } from "../02-split-pattern";
import { spaceSchema } from "../common/spaces";
import Form from "./form";

interface ColumnsProps {
  gutter?: keyof typeof spaceSchema;
  columns?: number;
}

export const Columns = styled.div<ColumnsProps>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter ?? "l"]};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

interface ColumnProps {
  $span?: number;
}

export const Column = styled.div<ColumnProps>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

const InfoFormWithColumns = () => {
  return (
    <Split fraction="1/3" gutter="xxl">
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form public and will be
          displayed on your profile.
        </span>
      </div>
      <Form />
    </Split>
  );
};

export default InfoFormWithColumns;
