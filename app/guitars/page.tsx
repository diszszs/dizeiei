'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Guitar {
  id: string;
  name: string;
  brand: string;
  price: number;
  likeScore: number;
}

export default function GuitarPage() {
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [editingGuitar, setEditingGuitar] = useState<Guitar | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchGuitars();
    }
  }, [isLoggedIn]);

  const fetchGuitars = async () => {
    try {
      const response = await fetch('/api/guitars');
      const data = await response.json();
      setGuitars(data);
    } catch (error) {
      console.error('Failed to fetch guitars:', error);
    }
  };

  const checkLoginStatus = async () => {
    const token = document.cookie.includes('token');
    setIsLoggedIn(token);
  };

  const handleRegister = async () => {
    const email = prompt('Enter email:');
    const password = prompt('Enter password:');
    const firstName = prompt('Enter first name:');
    const lastName = prompt('Enter last name:');

    if (!email || !password || !firstName || !lastName) return;

    try {
      const response = await fetch('/api/guitars/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      if (!response.ok) throw new Error('Registration failed');
      alert('Registration successful!');
    } catch (error) {
      console.error('Failed to register:', error);
      alert('Registration failed!');
    }
  };

  const handleLogin = async () => {
    const email = prompt('Enter email:');
    const password = prompt('Enter password:');

    if (!email || !password) return;

    try {
      const response = await fetch('/api/guitars/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');
      alert('Login successful!');
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to login:', error);
      alert('Login failed!');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/guitars/logout', { method: 'POST' });
      if (!response.ok) throw new Error('Logout failed');
      alert('Logout successful!');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const addOrUpdateGuitar = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingGuitar ? 'PUT' : 'POST';
    const url = editingGuitar ? `/api/guitars` : `/api/guitars`;

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingGuitar?.id, name, brand, price }),
      });
      if (!response.ok) throw new Error('Failed to save guitar');
      fetchGuitars();
      setName('');
      setBrand('');
      setPrice('');
      setEditingGuitar(null);
    } catch (error) {
      console.error('Failed to save guitar:', error);
    }
  };

  const deleteGuitar = async (id: string) => {
    try {
      const response = await fetch(`/api/guitars`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Failed to delete guitar');
      fetchGuitars();
    } catch (error) {
      console.error('Failed to delete guitar:', error);
    }
  };

  const addLike = async (id: string) => {
    try {
      const response = await fetch(`/api/guitars`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Failed to like guitar');
      fetchGuitars();
    } catch (error) {
      console.error('Failed to like guitar:', error);
    }
  };

  const startEditing = (guitar: Guitar) => {
    setName(guitar.name);
    setBrand(guitar.brand);
    setPrice(guitar.price.toString());
    setEditingGuitar(guitar);
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Guitar Management 🎸</h1>

      {/* Login, Register, and Logout Buttons */}
      <div className="flex justify-end space-x-4 mb-6">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* Conditional Rendering Based on Login Status */}
      {isLoggedIn ? (
        <>
          {/* Form */}
          <form onSubmit={addOrUpdateGuitar} className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              {editingGuitar ? 'Edit Guitar' : 'Add a New Guitar'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              {editingGuitar ? 'Update Guitar' : 'Add Guitar'}
            </button>
          </form>

          {/* Guitar List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {guitars.length > 0 ? (
              guitars.map((guitar) => (
                <div
                  key={guitar.id}
                  className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-800">{guitar.name}</h2>
                  <p className="text-gray-600">
                    <span className="font-semibold">Brand:</span> {guitar.brand}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Price:</span> ${guitar.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Likes:</span> {guitar.likeScore}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => startEditing(guitar)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteGuitar(guitar.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => addLike(guitar.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Like ({guitar.likeScore})
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-2">No guitars found. Start adding some!</p>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Please log in to manage guitars.</p>
      )}
    </div>
  );
}
