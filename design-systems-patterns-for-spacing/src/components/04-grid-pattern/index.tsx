import { styled } from "styled-components";
import Card from "./card";

import { spaceSchema } from "../common/spaces";

interface GridProps {
  gutter: keyof typeof spaceSchema;
  minItemWidth?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minItemWidth ?? "310px"}, 1fr)
  );
`;

const Cards = () => {
  return (
    <Grid minItemWidth="24rem" gutter="xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Cards;
