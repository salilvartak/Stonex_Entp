import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import {
  Layers,
  Package,
  ShieldCheck,
  FlaskConical,
  Thermometer,
  Diamond,
  CloudDrizzle,
} from "lucide-react";
import dolomiteGritsImg from "@/assets/New Images/Dolomite Grits.jpg";

const product = {
  name: "Dolomite Grits",
  purity: ">98.5% Purity >96% Brightness",
  image: dolomiteGritsImg,
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
    <ProductPageLayout
      name={product.name}
      slug="dolomite-grits"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Dolomite and Dolomite Grits?"}
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
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Dolomite Grits Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Dolomite Grits"}
      steps={manufacturingSteps}
    >
      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-section-kicker">Size Range</span>
            <h2>Explore Our Premium Dolomite Grits Size Range</h2>
          </div>
          <div className="product-size-groups">
            {sizeGroups.map((group) => (
              <div key={group.label} className="product-process-card">
                <h3>{group.label}</h3>
                <div className="product-size-list">
                  {group.sizes.map((size) => (
                    <span key={size} className="product-size-chip">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
};

export default DolomiteGrits;
