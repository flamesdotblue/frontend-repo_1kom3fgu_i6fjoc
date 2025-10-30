import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Core Crew Tee",
    price: 24,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
    color: "Slate Gray",
  },
  {
    id: 2,
    name: "Heavyweight Pocket Tee",
    price: 32,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d3f32e2f?q=80&w=1600&auto=format&fit=crop",
    color: "Carbon Black",
  },
  {
    id: 3,
    name: "Relaxed Boxy Tee",
    price: 28,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    color: "Bone",
  },
  {
    id: 4,
    name: "Organic Cotton Tee",
    price: 29,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    color: "Olive",
  },
];

function ProductCard({ p }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white ring-1 ring-black/5 hover:ring-black/10 shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.color}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-xs font-medium text-gray-800">{p.rating}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">${p.price}</span>
          <button className="text-sm rounded-full bg-black text-white px-3 py-1.5 hover:opacity-90 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  return (
    <section id="products" className="px-6 md:px-10 py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Bestsellers</h2>
          <p className="text-gray-600 mt-1">Our most-loved tees from the Resha community.</p>
        </div>
        <a href="#" className="text-sm font-medium underline underline-offset-4">View all</a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
