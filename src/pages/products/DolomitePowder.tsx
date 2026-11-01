import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  Package,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  FlaskConical,
  Diamond,
  Blend,
} from "lucide-react";
import dolomitePowderImg from "@/assets/images/dolomite-powder.jpeg";

const product = {
  name: "Dolomite Powder",
  purity: ">98.5% Purity >96% Brightness",
  image: dolomitePowderImg,
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
    <ProductPageLayout
      name={product.name}
      slug="dolomite-powder"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Dolomite and Dolomite Powder?"}
      whatIs={product.whatIs}
      how={product.how}
      specs={[
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
      ]}
      capacity="4000+ MT Per Month"
      sizes={["200 Mesh", "300 Mesh", "400 Mesh", "500 Mesh", "1000 Mesh"]}
      sizeNote="10 microns to 74 microns (as per mesh size)"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Dolomite Powder Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Dolomite Powder"}
      steps={manufacturingSteps}
    />
  );
};

export default DolomitePowder;
