'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  likeScore: number;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const addOrUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingPost ? `/api/post` : `/api/post`;
    const method = editingPost ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingPost?.id, title, content }),
      });

      if (!response.ok) throw new Error('Failed to save post');
      fetchPosts();
      setTitle('');
      setContent('');
      setEditingPost(null);
    } catch (error) {
      console.error('Failed to save post:', error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const response = await fetch('/api/post', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Failed to delete post');
      fetchPosts();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const addLike = async (id: string) => {
    try {
      const response = await fetch('/api/post', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Failed to like post');
      fetchPosts();
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  const startEditing = (post: Post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPost(post);
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Post Management</h1>

      {/* Form */}
      <form onSubmit={addOrUpdatePost} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingPost ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      {/* Post List */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <p>Likes: {post.likeScore}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => startEditing(post)}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => addLike(post.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
