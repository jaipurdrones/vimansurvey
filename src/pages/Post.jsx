import React from "react";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../api/wp";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const p = await fetchPostBySlug(slug);
        setPost(p);
      } catch (err) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) return <div className="max-w-4xl mx-auto px-6 py-16">Loading...</div>;
  if (!post) return <div className="max-w-4xl mx-auto px-6 py-16">Post not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
