import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Quartz Grits.jpg";

const QuartzGrits = () => (
  <ProductPageLayout slug="quartz-grits" image={productImg} content={productContent["quartz-grits"]} />
);

export default QuartzGrits;
