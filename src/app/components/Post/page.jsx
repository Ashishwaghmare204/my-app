'use client'
import { use } from 'react'
import React from 'react'
import Link from 'next/link'
const Posts = ({promise}) => {
    const posts=use(promise)
    console.log(posts)
  return (
    <div>

 <div className="flex flex-wrap gap-1.5">
        {posts.map((post) => (
          <div className="border p-4" key={post.id}>
           <Link href={`/blog/${post.id}`}> <h2 className="text-indigo-500">Title: {post.title}</h2></Link>
            <p>Post: {post.body}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Posts