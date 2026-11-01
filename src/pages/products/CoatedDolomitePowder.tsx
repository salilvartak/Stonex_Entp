import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  Diamond,
  Waves,
  Blend,
} from "lucide-react";
import coatedDolomiteImg from "@/assets/New Images/Coated Dolomite Powder.jpg";

const product = {
  name: "Coated Dolomite Powder",
  purity: ">98.5% Purity >96% Brightness",
  image: coatedDolomiteImg,
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
    <ProductPageLayout
      name={product.name}
      slug="coated-dolomite"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Dolomite and Coated Dolomite Powder?"}
      whatIs={product.whatIs}
      how={product.how}
      specs={[
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
      ]}
      sizes={["200 Mesh", "300 Mesh", "400 Mesh", "500 Mesh", "1000 Mesh"]}
      sizeNote="10 microns to 74 microns (as per mesh size)"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Coated Dolomite Powder Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Coated Dolomite Powder"}
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

export default CoatedDolomitePowder;
