import styled from "styled-components";

const Text = styled.p`
  font-weight: 500;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.text};
`;
export default Text;
