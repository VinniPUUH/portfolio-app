import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import BlogAuthor from "../blog-author/blog-author";
import useAuthorSibscribe from "hooks/useAuthorSibscribe";

import { media } from "constants/media";
import data from "../data";

const BlogContent = () => {
  const [isSubscribed, setSubscribed] = useState(false);

  const { id } = useParams();
  const { subscribeHandler } = useAuthorSibscribe(
    isSubscribed,
    setSubscribed,
    id
  );

  const article = useMemo(() => {
    const currId = id.split("-")[1];
    return data.find((item) => item.id === currId);
  }, []);

  return (
    <>
      <Title>{article.title}</Title>
      <ContentWrapper
        dangerouslySetInnerHTML={{ __html: article.text || "" }}
      ></ContentWrapper>
      <BlogAuthor
        isSubscribed={isSubscribed}
        author={article.author}
        clickHandler={subscribeHandler}
      />
    </>
  );
};

export default BlogContent;

const Title = styled.h1`
  margin-bottom: 20px;

  @media ${media.tablet} {
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  h2 {
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
  }
`;
