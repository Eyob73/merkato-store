import React, { useState } from "react";

// --- Minimalist Icons (Simplified shapes, reduced visual weight) ---
const StarIcon = ({ filled }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill={filled ? "#000" : "none"}
    stroke={filled ? "#000" : "#9CA3AF"}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// --- Product Card Component (Minimalist) ---
function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    if (isAdded) return;
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-md overflow-hidden">
      {/* Image Section - Clean, no badges, no wishlist */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Content Section - Minimal spacing */}
      <div className="flex flex-col p-4 gap-2">
        {/* Rating - Simple stars only */}
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < Math.floor(product.rating)} />
          ))}
        </div>

        {/* Title - Clean typography */}
        <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
          {product.title}
        </h3>

        {/* Color Swatches - Subtle */}
        <div className="flex items-center gap-1.5 mt-1">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border transition-all ${
                selectedColor === color
                  ? "border-gray-900 ring-1 ring-gray-300"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price & Add to Cart - Clean row */}
        <div className="mt-2 pt-1 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              isAdded
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isAdded ? (
              <>
                <CheckIcon />
                <span>Added</span>
              </>
            ) : (
              <>
                <CartIcon />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const products = [
    {
      id: 1,
      title: "Sony WH-1000XM5 Premium Wireless Headphones",
      rating: 5,
      price: 279,
      image:
        "https://image.qwenlm.ai/public_source/aebcfd8a-5256-422c-9ac8-c57b2bd724d8/12feb2453-7c2a-416b-bf89-030562549f75.png",
      colors: ["#1F2937", "#F3F4F6", "#1E3A8A"],
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Premium Wireless Headphones",
      rating: 4,
      price: 299,
      image:
        "https://image.qwenlm.ai/public_source/aebcfd8a-5256-422c-9ac8-c57b2bd724d8/12feb2453-7c2a-416b-bf89-030562549f75.png",
      colors: ["#1F2937", "#991B1B", "#065F46"],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6">
      {/* Header - Simple */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-2xl font-light text-gray-900 tracking-wide">
          Featured Products
        </h1>
      </div>

      {/* Product Grid - Clean */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
