import Image from "next/image";

interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    isSymbolOnly?: boolean;
  };
}

const BRANDS: BrandItem[] = [
  {
    id: "slitcode",
    name: "slitcode",
    tagline: "Web & Software",
    logo: {
      src: "/images/slitcode-logo.png",
      alt: "slitcode logo",
      width: 936,
      height: 276,
    },
  },
  {
    id: "forwai",
    name: "Forwai",
    tagline: "Consultancy & Analytics",
    logo: {
      src: "/images/forwai-logo.png",
      alt: "Forwai logo",
      width: 952,
      height: 186,
    },
  },
  {
    id: "groadvertx",
    name: "GROADVERTX",
    tagline: "Branding & Marketing",
    logo: {
      src: "/images/groadvertx-logo.png",
      alt: "GROADVERTX symbol",
      width: 645,
      height: 1024,
      isSymbolOnly: true,
    },
  },
];

export default function BrandShowcaseStrip() {
  // Repeating set to create continuous smooth looping marquee
  const brandSets = [0, 1, 2, 3];

  return (
    <section
      aria-label="Regendz Sub-Brands"
      className="relative z-10 mt-6 w-full overflow-hidden bg-transparent py-6 md:py-8 select-none pointer-events-none"
      style={{ background: "transparent" }}
    >
      <div className="relative flex w-full overflow-hidden">
        {/* Soft edge masking for smooth fade-in/fade-out at screen edges */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        />

        {/* Seamless marquee track */}
        <div
          className="marquee-track flex w-max items-center"
          style={{
            animationDuration: "36s",
          }}
        >
          {brandSets.map((setIdx) => (
            <div
              key={setIdx}
              className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12"
            >
              {BRANDS.map((brand) => (
                <div
                  key={`${setIdx}-${brand.id}`}
                  className="flex items-center gap-4 md:gap-5 opacity-85"
                >
                  {/* Brand Logo */}
                  {brand.logo.isSymbolOnly ? (
                    <div className="flex items-center gap-3">
                      <div className="relative h-7 w-auto md:h-8">
                        <Image
                          src={brand.logo.src}
                          alt={brand.logo.alt}
                          width={brand.logo.width}
                          height={brand.logo.height}
                          className="h-7 w-auto md:h-8 object-contain"
                          priority={setIdx === 0}
                        />
                      </div>
                      <span className="font-bold text-base md:text-lg tracking-tight text-white/90">
                        GROADVERTX
                      </span>
                    </div>
                  ) : (
                    <div className="relative h-6 w-auto md:h-7.5 max-w-[140px] md:max-w-[170px]">
                      <Image
                        src={brand.logo.src}
                        alt={brand.logo.alt}
                        width={brand.logo.width}
                        height={brand.logo.height}
                        className="h-6 w-auto md:h-7.5 object-contain"
                        priority={setIdx === 0}
                      />
                    </div>
                  )}

                  {/* Minimal subtle separator bullet */}
                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  {/* Brand Discipline/Category */}
                  <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/40 whitespace-nowrap">
                    {brand.tagline}
                  </span>

                  {/* Section Divider Icon between brands */}
                  <span className="ml-4 font-mono text-[11px] text-lime/40">
                    /
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
