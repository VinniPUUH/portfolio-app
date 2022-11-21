import styled from "styled-components";

import BaseContainer from "components/containers/base-container/base-container";
import WidthLimiter from "components/containers/width-limiter/width-limiter";

import { media } from "constants/media";

const MainPage = () => {
  return (
    <BaseContainer>
      <WidthLimiter>
        <Name>Gibadullin Denis</Name>
        <Profession>Frontend developer</Profession>
        <Description>
          On the pages of this application, I post different projects so that
          you can see my code.
        </Description>
      </WidthLimiter>
    </BaseContainer>
  );
};

export default MainPage;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 500;

  @media ${media.tablet} {
    font-size: 72px;
  }
`;

const Profession = styled.h2`
  margin-top: 10px;
  font-size: 30px;

  @media ${media.tablet} {
    margin-top: 20px;
    font-size: 50px;
  }
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 20px;

  @media ${media.tablet} {
    max-width: 80%;
    margin-top: 60px;
    font-size: 40px;
  }
`;
