"use client";

import { useState } from "react";

interface Props {
  activePageId: string;
  onNavigate: (pageId: string) => void;
  isMobilePreview?: boolean;
}

interface Product {
  id: string;
  name: string;
  category: "watches" | "audio" | "objects";
  price: number;
  badge?: string;
  material: string;
  desc: string;
}

const PRODUCTS: Product[] = [
  {
    id: "chrono-01",
    name: "Kinetic Chrono 01",
    category: "watches",
    price: 380,
    badge: "Bestseller",
    material: "Grade 5 Titanium / Sapphire",
    desc: "A mechanical kinetic timepiece featuring brushed titanium casing, anti-reflective sapphire crystal, and an automatic Japanese movement.",
  },
  {
    id: "pods-02",
    name: "Aero Acoustic Pods",
    category: "audio",
    price: 240,
    badge: "New",
    material: "Graphite Ceramic / MEMS Mic",
    desc: "True wireless in-ear monitors calibrated for flat frequency response, active hybrid noise cancellation, and 32-hour playback.",
  },
  {
    id: "flask-03",
    name: "Vessel Flask 750",
    category: "objects",
    price: 95,
    material: "Raw Double-Wall Ceramic",
    desc: "Double-walled vacuum insulated hydration vessel with raw matte stoneware glaze and leakproof machined aluminium cap.",
  },
  {
    id: "lamp-04",
    name: "Prism Desk Luminaire",
    category: "objects",
    price: 185,
    badge: "Limited Drop",
    material: "Extruded Anodized Aluminium",
    desc: "Architectural linear desk luminaire with capacitive touch dimming and 98 CRI high-fidelity warm light spectrum.",
  },
  {
    id: "case-05",
    name: "Tactile Folio Sleeve",
    category: "objects",
    price: 110,
    material: "Vegetable-Tanned Italian Leather",
    desc: "Minimalist padded protective sleeve for 14-inch laptops hand-stitched with waxed linen thread and magnetic clasp closure.",
  },
  {
    id: "watch-06",
    name: "Monolith Field Watch",
    category: "watches",
    price: 295,
    material: "DLC Matte Black Stainless Steel",
    desc: "Stealth field watch with high-contrast Swiss Super-LumiNova markers, 100m water resistance, and ballistic nylon strap.",
  },
];

