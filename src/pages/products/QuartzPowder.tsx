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
  Thermometer,
  Gem,
  Blend,
} from "lucide-react";

const product = {
  name: "Quartz Powder",
  purity: ">99.6% Purity >96% Brightness",
  image: "https://i.ibb.co/JjBZkrPH/quartz-powder.jpg",
  description:
    "Manufactured from premium quality quartz, our High Purity Quartz Powder delivers excellent chemical stability, high whiteness, and precisely controlled particle size for consistent performance across demanding industrial applications. Its controlled mineral composition, uniform particle distribution, and superior physical properties make it a reliable functional filler and performance-enhancing mineral for a wide range of formulations.",
  whatIs:
    "Quartz is one of the hardest, most abundant, and widely occurring natural minerals on Earth. It is composed primarily of silicon dioxide (SiO₂) and is one of the principal rock forming minerals, occurring naturally in igneous, sedimentary and metamorphic rocks. Quartz Powder is the finely ground form of high quality Quartz lumps, processed through controlled crushing, grinding and classification technologies to achieve the required particle size, purity and consistency for demanding industrial applications. Quartz is renowned for its exceptional hardness of approximately 7 on the Mohs scale, high chemical purity, excellent thermal stability, superior wear and abrasion resistance, low chemical reactivity and outstanding electrical insulating properties. It also exhibits a distinctive piezoelectric property, meaning it can generate an electrical charge when subjected to mechanical stress. These exceptional physical, chemical, thermal and electrical properties make Quartz and Quartz Powder highly versatile and reliable industrial minerals. Quartz occurs naturally in several varieties, including clear, milky, smoky, rose, and amethyst quartz, each exhibiting distinctive visual and physical characteristics. Owing to its excellent performance, durability and versatility, Quartz Powder is widely used across numerous industries, including glass manufacturing, ceramics, paints & coatings, engineered stone & countertops, construction materials, foundries, electronics, refractories, adhesives & sealants, plastic & polymers and specialty chemicals.",
  how: "STONEX ENTERPRISES is one of India's trusted manufacturers and suppliers of Premium Quartz Powder, delivering high-performance silica mineral solutions for a wide range of industrial applications. With over 15 years of expertise in mineral mining, advanced grinding, micronizing technology, processing and quality management, we ensure exceptional quality at every stage of production. Our premium grade Quartz Powder is manufactured from carefully selected high grade Quartz lumps sourced from our own and trusted mines across Rajasthan, ensuring superior raw material quality, chemical consistency and dependable supply. Through state-of-the-art manufacturing and micronizing processes, we produce high purity Quartz Powder with SiO₂ Purity exceeding 99.6% and Brightness up to 96%, offering a uniform particle size distribution, exceptional whiteness, excellent chemical stability and outstanding performance across diverse industrial applications. Backed by a robust production capacity of 4,000+ MT per month.",
};

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High SiO₂ Purity & Controlled Impurity Profile",
    description: "High silica (SiO₂) content with a controlled level of iron, alumina and other impurities ensures consistent chemical composition, predictable processing behaviour and reliable end product quality.",
  },
  {
    icon: Sun,
    title: "High Whiteness & Excellent Optical Appearance",
    description: "High-purity, naturally bright quartz provides good whiteness and light reflectance, supporting improved colour appearance, surface finish and visual consistency in white and light coloured formulations.",
  },
  {
    icon: Layers,
    title: "Precisely Controlled Fine Particle Size",
    description: "Controlled fine particle size promote uniform dispersion, efficient particle packing, smooth surface characteristics and consistent processing, particularly in coatings, plastics and engineered materials.",
  },
  {
    icon: Droplet,
    title: "Optimized Oil Absorption & Binder Demand",
    description: "Carefully controlled particle size and morphology help manage oil absorption, resin/binder demand and filler loading, supporting formulation efficiency and balanced processing characteristics.",
  },
  {
    icon: CloudDrizzle,
    title: "Low Moisture Content & Excellent Storage Stability",
    description: "Low and controlled moisture content supports good powder flowability, reduced agglomeration, stable storage and more consistent dry blending and dispersion during processing.",
  },
  {
    icon: FlaskConical,
    title: "Excellent Chemical Resistance",
    description: "Quartz exhibits high resistance to many acids, alkalis and chemical environments, making it suitable for applications where mineral stability and long term chemical durability are required.",
  },
  {
    icon: Thermometer,
    title: "Superior Thermal Stability",
    description: "Quartz maintains its mineral integrity and functional properties over a wide temperature range, making it suitable for formulations exposed to elevated processing or service temperatures.",
  },
  {
    icon: Gem,
    title: "High Hardness & Abrasion Resistance (~7 Mohs)",
    description: "With a Mohs hardness of approximately 7, quartz provides excellent resistance to wear, abrasion and scratching, contributing to enhanced durability in demanding applications.",
  },
  {
    icon: Blend,
    title: "Cost Effective Mineral Filler",
    description: "Premium Quartz Powder can provide effective mineral filler loading and partial replacement of higher cost raw materials, helping optimize formulation economics while maintaining targeted physical and functional properties.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Raw Material Selection",
    description: "We carefully select high grade Quartz lumps with exceptional Silicon Dioxide (SiO₂) purity from our own mines and trusted premium mining sources across Rajasthan. Each raw material batch is evaluated to ensure superior quality, consistent composition and reliable performance in final applications.",
  },
  {
    title: "Crushing & Screening",
    description: "Selected Quartz lumps undergo controlled crushing and screening processes to achieve an optimized feed size, eliminate unwanted impurities and prepare the material for efficient grinding while maintaining mineral integrity.",
  },
  {
    title: "Washing, Cleaning & Thermal Treatment",
    description: "The crushed Quartz is thoroughly washed using an advanced washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the Quartz for subsequent further processing.",
  },
  {
    title: "Advanced Grinding & Micronization Technology",
    description: "Using state-of-the-art grinding and micronizing technology, the processed Quartz is transformed into ultra fine powder with precise mesh sizes, controlled particle fineness, uniform particle size distribution and excellent flow characteristics to meet diverse industrial requirements.",
  },
  {
    title: "Precision Air Classification",
    description: "Modern air classification systems are utilized to achieve precise particle separation and optimized particle size distribution, ensuring consistent quality, improved handling characteristics and superior product performance.",
  },
  {
    title: "Comprehensive Quality Testing & Assurance",
    description: "Every batch of Quartz Powder undergoes rigorous laboratory testing for SiO₂ purity, brightness, whiteness, moisture content, LOI, Fe₂O₃ content, particle size distribution, and other critical quality parameters to ensure compliance with stringent industry standards.",
  },
  {
    title: "Premium Packing & Reliable Dispatch",
    description: "Finished Quartz Powder is packed in moisture resistant bags or jumbo bags and delivered with strict quality control to ensure safe handling, on time delivery and uninterrupted supply.",
  },
];

const QuartzPowder = () => {
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
                      { label: "Chemical Formula", value: "SiO₂" },
                      { label: "Colour", value: "White to Snow White" },
                      { label: "Purity (SiO₂)", value: ">99.6%" },
                      { label: "Brightness", value: "Up to 96%" },
                      { label: "Whiteness", value: "96%" },
                      { label: "Moisture Content", value: "<0.2%" },
                      { label: "Mohs Hardness", value: "7" },
                      { label: "Specific Gravity", value: "2.6 - 2.7" },
                      { label: "pH Value", value: "6.5 - 7.5" },
                      { label: "Iron Oxide (Fe₂O₃)", value: "<0.3%" },
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
                      <div className="font-heading font-semibold text-foreground">4000+ MT Per Month</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Layers className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Available Particle Sizes</div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {["200", "300", "400", "500", "700"].map((mesh) => (
                          <span key={mesh} className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium">
                            {mesh} Mesh
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">10 microns to 74 microns (as per mesh size)</div>
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
              What is Quartz and Quartz Powder?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Quartz Powder Key Properties
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
                How We Manufacture Premium Quartz Powder
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
              <Link to="/products/quartz-powder/applications">
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

export default QuartzPowder;
