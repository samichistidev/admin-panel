import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 });

  useEffect(() => {
    async function fetchData() {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((r) => r.json());
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      ).then((r) => r.json());
      const comments = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
      ).then((r) => r.json());
      setStats({
        users: users.length,
        posts: posts.length,
        comments: comments.length,
      });
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold">Users</h3>
        <p className="text-2xl font-bold mt-2">{stats.users}</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold">Posts</h3>
        <p className="text-2xl font-bold mt-2">{stats.posts}</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <p className="text-2xl font-bold mt-2">{stats.comments}</p>
      </div>
    </div>
  );
}
