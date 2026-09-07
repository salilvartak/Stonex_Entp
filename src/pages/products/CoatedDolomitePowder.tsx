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
  Diamond,
  Blend,
  Waves,
} from "lucide-react";

const product = {
  name: "Coated Dolomite Powder",
  purity: ">98.5% Purity >96% Brightness",
  image: "https://i.ibb.co/GfJ4gPQ0/Coated-dolomite.jpg",
  description:
    "Premium-grade Stearic Acid Coated Dolomite Powder is manufactured from high-purity Dolomite (CaMg(CO₃)₂) and engineered with a precisely controlled stearic acid surface treatment to deliver exceptional hydrophobicity, excellent filler–polymer compatibility, superior dispersion, reduced moisture absorption and enhanced processing efficiency for PVC, PE, PP, masterbatch, rubber, wire & cable and other high-performance industrial applications.",
  whatIs:
    "Dolomite is a naturally occurring carbonate mineral composed of Calcium Magnesium Carbonate (CaMg(CO₃)₂) and is one of the most widely used industrial minerals for high-performance filler applications. Carefully selected high-purity Dolomite is processed through advanced crushing, micron grinding, air classification and particle size control to produce premium quality Dolomite Powder with consistent chemistry and uniform fineness. For Coated Dolomite Powder, these precisely micronized particles undergo a controlled Stearic Acid surface treatment, creating a uniform hydrophobic coating around each particle. This engineered surface modification significantly improves hydrophobicity, polymer compatibility, dispersion efficiency, moisture resistance and filler–matrix adhesion in plastic and rubber compounds. Coated Dolomite Powder combines the natural advantages of high-purity CaMg(CO₃)₂ including excellent whiteness, chemical stability, controlled particle size and dimensional reinforcement, with enhanced surface properties required for demanding industrial formulations. It is widely used as a premium functional filler in PVC pipes & fittings, PE/PP filler masterbatch, wire & cable compounds, rubber products, WPC, SPC flooring, polymer compounds and other advanced industrial applications, enabling improved processing performance, higher filler loading, superior product consistency and cost-effective manufacturing.",
  stearicAcid:
    "Stearic Acid is a naturally derived long-chain saturated fatty acid (C18H36O2) widely used as a premium surface treatment agent for mineral fillers such as Calcite and Dolomite. In coated mineral manufacturing, it forms an ultra-thin molecular layer around each particle, transforming the naturally hydrophilic surface into a hydrophobic, polymer-compatible surface.",
  how: "STONEX ENTERPRISES is a trusted Indian manufacturer and supplier of Premium Stearic Acid Coated Dolomite Powder, supplying advanced mineral filler solutions for PVC, Plastic, Masterbatch, Rubber, Wire & Cable Polymer, Paint & Coating and other high-performance industrial applications. Backed by 15+ years of manufacturing expertise, we combine premium raw materials with modern processing technology to deliver consistent industrial performance. Our carefully selected high-purity Dolomite (CaMg(CO₃)₂) is micronized, accurately classified and uniformly coated with Stearic Acid using controlled surface-treatment processes. This engineered coating enhances hydrophobicity, filler dispersion, moisture resistance and compatibility with polymer matrices, making it ideal for high-performance compounding applications. Every batch is produced under stringent quality standards to ensure Dolomite Purity >98.5%, Brightness >96% and reliable surface treatment consistency providing dependable quality for demanding industrial manufacturing.",
};

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High Purity & Controlled Chemical Composition",
    description: "High purity dolomite with a consistent CaMg(CO₃)₂ composition provides a reliable source of Calcium and Magnesium carbonates, supporting consistent performance across industrial formulations.",
  },
  {
    icon: Waves,
    title: "Advanced Stearic Acid Surface Treatment",
    description: "Controlled Stearic Acid Coating modifies the mineral surface from hydrophilic to more hydrophobic and organophilic, improving compatibility with polymers, PVC, rubber and other organic matrices.",
  },
  {
    icon: Sun,
    title: "High Brightness & Excellent Whiteness",
    description: "Excellent brightness and whiteness provide a clean, bright mineral filler that supports consistent colour, appearance and premium surface quality in finished products.",
  },
  {
    icon: CloudDrizzle,
    title: "Low Moisture & Improved Moisture Resistance",
    description: "With controlled low moisture, coated dolomite supports stable processing and helps minimize moisture-related effects in moisture-sensitive polymer and rubber formulations.",
  },
  {
    icon: Layers,
    title: "Precisely Controlled Particle Size & PSD",
    description: "Controlled particle size and a consistent particle-size distribution (PSD) enable uniform filler loading and support predictable rheology, surface finish, processing behaviour and end-product consistency.",
  },
  {
    icon: Droplet,
    title: "Controlled Oil Absorption",
    description: "With controlled oil absorption, the powder offers controlled binder demand and predictable interaction with resin and polymer systems, supporting formulation and viscosity control.",
  },
  {
    icon: Diamond,
    title: "Functional Mechanical Filler Performance",
    description: "With a Mohs hardness of 3.5–4, dolomite provides a functional mineral filler that can contribute to stiffness, hardness, dimensional stability and formulation efficiency, depending on the polymer system.",
  },
  {
    icon: Blend,
    title: "Enhanced Polymer & Rubber Compatibility",
    description: "Surface treatment improves the interaction between mineral particles and organic matrices, making coated dolomite well suited for PVC, plastics, masterbatch, rubber and other polymer-based compounds.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Dolomite Raw Material Selection",
    description: "We begin with carefully selected high-purity Dolomite (CaMg(CO₃)₂) sourced from our own mines and trusted deposits across Rajasthan, ensuring purity, excellent whiteness and consistent mineral composition for premium industrial applications.",
  },
  {
    title: "Controlled Crushing & Screening",
    description: "Selected Dolomite lumps are processed through advanced crushing and precision screening systems to produce uniform feed material, eliminating oversized particles and maintaining consistent quality before micron grinding.",
  },
  {
    title: "Ultra Fine Grinding & Precision Micronization",
    description: "Using advanced micronizers and grinding systems, Dolomite is processed into ultra-fine powder with customized mesh sizes, narrow particle size distribution, excellent dispersion characteristics, and consistent fineness for high-performance industrial applications.",
  },
  {
    title: "Stearic Acid Surface Coating Technology",
    description: "The micronized Dolomite Powder is uniformly treated with premium Stearic Acid in a temperature controlled coating system. This specialized surface modification creates a highly hydrophobic mineral filler with improved polymer compatibility, reduced moisture absorption, enhanced dispersion and better processing efficiency.",
  },
  {
    title: "Strict Quality Control & Laboratory Testing",
    description: "Every production batch is rigorously tested for purity, brightness, particle size, moisture, coating uniformity and activation index, ensuring consistent compliance with demanding industrial quality standards.",
  },
  {
    title: "Professional Packing & Dispatch",
    description: "Finished Coated Dolomite Powder is packed in high-quality moisture-resistant jumbo bags under strict quality protocols, ensuring safe transportation, long shelf life, consistent product integrity and reliable supply for large-scale industrial customers.",
  },
];

