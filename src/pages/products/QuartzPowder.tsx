import { ProductPageLayout } from "@/components/products/ProductPageLayout";
import { productContent } from "@/content/products";
import productImg from "@/assets/New Images/Quartz Powder.jpg";

const QuartzPowder = () => (
  <ProductPageLayout slug="quartz-powder" image={productImg} content={productContent["quartz-powder"]} />
);

export default QuartzPowder;
