import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Coated Calcite powder.jpg";

const CoatedCalcitePowder = () => (
  <ProductPageLayout slug="coated-calcite" image={productImg} content={productContent["coated-calcite"]} />
);

export default CoatedCalcitePowder;
