import React from 'react';

type Blog = {
  id: number;
  author: string;
  date: string;
  category: string;
  content: string;
  photoTitle: string; 
};

//hadis

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch('https://api.vercel.app/blog');
  const data = await res.json();
  return data.map(({ title, ...rest }: any) => rest); 
}

async function fetchTitles(): Promise<{ id: number; title: string }[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  return data.map((photo: any) => ({ id: photo.id, title: photo.title })); 
}

export default async function Page() {
  const blogs = await fetchBlogs();
  const titles = await fetchTitles();

  const blogsWithTitles = blogs.map((blog) => ({
    ...blog,
    photoTitle: titles.find((title) => title.id === blog.id)?.title || 'No title available',
  }));

  return (
    <div className="space-y-8">
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-4">Blog Data</h2>
        {blogsWithTitles.map((blog, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <p><span className="font-bold">ID:</span> {blog.id}</p>
            <p><span className="font-bold">Author:</span> {blog.author}</p>
            <p><span className="font-bold">Date:</span> {blog.date}</p>
            <p><span className="font-bold">Category:</span> {blog.category}</p>
            <p><span className="font-bold">Content:</span> {blog.content}</p>
            <p><span className="font-bold">Title:</span> {blog.photoTitle}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
