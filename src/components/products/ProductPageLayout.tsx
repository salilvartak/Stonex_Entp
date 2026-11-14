import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Beaker, Factory, Layers, Package } from "lucide-react";
import "@/styles/product-page.css";

import type { ProductContent } from "@/content/products";
import { RichText } from "@/components/RichText";
import { pointIcon } from "@/components/products/pointIcon";

export interface ProductSpec {
  label: string;
  value: string;
}

interface ProductPageLayoutProps {
  slug: string;
  image: string;
  content: ProductContent;
  eyebrow?: string;
  /** Extra product-specific sections rendered after the intro */
  children?: ReactNode;
}

export const ProductPageLayout = ({
  slug,
  image,
  content,
  eyebrow = "Premium Mineral Filler",
  children,
}: ProductPageLayoutProps) => {
  const {
    name,
    description,
    how,
    whatIs,
    specs = [],
    capacity,
    sizes,
    sizeNote,
    packaging,
    sizeTable,
    typesTitle,
    typesIntro,
    types,
    keyPropertiesTitle,
    keyProperties,
    processTitle,
    steps,
    applicationsTeaser,
    whyChooseTitle,
    whyChoose,
  } = content;

  const pick = (re: RegExp) => specs.find((s) => re.test(s.label) && s.value);
  const facts: ProductSpec[] = [
    pick(/^Purity/),
    pick(/^Brightness/),
    capacity ? { label: "Production Capacity", value: capacity } : pick(/^Sizes|^Mohs/),
  ].filter((f): f is ProductSpec => Boolean(f));

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
              <p className="product-hero-description">
                <RichText text={description} />
              </p>
              <div className="product-actions" style={{ marginTop: 28 }}>
                <Link to="/contact" className="stonex-button stonex-button-primary">
                  Enquire Now
                </Link>
                <Link to={`/products/${slug}/applications`} className="stonex-button stonex-button-secondary">
                  Explore Application
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

        {/* How we manufacture + technical specifications */}
        <section className="product-section product-section-alt">
          <div className={`product-container product-overview-grid${how ? "" : " product-overview-single"}`}>
            {how && (
              <div className="product-how-card">
                <p>
                  <RichText text={how} />
                </p>
              </div>
            )}

            <div className="product-spec-card">
              <div className="product-spec-card-header">
                <span className="product-spec-card-icon">
                  <Beaker size={22} />
                </span>
                <h3>Technical Specifications</h3>
              </div>
              <div className="product-spec-card-body">
                {specs.length > 0 && (
                  <div className="product-spec-grid">
                    {specs.map((spec) => (
                      <div key={spec.label} className="product-spec-item">
                        <span className="product-spec-dot" />
                        <div>
                          <div className="product-spec-label">{spec.label}</div>
                          {spec.value && <div className="product-spec-value">{spec.value}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {capacity && (
                  <div className="product-spec-row">
                    <span className="product-spec-row-icon">
                      <Factory size={20} />
                    </span>
                    <div>
                      <div className="product-spec-label">Production Capacity</div>
                      <div className="product-spec-value">{capacity}</div>
                    </div>
                  </div>
                )}

                {sizes && sizes.length > 0 && (
                  <div className="product-spec-row">
                    <span className="product-spec-row-icon">
                      <Layers size={20} />
                    </span>
                    <div>
                      <div className="product-spec-label">Available Particle Sizes</div>
                      <div className="product-size-list" style={{ margin: "8px 0" }}>
                        {sizes.map((size) => (
                          <span key={size} className="product-size-chip">
                            {size}
                          </span>
                        ))}
                      </div>
                      {sizeNote && <div className="product-spec-note">{sizeNote}</div>}
                    </div>
                  </div>
                )}

                {packaging && packaging.length > 0 && (
                  <div className="product-spec-row">
                    <span className="product-spec-row-icon">
                      <Package size={20} />
                    </span>
                    <div>
                      <div className="product-spec-label">Packaging Options</div>
                      <div className="product-packaging-list" style={{ marginTop: 8 }}>
                        {packaging.map((pack) => (
                          <span key={pack} className="product-packaging-chip">
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* What is */}
        <section className="product-section">
          <div className="product-container">
            {whatIs.map((block, i) => (
              <div key={block.title} style={i > 0 ? { marginTop: 40 } : undefined}>
                <h2>{block.title}</h2>
                {block.text.map((para, j) => (
                  <p key={j} className="product-whatis">
                    <RichText text={para} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Size range / product range table */}
        {sizeTable && sizeTable.rows.length > 1 && (
          <section className="product-section product-section-alt">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Size Range</span>
                <h2>{sizeTable.title}</h2>
              </div>
              <div className="product-specs-wrap product-narrow" style={{ overflowX: "auto" }}>
                <table className="product-specs product-range-table">
                  <thead>
                    <tr>
                      {sizeTable.rows[0].map((cell) => (
                        <th key={cell}>{cell}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeTable.rows.slice(1).map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, i) => (
                          <td key={i}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Types (e.g. pebble varieties) */}
        {types && types.length > 0 && (
          <section className="product-section">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Varieties</span>
                <h2>{typesTitle}</h2>
                {typesIntro && (
                  <p>
                    <RichText text={typesIntro} />
                  </p>
                )}
              </div>
              <div className="product-process-grid">
                {types.map((type) => (
                  <div key={type.title} className="product-process-card">
                    <h3>{type.title}</h3>
                    <p>
                      <RichText text={type.description} />
                    </p>
                  </div>
                ))}
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
                  const Icon = pointIcon(prop.title);
                  return (
                    <div key={prop.title} className="product-property-card">
                      <div className="product-property-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{prop.title}</h3>
                      <p>
                        <RichText text={prop.description} />
                      </p>
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
                {steps.map((step) => {
                  const Icon = pointIcon(step.title);
                  return (
                    <div key={step.title} className="product-process-card">
                      <div className="product-property-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{step.title}</h3>
                      <p>
                        <RichText text={step.description} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Applications link */}
        <section className="product-section product-section-alt">
          <div className="product-container">
            <div className="product-section-heading" style={{ marginBottom: 0 }}>
              <span className="product-section-kicker">Applications</span>
              <h2>Application Across Industries</h2>
              {applicationsTeaser && (
                <p>
                  <RichText text={applicationsTeaser} />
                </p>
              )}
              <div className="product-actions" style={{ justifyContent: "center", marginTop: 24 }}>
                <Link to={`/products/${slug}/applications`} className="stonex-button stonex-button-primary">
                  Explore Application
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose */}
        {whyChoose && whyChoose.length > 0 && (
          <section className="product-section">
            <div className="product-container">
              <div className="product-section-heading">
                <span className="product-section-kicker">Why STONEX</span>
                <h2>{whyChooseTitle}</h2>
              </div>
              <div className="product-properties-grid product-why-grid">
                {whyChoose.map((item) => {
                  const Icon = pointIcon(item.title);
                  return (
                    <div key={item.title} className="product-property-card">
                      <div className="product-property-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>
                        <RichText text={item.description} />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

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
