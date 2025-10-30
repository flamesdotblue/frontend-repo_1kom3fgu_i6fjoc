import { ShoppingCart, Sparkles, Truck, ShieldCheck } from "lucide-react";

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center font-bold">R</div>
          <span className="text-xl font-semibold tracking-tight">Resha</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#products" className="hover:text-black transition">Shop</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md active:scale-[0.98] transition">
          <ShoppingCart size={18} />
          Cart
        </button>
      </nav>

      <section className="relative px-6 md:px-10 pt-10 pb-16">
        <div className="absolute inset-0 -z-0" aria-hidden>
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-black/80">
              <Sparkles size={14} /> Fresh drop: AW25 Basics
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Everyday tees that feel premium, priced fairly.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Resha crafts ultra-soft, durable t-shirts made for daily wear. Ethical cotton, timeless cuts, and colors that go with everything.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#products" className="rounded-full bg-black text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
                Shop Bestsellers
              </a>
              <a href="#about" className="rounded-full bg-white text-black ring-1 ring-black/10 px-6 py-3 text-sm font-semibold hover:ring-black/20 transition">
                Why Resha
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Truck size={16}/> Free 3–5 day shipping</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16}/> 30-day easy returns</div>
              <div className="flex items-center gap-2"><Sparkles size={16}/> Pre-shrunk & super soft</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1548883354-7622d3f32e2f?q=80&w=1600&auto=format&fit=crop"
                alt="Resha premium t-shirts"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
