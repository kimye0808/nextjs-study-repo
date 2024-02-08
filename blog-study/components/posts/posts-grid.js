import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

/*Posts버튼 클릭시 모든 포스트를 gird로 배열*/
export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
