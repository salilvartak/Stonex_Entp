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
  FlaskConical,
  Thermometer,
  Diamond,
  CloudDrizzle,
} from "lucide-react";

const product = {
  name: "Dolomite Grits",
  purity: ">98.5% Purity >96% Brightness",
  image: "https://i.ibb.co/Ym90GcQ/dolomite-grits.jpg",
  description:
    "Premium-grade, high-purity Dolomite Grits (CaMg(CO₃)₂) are processed to deliver hardness, high whiteness, consistent particle sizing, superior calcium–magnesium content and reliable chemical and thermal stability for demanding industrial applications.",
  whatIs:
    "Dolomite is a naturally occurring carbonate mineral composed primarily of Calcium Magnesium Carbonate (CaMg(CO₃)₂). It is an important industrial mineral widely found in sedimentary rock formations and is valued for its calcium and magnesium content, good hardness, high whiteness, chemical stability and thermal resistance. These properties make Dolomite a versatile mineral for a broad range of industrial and manufacturing applications. Premium Dolomite Grits are uniformly sized, precisely graded granular particles produced from carefully selected natural Dolomite lumps using advanced crushing, washing, magnetic separation, colour sorting, screening, grading and precision classification processes. These advanced processing methods help achieve consistent particle size, improved cleanliness, controlled whiteness, less impurities and reliable product quality. Owing to these versatile physical and chemical characteristics, Dolomite Grits are widely used across industries such as engineered stone & countertops, ceramics & sanitaryware, glass, construction materials, paints & coatings, rubber, plastics & polymers, adhesives & sealants, agriculture and other mineral-based industrial applications.",
  how: "STONEX ENTERPRISES is one of India's trusted manufacturers and suppliers of Premium Dolomite Grits, offering high-quality mineral solutions for a wide range of industrial applications. With over 15 years of expertise in mineral mining, advanced processing, particle size classification and quality management, we maintain consistent product quality and dependable performance throughout the manufacturing process. Our Dolomite Grits are produced from carefully selected, premium-grade Dolomite lumps sourced from our own mines and trusted mining regions across Rajasthan. Through controlled processing and precise grading, we manufacture high-quality Dolomite Grits with Purity >98.5% and Brightness up to 96%, providing excellent calcium–magnesium content, consistent particle sizing and reliable performance. Backed by a robust production capacity of 4,000+ MT per month, we are committed to delivering consistent quality, high whiteness, controlled particle size, minimal impurities and reliable supply, meeting the diverse and evolving requirements of industrial applications.",
};

const sizeGroups = [
  { label: "Coarse Grits Size", sizes: ["1mm", "2mm", "3mm", "4mm"] },
  { label: "Fine & Graded Grits Size", sizes: ["16 x 32 Mesh", "24 x 60 Mesh", "30 x 80 Mesh", "50 x 150 Mesh"] },
];

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High Dolomite Purity & Controlled CaO–MgO Chemistry",
    description: "High-purity dolomite with consistent CaCO₃–MgCO₃ composition provides a reliable source of CaO and MgO during heating, ensuring consistent process performance and product quality.",
  },
  {
    icon: FlaskConical,
    title: "High CaO + MgO Content & Low Impurities",
    description: "High CaO + MgO content with controlled levels of SiO₂, Fe₂O₃, Al₂O₃ and other impurities helps maintain consistent raw-material chemistry and process control.",
  },
  {
    icon: Layers,
    title: "Precisely Controlled Grit Size & Low Fines",
    description: "Precisely screened, uniform grit sizes and controlled grits fines ensure consistent feeding, reaction behavior, material utilization, reduced dust and predictable processing performance during industrial processing.",
  },
  {
    icon: Thermometer,
    title: "Excellent Thermal Stability",
    description: "Dolomite performs reliably at high temperatures and provides a consistent source of CaO and MgO after calcination for demanding industrial processes.",
  },
  {
    icon: Package,
    title: "High Bulk Density & Efficient Packing",
    description: "Dense and well-graded grits provide efficient packing, easy handling, and consistent material distribution during processing.",
  },
  {
    icon: CloudDrizzle,
    title: "Low Moisture & Good Storage Stability",
    description: "Controlled low moisture minimizes handling and storage issues, reduces unwanted moisture introduction into industrial batches, and supports consistent feeding and process control.",
  },
  {
    icon: Diamond,
    title: "Controlled Hardness & Mechanical Durability",
    description: "With a typical Mohs hardness of approximately 3.5–4.0, dolomite grits offer good resistance to mechanical degradation during handling, screening, conveying and charging.",
  },
];

