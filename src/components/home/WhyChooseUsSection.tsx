import { Check, Cog, Shield, Clock, Award, Truck, Pickaxe, BicepsFlexed } from "lucide-react";
import whyChooseUsImg from "@/assets/why-choose-us.webp";

const features = [
  {
    icon: Cog,
    title: "Advanced Processing Infrastructure",
    description: "State-of-the-art Ball Mills, Micronizers, VSI, 28-Roller Classifier Systems, advance Magnetic Separator and Automatic Grits Colour Sorting Technology enable precise processing and consistent product quality",
  },
  {
    icon: Shield,
    title: "Stringent Quality Control",
    description: "Comprehensive in-house testing and stringent quality-control procedures ensure reliable purity, performance, and batch-to-batch consistency",
  },
  {
    icon: Award,
    title: "Custom Particle Sizes",
    description: "Customized mineral grades ranging from ultra-fine powder to coarse grits, precisely processed to meet customer exact formulation requirements",
  },
  {
    icon: Clock,
    title: "Reliable Supply & Timely Delivery",
    description: "Efficient logistics ensuring safe, reliable and on-time delivery of mineral products across India with seamless supply chain management",
  },
  {
    icon: Truck,
    title: "Competitive Pricing & Flexible Commercial Terms",
    description: "Premium quality mineral products at competitive market prices, supported by flexible payment and commercial terms designed to provide greater value and support long-term business partnerships",
  },
  {
    icon: Check,
    title: "15+ Years Experience",
    description: "A decade of mineral industry expertise, delivering premium quality mineral solutions backed by technical excellence, consistent quality and trusted customer partnerships",
  },
  {
    icon: BicepsFlexed,
    title: "Skilled & Experienced Team",
    description: "Trained technical and production professionals focus on process precision, quality consistency and operational excellence at every stage",
  },
  {
    icon: Pickaxe,
    title: "Own Mines and Manufacturing",
    description: "Own mines and advanced processing facility maintain complete control over raw materials, ensuring superior quality, consistent supply and cost-efficient production",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            At <span className="font-bold">Stonex Enterprises</span>, we combine Mineral industry expertise with advanced technology to deliver premium mineral products tailored to your exact specifications.
          </p>
        </div>

        {/* Banner image: shown uncropped since it contains its own text */}
        <div className="max-w-6xl -mx-4 sm:mx-auto mb-10 md:mb-16 sm:rounded-2xl overflow-hidden shadow-xl sm:ring-1 ring-border">
          <img
            src={whyChooseUsImg}
            alt="Stonex Enterprises: own mines, advanced processing unit, stringent quality control, reliable supply, over 15 years of industry experience and competitive pricing"
            className="block w-full h-auto"
            width={1600}
            height={900}
            loading="lazy"
          />
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card flex sm:flex-col gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
              >
                <div className="shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center ring-2 ring-accent/60">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
