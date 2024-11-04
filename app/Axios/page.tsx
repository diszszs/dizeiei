"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import "tailwindcss/tailwind.css";

type PostType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string, 
}

type PhotoType = {
    id: number,
    title: string,
}

export default function Page() {
    const [url, setUrl] = useState('')
    const [obj, setObj] = useState<PostType[] | null>(null)
    const [photos, setPhotos] = useState<PhotoType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const userRes = await axios.get("https://api.github.com/users/nikisidama")
                setUrl(userRes.data.avatar_url)
                
                const postRes = await axios.get("/api/vercel")
                setObj(postRes.data)
                
                const photoRes = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
                setPhotos(photoRes.data.map((photo: { id: number, title: string }) => ({
                    id: photo.id,
                    title: photo.title
                })))
            } catch (e) {
                console.error("Error fetching data:", e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
        </div>
    )

    return (
        <div className="bg-black min-h-screen py-12 text-white">
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4">Personal Information</h1>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ullam molestias..</p>
                </header>
                
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo) => {
                        const item = obj?.find((o) => o.id === photo.id)
                        if (!item) return null
                        return (
                            <div 
                                key={photo.id} 
                                className="relative bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
                                <p className="text-gray-500"><strong>ID:</strong> {item.id}</p>
                                <p className="text-gray-700 mt-2"><strong>Description:</strong> {item.content}</p>
                                <p className="text-gray-500 mt-2"><strong>Author:</strong> {item.author}</p>
                                <p className="text-gray-500 mt-2"><strong>Date:</strong> {item.date}</p>
                                <p className="text-gray-500 mt-2"><strong>Category:</strong> {item.category}</p>
                                <div className="absolute bottom-4 right-4 text-sm font-semibold text-gray-500">Learn More</div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}