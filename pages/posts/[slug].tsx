import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { InferGetStaticPropsType } from 'next';
import { GetStaticPaths } from 'next';
import { Post } from '../../interfaces/post';
import Layout from '../../components/Layout';
import Image from 'next/image';

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_posts'));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownMeta = fs.readFileSync(path.join('_posts', slug + '.md'), 'utf-8');

  const { data, content } = matter(markdownMeta);
  const post: Post = {
    title: data.title,
    slug: data.slug,
    description: data.description,
    category: data.category,
    cover: data.cover,
    content,
  };

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title={post.title}>
      <main className="lg:col-span-full">
        <div
          className="mb-6 h-96 w-full rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${post.cover})` }}
        />
        <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} className="prose lg:prose-xl" />
      </main>
    </Layout>
  );
};

export default PostPage;
