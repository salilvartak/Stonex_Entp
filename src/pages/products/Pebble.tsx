import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Pebbles.jpeg";

const Pebble = () => (
  <ProductPageLayout slug="pebble" image={productImg} content={productContent["pebble"]} eyebrow="Natural Decorative Stone" />
);

export default Pebble;
