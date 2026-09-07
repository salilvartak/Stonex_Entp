import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PurityPills } from "@/components/products/PurityPills";
import {
  ArrowRight,
  ArrowLeft,
  Beaker,
  Layers,
  Factory,
  Package,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  FlaskConical,
  Diamond,
  Blend,
} from "lucide-react";

const product = {
  name: "Calcite Powder",
  purity: ">98.5% Purity >97% Briteness",
  image: "https://i.ibb.co/pHbVhwp/calcite-powder.png",
  description:
    "Premium grade, high purity Calcite Powder (CaCO₃) is precisely processed to deliver high calcium carbonate purity, excellent brightness, superior whiteness and tightly controlled particle-size consistency. Its excellent physical and chemical properties support reliable processing, uniform dispersion and consistent performance, making it suitable for a wide range of demanding industrial applications.",
  whatIs:
    "Calcite is a naturally occurring mineral composed primarily of Calcium Carbonate (CaCO₃). It is one of the most abundant minerals on Earth and the principal constituent of limestone, marble, and chalk. Premium-grade calcite lumps are precision processed into high-quality Calcium Carbonate (CaCO₃) powder using advanced grinding, micronizing, and classification technology. Calcite powder is known for its exceptional purity, brilliant whiteness, smooth texture, free-flowing characteristics, superior chemical stability and outstanding physicochemical properties. It serves as an ideal filler, coating agent, and performance-enhancing additive across a wide range of industries, delivering superior quality and cost efficiency. Industries worldwide use calcite powder as a functional filler in paints and coatings, plastics, glass, paper, rubber, ceramics, agriculture, and various other industrial applications.",
  how: "STONEX ENTERPRISES is one of India's Trusted Manufacturer & Supplier of Premium Calcite Powder, delivering high-performance mineral solutions to diverse industries. With over 15 years of expertise in mineral mining, advanced grinding, processing technologies and quality management, we ensure excellence at every stage of production. Our premium-grade Calcite lumps are sourced from our own mines and carefully selected mining sources across Rajasthan, enabling us to manufacture high-quality Calcite Powder with Purity >98.5% and >97% Brightness. Supported by a robust production capacity of 5,000+ MT per month, we are committed to providing consistent quality, superior whiteness and reliable supply that meets the evolving needs of industries application.",
};

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High CaCO₃ Purity & Controlled Impurity Profile",
    description: "High calcium carbonate content with low and controlled levels of impurities ensures consistent chemical composition, predictable performance, and reliable batch-to-batch quality.",
  },
  {
    icon: Sun,
    title: "High Brightness & Excellent Whiteness",
    description: "Carefully selected high quality Calcite with high brightness and excellent whiteness provides colour consistency, opacity, light reflectance and attractive finished product appearance.",
  },
  {
    icon: Layers,
    title: "Precisely Controlled Particle Size",
    description: "Advanced grinding, micronization and air-classification technology delivers a uniform particle size distribution, supporting consistent dispersion, filler packing and surface finish.",
  },
  {
    icon: Droplet,
    title: "Low & Controlled Oil Absorption",
    description: "Controlled oil absorption helps manufacturers achieve efficient filler loading while maintaining formulation balance, processing consistency and economical use of binders and resins.",
  },
  {
    icon: CloudDrizzle,
    title: "Low & Controlled Moisture Content",
    description: "Controlled low moisture helps minimize particle agglomeration, feeding difficulties and supporting smooth handling, blending, dispersion and consistent filler incorporation into industrial formulations.",
  },
  {
    icon: FlaskConical,
    title: "Good Chemical Stability",
    description: "Calcite provides good stability under typical processing and formulation conditions, helping maintain filler integrity, chemical consistency and predictable performance across a broad range of industrial applications.",
  },
  {
    icon: Diamond,
    title: "Controlled Mineral Hardness",
    description: "With a Mohs hardness of approximately 3, calcite provides predictable filler behaviour, controlled surface characteristics and reliable processing performance in a wide range of applications.",
  },
  {
    icon: Blend,
    title: "Excellent Dispersibility & Filler Distribution",
    description: "Precisely controlled particle size promotes uniform filler distribution and reduced agglomeration, supporting consistent mechanical, optical and surface properties in finished products.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Raw Material Selection",
    description: "High-grade Calcite lumps with rich Calcium Carbonate (CaCO₃) content are carefully sourced from our own mines and selected trusted mining locations across Rajasthan, to ensure excellent purity, superior whiteness, consistent composition and reliable performance in final applications.",
  },
  {
    title: "Controlled Crushing & Screening",
    description: "Selected Calcite lumps undergo efficient crushing and screening processes to achieve an optimized feed size, remove surface unwanted impurities and ensure smooth processing while maintaining the natural quality of the mineral.",
  },
  {
    title: "High-Precision Grinding & Micronization",
    description: "Through advanced grinding and micronizing technology, Calcite is processed into high-quality powder with customized mesh sizes, controlled fineness, uniform particle distribution, excellent dispersion properties and enhanced surface performance for various industrial applications.",
  },
  {
    title: "Advanced Particle Classification",
    description: "Modern air classification systems are utilized to achieve precise particle separation and optimized particle size distribution, ensuring consistent quality, improved handling characteristics and superior product performance.",
  },
  {
    title: "Strict Quality Control & Laboratory Testing",
    description: "Each production batch of Calcite Powder undergoes comprehensive quality analysis for CaCO₃ purity, brightness, whiteness, moisture content, oil absorption, particle size distribution and other essential parameters to ensure adherence to stringent industry requirements.",
  },
  {
    title: "Premium Packing & Reliable Dispatch",
    description: "Finished Calcite powder is packed in moisture-resistant bags or jumbo bags and delivered with strict quality control to ensure safe handling, on time delivery and uninterrupted supply.",
  },
];