/* ── Realistic Designed Product Illustration ─────────────────── */
function ProductIllustration({ id, size = "card" }: { id: string; size?: "card" | "detail" }) {
  const isDetail = size === "detail";
  const scale = isDetail ? "scale-125 sm:scale-150" : "";

  if (id === "chrono-01") {
    return (
      <div className={`relative flex items-center justify-center transition-transform ${scale}`}>
        {/* Watch Strap Top */}
        <div className="absolute -top-6 h-6 w-8 rounded-t bg-gradient-to-b from-[#27272a] to-[#3f3f46] border-x border-t border-white/10" />
        {/* Watch Strap Bottom */}
        <div className="absolute -bottom-6 h-6 w-8 rounded-b bg-gradient-to-t from-[#27272a] to-[#3f3f46] border-x border-b border-white/10" />
        {/* Watch Case */}
        <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-[#71717a] via-[#3f3f46] to-[#18181b] p-1 shadow-xl ring-1 ring-white/20">
          {/* Bezel */}
          <div className="h-full w-full rounded-full bg-[#18181b] p-1 flex items-center justify-center relative">
            {/* Outer Dial Markers */}
            <div className="absolute inset-1 rounded-full border border-white/10" />
            <span className="absolute top-1 text-[6px] font-mono font-bold text-lime">12</span>
            <span className="absolute right-1 text-[6px] font-mono text-white/40">3</span>
            <span className="absolute bottom-1 text-[6px] font-mono text-white/40">6</span>
            <span className="absolute left-1 text-[6px] font-mono text-white/40">9</span>
            {/* Subdial */}
            <div className="h-6 w-6 rounded-full border border-lime/30 bg-lime/[0.04] flex items-center justify-center">
              <span className="text-[5px] font-mono text-lime font-bold">24H</span>
            </div>
            {/* Hands */}
            <div className="absolute h-6 w-0.5 bg-white origin-bottom -translate-y-2 rounded-full" />
            <div className="absolute h-8 w-0.5 bg-lime origin-bottom -translate-y-3 rotate-45 rounded-full" />
            <div className="absolute h-1.5 w-1.5 rounded-full bg-white ring-2 ring-[#18181b]" />
            {/* Crown */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-2.5 w-1.5 rounded-sm bg-gradient-to-r from-[#71717a] to-[#3f3f46] border border-white/20" />
          </div>
        </div>
      </div>
    );
  }

  if (id === "pods-02") {
    return (
      <div className={`relative flex items-center justify-center transition-transform ${scale}`}>
        {/* Pods Charging Case */}
        <div className="relative h-16 w-20 rounded-[20px] bg-gradient-to-br from-[#27272a] via-[#18181b] to-[#09090b] border border-white/15 shadow-2xl p-2 flex flex-col justify-between">
          {/* Seam line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-white/20 shadow-sm" />
          <div className="flex items-center justify-center pt-0.5">
            <span className="text-[6px] font-mono uppercase tracking-widest text-white/30">AURA ACOUSTIC</span>
          </div>
          {/* LED Indicator */}
          <div className="flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
            <span className="text-[6px] font-mono text-white/40">ANC Active</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "flask-03") {
    return (
      <div className={`relative flex flex-col items-center justify-center transition-transform ${scale}`}>
        {/* Cap */}
        <div className="h-3.5 w-7 rounded-t-sm bg-gradient-to-r from-[#71717a] via-[#a1a1aa] to-[#71717a] border border-white/20 shadow-sm" />
        <div className="h-1 w-5 bg-[#3f3f46]" />
        {/* Flask Body */}
        <div className="relative h-20 w-12 rounded-b-2xl rounded-t-md bg-gradient-to-b from-[#e4d5b7] via-[#d4c39f] to-[#bfa97e] border border-white/20 shadow-xl overflow-hidden flex flex-col items-center justify-between py-2">
          {/* Glaze sheen */}
          <div className="absolute inset-y-0 left-1 w-2 bg-white/30 blur-[1px] rounded-full" />
          <span className="text-[6px] font-mono font-bold tracking-widest text-[#5c4d32] uppercase">750ML</span>
          <div className="h-px w-6 bg-[#5c4d32]/20" />
          <span className="text-[5px] font-mono text-[#5c4d32]/60">CERAMIC</span>
        </div>
      </div>
    );
  }

  if (id === "lamp-04") {
    return (
      <div className={`relative flex flex-col items-center justify-center transition-transform ${scale}`}>
        {/* Linear Luminaire Bar */}
        <div className="relative h-3 w-28 rounded-full bg-gradient-to-r from-[#27272a] via-[#3f3f46] to-[#27272a] border border-white/20 shadow-lg flex items-center justify-center">
          {/* Diffuser warm glow */}
          <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 shadow-[0_0_16px_rgba(251,191,36,0.8)]" />
        </div>
        {/* Stand stem */}
        <div className="h-14 w-1.5 bg-gradient-to-b from-[#3f3f46] to-[#18181b] border-x border-white/10" />
        {/* Base */}
        <div className="h-2 w-16 rounded-full bg-gradient-to-r from-[#18181b] via-[#27272a] to-[#18181b] border border-white/15 shadow-md flex items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-lime/80 shadow-[0_0_4px_rgba(200,255,0,0.6)]" />
        </div>
      </div>
    );
  }

  if (id === "case-05") {
    return (
      <div className={`relative flex items-center justify-center transition-transform ${scale}`}>
        {/* Folio Body */}
        <div className="relative h-18 w-24 rounded-lg bg-gradient-to-br from-[#78350f] via-[#92400e] to-[#451a03] border border-white/15 shadow-2xl p-2 flex flex-col justify-between overflow-hidden">
          {/* Stitched border lines */}
          <div className="absolute inset-1 rounded-md border border-dashed border-[#fde68a]/40 pointer-events-none" />
          {/* Top flap */}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[6px] font-mono font-bold text-[#fde68a] tracking-wider">AURA LEATHER</span>
            {/* Brass Clasp */}
            <div className="h-3 w-4 rounded-sm bg-gradient-to-r from-[#f59e0b] via-[#fcd34d] to-[#d97706] border border-white/30 shadow-sm flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-[#78350f]" />
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[5px] font-mono text-[#fde68a]/70">14&quot; LAPTOP</span>
            <span className="text-[5px] font-mono text-[#fde68a]/60">HAND-STITCHED</span>
          </div>
        </div>
      </div>
    );
  }

  // watch-06 (Monolith Field Watch)
  return (
    <div className={`relative flex items-center justify-center transition-transform ${scale}`}>
      <div className="absolute -top-6 h-6 w-7 rounded-t bg-[#1c1917] border-x border-t border-white/10" />
      <div className="absolute -bottom-6 h-6 w-7 rounded-b bg-[#1c1917] border-x border-b border-white/10" />
      <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-[#18181b] via-[#09090b] to-[#000000] p-1 shadow-2xl ring-1 ring-white/10">
        <div className="h-full w-full rounded-full bg-[#09090b] p-1 flex items-center justify-center relative">
          <div className="absolute inset-1 rounded-full border border-lime/20" />
          <span className="absolute top-1 text-[6px] font-mono font-black text-lime">60</span>
          <span className="absolute right-1 text-[6px] font-mono text-lime/50">15</span>
          <span className="absolute bottom-1 text-[6px] font-mono text-lime/50">30</span>
          <span className="absolute left-1 text-[6px] font-mono text-lime/50">45</span>
          <div className="absolute h-7 w-0.5 bg-lime origin-bottom -translate-y-2.5 rotate-90 rounded-full shadow-[0_0_6px_rgba(200,255,0,0.8)]" />
          <div className="absolute h-5 w-1 bg-white origin-bottom -translate-y-1.5 -rotate-30 rounded-full" />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-lime ring-2 ring-[#000000]" />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-1 rounded-sm bg-lime/60" />
        </div>
      </div>
    </div>
  );
}

export default function CommerceEngineDemo({ activePageId, onNavigate, isMobilePreview = false }: Props) {
  // Local Cart State
  const [cart, setCart] = useState<{ [productId: string]: number }>({
    "chrono-01": 1,
    "flask-03": 1,
  });

  // Catalog Filter / Sort
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  // Selected Product Detail
  const [activeProductId, setActiveProductId] = useState<string>("chrono-01");
  const [selectedFinish, setSelectedFinish] = useState<string>("Matte Titanium");
  const [detailQuantity, setDetailQuantity] = useState<number>(1);
  const [addedToast, setAddedToast] = useState(false);

  // Demo Checkout form state
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");
  const [checkoutPayMethod, setCheckoutPayMethod] = useState("Demo Card (Simulated)");
  const [checkoutError, setCheckoutError] = useState("");
  const [lastGeneratedOrder, setLastGeneratedOrder] = useState<string>("AUR-89421");

  // Cart calculations
  const totalItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = Object.entries(cart).reduce((sum, [pId, qty]) => {
    const prod = PRODUCTS.find((p) => p.id === pId);
    return sum + (prod ? prod.price * qty : 0);
  }, 0);

  const addToCart = (productId: string, quantity = 1) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
    }));
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: updated };
    });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName.trim() || !checkoutEmail.trim() || !checkoutAddress.trim()) {
      setCheckoutError("Please complete all shipping address fields.");
      return;
    }
    if (!checkoutEmail.includes("@")) {
      setCheckoutError("Please provide a valid email for order delivery tracking.");
      return;
    }
    setCheckoutError("");
    const randomOrderNum = `AUR-${Math.floor(10000 + Math.random() * 90000)}`;
    setLastGeneratedOrder(randomOrderNum);
    // Navigate to confirmation
    onNavigate("confirmation");
  };

  // Filtered products list
  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];

  return (
    <div className="min-h-[640px] bg-[#faf7f2] text-[#1c1c1c] font-sans antialiased rounded-xl overflow-hidden border border-[#e7e0d5] flex flex-col justify-between shadow-2xl">
      {/* ── Mini Store Navigation (Matching Thumbnail) ─────────── */}
      <header className={`sticky top-0 z-30 border-b border-[#e7e0d5] bg-white/95 backdrop-blur-md ${isMobilePreview ? "px-3 py-2" : "px-4 py-3 sm:px-6"}`}>
        <div className="flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer shrink-0" onClick={() => onNavigate("home")}>
            <span className="font-display font-black text-sm tracking-[0.14em] text-[#1c1c1c]">
              AURA<span className="text-amber-600">·</span>STUDIO
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-1 text-[11px] font-medium text-slate-600 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: "home", label: "Shop" },
              { id: "catalog", label: "Catalog" },
              { id: "product", label: "Specimen" },
            ].map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => onNavigate(nav.id)}
                className={`rounded px-2 py-1 transition-colors whitespace-nowrap ${
                  activePageId === nav.id
                    ? "bg-[#1c1c1c] text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-[#f5f0e8]"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Interactive Cart Button with count badge */}
          <button
            type="button"
            onClick={() => onNavigate("cart")}
            className="flex items-center gap-1.5 rounded-full border border-[#e7e0d5] bg-white px-2.5 py-1 text-xs font-mono text-slate-800 hover:border-amber-600 transition-all shadow-sm shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="font-bold">({totalItemsCount})</span>
            {!isMobilePreview && <span className="text-[10px] text-amber-700 font-bold">${subtotal}</span>}
          </button>
        </div>
      </header>

      {/* Editorial Announcement Banner (Matching Thumbnail) */}
      <div className={`flex flex-wrap items-center justify-between gap-1 text-xs bg-[#1c1c1c] text-[#faf7f2] ${
        isMobilePreview ? "px-3 py-1.5 text-[10px]" : "px-4 sm:px-6 py-2"
      }`}>
        <span className="tracking-[0.14em] uppercase font-mono text-[9px] sm:text-[11px]">Autumn Drop Live</span>
        <span className="text-amber-400 font-medium text-[9px] sm:text-xs">Worldwide shipping over $150 →</span>
      </div>

      {/* Added Toast */}
      {addedToast && (
        <div className="bg-amber-600 text-white px-4 py-1.5 text-xs font-mono font-bold text-center">
          ✓ Item added to local studio bag!
        </div>
      )}

      {/* ── Main Content Area ─────────────────────────────────── */}
      <main className={`flex-1 ${isMobilePreview ? "p-3.5" : "p-4 sm:p-8"}`}>
        {/* 1. STORE HOME */}
        {activePageId === "home" && (
          <div className="space-y-8 max-w-4xl mx-auto py-2">
            {/* Hero Drop */}
            <div className={`rounded-2xl border border-[#e7e0d5] bg-white flex flex-col justify-between space-y-4 shadow-sm ${
              isMobilePreview ? "p-4 sm:p-6" : "p-6 sm:p-10"
            }`}>
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-amber-700 font-bold">Capsule Collection 04</span>
                <h1 className={`font-display font-black text-slate-900 tracking-tight leading-tight ${
                  isMobilePreview ? "text-xl sm:text-2xl" : "text-3xl sm:text-5xl"
                }`}>
                  High-craft objects for tactile everyday ritual.
                </h1>
                <p className={`text-slate-600 max-w-lg leading-relaxed ${
                  isMobilePreview ? "text-xs" : "text-sm"
                }`}>
                  Precision-milled titanium, double-walled ceramic, and acoustic architecture designed for life at the desk and in transit.
                </p>
              </div>
              <div className={`flex flex-wrap gap-2.5 ${isMobilePreview ? "flex-col w-full" : ""}`}>
                <button
                  type="button"
                  onClick={() => onNavigate("catalog")}
                  className={`rounded-xl bg-[#1c1c1c] font-bold text-white hover:bg-slate-800 transition-colors shadow-sm ${
                    isMobilePreview ? "px-4 py-2.5 text-xs w-full text-center" : "px-6 py-3 text-xs"
                  }`}
                >
                  Explore Collection →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProductId("chrono-01");
                    onNavigate("product");
                  }}
                  className={`rounded-xl border border-slate-300 bg-white font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm ${
                    isMobilePreview ? "px-4 py-2.5 text-xs w-full text-center" : "px-5 py-2.5 text-xs"
                  }`}
                >
                  Inspect Flagship
                </button>
              </div>
            </div>

            {/* Featured Bestsellers (Matching Thumbnail) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">Featured Objects</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">Curated capsule pieces for longevity.</p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("catalog")}
                  className="text-xs font-mono text-amber-700 font-bold hover:underline"
                >
                  View All →
                </button>
              </div>
              <div className={`grid gap-3.5 ${isMobilePreview ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"}`}>
                {PRODUCTS.slice(0, 3).map((item) => (
                  <div key={item.id} className="rounded-xl border border-[#e7e0d5] bg-white p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-32 w-full rounded-lg bg-[#f5f0e8] border border-[#e7e0d5]/60 flex items-center justify-center relative overflow-hidden p-2">
                      <ProductIllustration id={item.id} size="card" />
                      {item.badge && (
                        <span className="absolute top-2 left-2 rounded bg-[#1c1c1c] px-1.5 py-0.5 font-mono text-[8px] text-amber-300 font-bold tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1c1c1c]">{item.name}</h4>
                      <p className="font-mono text-[11px] text-slate-500 truncate">{item.material}</p>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#e7e0d5]">
                        <span className="font-mono font-black text-sm text-amber-700">${item.price}</span>
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveProductId(item.id);
                              onNavigate("product");
                            }}
                            className="rounded px-2.5 py-1 text-[10px] font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                          >
                            Details
                          </button>
                          <button
                            type="button"
                            onClick={() => addToCart(item.id)}
                            className="rounded bg-[#1c1c1c] px-3 py-1 text-[10px] font-mono font-bold text-white hover:bg-slate-800 transition-colors"
                          >
                            + Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. CATALOG */}
        {activePageId === "catalog" && (
          <div className="space-y-6 max-w-4xl mx-auto py-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e0d5] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold">Collection Catalog</span>
                <h2 className="font-display text-2xl font-bold text-[#1c1c1c]">All Studio Products</h2>
              </div>
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "all", label: "All Items" },
                  { id: "watches", label: "Horology" },
                  { id: "audio", label: "Acoustics" },
                  { id: "objects", label: "Living Objects" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors border ${
                      selectedCategory === cat.id
                        ? "bg-[#1c1c1c] text-white font-bold border-[#1c1c1c]"
                        : "bg-white text-slate-600 border-[#e7e0d5] hover:border-[#1c1c1c]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
                {/* Sort selector */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc")}
                  className="rounded-full border border-[#e7e0d5] bg-white px-3 py-1 text-xs font-mono text-slate-700 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {filteredProducts.map((item) => (
                <div key={item.id} className="rounded-xl border border-[#e7e0d5] bg-white p-4 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-36 w-full rounded-lg bg-[#f5f0e8] border border-[#e7e0d5]/60 flex items-center justify-center relative overflow-hidden p-2">
                    <ProductIllustration id={item.id} size="card" />
                    {item.badge && (
                      <span className="absolute top-2 left-2 rounded bg-[#1c1c1c] px-1.5 py-0.5 font-mono text-[8px] text-amber-300 font-bold tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#1c1c1c]">{item.name}</h4>
                    <p className="font-mono text-[10px] text-slate-500 truncate">{item.material}</p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#e7e0d5]">
                      <span className="font-mono font-black text-sm text-amber-700">${item.price}</span>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveProductId(item.id);
                            onNavigate("product");
                          }}
                          className="rounded px-2.5 py-1 text-[10px] font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                        >
                          Specs
                        </button>
                        <button
                          type="button"
                          onClick={() => addToCart(item.id)}
                          className="rounded bg-[#1c1c1c] px-2.5 py-1 text-[10px] font-mono font-bold text-white hover:bg-slate-800 transition-colors"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. PRODUCT DETAIL */}
        {activePageId === "product" && (
          <div className="space-y-6 max-w-4xl mx-auto py-4">
            <button
              type="button"
              onClick={() => onNavigate("catalog")}
              className="text-xs font-mono text-slate-500 hover:text-[#1c1c1c] transition-colors"
            >
              ← Back to Collection Catalog
            </button>

            <div className="grid sm:grid-cols-2 gap-8 items-start">
              {/* Product preview canvas */}
              <div className="rounded-2xl border border-[#e7e0d5] bg-[#f5f0e8] p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <div className="py-4 flex items-center justify-center">
                    <ProductIllustration id={activeProduct.id} size="detail" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 block">Finish: {selectedFinish}</span>
                </div>
              </div>

              {/* Product Configuration */}
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold">Studio Specimen</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c1c1c] mt-1">{activeProduct.name}</h2>
                  <p className="font-mono text-xl font-black text-amber-700 mt-1">${activeProduct.price}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{activeProduct.desc}</p>

                {/* Finish Selector */}
                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1.5">Material Finish</label>
                  <div className="flex gap-2">
                    {["Matte Titanium", "Obsidian Black", "Raw Brushed"].map((finish) => (
                      <button
                        key={finish}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                          selectedFinish === finish
                            ? "border-[#1c1c1c] text-[#1c1c1c] bg-[#1c1c1c]/5 font-semibold"
                            : "border-[#e7e0d5] text-slate-600 bg-white"
                        }`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center rounded-lg border border-[#e7e0d5] bg-white">
                    <button
                      type="button"
                      onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))}
                      className="px-3 py-2 text-xs font-mono text-slate-600 hover:text-[#1c1c1c]"
                    >
                      -
                    </button>
                    <span className="px-2 font-mono text-xs font-bold text-[#1c1c1c]">{detailQuantity}</span>
                    <button
                      type="button"
                      onClick={() => setDetailQuantity(detailQuantity + 1)}
                      className="px-3 py-2 text-xs font-mono text-slate-600 hover:text-[#1c1c1c]"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(activeProduct.id, detailQuantity)}
                    className="flex-1 rounded-lg bg-[#1c1c1c] py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    Add to Bag (${activeProduct.price * detailQuantity}) →
                  </button>
                </div>

                <div className="pt-4 border-t border-[#e7e0d5] text-[11px] font-mono text-slate-500 space-y-1">
                  <p>✓ Complimentary Express Delivery (1-3 Days)</p>
                  <p>✓ 30-Day Unconditional Craft Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CART */}
        {activePageId === "cart" && (
          <div className="space-y-6 max-w-2xl mx-auto py-4">
            <div className="flex items-center justify-between border-b border-[#e7e0d5] pb-3">
              <h2 className="font-display text-xl font-bold text-[#1c1c1c]">Your Shopping Bag ({totalItemsCount})</h2>
              {totalItemsCount === 0 && (
                <button
                  type="button"
                  onClick={() => addToCart("chrono-01", 1)}
                  className="text-xs font-mono text-amber-700 hover:underline"
                >
                  + Add Sample Item
                </button>
              )}
            </div>

            {totalItemsCount === 0 ? (
              <div className="text-center py-12 space-y-3">
                <p className="font-mono text-sm text-slate-500">Your shopping bag is currently empty.</p>
                <button
                  type="button"
                  onClick={() => onNavigate("catalog")}
                  className="rounded-lg bg-[#1c1c1c] px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  Explore Catalog →
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(cart).map(([pId, qty]) => {
                  const prod = PRODUCTS.find((p) => p.id === pId);
                  if (!prod) return null;
                  return (
                    <div key={pId} className="rounded-xl border border-[#e7e0d5] bg-white p-4 flex items-center justify-between gap-4 shadow-sm">
                      <div>
                        <h4 className="font-display font-semibold text-sm text-[#1c1c1c]">{prod.name}</h4>
                        <p className="font-mono text-[10px] text-slate-500">${prod.price} each</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded border border-[#e7e0d5] bg-[#f5f0e8]">
                          <button
                            type="button"
                            onClick={() => updateCartQty(pId, -1)}
                            className="px-2 py-1 text-xs font-mono text-slate-600 hover:text-[#1c1c1c]"
                          >
                            -
                          </button>
                          <span className="px-2 font-mono text-xs font-bold text-[#1c1c1c]">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(pId, 1)}
                            className="px-2 py-1 text-xs font-mono text-slate-600 hover:text-[#1c1c1c]"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono font-bold text-sm text-amber-700 w-16 text-right">
                          ${prod.price * qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCartQty(pId, -qty)}
                          className="text-xs font-mono text-slate-400 hover:text-rose-600 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Subtotal & Checkout Button */}
                <div className="rounded-xl border border-[#e7e0d5] bg-white p-5 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="text-[#1c1c1c] font-bold">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Express Shipping</span>
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  </div>
                  <div className="border-t border-[#e7e0d5] pt-2 flex items-center justify-between">
                    <span className="font-display font-bold text-base text-[#1c1c1c]">Estimated Total</span>
                    <span className="font-mono font-extrabold text-lg text-amber-700">${subtotal}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate("checkout")}
                    className="w-full rounded-lg bg-[#1c1c1c] py-3 text-xs font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    Proceed to Demo Checkout →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. CHECKOUT DEMO */}
        {activePageId === "checkout" && (
          <div className="space-y-6 max-w-xl mx-auto py-4">
            <div className="text-center space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold">Simulation Only</span>
              <h2 className="font-display text-2xl font-bold text-[#1c1c1c]">Demonstration Checkout</h2>
              <p className="text-xs text-slate-500">
                Safe client-side demo. No real payments are processed and no financial data is collected.
              </p>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="rounded-xl border border-[#e7e0d5] bg-white p-5 sm:p-6 space-y-4 shadow-sm">
              {checkoutError && (
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono">
                  ⚠️ {checkoutError}
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">Customer Name *</label>
                <input
                  type="text"
                  value={checkoutName}
                  onChange={(e) => setCheckoutName(e.target.value)}
                  placeholder="Taylor Mercer"
                  className="w-full rounded-md border border-[#e7e0d5] bg-white px-3 py-2 text-xs text-[#1c1c1c] focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">Delivery Email *</label>
                <input
                  type="email"
                  value={checkoutEmail}
                  onChange={(e) => setCheckoutEmail(e.target.value)}
                  placeholder="taylor@example.com"
                  className="w-full rounded-md border border-[#e7e0d5] bg-white px-3 py-2 text-xs text-[#1c1c1c] focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1">Shipping Address *</label>
                <input
                  type="text"
                  value={checkoutAddress}
                  onChange={(e) => setCheckoutAddress(e.target.value)}
                  placeholder="742 Evergreen Terrace, Springfield"
                  className="w-full rounded-md border border-[#e7e0d5] bg-white px-3 py-2 text-xs text-[#1c1c1c] focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-500 mb-1.5">Payment Method (Simulated)</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Demo Card (Simulated)", "Apple Pay (Demo Sandbox)"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setCheckoutPayMethod(method)}
                      className={`p-2 rounded border text-xs font-mono text-left transition-colors ${
                        checkoutPayMethod === method
                          ? "border-[#1c1c1c] bg-[#1c1c1c]/5 text-[#1c1c1c] font-semibold"
                          : "border-[#e7e0d5] text-slate-600 bg-white"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#e7e0d5] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">Order Total</span>
                  <span className="font-mono font-bold text-base text-amber-700">${subtotal || 380}</span>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#1c1c1c] px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  Generate Order Confirmation →
                </button>
              </div>
            </form>
          </div>
        )}
        {/* 6. ORDER CONFIRMATION */}
        {activePageId === "confirmation" && (
          <div className="space-y-6 max-w-lg mx-auto py-6 text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-2xl text-emerald-600 font-bold">
              ✓
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold">Demonstration Receipt</span>
              <h2 className="font-display text-2xl font-bold text-[#1c1c1c] mt-1">Order Successfully Simulated</h2>
              <p className="text-xs text-slate-500 mt-1">
                Order Reference: <strong className="text-[#1c1c1c] font-mono">{lastGeneratedOrder}</strong>
              </p>
            </div>

            <div className="rounded-xl border border-[#e7e0d5] bg-white p-5 text-left space-y-3 font-mono text-xs shadow-sm">
              <div className="flex justify-between border-b border-[#e7e0d5] pb-2">
                <span className="text-slate-500">Fulfillment Status:</span>
                <span className="text-emerald-600 font-bold">READY TO DISPATCH (DEMO)</span>
              </div>
              <div className="flex justify-between border-b border-[#e7e0d5] pb-2">
                <span className="text-slate-500">Estimated Arrival:</span>
                <span className="text-[#1c1c1c] font-semibold">2 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Carrier Service:</span>
                <span className="text-[#1c1c1c] font-semibold">DHL Express Worldwide Air</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setCart({ "chrono-01": 1 });
                onNavigate("catalog");
              }}
              className="rounded-lg bg-[#1c1c1c] px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
            >
              Back to Catalog (Reset Demo State) →
            </button>
          </div>
        )}
      </main>

      {/* ── Mini Store Footer (Matching Thumbnail) ─────────── */}
      <footer className="border-t border-[#e7e0d5] bg-white px-4 py-3 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-slate-800">Express Global Fulfillment · Worldwide Carbon-Neutral</span>
        </div>
        <span>Demonstration Template · Regendz IT Selected Work</span>
      </footer>
    </div>
  );
}
