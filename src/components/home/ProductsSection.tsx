import type React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, gridRevealDelay } from "@/hooks/use-scroll-reveal";
import calcitePowderImg from "@/assets/New Images/Calcite powder.jpg";
import dolomitePowderImg from "@/assets/New Images/Dolomite Powder.jpg";
import quartzPowderImg from "@/assets/New Images/Quartz Powder.jpg";
import quartzGritsImg from "@/assets/New Images/Quartz Grits.jpg";
import dolomiteGritsImg from "@/assets/New Images/Dolomite Grits.jpg";
import coatedCalciteImg from "@/assets/New Images/Coated Calcite powder.jpg";
import coatedDolomiteImg from "@/assets/New Images/Coated Dolomite Powder.jpg";
import pebbleImg from "@/assets/New Images/Pebbles.jpeg";

const products = [
  {
    id: "calcite-powder",
    name: "Calcite Powder",
    features: [">98.5% Purity", ">97% Brightness"],
    image: calcitePowderImg,
  },
  {
    id: "dolomite-powder",
    name: "Dolomite Powder",
    features: [">98.5% Purity", ">96% Brightness"],
    image: dolomitePowderImg,
  },
  {
    id: "quartz-powder",
    name: "Quartz Powder",
    features: [">99% Purity", "High Brightness"],
    image: quartzPowderImg,
  },
  {
    id: "quartz-grits",
    name: "Quartz Grits",
    features: ["High Hardness", "Consistent Grading"],
    image: quartzGritsImg,
  },
  {
    id: "dolomite-grits",
    name: "Dolomite Grits",
    features: ["Natural Durability", "Uniform Grading"],
    image: dolomiteGritsImg,
  },
  {
    id: "coated-dolomite",
    name: "Stearic Acid Coated Dolomite Powder",
    features: ["Low Oil Absorption", "Enhanced Hydrophobicity"],
    image: coatedDolomiteImg,
  },
  {
    id: "coated-calcite",
    name: "Stearic Acid Coated Calcite Powder",
    features: ["Low Oil Absorption", "Improved Dispersion"],
    image: coatedCalciteImg,
  },
  {
    id: "pebble",
    name: "Natural Pebbles",
    features: ["Natural Beauty", "Multiple Sizes"],
    image: pebbleImg,
  },
];

export const ProductsSection = () => {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent font-bold uppercase tracking-widest text-xs mb-3 block">
              Premium Collection
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
              Industrial Grade <br className="hidden md:block" />
              <span className="text-primary/80">Mineral Fillers & Extenders</span>
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex group border-accent text-accent hover:bg-accent hover:text-primary" asChild>
            <Link to="/products">
              Explore Catalog
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Optimized Products Grid */}
        <div ref={revealRef} className="products-grid">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card reveal group"
              data-reveal
              style={{ "--reveal-delay": gridRevealDelay(index) } as React.CSSProperties}
            >
              <img src={product.image} alt={product.name} className="product-card__img" loading="lazy" />

              {/* Corner badge that pops in on hover */}
              <span className="product-card__corner" aria-hidden="true">
                <ArrowUpRight className="h-4 w-4" />
              </span>

              {/* Resting state: name + round arrow over the image */}
              <div className="product-card__footer" aria-hidden="true">
                <span className="product-card__footer-title">{product.name}</span>
                <span className="product-card__footer-btn">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              {/* Hover state: frosted panel slides up with the details */}
              <div className="product-card__panel">
                <h3>{product.name}</h3>
                <ul className="product-card__features">
                  {product.features.map((feature) => (
                    <li key={feature}>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="view-specs product-card__link">
                  View Specs <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-10 md:hidden">
          <Button variant="cta" size="lg" className="w-full" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};