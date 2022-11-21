import BaseContainer from "components/containers/base-container/base-container";
import WidthLimiter from "components/containers/width-limiter/width-limiter";
import BlogFeed from "components/blog/blog-feed/blog-feed";

const Blog = () => {
  return (
    <BaseContainer>
      <WidthLimiter>
        <BlogFeed />
      </WidthLimiter>
    </BaseContainer>
  );
};

export default Blog;
