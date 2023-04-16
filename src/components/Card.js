import React from "react";

function Card({ post }) {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <p className="font-bold text-lg">{post.title}</p>
      <p className="text-sm my-1">
        By <span className="italic">{post.author}</span> on <span className="font-semibold underline cursor-pointer">{post.category}</span>
      </p>
      <p className="text-sm">Posted on {post.date}</p>
      <p className="mt-4 mb-2">{post.content}</p>
      <div className="flex flex-wrap gap-x-2 items-center">
        {post.tags.map((tag, index) => {
          return <span className="text-xs font-semibold underline text-blue-700 cursor-pointer" key={index}>{`#${tag}`} </span>;
        })}
      </div>
    </div>
  );
}

export default Card;
