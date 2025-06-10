import { useParams, useNavigate } from "react-router-dom";
import products from "../data/fullProdcuts.json";

export default function ProductsPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filtered = products.filter(
    (prod) => prod.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          No products found in "{category}"
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-teal-600 hover:underline"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 capitalize">
        {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">₹{item.price}</p>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
