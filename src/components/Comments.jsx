import React, { useState, useEffect } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (loading) return <p className="p-6">Loading comments...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Comments</h1>
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={fetchComments}
        >
          Refresh
        </button>
      </div>
      <div className="space-y-4 max-h-[70vh] overflow-y-auto">
        {comments.slice(0, 20).map((comment) => (
          <div key={comment.id} className="bg-white shadow rounded p-4">
            <h3 className="font-semibold">{comment.name}</h3>
            <p className="text-gray-700">{comment.body}</p>
            <p className="text-sm text-gray-500 mt-1">{comment.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
