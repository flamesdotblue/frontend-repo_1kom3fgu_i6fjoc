import { Instagram, Mail, Phone, ShieldCheck, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-white text-black grid place-items-center font-bold">R</div>
              <span className="text-xl font-semibold tracking-tight">Resha</span>
            </div>
            <p className="mt-3 text-white/70">
              Premium everyday t-shirts designed for comfort, quality, and longevity.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2"><Truck size={16}/> Free shipping over $50</div>
              <div className="flex items-center gap-2"><ShieldCheck size={16}/> 30-day returns</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2"><Phone size={16}/> +1 (555) 010-9999</li>
              <li className="flex items-center gap-2"><Mail size={16}/> support@resha.co</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:opacity-90">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Resha Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
