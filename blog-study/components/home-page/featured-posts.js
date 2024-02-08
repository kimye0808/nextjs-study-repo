import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

/*홈페이지 featured post 모음*/
export default function FeaturedPost(props) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPost</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
