import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  // Fetch the single post using the ID
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  const post = await res.json();

  return (
    <div className="p-6">
      page for id {id}
      <h1 className="text-2xl font-bold text-indigo-600">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
};

export default page;
