import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, Award, Users, Factory, Cog, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Leaf, Shield, Users2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import founderImg from "@/assets/images/founder.webp";
import machineryBg from "@/assets/images/machinery-bg.webp";
import { EquipmentFlipCard } from "@/components/about/EquipmentFlipCard";
import { useScrollReveal, gridRevealDelay } from "@/hooks/use-scroll-reveal";
import valuesBg from "@/assets/New Images/our values.jpeg";
import { Layers } from "lucide-react";
import { RichText } from "@/components/RichText";

/*
 * Every image in src/assets/facilities/ is shown, in filename order.
 * Name files "<number>-<Description>.webp"; the description is the alt text.
 */
const facilityModules = import.meta.glob<string>(
  "@/assets/facilities/*.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" }
);
const facilityImages = Object.keys(facilityModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => ({
    src: facilityModules[path],
    alt: (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "").replace(/^\d+\s*[-_.]\s*/, ""),
  }));

const FacilitiesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!api) return;

    const play = () => {
      autoplayTimer.current = setInterval(() => {
        if (!api.canScrollNext()) {
          api.scrollTo(0);
        } else {
          api.scrollNext();
        }
      }, 3000);
    };

    const stop = () => clearInterval(autoplayTimer.current);

    play();
    api.on("pointerDown", stop);
    api.on("pointerUp", play);

    return () => {
      stop();
      api.off("pointerDown", stop);
      api.off("pointerUp", play);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {facilityImages.map((image) => (
          <CarouselItem key={image.src} className="basis-full sm:basis-1/2 lg:basis-1/4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const coreValues = [
  {
    title: "Quality Excellence",
    icon: Award,
    description: "We deliver high purity mineral solutions with consistent quality, reliable performance and a strong commitment to industry standards and customer expectations.",
  },
  {
    title: "Customer Focus",
    icon: Users,
    description: "We build lasting business relationships through dependable service, responsive communication, and mineral solutions tailored to our customers' specific requirements.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We embrace advanced processing technologies and continuous improvement to enhance product quality, manufacturing efficiency and performance across diverse industrial applications.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    description: "We promote responsible mineral sourcing, efficient resource utilization and environmentally conscious manufacturing practices to support sustainable industrial growth.",
  },
  {
    title: "Integrity",
    icon: Shield,
    description: "We uphold honesty, transparency, accountability and ethical business practices in every interaction with our customers, suppliers and business partners.",
  },
  {
    title: "Teamwork",
    icon: Users2,
    description: "We promote collaboration, mutual respect and shared responsibility to strengthen operational excellence and achieve lasting success together.",
  },
];

const machinery = [
  { icon: Cog, category: "Grinding Mills & Quantity", items: ["Ball Mills (10)","Micronizer (2)","28 Roller with Classifier (2)","VSI Grinding Unit (3)"] },
  { icon: Factory, category: "Processing Equipment", items: [ "Crushed Stone Sorting Machine", "Automatic Grits Colour Sorter Machine","Magnetic Separator Machine","Advanced Heating Unit","Advanced Washing Unit","Pebbles Processing Unit"] },
  { icon: Layers, category: "Coating Equipment", items: ["Automatic Powder Coating Machines", "Surface Treatment Units"] },
];

const About = () => {
  const valuesRef = useScrollReveal<HTMLElement>();

  return (
    <div className="about-page home-typography min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Welcome Message */}
        <section className="pt-40 pb-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="about-welcome-title font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Welcome to STONEX ENTERPRISES
              </h1>
              <p className="font-heading font-bold text-2xl text-accent mb-4">Where Purity Meets Perfection</p>
              <p className="hero-description text-xl text-primary-foreground/90">
                With over 15 years of industry expertise, STONEX ENTERPRISES is a trusted manufacturer and supplier of premium quality mineral fillers and extenders, delivering reliable mineral solutions to diverse industries across India.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="eyebrow text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Company Overview</span>
              <h2 className="about-section-title font-heading font-bold text-3xl text-foreground mb-6">
                Pioneering Quality Since 2011
              </h2>
              <div className="prose prose-lg text-muted-foreground [&_strong]:text-foreground">
                <p className="about-paragraph mb-4 font-bold text-foreground">
                  Empowering Industries with High Performance Mineral Solutions
                </p>
                <p className="about-paragraph mb-4">
                  <RichText text="Established in 2011, **STONEX ENTERPRISES** is one of Rajasthan's leading mineral manufacturers and suppliers, recognized for its commitment to quality, manufacturing excellence and customer satisfaction." />
                </p>
                <p className="about-paragraph mb-4">
                  With established mining operations, strategically located manufacturing facilities and advanced mineral processing technologies, we have developed the capabilities to serve diverse industrial requirements. Our manufacturing processes are supported by modern machinery, experienced professionals and stringent quality management systems to ensure consistent product quality, precise particle sizing and dependable supply.
                </p>
                <p className="about-paragraph mb-4">
                  <RichText text="Driven by continuous improvement, technical expertise and a customer focused approach, we strive to build lasting industrial partnerships through transparency, reliability and competitive solutions. At **STONEX ENTERPRISES**, our commitment is to deliver consistent quality, strengthen customer confidence and create long term value for the industries we serve." />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image (shown uncropped: it has its own logo and 15+ badge) */}
          <div className="relative">
            <div className="w-full max-w-xl mx-auto aspect-[1374/1145] bg-card rounded-xl overflow-hidden shadow-xl">
              <img
                src={founderImg}
                alt="Mr. Rajesh Doot, Founder & Managing Director of Stonex Enterprises"
                className="w-full h-full object-cover"
                width={1374}
                height={1145}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="eyebrow text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
              Our Founder
            </span>
            <h2 className="founder-name font-heading font-bold text-3xl text-foreground mb-1">
              Mr. Rajesh Doot
            </h2>
            <p className="founder-role text-lg text-muted-foreground font-bold mb-4">
              (Founder & Managing Director)
            </p>
            <div className="space-y-4 [&_strong]:text-foreground">
              <p className="about-paragraph text-muted-foreground leading-relaxed">
                <RichText text="Founded in 2011 by **Mr. Rajesh Doot**, STONEX ENTERPRISES is built on over 15 years of expertise in mineral mining, grinding, processing and quality management. Under his leadership, we have established multiple strategically located manufacturing facilities across Rajasthan, supported by our own mining operations and carefully selected mineral sources. This integrated sourcing network strengthens raw material consistency, supply reliability and quality control, enabling us to meet the evolving requirements of diverse industries." />
              </p>
              <p className="about-paragraph text-muted-foreground leading-relaxed">
                <RichText text="Our manufacturing facilities are equipped with advanced processing and material handling technologies, enabling us to produce a diverse range of mineral products with controlled particle sizing and consistent quality. Our equipment includes **Ball Mills, Micronizers, VSI Grinding Units, 28-Roller Mills with Classifier Systems, Automatic Grits Colour Sorting Machines, Advanced Crushed Stone Sorting Machines, Magnetic Separation Systems, Powder Coating Machines and Pebble Processing Units.** These integrated capabilities support efficient mineral processing, precise particle size classification, effective material separation and consistent product quality across our portfolio." />
              </p>
              <p className="about-paragraph text-muted-foreground leading-relaxed">
                With the support of a skilled and dedicated team, Mr. Rajesh Doot continues to emphasize technological advancement, process optimization, stringent quality management, operational efficiency and customer satisfaction.
              </p>
              <div className="grid grid-cols-3 gap-4 py-2 text-center">
                {[
                  { value: "230,000+ MT", label: "Annual Capacity" },
                  { value: "2011", label: "Established" },
                  { value: "15+", label: "Years of Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-card p-4 shadow-sm">
                    <div className="font-heading font-bold text-xl md:text-2xl text-primary">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="about-paragraph text-muted-foreground leading-relaxed">
                <RichText text="With an annual production capacity of **230,000+ MT**, STONEX ENTERPRISES continues to strengthen its presence across Indian markets, building long term industrial partnerships through quality, consistency, reliability and customer focused solutions." />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Manufacturing Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="about-subtitle font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="about-paragraph text-muted-foreground">
                  To be a trusted leader in India's industrial mineral industry by setting new benchmarks in product quality, consistency, technological innovation and sustainable mineral processing. We aspire to build lasting partnerships, create meaningful value for our customers and people and contribute positively to the communities we serve.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Cog className="h-7 w-7 text-accent" />
                </div>
                <h3 className="about-subtitle font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="about-paragraph text-muted-foreground">
                  To deliver premium quality, precisely processed industrial minerals through advanced manufacturing technology, stringent quality control, reliable supply capabilities and technical expertise. We are committed to providing customer focused solutions, maintaining consistent product performance and building long term relationships while creating sustainable value for our customers and business partners.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="h-7 w-7 text-accent" />
                </div>
                <h3 className="about-subtitle font-heading font-bold text-2xl text-foreground mb-4">Environmental Responsibility</h3>
                <p className="about-paragraph text-muted-foreground">
                  To promote responsible mineral processing through efficient resource utilization, energy efficient operations, waste minimization and sustainable manufacturing practices. We are committed to reducing our environmental footprint, conserving natural resources and supporting sustainable industrial growth for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Section — plant photo behind, flip cards on top */}
        <section className="machinery-section relative isolate flex aspect-[3/2] items-center overflow-hidden bg-primary py-20 md:py-24">
          <img
            src={machineryBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-contain"
          />
          <div className="container mx-auto w-full px-4">
            <div className="machinery-heading text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Our Equipment</span>
              <h2 className="about-section-title font-heading font-bold text-3xl mb-4">State-of-the-Art Machinery</h2>
              <p className="about-paragraph">
                <RichText text="At **STONEX ENTERPRISES**, we utilise advanced Indian and globally sourced machinery to ensure precision processing, consistent product quality and reliable performance." />
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {machinery.map((group) => (
                <EquipmentFlipCard key={group.category} icon={group.icon} category={group.category} items={group.items} />
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Production Capacity */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="stat-number font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                230,000+ MT
                </div>
                <p className="stat-label text-primary-foreground/70">Annual Production</p>
              </div>
              <div>
                <div className="stat-number font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  9
                </div>
                <p className="stat-label text-primary-foreground/70">Plants</p>
              </div>
              <div>
                <div className="stat-number font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  4
                </div>
                <p className="stat-label text-primary-foreground/70">Mining Locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Proof */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="about-section-title font-heading font-bold text-3xl text-foreground mb-4">Our Facilities</h2>
              <p className="about-paragraph text-muted-foreground">
                Explore our advanced manufacturing facilities, modern mineral processing plants and carefully managed mining operations. At STONEX ENTERPRISES, we combine industry expertise, efficient processing technologies and stringent quality control to deliver high purity minerals with consistent quality and reliable performance.
              </p>
            </div>
            <FacilitiesCarousel />
          </div>
        </section>

        {/* Core Values */}
        <section ref={valuesRef} className="relative isolate overflow-hidden py-24">
      <img
        src={valuesBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="machinery-heading text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
            Our DNA
          </span>
          <h2 className="about-section-title font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="about-paragraph text-muted-foreground text-lg">
            The fundamental principles that define who we are, guide our decisions, inspire our actions and strengthen our commitment to quality, integrity, innovation and customer satisfaction.
          </p>
        </div>

        {/* GRID LOGIC:
           1. md:grid-cols-2 -> Tablet: Standard 2 column grid.
           2. lg:grid-cols-6 -> Desktop: We use 6 columns total.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="value-card reveal p-8 rounded-2xl group lg:col-span-2"
                data-reveal
                style={{ "--reveal-delay": gridRevealDelay(index, 3) } as React.CSSProperties}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h4 className="value-title font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="value-description text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

        {/* CTA 
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-6">
              Want to know more about our facilities?
            </h2>
            <Button variant="cta" size="lg" asChild>
              <Link to="/infrastructure">View Infrastructure</Link>
            </Button>
          </div>
        </section>*/}
      </main>
      <Footer />
    </div>
  );
};

export default About;
