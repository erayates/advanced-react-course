import { spaceSchema } from "../common/spaces";
import MenuBasis from "./menu";
import styled from "styled-components";

interface InlineBundleProps {
  gutter?: keyof typeof spaceSchema;
  justify?: keyof typeof justifySchema;
}

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div<InlineBundleProps>`
  --gutter: ${({ gutter }) => spaceSchema[gutter ?? "l"]};
  display: "flex";
  flex-wrap: wrap;
  gap: var(--gutter);
  justify-content: ${({ justify }) =>
    justifySchema[justify ?? "start"] ?? justifySchema.start};
  align-items: center;
`;

const BundledMenu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="l" justify="end">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default BundledMenu;
