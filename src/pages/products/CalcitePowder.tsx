import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  FlaskConical,
  Diamond,
  Blend,
} from "lucide-react";
import calcitePowderImg from "@/assets/images/calcite-powder.png";

const product = {
  name: "Calcite Powder",
  purity: ">98.5% Purity >97% Briteness",
  image: calcitePowderImg,
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
    <ProductPageLayout
      name={product.name}
      slug="calcite-powder"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Calcite and Calcite Powder?"}
      whatIs={product.whatIs}
      how={product.how}
      specs={[
        { label: "Purity (CaCO₃)", value: ">98.5%" },
        { label: "Brightness", value: ">97%" },
        { label: "Whiteness", value: ">97%" },
        { label: "Moisture Content", value: "<0.2%" },
        { label: "Oil Absorption", value: "16 - 20 g/100g" },
        { label: "pH Value", value: "8.0 - 9.5" },
        { label: "Mohs Hardness", value: "3" },
        { label: "Specific Gravity", value: "2.7 - 2.8" },
      ]}
      capacity="5000+ MT Per Month"
      sizes={["500 Mesh", "1000 Mesh", "1250 Mesh", "2000 Mesh", "2750 Mesh"]}
      sizeNote="5 microns to 20 microns (as per mesh size)"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Calcite Powder Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Calcite Powder"}
      steps={manufacturingSteps}
    />
  );
};

export default CalcitePowder;
