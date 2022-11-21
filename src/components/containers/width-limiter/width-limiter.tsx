import { ReactNode, FC } from "react";
import styled from "styled-components";

import { media } from "constants/media";

interface IWidthLimiter {
  children: ReactNode;
}

const WidthLimiter: FC<IWidthLimiter> = ({ children }) => {
  return <Container> {children}</Container>;
};

export default WidthLimiter;

const Container = styled.div`
  width: 100%;
  margin: 80px 15px 30px;

  @media ${media.tablet} {
    margin: 80px 30px 40px;
  }
`;
