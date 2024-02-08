import ReactMarkDown from "react-markdown"; //md파일 읽고 jsx로 리턴하는 패키지
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";


/*포스트 클릭시 디테일한 포스트 content*/
export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img(image) {
    //   //markdown components의 img를 Image로 오버라이딩
    //   // console.log(image);
    //   const { src, alt } = image;
    //   return <Image src={src} alt={alt} width={600} height={300} />;
    // },
    p(paragraph) {
      //단락 전체를 이미지를 포함한 div 태그로 대체
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        // console.log(image);
        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkDown components={customComponents}>
        {post.content}
      </ReactMarkDown>
    </article>
  );
}
