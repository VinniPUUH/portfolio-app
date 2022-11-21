import { ReactNode, FC } from "react";
import styled from "styled-components";

import Navigation from "components/global/navigation/navigation";
import AlertWrapper from "components/containers/alert-wrapper/alert-wrapper";

interface IBaseContainer {
  children: ReactNode;
}

const BaseContainer: FC<IBaseContainer> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main> {children}</Main>
      <AlertWrapper />
    </>
  );
};

export default BaseContainer;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;
