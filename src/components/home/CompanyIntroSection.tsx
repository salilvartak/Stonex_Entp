import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CompanyIntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-m mb-3 block">
              About Stonex Enterprises
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Manufacturing Excellence Since 2011
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              <span className="font-bold">STONEX ENTERPRISES</span> is one of India's leading manufacturers and suppliers of premium quality mineral fillers and extenders. Our comprehensive product portfolio comprises high grade Quartz Powder, Quartz Grits, Calcite Powder, Dolomite Powder and Dolomite Grits, known for their high purity, consistent quality and excellent physico-mechanical properties, serving industries such as Slab & Countertop, Paints & Coatings, Plastics & Polymers (PVC Pipes, Cable), Rubber, Masterbatch Filler, Agriculture, Glass, Ceramics, Steel & Metallurgy and Construction.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We also manufacture Stearic Acid Coated Calcite and Dolomite Powders, specially surface treated to improve moisture resistance, dispersion and compatibility with polymer systems, alongside decorative Natural Pebbles for landscaping, architectural and other aesthetic applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At STONEX ENTERPRISES, our focus on quality, consistency, advanced processing and customer satisfaction enables us to deliver mineral solutions that meet the diverse technical requirements of modern industries.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
              alt="Stonex manufacturing facility"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