const CoatedDolomitePowder = () => {
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
                      { label: "Purity (CaMg(CO₃)₂)", value: ">98.5%" },
                      { label: "Brightness", value: ">96%" },
                      { label: "Whiteness", value: "95 - 97%" },
                      { label: "Calcium Carbonate (CaCO₃)", value: "50 - 55%" },
                      { label: "Magnesium Carbonate (MgCO₃)", value: "40 - 44%" },
                      { label: "Stearic Acid", value: "1 - 2%" },
                      { label: "Silica (SiO₂)", value: "<1.0%" },
                      { label: "Moisture Content", value: "<0.2%" },
                      { label: "Oil Absorption", value: "15 - 20 g/100g" },
                      { label: "pH Value", value: "8.5 - 9.5" },
                      { label: "Mohs Hardness", value: "3.5 - 4" },
                      { label: "Specific Gravity", value: "2.85 - 2.90 g/cm³" },
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
                        {["200", "300", "400", "500", "1000"].map((mesh) => (
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
              What is Dolomite and Coated Dolomite Powder?
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
                Premium Coated Dolomite Powder Key Properties
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
                How We Manufacture Premium Coated Dolomite Powder
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
              <Link to="/products/coated-dolomite-powder/applications">
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

export default CoatedDolomitePowder;
