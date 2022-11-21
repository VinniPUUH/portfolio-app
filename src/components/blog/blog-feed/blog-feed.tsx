import { Link } from "react-router-dom";
import styled from "styled-components";

import BlogCard from "../blog-card/blog-card";

import data from "../data";
import { media } from "constants/media";
import { BLOG_ROUTE } from "constants/routes-data";

const BlogFeed = () => {
  return (
    <Wrapper>
      {data.map((card) => (
        <Link to={`${BLOG_ROUTE}/${card.title}-${card.id}`} key={card.id}>
          <BlogCard {...card} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default BlogFeed;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;

  @media ${media.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 60px 40px;
  }
`;
