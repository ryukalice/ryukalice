/* eslint-disable react/no-danger */
import { getPostIds, getPost } from "utils/Posts";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { Article } from "components/Article";
import { ShareButtons } from "components/ShareButtons";

type PostType = {
  date: string;
  title: string;
  content: string;
};

export const Post = ({ post }: { post: PostType }) => (
  <>
    <Head>
      <title>{`${post.title} | Ryukalice`}</title>
    </Head>
    <Article>
      <h1>{post.title}</h1>
      <div className="posted-on">{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Article>

    <ShareButtons url={`http://ryukalice.com${useRouter().asPath}`} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params!.id as string);
  return { props: { post } };
};

export default Post;
