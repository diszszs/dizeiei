'use client'

import { useState, useEffect } from 'react'
import prisma from '../utils/db'

interface Guitar {
  id: string
  name: string
  brand: string
  price: number
}

export default function GuitarPage() {
  const [guitars, setGuitars] = useState<Guitar[]>([])
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    const fetchGuitars = async () => {
      const response = await fetch('/api/guitars')
      const data = await response.json()
      setGuitars(data)
    }
    fetchGuitars()
  }, [])

  const addGuitar = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/guitars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, brand, price: parseFloat(price) }),
    })

    if (response.ok) {
      const newGuitar = await response.json()
      setGuitars([...guitars, newGuitar])
      setName('')
      setBrand('')
      setPrice('')
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-2xl bg-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">Guitar Showcase 🎸</h1>

      {/* Form Section */}
      <form onSubmit={addGuitar} className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Add a New Guitar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
          Add Guitar
        </button>
      </form>

      {/* Guitar List Section */}
      <div className="space-y-6">
        {guitars.length > 0 ? (
          guitars.map((guitar) => (
            <div key={guitar.id} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <h2 className="text-2xl font-semibold text-white">{guitar.name}</h2>
              <p className="text-gray-400">Brand: <span className="font-medium">{guitar.brand}</span></p>
              <p className="text-gray-400">Price: <span className="font-medium">${guitar.price.toFixed(2)}</span></p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No guitars found. Start adding some!</p>
        )}
      </div>
    </div>
  )
}
