"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import './Main.css';

const instruments = [
  {
    id: 1, 
    name: "Guitar",
    price: 210,
    original_price: 630,
    image_url:
      "https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 1578,
  },
  {
    id: 2,
    name: "Violin",
    price: 875,
    image_url:
      "https://images.unsplash.com/photo-1528032947483-4e1df543253a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 2300,
  },
  {
    id: 3,
    name: "Flute",
    price: 1500,
    image_url:
      "https://images.unsplash.com/photo-1699383443309-9a5d6f2e39c6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 2678,
  },
  {
    id: 4,
    name: "Piano",
    price: 3000,
    original_price: 4900,
    image_url:
      "https://images.unsplash.com/photo-1645336745172-28aab41f5c53?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 655,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 800,
    original_price: 1000,
    image_url:
      "https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 0,
  },
  {
    id: 6,
    name: "Double Bass",
    price: 6000,
    image_url:
      "https://images.unsplash.com/photo-1642523937194-63194c4748e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    is_new: false,
    likes: 1,
  },
  {
    id: 7,
    name: "Saxophone",
    price: 1680,
    image_url:
      "https://www.theeramusic.com/wp-content/uploads/2021/11/YAMAHA-YAS-26.jpg",
    is_new: false,
    likes: 728,
  },
  {
    id: 8,
    name: "Trumpet",
    price: 550,
    original_price: 770,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg",
    is_new: false,
    likes: 3125,
  },
  {
    id: 9,
    name: "Drums",
    price: 365,
    original_price: 1365,
    image_url:
      "https://i.pinimg.com/enabled_hi/564x/63/e0/a6/63e0a6b3b24ac0f5ad59eac79e877e77.jpg",
    is_new: false,
    likes: 700,
  },
  {
    id: 10,
    name: "Ukulele",
    price: 1085,
    image_url:
      "https://m.media-amazon.com/images/I/71N3o2SHmIL._AC_SL1500_.jpg",
    is_new: false,
    likes: 80,
  },
];

interface Instrument {
  id: number;
  name: string;
  price: number;
  original_price?: number;
  image_url: string;
  is_new: boolean;
  likes: number;
}

export default function Main() {
  const [gameLikes, setGameLikes] = useState<Instrument[]>(instruments);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editInstrument, setEditInstrument] = useState<Instrument | null>(
    null
  );
  const [newInstrument, setNewInstrument] = useState<Instrument>({
    id: instruments.length + 1,
    name: "",
    price: 0,
    image_url: "",
    original_price: undefined,
    is_new: false,
    likes: 0,
  });

  const router = useRouter(); 

  const handleLike = (index: number) => {
    const newLikes = [...gameLikes];
    newLikes[index].likes += 1;
    setGameLikes(newLikes);
  };

  const handleDelete = (index: number) => {
    const updatedInstruments = gameLikes.filter((_, i) => i !== index);
    setGameLikes(updatedInstruments);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditInstrument({ ...gameLikes[index] });
  };

  const saveEdit = (index: number) => {
    if (editInstrument) {
      const updatedInstruments = [...gameLikes];
      updatedInstruments[index] = editInstrument;
      setGameLikes(updatedInstruments);
      setEditingIndex(null);
      setEditInstrument(null);
    }
  };

  const handleInputChange = (field: keyof Instrument, value: string | number) => {
    if (editInstrument) {
      setEditInstrument({
        ...editInstrument,
        [field]: typeof value === "number" ? Number(value) : value,
      });
    }
  };

  const filteredInstruments = gameLikes.filter((instrument) =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddInstrument = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, price, image_url, original_price } = newInstrument;

    if (name && price && image_url) {
      setGameLikes([
        ...gameLikes,
        {
          ...newInstrument,
          id: instruments.length + 1,
        },
      ]);

      setNewInstrument({
        id: instruments.length + 1,
        name: "",
        price: 0,
        image_url: "",
        original_price: undefined,
        is_new: false,
        likes: 0,
      });
    }
  };

  const handleViewDetails = (id: number) => {
    router.push(`/report/${id}`); 
  };

  return (
    <main className="container">
      <div className="header">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Available product
        </h2>
        <button className="view-all hover:bg-indigo-700">View All</button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search instruments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />
      </div>

      <form onSubmit={handleAddInstrument} className="mb-4">
        <h3 className="text-xl font-bold">Add New Instrument</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newInstrument.name}
            onChange={(e) =>
              setNewInstrument({ ...newInstrument, name: e.target.value })
            }
            className="w-1/4 p-2 border border-black rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={newInstrument.price}
            onChange={(e) =>
              setNewInstrument({ ...newInstrument, price: Number(e.target.value) })
            }
            className="w-1/4 p-2 border border-black rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newInstrument.image_url}
            onChange={(e) =>
              setNewInstrument({
                ...newInstrument,
                image_url: e.target.value,
              })
            }
            className="w-1/4 p-2 border border-black rounded"
          />
          <button
            type="submit"
            className="w-1/4 p-2 text-white bg-blue-500 rounded"
          >
            Add Instrument
          </button>
        </div>
      </form>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredInstruments.map((instrument, index) => (
          <li
            key={instrument.id}
            className="border border-black rounded p-4"
          >
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editInstrument?.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-2 mb-2 border border-black rounded"
                />
                <input
                  type="number"
                  value={editInstrument?.price}
                  onChange={(e) =>
                    handleInputChange("price", Number(e.target.value))
                  }
                  className="w-full p-2 mb-2 border border-black rounded"
                />
                <input
                  type="text"
                  value={editInstrument?.image_url}
                  onChange={(e) =>
                    handleInputChange("image_url", e.target.value)
                  }
                  className="w-full p-2 mb-2 border border-black rounded"
                />
                <button
                  onClick={() => saveEdit(index)}
                  className="w-full p-2 bg-green-500 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <img
                  src={instrument.image_url}
                  alt={instrument.name}
                  className="mb-4 h-40 w-full object-cover rounded"
                />
                <h3 className="text-lg font-bold">{instrument.name}</h3>
                <p className="text-sm text-gray-700">Price: {instrument.price}</p>
                <button
                  onClick={() => handleViewDetails(instrument.id)}
                  className="w-full p-2 mt-2 text-white bg-blue-500 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleLike(index)}
                  className="w-full p-2 mt-2 text-white bg-indigo-500 rounded"
                >
                  Like ({instrument.likes})
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="w-full p-2 mt-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="w-full p-2 mt-2 text-white bg-yellow-500 rounded"
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
