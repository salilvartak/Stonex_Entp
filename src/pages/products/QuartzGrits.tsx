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
  name: "Quartz Grits",
  purity: ">99.6% Purity >96% Brightness",
  image: "https://i.ibb.co/vxPXqNc9/quartz-grits.jpg",
  description:
    "Premium grade, high purity Quartz Grits (SiO₂) are precisely processed to deliver exceptional hardness, high silica purity, superior whiteness and tightly controlled particle size consistency. Their excellent physical and chemical properties ensure reliable processing, uniform performance and enhanced durability across a wide range of demanding industrial applications.",
  whatIs:
    "Quartz is one of the hardest, most abundant and widely occurring natural minerals on Earth. It is composed primarily of Silicon Dioxide (SiO₂) and is one of the principal rock forming minerals, occurring naturally in igneous, sedimentary and metamorphic rocks. Premium grade Quartz Lumps are processed into high quality Quartz Grits, consisting of precisely sized granular particles, through advanced crushing, washing, magnetic separation, optical/color sorting, grading and precision classification processes. These controlled processing steps help achieve the desired purity, particle-size distribution, color consistency and low impurity levels required for different industrial applications. Quartz is renowned for its exceptional hardness (7 on the Mohs scale), high chemical purity, excellent thermal stability, strong wear and abrasion resistance. Quartz also exhibits a distinctive piezoelectric effect, generating an electrical charge when subjected to mechanical stress. These outstanding physical, chemical, thermal and electrical properties make Quartz one of the most versatile and reliable industrial minerals. Quartz Grits are widely used in industries such as engineered stone and countertops, ceramics and sanitaryware, glass manufacturing, foundry, paints and coatings, rubber, plastics and polymers, abrasives, and construction materials.",
  how: "STONEX ENTERPRISES is one of India's trusted manufacturers and suppliers of Premium Quartz Grits, delivering high performance Silica solutions for a wide range of industrial applications. Backed by over 15 years of expertise in mineral mining, advanced processing technologies, particle size classification and quality management, we ensure exceptional consistency and reliability at every stage of production. Our Quartz Grits are manufactured from carefully selected premium grade Quartz lumps sourced from our own mines and trusted mining regions across Rajasthan, enabling us to manufacture high quality Quartz Grits with Purity >99.6% and Brightness up to 96%. Supported by a robust production capacity of 4,000+ MT per month, we are committed to providing consistent quality, superior whiteness with minimal impurities and reliable supply that meets the evolving needs of industries application.",
};

const sizeRange = [
  { size: "0.1mm - 0.4mm", sio2: "99.6%+", brightness: "96%", grade: "Ultra Fine Quartz Grits" },
  { size: "0.3mm - 0.7mm", sio2: "99.6%+", brightness: "96%", grade: "Fine Quartz Grits" },
  { size: "0.6mm - 1.2mm", sio2: "99.6%+", brightness: "96%", grade: "Medium Quartz Grits" },
  { size: "1.2mm - 2.5mm", sio2: "99.6%+", brightness: "96%", grade: "Coarse Quartz Grits" },
  { size: "2.5mm - 4mm", sio2: "99.6%+", brightness: "96%", grade: "Extra Coarse Quartz Grits" },
  { size: "4mm - 6mm", sio2: "99.6%+", brightness: "96%", grade: "Large Quartz Grits" },
];

const keyProperties = [
  {
    icon: ShieldCheck,
    title: "High SiO₂ Purity & Controlled Impurity Profile",
    description: "High silica (SiO₂) content with a controlled level of iron, alumina and other impurities ensures consistent chemical composition, predictable processing behaviour and reliable end product quality.",
  },
  {
    icon: Sun,
    title: "High Whiteness & Excellent Optical Appearance",
    description: "High purity, naturally bright quartz provides good whiteness and light reflectance, supporting improved colour appearance, surface finish and visual consistency in white and light coloured formulations.",
  },
  {
    icon: Layers,
    title: "Precisely Graded Grits Size",
    description: "Carefully screened, classified and tightly controlled grit sizes ensure a consistent particle size profile, supporting predictable processing, efficient particle packing, uniform dispersion and reliable end-product performance.",
  },
  {
    icon: Droplet,
    title: "Optimized Oil Absorption & Binder Demand",
    description: "Carefully controlled particle size and morphology help manage oil absorption, resin/binder demand and filler loading, supporting formulation efficiency and balanced processing characteristics.",
  },
  {
    icon: CloudDrizzle,
    title: "Low Moisture Content & Excellent Storage Stability",
    description: "Low and controlled moisture content in Premium Quartz Grits helps minimize moisture related agglomeration, caking and surface contamination, supporting free flowing handling, stable storage, consistent feeding and reliable dry blending during industrial processing.",
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
    description: "Premium Quartz Grits can provide effective mineral filler loading and partial replacement of higher cost raw materials, helping optimize formulation economics while maintaining targeted physical and functional properties.",
  },
];

