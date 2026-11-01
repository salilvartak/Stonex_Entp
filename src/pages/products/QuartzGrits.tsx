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
import quartzGritsImg from "@/assets/images/quartz-grits.jpeg";

const product = {
  name: "Quartz Grits",
  purity: ">99.6% Purity >96% Brightness",
  image: quartzGritsImg,
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
    <ProductPageLayout
      name={product.name}
      slug="quartz-grits"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={"What is Quartz and Quartz Grits?"}
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
        { label: "Specific Gravity", value: "2.6 - 2.7 g/cm³" },
        { label: "pH Value", value: "6.5 - 7.5" },
        { label: "Iron Oxide (Fe₂O₃)", value: "<0.3%" },
        { label: "Bulk Density", value: "1.50 - 1.70 g/cm³" },
      ]}
      capacity="4000+ MT Per Month"
      packaging={["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"]}
      keyPropertiesTitle={"Premium Quartz Grits Key Properties"}
      keyProperties={keyProperties}
      processTitle={"How We Manufacture Premium Quartz Grits"}
      steps={manufacturingSteps}
    >
      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-section-kicker">Size Range</span>
            <h2>Explore Our Premium Quartz Grits Size Range</h2>
          </div>
          <div className="product-specs-wrap product-narrow">
            <table className="product-specs product-specs-grid">
              <thead>
                <tr>
                  <th>Grit Size</th>
                  <th>SiO₂</th>
                  <th>Brightness</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {sizeRange.map((row) => (
                  <tr key={row.size}>
                    <th scope="row">{row.size}</th>
                    <td>{row.sio2}</td>
                    <td>{row.brightness}</td>
                    <td>{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
};

export default QuartzGrits;
