import { RichText } from "@/components/RichText";
import { Check, Cog, Shield, Clock, Award, Truck, Pickaxe, BicepsFlexed } from "lucide-react";
import whyChooseUsImg from "@/assets/why-choose-us.webp";

const features = [
  {
    icon: Cog,
    title: "Advanced Processing Infrastructure",
    description: "Our advanced manufacturing infrastructure includes Ball Mills, Micronizers, VSI Grinding Units, 28 Roller Classifier, Advanced Magnetic Separation systems and Automatic Grits Colour Sorting technology. These capabilities support precise particle size control, effective processing and consistent product quality.",
  },
  {
    icon: Shield,
    title: "Stringent Quality Control",
    description: "Our in house laboratory testing and systematic quality control procedures help maintain product specifications, monitor material properties, and ensure batch-to-batch consistency and reliability.",
  },
  {
    icon: Award,
    title: "Custom Particle Sizes",
    description: "Customized mineral grades ranging from ultra fine powder to coarse grits, precisely processed to meet specific industrial applications and customer requirements.",
  },
  {
    icon: Clock,
    title: "Reliable Supply & Timely Delivery",
    description: "Our supply chain coordination and logistics network support safe handling, dependable dispatch and timely delivery of mineral products to customers across India.",
  },
  {
    icon: Truck,
    title: "Competitive Pricing & Flexible Commercial Terms",
    description: "We offer premium quality mineral products at competitive market prices, supported by flexible payment and commercial terms designed to provide greater value and support long term business partnerships.",
  },
  {
    icon: Check,
    title: "Over 15 Years of Industry Experience",
    description: "With over 15 years of experience in mineral processing and manufacturing, we deliver premium quality mineral solutions backed by technical excellence, consistent quality and a customer focused approach to every business relationship.",
  },
  {
    icon: BicepsFlexed,
    title: "Skilled & Experienced Team",
    description: "Our trained technical and production teams focus on process control, manufacturing precision, product consistency and operational efficiency throughout the production process.",
  },
  {
    icon: Pickaxe,
    title: "Own Mines and Manufacturing",
    description: "With our own mines and advanced processing facility, we maintain complete control over raw materials and ensuring superior quality, consistent supply and cost efficient production.",
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
            <RichText text="At **STONEX ENTERPRISES**, we combine extensive mineral industry expertise with advanced processing technology to deliver high quality mineral products tailored to diverse industrial requirements. Our commitment to quality, precision, and customer satisfaction makes us a dependable partner for mineral fillers and extenders." />
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
                  <h4 className="font-heading font-bold text-foreground mb-2">{feature.title}</h4>
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
