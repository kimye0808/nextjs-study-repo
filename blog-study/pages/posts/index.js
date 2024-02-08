import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

/*전체 post 보여주는 페이지*/
export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="programming related posts" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
