import { FC, memo } from "react";
import styled from "styled-components";

import Button from "components/parts/button";

import { media } from "constants/media";

interface IBlogAuthor {
  clickHandler: (event: any) => void;
  author: string;
  isSubscribed: boolean;
}

const BlogAuthor: FC<IBlogAuthor> = ({
  clickHandler,
  author,
  isSubscribed,
}) => {
  return (
    <Author onClick={clickHandler}>
      <p>{author}</p>
      <Button>{isSubscribed ? "Subscribed ✓" : "Subscribe"}</Button>
    </Author>
  );
};

export default memo(BlogAuthor);

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;

  p {
    margin-right: 20px;
  }

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;
