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

const facilityImages = [
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", alt: "Manufacturing Plant" },
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop", alt: "Warehouse" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", alt: "Mining Operations" },
  { src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop", alt: "Processing Unit" },
  { src: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop", alt: "Quality Lab" },
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop", alt: "Logistics Yard" },
];

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
          <CarouselItem key={image.alt} className="md:basis-1/2 lg:basis-1/3">
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
    description: "We deliver consistent, high-purity mineral solutions that meet industry standards and customer expectations.",
  },
  {
    title: "Customer Focus",
    icon: Users,
    description: "We build long-term partnerships through reliability, responsiveness, and solutions tailored to customer needs.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We use advanced technologies and continuous improvement to develop efficient, high-performance mineral solutions.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    description: "We support responsible growth through sustainable mining, efficient processing, and environmental stewardship.",
  },
  {
    title: "Integrity",
    icon: Shield,
    description: "We conduct business with honesty, transparency, accountability, and ethical responsibility.",
  },
  {
    title: "Teamwork",
    icon: Users2,
    description: "We promote collaboration, mutual respect, and shared responsibility to achieve operational excellence and lasting success.",
  },
];

const machinery = [
  { category: "Grinding Mills & Quantity", items: ["Ball Mills (10)","Micronizer (2)","28 Roller with Classifier (2)","VSI Grinding Unit (3)"] },
  { category: "Processing Equipment", items: [ "Crushed Stone Sorting Machine", "Automatic Grits Colour Shorter Machine","Magnetic Separator Machine","Advanced Heating Unit","Advanced Washing Unit","Pebbles Processing Unit"] },
  { category: "Coating Equipment", items: ["Automatic Powder Coating Machines", "Surface Treatment Units"] },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Welcome Message */}
        <section className="pt-40 pb-20 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Welcome to Stonex Enterprises
              </h1>
              <p className="text-xl text-primary-foreground/90">
                India's leading manufacturer of premium mineral Fillers & Extenders with over 15 years of expertise
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Company Overview</span>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Pioneering Quality Since 2011
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Empowering Diverse Industries with High Performance Mineral Solutions: Since 2011, we have been delivering high quality, performance driven mineral solutions to a wide range of industries. We are one of Rajasthan’s leading manufacturers and suppliers of premium mineral fillers and extenders, offering a comprehensive portfolio of Quartz Powder & Grits, Calcite Powder, Dolomite Powder & Grits, Coated Calcite Powder and Coated Dolomite Powder.

                </p>
                <p className="mb-4">
                 Our products are trusted across diverse industrial sectors and manufacturing applications. With a strong focus on quality, consistency, advanced processing and reliable supply, we provide mineral solutions engineered to enhance product performance, optimize manufacturing efficiency and support consistent end product quality, while building long term value and complete customer satisfaction.


                </p>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/*
                UPDATED CONTAINER:
                1. Changed dimensions to be taller (h-96 on mobile, h-[500px] on desktop).
                2. Changed rounded-full to rounded-xl for a rectangular look with soft corners.
            */}
            <div className="w-64 h-96 md:w-80 md:h-[500px] bg-card rounded-xl overflow-hidden shadow-xl mx-auto">
              {/*
                  UPDATED IMAGE:
                  Added w-full h-full object-cover to ensure the image fills
                  the tall rectangle perfectly without distorting.
              */}
              <img
                src="https://i.ibb.co/1JXrYjVZ/Founder.jpg"
                alt="Mr. Rajesh Doot"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-xl whitespace-nowrap">
              <div className="text-sm font-semibold text-center">
                15+ Years Experience
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
              Our Founder
            </span>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Mr. Rajesh Doot
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founder & Managing Director
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2011 by Mr. Rajesh Doot, our company is backed by over 15 years of expertise in mineral mining, grinding, processing and quality management. Under his leadership, we have established multiple strategically located manufacturing facilities across Rajasthan, with a strong commitment to delivering high quality, consistent and reliable mineral products that meet the evolving requirements of diverse industries. Our state-of-the-art manufacturing facilities are equipped with advanced processing and material handling technologies, including Ball Mills, Micronizers, VSI Machines, 28 Roller Mills with Classifier Systems, Automatic Grits Colour Sorting Machines, Advanced Crushed Stone Sorting Machines, Magnetic Separation Systems, Powder Coating Machines and Pebble Processing Units. These capabilities enable us to achieve precise particle sizing, efficient processing, consistent quality and reliable product performance across our diverse mineral product range. Supported by a team of skilled, disciplined and highly motivated professionals, we continuously focus on technological advancement, operational efficiency, stringent quality management and customer satisfaction. Today with an impressive production capacity of 23,0000+ MT per annum, we proudly serve customers across Indian markets, delivering quality, reliability, consistency and value with every product we supply.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* Manufacturing Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a trusted leader in India’s industrial mineral industry, setting new benchmarks in quality, consistency, innovation, and sustainable mineral processing while creating long-term value for our customers, people, and communities.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Cog className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                 To deliver high-quality, precisely processed industrial minerals through advanced technology, strict quality control, reliable supply, technical expertise, and customer-focused solutions, while creating long-term value through consistent performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">Our Equipment</span>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">State-of-the-Art Machinery</h2>
              <p className="text-muted-foreground">
                We leverage advanced indigenous and globally sourced machinery to deliver superior quality and consistency.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {machinery.map((group) => (
                <div key={group.category} className="bg-card p-6 rounded-lg shadow-md">
                  <h4 className="font-heading font-bold text-lg text-foreground mb-4 pb-4 border-b border-border">
                    {group.category}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Production Capacity */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                230,000+ MT
                </div>
                <p className="text-primary-foreground/70">Annual Production</p>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  8
                </div>
                <p className="text-primary-foreground/70">Plants</p>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                  5
                </div>
                <p className="text-primary-foreground/70">Mines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Proof */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Our Facilities</h2>
              <p className="text-muted-foreground">
                Explore a visual journey through our advanced plants and efficient mining operations.
              </p>
            </div>
            <FacilitiesCarousel />
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-3 block">
            Our DNA
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            The core principles that shape our values, inspire our actions and define our commitment to you.
          </p>
        </div>

        {/* GRID LOGIC:
           1. md:grid-cols-2 -> Tablet: Standard 2 column grid.
           2. lg:grid-cols-6 -> Desktop: We use 6 columns total.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/50 group lg:col-span-2"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
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
