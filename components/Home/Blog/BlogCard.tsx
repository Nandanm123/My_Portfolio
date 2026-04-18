import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  date?: string;
  category?: string;
  tags?: string[];
};

const BlogCard = ({ image, title, date = "5 July 2025", category = "General", tags = ["React", "Next JS", "Tailwind"] }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="blog"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
        {date}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs font-bold rounded-full border border-cyan-300/40">
          {category}
        </span>
      </div>
      <h1 className="mt-3 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300 flex-grow">
        {title}
      </h1>
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        {tags.map((tag, index) => (
          <p key={index} className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
