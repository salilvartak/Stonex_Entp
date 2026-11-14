import { RichText } from "@/components/RichText";
import type React from "react";
import { useScrollReveal, gridRevealDelay } from "@/hooks/use-scroll-reveal";

const industries = [
  {
    icon: "/Icon%20Images/Paint.png",
    name: "Paints & Coatings",
    description: "Enhance brightness, whiteness, opacity, surface smoothness and coating performance.",
  },
  {
    icon: "/Icon%20Images/Plastic.png",
    name: "Plastics & Polymers",
    description: "Improve stiffness, dimensional stability, surface finish, and formulation cost efficiency.",
  },
  {
    icon: "/Icon%20Images/Slab.png",
    name: "Quartz & Engineered Stone Surfaces",
    description: "Exceptional hardness, superior durability, scratch, heat and stain resistance, with an elegant aesthetic finish.",
  },
  {
    icon: "/Icon%20Images/Glass.png",
    name: "Glass & Ceramics",
    description: "Enhance structural strength, thermal stability, durability, fluxing performance and consistent formulation performance.",
  },
  {
    icon: "/Icon%20Images/Adhesive.png",
    name: "Adhesives & Sealants",
    description: "Deliver mechanical strength, optimized viscosity, enhanced dimensional stability, long lasting durability and formulation cost efficiency.",
  },
  {
    icon: "/Icon%20Images/Rubber.png",
    name: "Rubber & Elastomer",
    description: "Support reinforcement, tensile properties, tear resistance, dimensional stability and processing efficiency.",
  },
  {
    icon: "/Icon%20Images/Paper.png",
    name: "Paper & Paperboard",
    description: "Improve brightness, opacity, smoothness, printability and surface quality.",
  },
  {
    icon: "/Icon%20Images/Agriculture.png",
    name: "Agriculture & Animal Nutrition",
    description: "Improve soil conditioning, elevate fertilizer performance and provide essential nutrients for plants and animals.",
  },
  {
    icon: "/Icon%20Images/Construction.png",
    name: "Construction & Building Materials",
    description: "Support strength, durability, dimensional stability, particle packing and cost effective formulations.",
  },
  {
    icon: "/Icon%20Images/Masterbatch.png",
    name: "Masterbatch & Filler Compounds",
    description: "Improve filler dispersion, melt processability, stiffness, dimensional stability, surface finish and cost efficiency.",
  },
];

export const IndustriesSection = () => {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span data-reveal style={{ "--reveal-delay": "0ms" } as React.CSSProperties} className="reveal eyebrow text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
            Industries We Serve
          </span>
          <h2 data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="reveal font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Powering Diverse Industries
          </h2>
          <p data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="reveal text-muted-foreground text-lg">
            <RichText text="**STONEX ENTERPRISES** delivers versatile mineral solutions for a wide range of industrial applications, supporting product performance, formulation efficiency and consistent quality across diverse sectors." />
          </p>
        </div>

        {/* Industries Grid */}
        {/* The magic class here is: [&>*:nth-child(9)]:lg:col-start-2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 [&>*:nth-child(9)]:lg:col-start-2">
          {industries.map((industry, index) => {
            return (
              <div
                key={industry.name}
                className="industry-card reveal bg-card p-6 rounded-lg text-center group cursor-pointer"
                data-reveal
                style={{ "--reveal-delay": gridRevealDelay(index) } as React.CSSProperties}
              >
                <img
                  src={industry.icon}
                  alt={industry.name}
                  loading="lazy"
                  className="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};