import type { ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import "@/styles/product-page.css";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductProperty {
  icon: ElementType;
  title: string;
  description: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

interface ProductPageLayoutProps {
  name: string;
  slug: string;
  image: string;
  description: string;
  /** e.g. ">98.5% Purity >97% Brightness" - split into hero badges */
  purity: string;
  eyebrow?: string;
  /** Three quick facts under the hero. Defaults to first two specs + capacity. */
  highlights?: ProductSpec[];
  whatIsTitle: string;
  whatIs: string;
  /** "How we make it" copy shown in the note beside the intro */
  how: string;
  specs?: ProductSpec[];
  capacity?: string;
  sizes?: string[];
  sizeNote?: string;
  packaging?: string[];
  /** Extra product-specific sections rendered after the intro */
  children?: ReactNode;
  keyPropertiesTitle?: string;
  keyProperties?: ProductProperty[];
  processTitle?: string;
  steps?: ProductStep[];
}

const Bold = ({ text, term }: { text: string; term: string }) => (
  <>
    {text.split(new RegExp(`(${term})`)).map((chunk, i) =>
      chunk === term ? <strong key={i}>{chunk}</strong> : chunk
    )}
  </>
);

export const ProductPageLayout = ({
  name,
  slug,
  image,
  description,
  purity,
  eyebrow = "Premium Mineral Filler",
  highlights,
  whatIsTitle,
  whatIs,
  how,
  specs = [],
  capacity,
  sizes,
  sizeNote,
  packaging,
  children,
  keyPropertiesTitle,
  keyProperties,
  processTitle,
  steps,
}: ProductPageLayoutProps) => {
  const parts = purity.split(/(?=>)/).filter(Boolean).map((p) => p.trim());
  const badges = parts.length > 1 ? parts : [`${parts[0]} Pure`];

  const facts =
    highlights ??
    [
      ...specs.slice(0, 2),
      ...(capacity ? [{ label: "Production Capacity", value: capacity }] : specs.slice(2, 3)),
    ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="product-page pt-24 md:pt-36">
        {/* Breadcrumbs + Hero */}
        <div className="product-container">
          <nav className="product-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span className="breadcrumb-current">{name}</span>
          </nav>
        </div>

        <section className="product-hero">
          <div className="product-container product-hero-grid">
            <div>
              <span className="product-eyebrow">{eyebrow}</span>
              <h1>{name}</h1>
              <p className="product-hero-description">{description}</p>
              <div className="product-badges">
                {badges.map((badge) => (
                  <span key={badge} className="product-badge">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="product-actions">
                <Link to="/contact" className="stonex-button stonex-button-primary">
                  Enquire Now
                </Link>
                <Link to={`/products/${slug}/applications`} className="stonex-button stonex-button-secondary">
                  View Applications
                </Link>
              </div>
            </div>
            <div className="product-hero-visual">
              <img src={image} alt={name} />
            </div>
          </div>
        </section>

        {/* Quick facts */}
        {facts.length > 0 && (
          <section className="product-highlights">
            <div className="product-container">
              <div className="product-highlights-grid">
                {facts.map((fact) => (
                  <div key={fact.label} className="product-highlight">
                    <span className="product-highlight-value">{fact.value}</span>
                    <span className="product-highlight-label">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Intro */}
        <section className="product-section product-section-alt">
          <div className="product-container product-intro-grid">
            <div className="product-intro-copy">
              <span className="product-section-kicker">About the Product</span>
              <h2>{whatIsTitle}</h2>
              <p>{whatIs}</p>
            </div>
            <aside className="product-intro-note">
              <h3>Manufactured by Stonex Enterprises</h3>
              <p>
                <Bold text={how} term="STONEX ENTERPRISES" />
              </p>
            </aside>
          </div>
        </section>

        {/* Technical specifications */}
        {(specs.length > 0 || capacity || sizes?.length || packaging?.length) && (
          <section className="product-section">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Technical Data</span>
                <h2>Technical Specifications</h2>
              </div>
              <div className="product-specs-wrap">
                <table className="product-specs">
                  <tbody>
                    {specs.map((spec) => (
                      <tr key={spec.label}>
                        <th scope="row">{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                    {capacity && (
                      <tr>
                        <th scope="row">Production Capacity</th>
                        <td>{capacity}</td>
                      </tr>
                    )}
                    {sizes && sizes.length > 0 && (
                      <tr>
                        <th scope="row">Available Particle Sizes</th>
                        <td>
                          <div className="product-size-list">
                            {sizes.map((size) => (
                              <span key={size} className="product-size-chip">
                                {size}
                              </span>
                            ))}
                          </div>
                          {sizeNote && <div style={{ marginTop: 10 }}>{sizeNote}</div>}
                        </td>
                      </tr>
                    )}
                    {packaging && packaging.length > 0 && (
                      <tr>
                        <th scope="row">Packaging Options</th>
                        <td>
                          <div className="product-packaging-list">
                            {packaging.map((pack) => (
                              <span key={pack} className="product-packaging-chip">
                                {pack}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {children}

        {/* Key properties */}
        {keyProperties && keyProperties.length > 0 && (
          <section className="product-section product-section-alt">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Performance</span>
                <h2>{keyPropertiesTitle ?? `Premium ${name} Key Properties`}</h2>
              </div>
              <div className="product-properties-grid">
                {keyProperties.map((prop) => {
                  const Icon = prop.icon;
                  return (
                    <div key={prop.title} className="product-property-card">
                      <div className="product-property-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{prop.title}</h3>
                      <p>{prop.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Manufacturing process */}
        {steps && steps.length > 0 && (
          <section className="product-section">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Manufacturing</span>
                <h2>{processTitle ?? `How We Manufacture Premium ${name}`}</h2>
              </div>
              <div className="product-process-grid">
                {steps.map((step, index) => (
                  <div key={step.title} className="product-process-card">
                    <div className="product-process-number">{index + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Applications link */}
        <section className="product-section product-section-alt">
          <div className="product-container">
            <div className="product-section-heading" style={{ marginBottom: 0 }}>
              <span className="product-section-kicker">Applications</span>
              <h2>Industry Applications</h2>
              <p>Discover the diverse range of industries and specialized use cases where our {name} excels.</p>
              <div className="product-actions" style={{ justifyContent: "center", marginTop: 24 }}>
                <Link to={`/products/${slug}/applications`} className="stonex-button stonex-button-primary">
                  View Applications
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="product-cta">
          <div className="product-container product-cta-inner">
            <div>
              <h2>Interested in {name}?</h2>
              <p>Talk to our team for specifications, samples and pricing tailored to your requirements.</p>
            </div>
            <div className="product-actions" style={{ flexShrink: 0 }}>
              <Link to="/contact" className="stonex-button stonex-button-primary">
                Get a Quote
              </Link>
              <Link to="/products" className="stonex-button stonex-button-secondary">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
