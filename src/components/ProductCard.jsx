import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Spring Collection",
    subtitle: "Fresh arrivals for every style.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1280&q=80",
    cta: "Shop Now",
  },
  {
    title: "Streetwear Essentials",
    subtitle: "Bold looks that stand out in every crowd.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1280&q=80",
    cta: "View Collection",
  },
  {
    title: "Everyday Comfort",
    subtitle: "Premium pieces made for life on the go.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1280&q=80",
    cta: "Explore Now",
  },
];

const products = [
  {
    id: 1,
    title: "Classic Sneakers",
    price: "59.99",
    image:
      "https://images.unsplash.com/photo-1514995669114-5b4d6a0bbc5f?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable everyday shoes with a clean finish.",
  },
  {
    id: 2,
    title: "Modern Watch",
    price: "129.99",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    description: "Minimal design with a durable leather strap.",
  },
  {
    id: 3,
    title: "Travel Backpack",
    price: "89.99",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d65c0b8c9?auto=format&fit=crop&w=800&q=80",
    description: "Roomy, lightweight, and perfect for daily carry.",
  },
  {
    id: 4,
    title: "Everyday Hoodie",
    price: "69.99",
    image:
      "https://images.unsplash.com/photo-1520975920178-4b8d3de1e99f?auto=format&fit=crop&w=800&q=80",
    description: "Soft fleece hoodie made for layering.",
  },
  {
    id: 5,
    title: "Leather Tote",
    price: "149.99",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
    description: "Spacious leather tote perfect for work and travel.",
  },
  {
    id: 6,
    title: "Sunglass Set",
    price: "39.99",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    description: "Classic frames with UV protection.",
  },
  {
    id: 7,
    title: "Comfort Crew Socks",
    price: "14.99",
    image:
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=800&q=80",
    description: "Cushioned socks made for everyday wear.",
  },
  {
    id: 8,
    title: "Weekend Cap",
    price: "24.99",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    description: "Structured cap with a soft sweatband.",
  },
];

function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      <div className="relative h-[320px] sm:h-[420px]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 px-6 sm:px-12 lg:px-20 max-w-2xl">
              <span className="text-sm uppercase tracking-[0.35em] text-amber-300">
                New arrivals
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
                {slide.title}
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-stone-100/90">
                {slide.subtitle}
              </p>
              <button className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-900 shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-8 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProductCard() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f7f5f1] min-h-screen">
      <BannerSlider />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-4 sm:p-6">
          <div className="rounded-t-lg bg-white px-5 py-5 shadow-sm">
            <h2 className="text-3xl font-semibold text-stone-900">Featured Products</h2>
            <p className="mt-2 text-sm text-stone-600 max-w-2xl">
              Browse our favorite new pieces for your next look.
            </p>
          </div>

          <div className="flex gap-0 overflow-x-auto pb-1 snap-x snap-mandatory">
            {products.map((product) => (
              <article
                key={product.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/product/${product.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(`/product/${product.id}`);
                  }
                }}
                className="min-w-[200px] max-w-[240px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover"
                />
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between text-sm text-stone-500">
                    <span>New</span>
                    <span className="font-semibold text-stone-900">${product.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900">{product.title}</h3>
                  <p className="text-sm leading-6 text-stone-600">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
