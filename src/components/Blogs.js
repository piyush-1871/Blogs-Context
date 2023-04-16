import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";
function Blogs() {
  const { loading, posts } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="my-[100px]">
      {loading ? (
        <div className="min-h-[80vh] w-full flex flex-col justify-center items-center">
          <Spinner />
          <p className="text-center font-bold mt-6 text-3xl">Loading!</p>
        </div>
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found!</p>
        </div>
      ) : (
        posts.map((post) => (
          <div className="flex flex-col gap-y-10 my-4">
            <Card key={post.id} post={post} />
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
