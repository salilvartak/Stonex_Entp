import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Calcite powder.jpg";

const CalcitePowder = () => (
  <ProductPageLayout slug="calcite-powder" image={productImg} content={productContent["calcite-powder"]} />
);

export default CalcitePowder;
