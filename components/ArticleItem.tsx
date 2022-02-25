import { Post } from "../interfaces/post";
import Button from "./Button";

interface ArticleItemProps {
    post: Post;
}

const ArticleItem = ({post}: ArticleItemProps) => {
  return (
    <div className="flex items-center justify-between space-x-5 space-y-5">
      <div className="flex flex-1 h-full flex-col justify-between items-start">
        <div className="">
          <span className="text-lg text-sky-600">{post.category}</span>
          <h3 className="font-extrabold text-slate-800">{post.title}</h3>
          <p className="font-medium text-slate-600">{post.description}</p>
        </div>
        <Button>
          <span>Read more</span>
        </Button>
      </div>
      <div
        className="h-64 w-full flex-1 rounded-lg bg-red-600 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.cover})` }}
      />
    </div>
  );
};

export default ArticleItem;