const CalcitePowder = () => {
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

        {/* How We Manufacture + Technical Specification Card */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-primary p-6 rounded-lg shadow-md h-full">
                <p className="text-primary-foreground text-lg leading-relaxed">
                  {product.how.split(/(STONEX ENTERPRISES)/).map((chunk, i) =>
                    chunk === "STONEX ENTERPRISES" ? <strong key={i}>{chunk}</strong> : chunk
                  )}
                </p>
              </div>

              <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary px-6 py-5 flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                    <Beaker className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary-foreground">
                    Technical Specifications
                  </h3>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      { label: "Purity (CaCO₃)", value: ">98.5%" },
                      { label: "Brightness", value: ">97%" },
                      { label: "Whiteness", value: ">97%" },
                      { label: "Moisture Content", value: "<0.2%" },
                      { label: "Oil Absorption", value: "16 - 20 g/100g" },
                      { label: "pH Value", value: "8.0 - 9.5" },
                      { label: "Mohs Hardness", value: "3" },
                      { label: "Specific Gravity", value: "2.7 - 2.8" },
                    ].map((spec) => (
                      <div key={spec.label} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">{spec.label}</div>
                          <div className="font-heading font-semibold text-foreground">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-border my-6" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Factory className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Production Capacity</div>
                      <div className="font-heading font-semibold text-foreground">5000+ MT Per Month</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Layers className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Available Particle Sizes</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {["500", "1000", "1250", "2000", "2750"].map((mesh) => (
                          <span key={mesh} className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium">
                            {mesh} Mesh
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">5 microns to 20 microns (as per mesh size)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Package className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Packaging Options</div>
                      <div className="flex flex-wrap gap-2">
                        {["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"].map((pack) => (
                          <span key={pack} className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium">
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              What is Calcite and Calcite Powder?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Calcite Powder Key Properties
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {keyProperties.map((prop) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={prop.title}
                    className="bg-card p-4 rounded-xl shadow-md border border-border/50 flex gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">{prop.title}</h3>
                      <p className="text-muted-foreground text-xs leading-snug">{prop.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                How We Manufacture Premium Calcite Powder
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />
              <div className="space-y-8">
                {manufacturingSteps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div className="bg-card p-5 rounded-xl shadow-md border border-border/50 flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <Link to="/products/calcite-powder/applications">
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

export default CalcitePowder;
