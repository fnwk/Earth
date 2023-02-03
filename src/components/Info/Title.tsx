import styled from "styled-components";

const Title = styled.h2`
  font-weight: 300;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.title};
`;

export default Title;
