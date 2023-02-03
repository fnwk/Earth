import Text from "./Text";
import Title from "./Title";

import React from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  borderLength: number; // length of the border of the title in %
  title: string;
  text: string;
  theme?: {
    title: string;
    text: string;
  };
};

type ContainerProps = {
  borderLength: number;
};

const Info = ({ theme, borderLength, title, text }: Props) => {
  return (
    <Container borderLength={borderLength}>
      <Title theme={theme}>{title}</Title>
      <hr />
      <Text theme={theme}>{text}</Text>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  width: fit-content;
  margin-bottom: 15%;

  hr {
    width: ${({ borderLength }) => borderLength}%;
    border-bottom: 1px solid white;
  }
`;

export default Info;
