import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Coated Dolomite Powder.jpg";

const CoatedDolomitePowder = () => (
  <ProductPageLayout slug="coated-dolomite" image={productImg} content={productContent["coated-dolomite"]} />
);

export default CoatedDolomitePowder;
