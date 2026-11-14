import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import paintCoatingImage from "@/assets/images/paint&coating.jpeg";
import { productContent } from "@/content/products";
import { RichText } from "@/components/RichText";
import { pointIcon } from "@/components/products/pointIcon";

// Section images, matched against the industry name (first match wins).
const sectionImages: [RegExp, string][] = [
  [/landscap|decorative/i, "https://cdn.shopify.com/s/files/1/0717/5271/2479/files/Gardening-stones-on-pathway_75a2af72-baf5-4986-b2b0-b3e3e9ca79b1_1024x1024.jpg?v=1679737218"],
  [/wellness|reflexology/i, "https://vital-wellbeing.com/wp-content/uploads/2019/09/walking-on-stones-proprioception-shutterstock_211023196-188575_1080x675.jpg"],
  [/pvc pipes/i, "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"],
  [/pvc compound$/i, "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII"],
  [/wire|cable/i, "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"],
  [/engineered stone|countertop/i, "https://5.imimg.com/data5/SELLER/Default/2023/11/359646957/UV/UL/DL/69656835/kitchen-countertop-granite-slab.jpg"],
  [/paint|coating/i, paintCoatingImage],
  [/paper/i, "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg"],
  [/rubber/i, "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp"],
  [/adhesive|sealant/i, "https://parsonadhesives.in/wp-content/uploads/2023/10/505813c81f.jpeg"],
  [/steel|metallurgy/i, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIasWdt9AwAjORhjiaTPtXswFPuurmTQR9A&s"],
  [/glass/i, "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg"],
  [/sanitaryware/i, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOe_bmMn3gxPdqZGqEM6Grz-EeGAxEKv2zA&s"],
  [/ceramic/i, "https://b2bindustry.net/wp-content/uploads/ceramics-industry.jpg"],
  [/agricultur/i, "https://images.stockcake.com/public/8/c/7/8c7936bc-2068-4f27-8387-6b7e617c6b8c_large/agriculture-meets-industry-stockcake.jpg"],
  [/animal/i, "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"],
  [/foundr|refractory/i, "https://chromitesand.net/wp-content/uploads/2024/06/foundry.jpg"],
  [/abrasive/i, "https://binicabrasive.com/wp-content/uploads/2025/09/industrial-abrasive-tools.webp"],
  [/construction products industry/i, "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"],
  [/construction|building/i, "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb"],
  [/plastic|polymer|masterbatch|pvc|pe |pp /i, "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg"],
];

// Scroll-in animation: image slides in from its own side, text from the opposite side.
const EASE = [0.22, 1, 0.36, 1] as const;
const slideIn = (fromX: number, delay = 0, reduce = false) => ({
  initial: reduce ? { opacity: 0 } : { opacity: 0, x: fromX },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: reduce ? 0.3 : 0.9, delay, ease: EASE },
});

const imageFor = (title: string) =>
  sectionImages.find(([re]) => re.test(title))?.[1] ?? paintCoatingImage;

const ProductApplications = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const reduceMotion = useReducedMotion() ?? false;
  const content = productId ? productContent[productId] : undefined;
  const product = content
    ? {
        name: content.name,
        title: content.applications.title,
        intro: content.applications.intro,
        sections: content.applications.sections.map((section) => ({
          ...section,
          image: imageFor(section.title),
        })),
      }
    : null;

  if (!product) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center pt-20">
                <h1 className="text-2xl font-bold mb-4 text-foreground">Application data not found for {productId}</h1>
                <Button asChild><Link to="/products">Back to Products</Link></Button>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 overflow-x-clip">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-16 text-center">
            <div className="inline-block mb-4">
                <Link to={`/products/${productId}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Product Details
                </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                <span className="text-primary">{product.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {product.intro ? (
                  <RichText text={product.intro} />
                ) : (
                  <>Explore the versatile industrial uses and technical benefits of our premium {product.name}.</>
                )}
            </p>
        </section>

        {/* Applications List */}
        <div className="container mx-auto px-4 space-y-24">
          {product.sections.map((section, index) => (
            <div
              key={index}
              className="[&::after]:content-[''] [&::after]:block [&::after]:clear-both"
            >
              {/* Image floats top, text wraps beside it then spans full width once it runs past the image */}
              <motion.div
                {...slideIn(index % 2 === 0 ? -160 : 160, 0, reduceMotion)}
                className={`relative group overflow-hidden rounded-2xl shadow-xl float-none w-full sm:w-2/3 lg:w-3/5 mb-6 ${
                index % 2 === 0 ? "sm:float-left sm:mr-8" : "sm:float-right sm:ml-8"
              }`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
              </motion.div>

              <motion.h2
                {...slideIn(index % 2 === 0 ? 100 : -100, 0.15, reduceMotion)}
                className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4 mb-6"
              >
                {section.title}
              </motion.h2>

              {/* Beside the image while it's still floated - kept narrow on purpose */}
              <ul className="space-y-4">
                {section.points.slice(0, 4).map((point, i) => {
                  const Icon = pointIcon(point.title);
                  return (
                    <motion.li
                      key={i}
                      {...slideIn(index % 2 === 0 ? 60 : -60, 0.25 + 0.08 * i, reduceMotion)}
                      className="flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-lg leading-snug">
                          <span className="font-heading font-bold text-foreground">{point.title}: </span>
                          <RichText text={point.description} />
                        </span>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Past the image height - full width */}
              {section.points.length > 4 && (
                <ul className="clear-both space-y-4 mt-4 pt-2">
                  {section.points.slice(4).map((point, i) => {
                    const Icon = pointIcon(point.title);
                    return (
                      <motion.li
                        key={i}
                        {...slideIn(index % 2 === 0 ? 60 : -60, 0.25 + 0.08 * i, reduceMotion)}
                        className="flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-lg leading-snug">
                            <span className="font-heading font-bold text-foreground">{point.title}: </span>
                            <RichText text={point.description} />
                          </span>
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="container mx-auto px-4 mt-24">
            <div className="bg-muted rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need technical specifications?</h3>
                <p className="text-muted-foreground mb-8">View the full technical data sheet and chemical composition.</p>
                <Button variant="default" size="lg" asChild>
                    <Link to={`/products/${productId}`}>View Product Details</Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductApplications;