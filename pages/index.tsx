import type { InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import { Post } from '../interfaces/post';
import ArticleItem from '../components/ArticleItem';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('_posts'));

  const posts = files.map(file => {
    const markdownMeta = fs.readFileSync(path.join('_posts', file), 'utf-8');
    return matter(markdownMeta).data as Post;
  });

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Home">
      <main className="lg:col-span-full">
        <h2 className="mb-6 w-full text-center text-2xl font-extrabold text-slate-800">Latest Posts</h2>
        <div className="divide-y-2">
          {posts.map(post => (
            <ArticleItem key={post.title} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
