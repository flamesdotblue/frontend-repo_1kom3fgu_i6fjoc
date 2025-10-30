import { Leaf, Recycle, ThumbsUp, Factory } from "lucide-react";

const points = [
  {
    icon: Leaf,
    title: "Ethical materials",
    desc: "Organic or BCI cotton, low-impact dyes, and responsible sourcing.",
  },
  {
    icon: Factory,
    title: "Fair manufacturing",
    desc: "Audited partner factories and living-wage commitments.",
  },
  {
    icon: Recycle,
    title: "Built to last",
    desc: "Pre-shrunk, reinforced seams, and strict quality standards.",
  },
  {
    icon: ThumbsUp,
    title: "Loved by many",
    desc: "Thousands of five-star reviews and growing community.",
  },
];

export default function AboutResha() {
  return (
    <section id="about" className="px-6 md:px-10 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">The Resha standard</h2>
          <p className="mt-3 text-gray-600 md:text-lg">
            We believe good t-shirts should be simple: soft, strong, and sustainable. From yarn to your wardrobe,
            every choice is made to feel better, last longer, and leave a lighter footprint.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5">
                <div className="mt-1 rounded-md bg-black text-white p-2">
                  <p.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[16/12] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop"
              alt="Resha production"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
