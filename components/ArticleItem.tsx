import Image from "next/image";
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
          <span className="text-lg text-sky-600">{post.category}</span>
          <h3 className="font-extrabold text-slate-800">{post.title}</h3>
          <p className="font-medium text-slate-600">{post.description}</p>
        </div>
        <Button>
          <span>Read more</span>
        </Button>
      </div>
      <div className="flex-1 h-64 w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${post.cover})` }}/>
    </div>
  );
};

export default ArticleItem;
