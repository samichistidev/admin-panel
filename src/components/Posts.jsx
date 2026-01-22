import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p className="p-6">Loading posts...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={fetchPosts}
        >
          Refresh
        </button>
      </div>
      <div className="space-y-4">
        {posts.slice(0, 20).map((post) => (
          <div key={post.id} className="bg-white shadow rounded p-4">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700 mt-1">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
