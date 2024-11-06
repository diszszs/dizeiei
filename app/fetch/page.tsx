"use client";

import React, { useState, useEffect } from "react";

type categories = {
  slug: string;
  name: string;
  url: string;
};

type products = {
  title: string;
  price: number;
};

const BASE_URL = `https://dummyjson.com/products`;
const URL_PRODUCT = `${BASE_URL}?limit=10&select=title,price`;
const URL_CATEGORY = `${BASE_URL}/categories`;

export default function Page() {
  const [categories, setCategories] = useState<categories[]>([]);
  const [products, setProducts] = useState<products[]>([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(URL_CATEGORY);
        const data = await response.json();
       
        setCategories(data.map((category: any) => ({
          slug: category.slug,
          name: category.name,
          url: category.url,
        })));
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL_PRODUCT);
        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([{ slug: newCategory.toLowerCase(), name: newCategory, url: "#" }, ...categories]);
      setNewCategory("");
    }
  };

  return (
    <div className="flex p-6">
      {}
      <aside className="w-1/3 p-4 bg-white rounded-lg ">
        <h2 className="text-xl font-semibold mb-4">Add new category</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Add new category"
            className="border p-2 border-neutral-950 w-2/3"
          />
          <button
            onClick={handleAddCategory}
            className="bg-white border border-black text-black p-2 ml-2 font-semibold"
          >
            Add
          </button>
        </div>
        <h1 className="text-3xl font-semibold mb-4">Categories</h1>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="text-gray-800">
              <a href={category.url}>{index + 1}. {category.name}</a>
            </li>
          ))}
        </ul>
      </aside>

      {}
      <main className="w-2/3 p-4 bg-white  ml-4">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 bg-indigo-200 border border-black rounded-md flex justify-between items-center"
            >
              <span className="text-gray-800 ">{product.title}</span>
              <span className="text-gray-700 font-bold ">
                {product.price.toFixed(2)} 
              </span> 
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
