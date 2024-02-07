import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

/*Posts버튼 클릭시 모든 포스트*/
export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
