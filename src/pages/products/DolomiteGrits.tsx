import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Dolomite Grits.jpg";

const DolomiteGrits = () => (
  <ProductPageLayout slug="dolomite-grits" image={productImg} content={productContent["dolomite-grits"]} />
);

export default DolomiteGrits;
