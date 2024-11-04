import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-orange-400 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Data from Vercel & Typicode APIs
        </h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-orange-400 text-white p-4 text-center">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
}
