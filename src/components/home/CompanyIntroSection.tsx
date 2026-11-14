import { RichText } from "@/components/RichText";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StackedCarousel } from "./StackedCarousel";

export const CompanyIntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow text-accent font-semibold uppercase tracking-wider text-m mb-3 block">
              About Stonex Enterprises
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Manufacturing Excellence Since 2011
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 [&_strong]:text-foreground">
              <RichText text="**STONEX ENTERPRISES** is one of India’s leading manufacturer and supplier of premium quality mineral fillers and extenders, backed by extensive expertise in mineral processing and manufacturing. Our comprehensive product portfolio includes **Quartz Powder, Quartz Grits, Calcite Powder, Dolomite Powder** and **Dolomite Grits**, valued for their high purity, consistent quality and reliable performance across diverse industrial applications." />
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 [&_strong]:text-foreground">
              <RichText text="Our minerals serve a wide range of industries, including **Slabs & Countertops, Paints & Coatings, Plastics & Polymers, PVC Pipes & Fittings, Wire & Cable, Rubber, Masterbatch, Agriculture, Glass, Ceramics, Steel & Metallurgy and Construction**." />
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 [&_strong]:text-foreground">
              <RichText text="We also manufacture **Stearic Acid Coated Calcite Powder and Dolomite Powder**, surface treated to improve moisture resistance, dispersion and compatibility with suitable polymer systems. Complementing our industrial mineral range, we offer **Natural Pebbles** for landscaping, architectural design and decorative applications." />
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 [&_strong]:text-foreground">
              <RichText text="At **STONEX ENTERPRISES**, we are committed to quality, consistency, advanced processing and customer satisfaction. Through reliable mineral solutions and a customer focused approach, we strive to meet the diverse technical requirements of modern industries." />
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about" className="gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <StackedCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
