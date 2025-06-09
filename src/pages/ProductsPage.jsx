// src/pages/ProductsPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/fullProdcuts.json"; // make sure this file has id, name, price, image, category, slug, description, etc.

export default function ProductsPage() {
  const { category } = useParams(); // e.g. "floral-kurti"
  const navigate = useNavigate();

  // Filter products whose slug matches the URL param
  const filtered = products.filter((p) => p.slug === category);

  // If no products found, you might redirect back or show a message
  if (filtered.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">No products found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-teal-600 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Title: show the human-friendly category name
  const title = filtered[0].category;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{prod.name}</h2>
              <p className="text-gray-600 mt-1 mb-3">₹{prod.price}</p>
              {prod.description && (
                <p className="text-gray-700 text-sm mb-4">{prod.description}</p>
              )}
              <button
                onClick={() => {
                  /* You can call your addToCart handler here */
                }}
                className="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
