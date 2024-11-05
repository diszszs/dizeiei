// app/home/page.tsx
"use client"; // บอกให้ Next.js รู้ว่าเป็น Client Component

import React from 'react';

type Car = {
  id: number;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  image_url: string;
};

const featuredCars: Car[] = [
  {
    id: 1,
    model: "Mercedes-Benz S-Class",
    year: 2021,
    color: "Black",
    price: 9500000,
    description: "Luxury sedan with top-of-the-line features and comfortable ride.",
    image_url: "https://th.bing.com/th/id/R.9a4e916f23c2b2826eb6678469d01023?rik=VDy7BsqtAVEYEw&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    model: "BMW 7 Series",
    year: 2020,
    color: "Silver",
    price: 8900000,
    description: "Elegant design and powerful engine, perfect for city and highway driving.",
    image_url: "https://th.bing.com/th/id/OIP.bvjqeWk4AgFmIY8YH64mzAHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    model: "Audi A8",
    year: 2019,
    color: "White",
    price: 8500000,
    description: "Sophisticated technology and luxury features for an outstanding drive.",
    image_url: "https://th.bing.com/th/id/OIP.WQuK8z3v0A9ypcco2AyJvwHaEK?rs=1&pid=ImgDetMain",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/images/mercedes.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Luxury Used Car Marketplace</h1>
          <p className="text-lg font-semibold">Find the best deals on luxury pre-owned cars</p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300">
            Discover More
          </button>
        </div>
      </header>
      
      {/* Main Section */}
      <main className="p-8 flex flex-col items-center mt-10">
        <section className="w-full max-w-6xl bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">Our Featured Luxury Cars</h2>
          
          <div className="space-y-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="flex flex-col md:flex-row items-center p-6 bg-gray-700 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={car.image_url}
                  alt={`${car.model} image`}
                  className="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">{car.model}</h3>
                  <p className="mb-1"><span className="font-bold">Year:</span> {car.year}</p>
                  <p className="mb-1"><span className="font-bold">Color:</span> {car.color}</p>
                  <p className="mb-1"><span className="font-bold">Price:</span> {car.price.toLocaleString("th-TH", { style: "currency", currency: "THB" })}</p>
                  <p className="mb-4"><span className="font-bold">Description:</span> {car.description}</p>
                  <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-center py-4">
        <p>&copy; 2024 Luxury Used Car Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
