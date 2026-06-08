import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id) || null;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!product) {
    return (
      <main className="pt-[4.5rem] bg-[#f7f5f1] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-semibold text-stone-900">Product not found</h1>
          <p className="mt-4 text-stone-600">Please go back and select a product from the homepage.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition"
          >
            Back to shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[4.5rem] bg-[#f7f5f1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid gap-1 lg:grid-cols-[1.2fr_0.9fr] items-start">
          <div className="lg:self-start lg:sticky lg:top-[4.5rem] overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
            <img src={product.image} alt={product.title} className="w-full h-full max-h-[760px] object-cover" />
          </div>

          <div className="space-y-1">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-4xl font-semibold text-stone-900">{product.title}</h1>
                <p className="mt-3 max-w-2xl text-stone-600">{product.description}</p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition"
              >
                Back to shop
              </Link>
            </div>

            <div className="rounded-3xl p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-500">Product details</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">SKU</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.sku}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Weight</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.weight}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Warranty</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.warranty}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Shipping</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.shipping}</p>
                </div>
              </div>
              <p className="mt-6 text-stone-700 leading-7">{product.details}</p>
              <div className="mt-6 flex items-center justify-between rounded-3xl bg-stone-50 p-5">
                <span className="text-sm text-stone-500">Price</span>
                <strong className="text-2xl text-stone-900">${product.price}</strong>
              </div>
            </div>

            <div className="rounded-3xl p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h2 className="text-lg font-semibold text-stone-900">Why you'll love it</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl bg-stone-50 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Feature</p>
                    <p className="mt-2 font-semibold text-stone-900">{highlight}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-3 text-stone-600">
                <li>• Premium materials with a polished finish.</li>
                <li>• Designed for comfort and daily use.</li>
                <li>• Styled to pair with any outfit.</li>
              </ul>
              <button className="mt-6 w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-800 transition">
                Add to cart
              </button>
            </div>
            <div className="rounded-3xl p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h2 className="text-lg font-semibold text-stone-900">Top highlights</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Size</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.size}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Material</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.material}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Color</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.color}</p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Shipping</p>
                  <p className="mt-2 font-semibold text-stone-900">{product.shipping}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