const manufacturingSteps = [
  {
    title: "Premium Quartz Raw Material Selection",
    description: "High-quality Quartz lumps are carefully selected from our own mines and trusted mineral-rich sources across Rajasthan. Each batch of raw material is evaluated for SiO₂ purity, brightness, colour, mineral composition and overall quality before processing.",
  },
  {
    title: "Primary Controlled Crushing",
    description: "Selected large Quartz lumps are processed through heavy duty primary crushing equipment (jaw crushers), to reduce them into smaller, manageable feed sizes.",
  },
  {
    title: "Washing, Cleaning & Thermal Treatment",
    description: "The crushed Quartz is thoroughly washed using an advanced washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the Quartz for subsequent further processing.",
  },
  {
    title: "Secondary Controlled Crushing",
    description: "The cleaned Quartz undergoes controlled secondary crushing to achieve the required particle size while minimizing excessive fines generation. This stage helps maintain the natural hardness, crystal integrity and quality of the Quartz grains.",
  },
  {
    title: "High Intensity Magnetic Separation",
    description: "Advanced high intensity magnetic separators are used to reduce iron-bearing and other magnetically susceptible impurities. This process helps achieve low iron content, improved brightness and enhanced silica purity, supporting the requirements of demanding industrial applications.",
  },
  {
    title: "Precision Screening & Size Classification",
    description: "High-frequency multi deck screens classify the purified Quartz into precise particle size ranges using advanced grading equipment to achieve uniform particle size distribution according to customer specifications.",
  },
  {
    title: "Advanced Colour Sorting & Optical Inspection",
    description: "State-of-the-art optical colour sorting technology identifies and removes discoloured particles and visually contrasting mineral grains. This stage enhances brightness, colour uniformity and overall visual consistency of the finished Quartz Grits.",
  },
  {
    title: "Quality Testing & Packaging",
    description: "Every production batch undergoes rigorous quality testing for particle size distribution, silica purity, brightness, moisture and other critical parameters before being securely packed in moisture resistant bags and prepared for safe transportation.",
  },
];

const QuartzGrits = () => {
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
                      { label: "Specific Gravity", value: "2.6 - 2.7 g/cm³" },
                      { label: "pH Value", value: "6.5 - 7.5" },
                      { label: "Iron Oxide (Fe₂O₃)", value: "<0.3%" },
                      { label: "Bulk Density", value: "1.50 - 1.70 g/cm³" },
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
              What is Quartz and Quartz Grits?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{product.whatIs}</p>
          </div>
        </section>

        {/* Size Range Table */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Explore Our Premium Quartz Grits Size Range
              </h2>
            </div>

            <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary">
                      <th className="text-left px-6 py-4 font-heading font-semibold text-primary-foreground">Grit Size</th>
                      <th className="text-left px-6 py-4 font-heading font-semibold text-primary-foreground">SiO₂</th>
                      <th className="text-left px-6 py-4 font-heading font-semibold text-primary-foreground">Brightness</th>
                      <th className="text-left px-6 py-4 font-heading font-semibold text-primary-foreground">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeRange.map((row, i) => (
                      <tr
                        key={row.size}
                        className={`${i % 2 === 0 ? "bg-card" : "bg-accent/5"} border-b border-border/50 last:border-0 hover:bg-accent/10 transition-colors`}
                      >
                        <td className="px-6 py-4 font-heading font-semibold text-foreground whitespace-nowrap">{row.size}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{row.sio2}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{row.brightness}</td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{row.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Key Properties */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Premium Quartz Grits Key Properties
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
                How We Manufacture Premium Quartz Grits
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
              <Link to="/products/quartz-grits/applications">
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

export default QuartzGrits;
