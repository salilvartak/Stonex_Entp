import { Check, Cog, Shield, Clock, Award, Truck, Pickaxe, BicepsFlexed } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                alt="Industrial manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-4xl font-heading font-bold mb-1">15+</div>
              <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block"></span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At <span className="font-bold">Stonex Enterprises</span>, we combine Mineral industry expertise with advanced technology to deliver premium mineral products tailored to your exact specifications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
