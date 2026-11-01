import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import pebbleImg from "@/assets/images/pebble.png";

const product = {
  name: "Pebble",
  purity: "96%+",
  image: pebbleImg,
  description: "Finest talc for pharmaceuticals, cosmetics and rubber",
  rawMaterial: "High-grade talc ore from Rajasthan deposits",
  productionCapacity: "500+ MT per month",
  whatIs:
    "Pebbles are highly versatile natural stones used extensively for landscaping, decoration, functional drainage and also have health benefits. They serve as durable, lowmaintenance garden mulch to suppress weeds and retain soil moisture.",
  how: "Pebbles are sourced from mines (or more commonly, quarries) through a process of extraction and refinement that transforms large, raw, angular rock into small, smooth, rounded stones.",
  MeshSizes: ["200", "300", "500", "1000"],
  MicronSizes: ["2 Micron to 74 Micron"],
  SizeLine: "Our Talc powder available at the most affordable prices and in all Micron & Mesh size as per customer requirement: ",
  packaging: ["25 Kg PP Bags", "50 Kg PP Bags", "1 MT Jumbo Bags"],
};

const pebbleTypes = [
  {
    title: "Marble Pebbles",
    description:
      "These polished stones come in white and other light colors. They bring a sense of elegance and are often used in upscale landscapes and indoor spaces.",
  },
  {
    title: "Polished Pebbles",
    description:
      "Manually polished to give them a shiny finish, these pebbles add a luxurious touch and are perfect for both decorative and functional uses in interiors and exteriors.",
  },
  {
    title: "River Pebbles",
    description:
      "They naturally acquire a smooth and rounded shape as they continue to flow in rivers and gradually wear away at the edges. Available in a variety of sizes and colours, they are often used in water features, pathways and garden beds.",
  },
];

const Pebble = () => {
  return (
    <ProductPageLayout
      name={product.name}
      slug="pebble"
      image={product.image}
      description={product.description}
      purity={product.purity}
      whatIsTitle={`What is ${product.name}?`}
      whatIs={product.whatIs}
      how={product.how}
      specs={[{ label: "Raw Material Sourcing", value: product.rawMaterial }]}
      capacity={product.productionCapacity}
      sizes={[...product.MicronSizes, ...product.MeshSizes.map((size) => `${size} Mesh`)]}
      sizeNote={product.SizeLine}
      packaging={product.packaging}
    >
      <section className="product-section product-section-alt">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-section-kicker">Varieties</span>
            <h2>Types of Pebble Stones</h2>
          </div>
          <div className="product-process-grid">
            {pebbleTypes.map((type) => (
              <div key={type.title} className="product-process-card">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
};

export default Pebble;
