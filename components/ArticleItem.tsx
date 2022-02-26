import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../interfaces/post';
import Button from './Button';

interface ArticleItemProps {
  post: Post;
}

const ArticleItem = ({ post }: ArticleItemProps) => {
  return (
    <div className="flex justify-between space-x-5 py-8">
      <div className="inline-flex flex-1 flex-col items-start justify-between">
        <div>
          <span className="text-sm text-sky-600">{post.category}</span>
          <h3 className="text-lg font-extrabold text-slate-800">{post.title}</h3>
          <p className="font-medium text-slate-600">{post.description}</p>
        </div>
        <Link href={`/posts/${post.slug}`} passHref>
          <Button>
            <span>Read more</span>
          </Button>
        </Link>
      </div>
      <div
        className="h-64 w-full flex-1 rounded-lg bg-cover bg-center shadow-sm hover:scale-105 hover:rotate-3 transition-transform ring-2 hover:ring-green-600"
        style={{ backgroundImage: `url(${post.cover})` }}
      />
    </div>
  );
};

export default ArticleItem;
