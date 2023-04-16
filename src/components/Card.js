import React from "react";
import BlogDetails from "./BlogDetails";

function Card({ post }) {
  return (
    <BlogDetails key={post.id} post={post} />
  );
}

export default Card;
