import React from "react";
import { useParams } from "react-router-dom";

// Temporary mock data (replace later if needed)
const posts = [
  {
    slug: "sample-post",
    title: "Sample Blog Post",
    content:
      "<p>This is a sample blog post. You are not using WordPress anymore.</p>",
  },
];

export default function Post() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        Post not found
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}