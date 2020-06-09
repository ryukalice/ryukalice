import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";

const html = require("remark-html");

const dir = path.join(process.cwd(), "blog");

export function getPosts() {
  const posts = fs.readdirSync(dir).map((file) => {
    const id = file.replace(/\.md$/, "");
    const mattered = matter(fs.readFileSync(path.join(dir, file), "utf8"));

    return { id, ...(mattered.data as { date: string; title: string }) };
  });

  return posts.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export function getPostIds() {
  return fs.readdirSync(dir).map((file) => {
    return { params: { id: file.replace(/\.md$/, "") } };
  });
}

export async function getPost(id: string) {
  const mattered = matter(fs.readFileSync(path.join(dir, `${id}.md`), "utf8"));
  const processed = await remark().use(html).process(mattered.content);
  const content = processed.toString();

  return {
    id,
    content,
    ...(mattered.data as { date: string; title: string }),
  };
}
