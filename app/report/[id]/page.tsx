"use client";
import { useParams } from "next/navigation";

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

export default function ReportPage() {
  const params = useParams();
  const { id } = params;
  
  const instrument = instruments.find((item) => item.id === Number(id));

  if (!instrument) {
    return <p className="text-white">Instrument not found</p>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-gray-800 min-h-screen">
      <div className="bg-gray-700 shadow-md rounded-lg overflow-hidden">
        <img
          src={instrument.image_url}
          alt={instrument.name}
          className="h-80 w-full object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            {instrument.name}
          </h1>
          <p className="text-lg text-green-500 font-semibold mb-2">
            ${instrument.price}
          </p>
          {instrument.original_price && (
            <p className="text-sm text-gray-300 line-through mb-2">
              Original Price: ${instrument.original_price}
            </p>
          )}
          <p className="text-gray-300 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec 
            tellus sed augue semper porta.
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 text-sm">Likes: {instrument.likes}</span>
            {instrument.is_new && (
              <span className="ml-4 text-sm text-green-500 font-semibold">
                New Arrival!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
