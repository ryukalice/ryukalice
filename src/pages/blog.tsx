import { GetStaticProps } from "next";
import Link from "next/link";
import { Article } from "components/Article";
import { getPosts } from "utils/Posts";

type PostType = {
  id: string;
  title: string;
  date: string;
};

export default function Blog({ posts }: { posts: PostType[] }) {
  return (
    <Article>
      <h1>Blog</h1>
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Article>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { posts: getPosts() } };
};
