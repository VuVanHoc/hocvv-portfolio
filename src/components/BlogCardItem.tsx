import Image from "next/image";
import dayjs from "dayjs";

export interface IBlog {
  image: string;
  createdDate: string;
  comments: number;
  title: string;
}
interface BlogCardItemProps {
  blog: IBlog;
}
export default function BlogCardItem({ blog }: BlogCardItemProps) {
  return (
    <div className="shadow-xl rounded-lg bg-white">
      <Image
        src={blog.image}
        alt={blog.title}
        width={424}
        height={248}
        className="w-full aspect-[424/248]"
      />
      <div className="p-5">
        <p className="text-xs text-gray-400">
          {dayjs(blog.createdDate).format("DD MMM, YYYY")} -{" "}
          {`${
            blog.comments > 1
              ? `${blog.comments} comments`
              : `${blog.comments} comment`
          }`}
        </p>
        <p className="text-lg font-semibold">{blog.title}</p>
      </div>
    </div>
  );
}