const manufacturingSteps = [
  {
    title: "Carefully Selected Premium Dolomite Lumps",
    description: "We begin with carefully selected, premium-quality Dolomite lumps sourced from our own mines and reliable mineral rich regions across Rajasthan. Each raw material batch is assessed for CaMg(CO₃)₂ purity, brightness, colour, mineral composition and overall suitability before processing.",
  },
  {
    title: "Heavy-Duty Primary Crushing",
    description: "Selected Dolomite lumps are fed into heavy-duty primary crushing equipment, including jaw crushers, to reduce the large rocks into a suitable feed size. Controlled crushing ensures efficient size reduction while preserving the inherent quality and structure of the mineral.",
  },
  {
    title: "Washing, Cleaning & Thermal Treatment",
    description: "The crushed Dolomite is thoroughly washed using an advanced washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the Dolomite for subsequent further processing.",
  },
  {
    title: "Controlled Secondary Size Reduction",
    description: "After cleaning, the Dolomite undergoes controlled secondary crushing to produce the required granular sizes while limiting the formation of excessive fines. This stage helps maintain the natural hardness, crystal integrity and quality of the Dolomite grains.",
  },
  {
    title: "High-Efficiency Magnetic Separation",
    description: "The processed Dolomite grains pass through magnetic separation systems to reduce iron-bearing and other magnetically responsive impurities. This helps improve brightness, colour consistency and overall mineral quality.",
  },
  {
    title: "Precision Screening & Size Classification",
    description: "High-frequency multi-deck screens classify the purified Dolomite into precise particle size ranges using advanced grading equipment to achieve uniform particle size distribution according to customer specifications.",
  },
  {
    title: "Advanced Colour Sorting & Optical Quality Control",
    description: "Modern optical colour sorting systems detect and separate discoloured particles and visually contrasting mineral grains. This additional quality-control stage helps achieve uniform appearance, enhanced brightness and consistent colour quality in the finished Dolomite Grits.",
  },
  {
    title: "Quality Testing & Packaging",
    description: "Every production batch undergoes rigorous quality testing for particle size distribution, purity, brightness, moisture and other critical parameters before being securely packed in moisture-resistant bags and prepared for safe transportation.",
  },
];

const DolomiteGrits = () => {
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
              What is Dolomite and Dolomite Grits?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Size Range */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Explore Our Premium Dolomite Grits Size Range
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sizeGroups.map((group) => (
                <div key={group.label} className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
                    <h3 className="font-heading font-semibold text-primary-foreground">{group.label}</h3>
                  </div>
                  <div className="p-6 flex flex-wrap gap-2">
                    {group.sizes.map((size) => (
                      <span key={size} className="bg-accent/10 text-accent text-sm px-3 py-1.5 rounded-full font-medium">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Dolomite Grits Key Properties
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {keyProperties.map((prop, index) => {
                const Icon = prop.icon;
                const isLastOdd = index === keyProperties.length - 1 && keyProperties.length % 2 === 1;
                return (
                  <div
                    key={prop.title}
                    className={`bg-card p-4 rounded-xl shadow-md border border-border/50 flex gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto" : ""}`}
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
                How We Manufacture Premium Dolomite Grits
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
              <Link to="/products/dolomite-grits/applications">
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

export default DolomiteGrits;
