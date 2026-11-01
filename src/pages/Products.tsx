import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "@/styles/product-page.css";
import calcitePowderImg from "@/assets/New Images/Calcite powder.jpg";
import dolomitePowderImg from "@/assets/New Images/Dolomite Powder.jpg";
import quartzPowderImg from "@/assets/New Images/Quartz Powder.jpg";
import quartzGritsImg from "@/assets/New Images/Quartz Grits.jpg";
import dolomiteGritsImg from "@/assets/New Images/Dolomite Grits.jpg";
import coatedCalciteImg from "@/assets/New Images/Coated Calcite powder.jpg";
import coatedDolomiteImg from "@/assets/New Images/Coated Dolomite Powder.jpg";
import pebbleImg from "@/assets/images/pebble.png";

const products = [
  {
    id: "calcite-powder",
    name: "Calcite Powder",
    purity: "98%+",
    image: calcitePowderImg,
  },
  {
    id: "dolomite-powder",
    name: "Dolomite Powder",
    purity: "97%+",
    image: dolomitePowderImg,
  },
  {
    id: "quartz-powder",
    name: "Quartz Powder",
    purity: "99%+",
    image: quartzPowderImg,
  },
  {
    id: "quartz-grits",
    name: "Quartz Grits",
    purity: "99%+",
    image: quartzGritsImg,
  },
  
  {
    id: "dolomite-grits",
    name: "Dolomite Grits",
    purity: "98%+",
    image: dolomiteGritsImg,
  },
  {
    id: "coated-calcite",
    name: "Coated Calcite Powder",
    purity: "97%+",
    image: coatedCalciteImg,
  },
  {
    id: "coated-dolomite",
    name: "Coated Dolomite Powder",
    purity: "97%+",
    image: coatedDolomiteImg,
  },
  {
    id: "pebble",
    name: "Pebble",
    purity: "97%+",
    image: pebbleImg,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="product-page pt-24 md:pt-36">
        <div className="product-container">
          <nav className="product-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Products</span>
          </nav>
        </div>

        <section className="product-hero">
          <div className="product-container">
            <span className="product-eyebrow">Mineral Fillers &amp; Extenders</span>
            <h1>Our Products</h1>
            <p className="product-hero-description">
              Premium quality mineral industrial fillers and extenders for diverse industrial applications
            </p>
          </div>
        </section>

        <section className="product-section product-section-alt">
          <div className="product-container">
            <div className="product-list-grid">
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="product-list-card">
                  <div className="product-list-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-list-body">
                    <h3>{product.name}</h3>
                    <span className="product-list-link">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="product-cta">
          <div className="product-container product-cta-inner">
            <div>
              <h2>Need a specific grade or size?</h2>
              <p>Talk to our team for specifications, samples and pricing tailored to your requirements.</p>
            </div>
            <Link to="/contact" className="stonex-button stonex-button-primary">
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
