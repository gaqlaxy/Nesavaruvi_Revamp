import { Link } from "react-router-dom";
import products from "../data/fullProdcuts.json";
import { useCart } from "../context/CartContext";

export default function HeroProducts() {
  const heroProducts = products.filter((p) => p.heroproduct);
  const { addToCart } = useCart();

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Hero Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {heroProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl shadow-lg p-4 bg-white flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="font-bold text-lg mb-2">₹{product.price}</p>
            <p className="text-sm mb-4 flex-1">{product.description}</p>
            <div className="flex gap-2 mt-auto">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition text-center"
              >
                View
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
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
