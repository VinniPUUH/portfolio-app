import BaseContainer from "components/containers/base-container/base-container";
import WidthLimiter from "components/containers/width-limiter/width-limiter";
import BlogContent from "components/blog/blog-content/blog-content";

const BlogPage = () => {
  return (
    <BaseContainer>
      <WidthLimiter>
        <BlogContent />
      </WidthLimiter>
    </BaseContainer>
  );
};

export default BlogPage;
