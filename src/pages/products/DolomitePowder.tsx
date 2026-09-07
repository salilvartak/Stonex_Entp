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
  name: "Dolomite Powder",
  purity: ">98.5% Purity >96% Brightness",
  image: "https://i.ibb.co/XfxJ9GLw/dolomite-powder.jpg",
  description:
    "Premium grade, high purity Dolomite Powder (CaMg(CO₃)₂) is manufactured through controlled processing to provide a consistent calcium–magnesium carbonate composition, high brightness, excellent whiteness, and precisely controlled particle-size distribution. Its balanced chemical composition and refined physical characteristics promote uniform dispersion, stable processing, and consistent end-product performance, making it a dependable mineral filler and functional raw material for a broad range of high-performance industrial applications.",
  whatIs:
    "Dolomite is a naturally occurring carbonate mineral composed of Calcium Magnesium Carbonate (CaMg(CO₃)₂), featuring a unique crystalline structure and a balanced calcium & magnesium composition. Formed through the process of dolomitization in sedimentary environments, Dolomite deposits are created when magnesium rich fluids replace a portion of calcium in existing limestone formations. Dolomite Powder is the finely processed and micronized form of natural Dolomite lumps, manufactured through advanced crushing, grinding and classification processes to achieve precise particle size, superior whiteness and consistent quality. Depending on its grade, particle size, surface treatment and purity, dolomite powder is widely used as a functional mineral filler, extender, coating agent and performance enhancing additive across various industries such as paints and coatings, plastics and PVC, rubber, construction materials, ceramics and sanitaryware, glass, adhesives and sealants, agriculture, and animal nutrition.",
  how: "STONEX ENTERPRISES is one of India's trusted manufacturers and suppliers of Premium grade Dolomite Powder. We source premium-quality Dolomite lumps, rich in high purity Calcium and Magnesium Carbonate (CaMg(CO₃)₂), from our own and carefully selected mines across Rajasthan to ensure superior raw material quality. Backed by over 15 years of expertise in mineral mining, processing, advanced grinding technologies, and quality management, we are committed to delivering superior product quality and reliable supply. Utilizing advanced processing technologies and stringent quality control measures, we manufacture high-performance Dolomite Powder with Purity >98.5% and Brightness >96%. With a production capacity of 4,000+ MT per month, we consistently deliver products with exceptional whiteness, uniform quality and reliable performance, meeting the highest industry standards across a wide range of industrial applications.",
};

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High Purity & Controlled Chemical Composition",
    description: "High-purity dolomite with a consistent CaMg(CO₃)₂ composition provides a reliable source of calcium and magnesium carbonates, supporting consistent formulation chemistry and predictable performance across industrial applications.",
  },
  {
    icon: Sun,
    title: "High Brightness & Superior Whiteness",
    description: "High brightness and excellent whiteness enhance color purity, visual appearance, opacity and surface finish, particularly in paints, coatings, plastics, construction materials, ceramics, and other white or light-colored products.",
  },
  {
    icon: Layers,
    title: "Controlled Particle Size Distribution",
    description: "Precisely micronized controlled particles promote excellent dispersion, uniform filler distribution, efficient particle packing, smooth processing, and consistent surface finish.",
  },
  {
    icon: FlaskConical,
    title: "Excellent Thermal & Chemical Stability",
    description: "Dolomite maintains its functional characteristics under normal processing and service conditions, supporting formulation stability, durability, and resistance to chemical and thermal stresses in suitable applications.",
  },
  {
    icon: CloudDrizzle,
    title: "Low & Controlled Moisture Content",
    description: "Low and controlled moisture minimizes moisture related processing defects, agglomeration and storage issues, while supporting consistent mixing, dispersion and dimensional stability of finished products.",
  },
  {
    icon: Droplet,
    title: "Low & Controlled Oil Absorption",
    description: "Low oil absorption helps reduce binder and resin demand, improves filler loading efficiency, supports controlled rheology, and contributes to more economical formulations.",
  },
  {
    icon: Package,
    title: "Bulk Density & Efficient Particle Packing",
    description: "Optimized particle characteristics and bulk density promote efficient packing, reduced interparticle voids, improved filler loading and consistent formulation behavior, supporting uniformity in finished products.",
  },
  {
    icon: Diamond,
    title: "Controlled Hardness (3.5–4 Mohs)",
    description: "Dolomite's moderate hardness provides a useful balance between filler durability, wear resistance, processability and equipment wear, depending on the application and processing conditions.",
  },
  {
    icon: Blend,
    title: "Cost-Effective Functional Filler",
    description: "Dolomite can partially replace higher-cost mineral or functional raw materials, helping optimize formulation cost, increase filler loading, and maintain required physical and processing properties.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Raw Material Selection",
    description: "High-purity Dolomite lumps with a balanced Calcium & Magnesium Carbonate composition are carefully selected from our own and trusted premium mining sources to ensure superior quality, consistency and reliable performance.",
  },
  {
    title: "Crushing & Screening",
    description: "Selected Dolomite lumps are efficiently crushed and screened to achieve a uniform feed size, remove unwanted surface impurities and ensure smooth processing.",
  },
  {
    title: "Advanced Grinding & Micronization",
    description: "Crushed Dolomite is processed through advanced grinding, micronization and air classification technologies to achieve precisely controlled particle size, consistent fineness and uniformity, ensuring reliable performance across diverse industrial applications.",
  },
  {
    title: "Quality Testing & Assurance",
    description: "Every batch of Dolomite Powder undergoes stringent quality testing for Calcium Magnesium Carbonate (CaMg(CO₃)₂) purity, brightness, whiteness, particle size distribution, moisture content, and other critical parameters to meet the highest industry standards.",
  },
  {
    title: "Professional Packing & Dispatch",
    description: "Finished Dolomite Powder is packed in moisture resistant bags or jumbo bags and dispatched under strict quality control measures to ensure safe handling, timely delivery and reliable supply to industries.",
  },
];

const DolomitePowder = () => {
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
                      { label: "Silica (SiO₂)", value: "<1.0%" },
                      { label: "Moisture Content", value: "<0.2%" },
                      { label: "Oil Absorption", value: "20 - 25 g/100g" },
                      { label: "pH Value", value: "8.5 - 9.5" },
                      { label: "Mohs Hardness", value: "3.5 - 4" },
                      { label: "Specific Gravity", value: "2.85 - 2.90" },
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
              What is Dolomite and Dolomite Powder?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Dolomite Powder Key Properties
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
                How We Manufacture Premium Dolomite Powder
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
              <Link to="/products/dolomite-powder/applications">
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

export default DolomitePowder;
