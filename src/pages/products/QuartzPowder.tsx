import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  ShieldCheck,
  Sun,
  Droplet,
  CloudDrizzle,
  FlaskConical,
  Thermometer,
  Gem,
  Blend,
} from "lucide-react";
import quartzPowderImg from "@/assets/New Images/Quartz Powder.jpg";

const product = {
  name: "Quartz Powder",
  purity: ">99.6% Purity >96% Brightness",
  image: quartzPowderImg,
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
    <ProductPageLayout
      name={product.name}
      slug="quartz-powder"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Quartz and Quartz Powder?"}
      whatIs={product.whatIs}
      how={product.how}
      specs={[
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
      ]}
      capacity="4000+ MT Per Month"
      sizes={["200 Mesh", "300 Mesh", "400 Mesh", "500 Mesh", "700 Mesh"]}
      sizeNote="10 microns to 74 microns (as per mesh size)"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Quartz Powder Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Quartz Powder"}
      steps={manufacturingSteps}
    />
  );
};

export default QuartzPowder;
