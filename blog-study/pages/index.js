import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

/*홈페이지*/
export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>kimye00808's Blog</title>
        <meta name="description" content="kimye0808's blog" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
