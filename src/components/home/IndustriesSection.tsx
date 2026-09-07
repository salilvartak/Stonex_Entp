import { Palette, Pipette, CircleDot, GlassWater, Tractor, Building2, FileText, Beaker, Blend, Gem } from "lucide-react";

const industries = [
  {
    icon: Palette,
    name: "Paint & Coating",
    description: "Enhance brightness, whiteness, opacity, smoothness and coating durability",
  },
  {
    icon: Pipette,
    name: "Plastic & Polymers",
    description: "Improved stiffness, dimensional stability, smoother surface finish and cost effective efficiency",
  },
  {
    icon: Gem,
    name: "Quartz & Engineered Stone Slabs",
    description: "Exceptional hardness, superior durability, scratch, heat and stain resistance, with an elegant aesthetic finish",
  },
  {
    icon: GlassWater,
    name: "Glass & Ceramic",
    description: "Enhance structural strength, thermal stability, durability, fluxing performance and consistent formulation performance",
  },
  {
    icon: Beaker,
    name: "Adhesive & Sealants",
    description: "Deliver superior mechanical strength, optimized viscosity, enhanced stability, long-lasting durability and cost-effective",
  },
  {
    icon: CircleDot,
    name: "Rubber & Elastomer",
    description: "Enhance reinforcement, tensile strength, tear resistance, resilience, and processing efficiency",
  },
  {
    icon: FileText,
    name: "Paper & Paperboard",
    description: "Improve brightness, opacity, smoothness, print ability and surface quality",
  },
  {
    icon: Tractor,
    name: "Agriculture & Animal Nutrition",
    description: "Improve soil conditioning, elevate fertilizer performance and provide essential nutrients for plants and animals",
  },
  {
    icon: Building2,
    name: "Construction & Building Materials",
    description: "Support strength, durability, dimensional stability, particle packing and cost-effective formulations",
  },
  {
    icon: Blend,
    name: "Masterbatch & Filler Compounds",
    description: "Improve filler dispersion, melt processability, stiffness, dimensional stability, surface finish and cost efficiency",
  },
];

export const IndustriesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
            Industries We Serve
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Powering Diverse Industries
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="font-bold">Stonex Enterprises</span> is a leading Manufacturer and Supplier of Premium Quality Minerals Filler and Extender. We deliver excellent quality products with the use of advanced technology and timely delivering to them.
          </p>
        </div>

        {/* Industries Grid */}
        {/* The magic class here is: [&>*:nth-child(9)]:lg:col-start-2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 [&>*:nth-child(9)]:lg:col-start-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="bg-card p-6 rounded-lg text-center hover-lift group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
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