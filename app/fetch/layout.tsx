import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white text-black p-6 text-center">
        <h1 className="text-3xl font-bold">Product List 2024</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
