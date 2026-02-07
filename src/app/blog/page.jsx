import Link from "next/link";
import Posts from "../components/Post/page";
import { Suspense } from "react";
import Button from "../components/Button";

const BlogPage = async () => {
  const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  console.log("server component");
  return (
    <div>
      <h1>Blog Page</h1>
      <Button />
      <Suspense fallback={<div>loading.........</div>}>
        <Posts promise={promise} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
