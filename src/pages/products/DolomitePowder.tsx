import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Dolomite Powder.jpg";

const DolomitePowder = () => (
  <ProductPageLayout slug="dolomite-powder" image={productImg} content={productContent["dolomite-powder"]} />
);

export default DolomitePowder;
