/* eslint-disable react/no-danger */
import { getPostIds, getPost } from "utils/Posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

type PostType = {
  date: string;
  title: string;
  content: string;
};

export const Post = ({ post }: { post: PostType }) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <h1>{post.title}</h1>
      <div className="posted-on">{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
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
