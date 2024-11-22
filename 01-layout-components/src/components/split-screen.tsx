import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex};
`;

export const SplitScreen = ({
  //   Left,
  //   Right,
  children,
  leftWidth = 1,
  rightWidth = 1,
}: {
  //   Left: React.FC;
  //   Right: React.FC;
  children: React.ReactNode;
  leftWidth?: number;
  rightWidth?: number;
}) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
