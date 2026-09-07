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
  Waves,
} from "lucide-react";

const product = {
  name: "Coated Calcite Powder",
  purity: ">97% Purity >96% Brightness",
  image: "https://i.ibb.co/xTs0rBc/coated-calcite.jpg",
  description:
    "Premium-grade Stearic Acid Coated Calcite Powder is manufactured from high-purity Calcite (CaCO₃) and precisely surface-treated to provide enhanced hydrophobicity, excellent polymer compatibility, superior dispersion and consistent performance across a wide range of plastic, PVC, masterbatch, rubber and industrial applications.",
  whatIs:
    "Calcite is a naturally occurring mineral primarily composed of Calcium Carbonate (CaCO₃) and is the principal mineral component of limestone and marble. Selected high-purity calcite lumps are carefully processed through advanced crushing, grinding, micronizing and classification systems to produce finely controlled Calcite Powder. For Coated Calcite Powder, these precisely processed particles undergo a controlled Stearic Acid surface-treatment process, which modifies the particle surface, imparting enhanced hydrophobicity, improved polymer compatibility, superior dispersion and greater moisture resistance. Coated Calcite combines the inherent benefits of high-purity CaCO₃, including excellent whiteness, chemical stability, controlled particle size and consistent quality with improved surface properties for demanding formulations. It is particularly valuable as a functional filler and performance-enhancing mineral in filler masterbatch, plastics, PVC pipes and profiles, cables, rubber, WPC, polymers and other industrial applications, helping manufacturers achieve improved processing, uniform dispersion, consistent product quality and cost-effective formulations.",
  stearicAcid:
    "Stearic Acid is a naturally derived long-chain saturated fatty acid (C18H36O2) widely used as a premium surface treatment agent for mineral fillers such as Calcite and Dolomite. In coated mineral manufacturing, it forms an ultra-thin molecular layer around each particle, transforming the naturally hydrophilic surface into a hydrophobic, polymer-compatible surface.",
  how: "STONEX ENTERPRISES is a trusted Indian manufacturer and supplier of Premium Stearic Acid Coated Calcite Powder, offering high-performance mineral solutions for Plastic, PVC, Masterbatch, Rubber and other industrial applications. With over 15 years of expertise in mineral mining, advanced grinding, surface treatment and quality management, we maintain stringent control throughout the manufacturing process. Our high-purity Calcite lumps are sourced from our own mines and carefully selected sources across Rajasthan, then processed through modern grinding, classification and controlled stearic acid coating systems to achieve uniform particle size, consistent surface treatment and reliable performance. With strong in-house production capabilities, advanced processing infrastructure and rigorous quality testing, we deliver Coated Calcite Powder with CaCO₃ Purity >97%, Brightness >96% and controlled stearic acid coating, ensuring excellent dispersion, improved polymer compatibility and consistent quality for demanding industrial applications.",
};

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High CaCO₃ Purity & Controlled Impurity Profile",
    description: "High calcium carbonate content with low and controlled impurities ensures consistent chemical composition, predictable performance, and reliable batch-to-batch quality.",
  },
  {
    icon: Waves,
    title: "Advanced Stearic Acid Surface Treatment",
    description: "Precisely controlled stearic acid coating modifies the particle surface, improving compatibility with polymers and organic binders, dispersion characteristics, and processing efficiency.",
  },
  {
    icon: Layers,
    title: "Precisely Controlled Particle Size & Narrow PSD",
    description: "Advanced grinding and air classification technology delivers a uniform particle-size distribution, supporting consistent dispersion, surface finish, rheology and processing behaviour.",
  },
  {
    icon: Sun,
    title: "High Brightness & Excellent Whiteness",
    description: "Carefully selected and processed calcite offers high brightness and excellent whiteness, supporting clean colour development, attractive appearance and consistent finished-product quality.",
  },
  {
    icon: CloudDrizzle,
    title: "Low Moisture & Improved Flowability",
    description: "Controlled moisture content and surface treatment help minimize particle agglomeration and handling difficulties, supporting smooth feeding, blending and dispersion during processing.",
  },
  {
    icon: Droplet,
    title: "Low & Controlled Oil Absorption",
    description: "Optimized particle characteristics and surface treatment provide controlled oil absorption, helping improve filler loading efficiency, formulation consistency and binder utilization.",
  },
  {
    icon: Diamond,
    title: "Controlled Mineral Hardness",
    description: "With a Mohs hardness of approximately 3, calcite provides a balanced mineral hardness that supports controlled filler behaviour, surface characteristics and processing performance across a range of industrial formulations.",
  },
  {
    icon: FlaskConical,
    title: "Good Chemical Stability",
    description: "Good resistance to chemical interaction under typical processing conditions helps maintain formulation stability, filler integrity and consistent performance across a wide range of industrial applications.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Calcite Raw Material Selection",
    description: "We carefully select high-grade natural Calcite with high Calcium Carbonate (CaCO₃) purity from our own mines and trusted mining sources across Rajasthan, ensuring exceptional whiteness, consistent mineral composition and reliable quality for premium coated mineral fillers.",
  },
  {
    title: "Controlled Crushing & Screening",
    description: "Selected Calcite lumps undergo efficient crushing and screening processes to achieve an optimized feed size, remove unwanted impurities and ensure smooth processing while maintaining the natural quality of the mineral.",
  },
  {
    title: "Ultra-Fine Grinding & Precision Micronization",
    description: "Using advanced micronizers and grinding systems, Calcite is processed into ultra-fine powder with customized mesh sizes, narrow particle size distribution, excellent dispersion characteristics, and consistent fineness for high-performance industrial applications.",
  },
  {
    title: "Stearic Acid Surface Coating Technology",
    description: "The micronized Calcite Powder is uniformly treated with premium Stearic Acid in a temperature controlled coating system. This specialized surface modification creates a highly hydrophobic mineral filler with improved polymer compatibility, reduced moisture absorption, enhanced dispersion and better processing efficiency.",
  },
  {
    title: "Strict Quality Control & Laboratory Testing",
    description: "Each production batch of Coated Calcite Powder undergoes comprehensive quality analysis for CaCO₃ purity, brightness, whiteness, coating efficiency, hydrophobicity, moisture content, oil absorption and particle size distribution and other essential parameters to ensure adherence to stringent industry requirements.",
  },
  {
    title: "Moisture-Proof Packing & Dependable Supply",
    description: "Finished Coated Calcite Powder is packed in high-quality moisture-resistant jumbo bags under strict quality protocols, ensuring safe transportation, long shelf life, consistent product integrity and reliable supply for large-scale industrial customers.",
  },
];

const CoatedCalcitePowder = () => {
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
                      { label: "Purity (CaCO₃)", value: ">97%" },
                      { label: "Brightness", value: ">96%" },
                      { label: "Whiteness", value: ">96%" },
                      { label: "Stearic Acid", value: "1 - 2%" },
                      { label: "Moisture Content", value: "<0.2%" },
                      { label: "Oil Absorption", value: "15 - 20 g/100g" },
                      { label: "pH Value", value: "8.0 - 9.5" },
                      { label: "Mohs Hardness", value: "3" },
                      { label: "Specific Gravity", value: "2.7 - 2.8 g/cm³" },
                      { label: "Surface Character", value: "Hydrophobic / Activated" },
                      { label: "Coating Uniformity", value: "Controlled / Uniform" },
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
              What is Calcite and Coated Calcite Powder?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* What is Stearic Acid */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-secondary px-6 py-5 flex items-center gap-3">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <Waves className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-foreground">
                  What is Stearic Acid?
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-lg leading-relaxed">{product.stearicAcid}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Coated Calcite Powder Key Properties
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
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                How We Manufacture Premium Coated Calcite Powder
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
              <Link to="/products/coated-calcite-powder/applications">
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

export default CoatedCalcitePowder;
