import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  FlaskConical,
  Diamond,
  Waves,
} from "lucide-react";
import coatedCalciteImg from "@/assets/New Images/Coated Calcite powder.jpg";

const product = {
  name: "Coated Calcite Powder",
  purity: ">97% Purity >96% Brightness",
  image: coatedCalciteImg,
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
    <ProductPageLayout
      name={product.name}
      slug="coated-calcite"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Calcite and Coated Calcite Powder?"}
      whatIs={product.whatIs}
      how={product.how}
      specs={[
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
      ]}
      sizes={["500 Mesh", "1000 Mesh", "1250 Mesh", "2000 Mesh", "2750 Mesh"]}
      sizeNote="5 microns to 20 microns (as per mesh size)"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Coated Calcite Powder Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Coated Calcite Powder"}
      steps={manufacturingSteps}
    >
      <section className="product-section">
        <div className="product-container">
          <div className="product-intro-note product-narrow">
            <h3>What is Stearic Acid?</h3>
            <p>{product.stearicAcid}</p>
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
};

export default CoatedCalcitePowder;
