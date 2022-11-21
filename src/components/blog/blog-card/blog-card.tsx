import { FC, useState, memo } from "react";
import styled from "styled-components";

import BlogAuthor from "../blog-author/blog-author";
import useTheme from "store/common/useTheme";
import useAuthorSibscribe from "hooks/useAuthorSibscribe";

import actualText from "utils/actualText";
import { media } from "constants/media";
import { IThemeStyleProps } from "constants/types/common-types";

interface IBlogCard {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
}

const BlogCard: FC<IBlogCard> = ({ id, image, title, description, author }) => {
  const [isSubscribed, setSubscribed] = useState(false);

  const { isDarkTheme } = useTheme();
  const { subscribeHandler } = useAuthorSibscribe(
    isSubscribed,
    setSubscribed,
    id
  );

  return (
    <Card isDarkTheme={isDarkTheme}>
      <ImageWrapper>
        <img src={`/img/blog/${image}`} alt={title} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Text>{actualText(description)}</Text>
        <BlogAuthor
          isSubscribed={isSubscribed}
          author={author}
          clickHandler={subscribeHandler}
        />
      </TextWrapper>
    </Card>
  );
};

export default memo(BlogCard);

const Card = styled.div<IThemeStyleProps>`
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => (props.isDarkTheme ? "#3e3e3e" : "#ffffff")};
  border: 1px solid;
  border-color: ${(props) => (props.isDarkTheme ? "#747474" : "#ebebeb")};
  @media ${media.tablet} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 150px;
    object-fit: none;
  }

  @media ${media.tablet} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin: 15px;
  @media ${media.tablet} {
    margin: 20px;
  }
`;

const Title = styled.p`
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  text-transform: uppercase;

  @media ${media.tablet} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;

  @media ${media.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;
