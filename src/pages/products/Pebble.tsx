import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CollapsibleSection } from "@/components/products/CollapsibleSection";
import { PurityPills } from "@/components/products/PurityPills";
import { ArrowRight, ArrowLeft, Package } from "lucide-react";

const product = {
  name: "Pebble",
  purity: "96%+",
  image: "https://i.ibb.co/vx7nXVZv/pebble.png",
  description: "Finest talc for pharmaceuticals, cosmetics and rubber",
  rawMaterial: "High-grade talc ore from Rajasthan deposits",
  productionCapacity: "500+ MT per month",
  whatIs:
    "Pebbles are highly versatile natural stones used extensively for landscaping, decoration, functional drainage and also have health benefits. They serve as durable, lowmaintenance garden mulch to suppress weeds and retain soil moisture.",
  how: "Pebbles are sourced from mines (or more commonly, quarries) through a process of extraction and refinement that transforms large, raw, angular rock into small, smooth, rounded stones.",
  MeshSizes: ["200", "300", "500", "1000"],
  MicronSizes: ["2 Micron to 74 Micron"],
  SizeLine: "Our Talc powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: ",
  packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
};

const pebbleTypes = [
  {
    title: "Marble Pebbles",
    description:
      "These polished stones come in white and other light colors. They bring a sense of elegance and are often used in upscale landscapes and indoor spaces.",
  },
  {
    title: "Polished Pebbles",
    description:
      "Manually polished to give them a shiny finish, these pebbles add a luxurious touch and are perfect for both decorative and functional uses in interiors and exteriors.",
  },
  {
    title: "River Pebbles",
    description:
      "They naturally acquire a smooth and rounded shape as they continue to flow in rivers and gradually wear away at the edges. Available in a variety of sizes and colours, they are often used in water features, pathways and garden beds.",
  },
];

const Pebble = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="pt-40 pb-4 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Hero - Image + Name */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg shadow-xl w-full"
                />
                <PurityPills purity={product.purity} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-snug mb-6">{product.description}</p>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    Enquire Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing & Raw Material */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Raw Material Sourcing</h3>
                <p className="text-muted-foreground">{product.rawMaterial}</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Production Capacity</h3>
                <p className="text-muted-foreground">{product.productionCapacity}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 ">
          <div className="container mx-auto px-4 bg-accent/10 p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground text-lg leading-relaxed">{product.how}</p>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">What is {product.name}?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Pebble Types Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Types of Pebble Stones</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pebbleTypes.map((type) => (
                <div key={type.title} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Particle Sizes */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground ">Available Particle Sizes</h2>
            <p className="text-muted-foreground mb-4">{product.SizeLine}</p>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Micron Sizes</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {product.MicronSizes.map((size) => (
                <span key={size} className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                  {size}
                </span>
              ))}
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Mesh Sizes</h3>
            <div className="flex flex-wrap gap-3">
              {product.MeshSizes.map((size) => (
                <span key={size} className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="hidden md:block">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Packaging Options</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {product.packaging.map((pack) => (
                  <div key={pack} className="bg-card p-4 rounded-lg shadow-sm text-center">
                    <Package className="h-8 w-8 text-accent mx-auto mb-3" />
                    <span className="text-foreground font-medium">{pack}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile - Collapsible */}
            <div className="md:hidden">
              <CollapsibleSection title="Packaging Options" icon={Package}>
                <div className="grid grid-cols-2 gap-3">
                  {product.packaging.map((pack) => (
                    <div key={pack} className="bg-muted p-3 rounded-lg text-center">
                      <span className="text-foreground text-sm">{pack}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Industry Applications Button Section */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Industry Applications
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Discover the diverse range of industries and specialized use cases where our {product.name} excels.
            </p>

            <Button size="lg" className="group" asChild>
              <Link to="/products/pebble/applications">
                View Applications
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-6">
              Interested in {product.name}?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/products" className="gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pebble;
