import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { RichText } from "@/components/RichText";
import { Factory, Mountain, FlaskConical, Warehouse, MapPin, Cog } from "lucide-react";

// Mining locations
const mineLocations = [
  { name: "Banswada", minerals: "Quartz", image: "https://samasinc.com/wp-content/uploads/2025/02/chris-6LNv5BmYuvI-unsplash-scaled.jpg" },
  { name: "Makrana", minerals: "Calcite", image: "https://ptso1.com/wp-content/uploads/2016/02/IMG_0254.jpg" },
  { name: "Chatarpur", minerals: "Calcite", image: "https://ptso1.com/wp-content/uploads/2016/02/IMG_0254.jpg" },
  { name: "Rajsamand", minerals: "Dolomite", image: "https://samasinc.com/wp-content/uploads/2025/02/chris-6LNv5BmYuvI-unsplash-scaled.jpg" },
];

// Manufacturing plants with their Google Maps locations
const plants = [
  { name: "Advance Techno Mines & Minerals, Kotri, Dariba", location: "W5X5+965, Advance Tekno M&M, kotdi, Dariba, Rajasthan 313211", query: "W5X5+965, Advance Tekno M&M, kotdi, Dariba, Rajasthan 313211" },
  { name: "Natural Minerals Resources, Kotri, Dariba", location: "Natural Mineral Resources W5X5+965, kotri, Dariba, Railmagra, Rajasthan 313211", query: "Natural Mineral Resources W5X5+965, kotri, Dariba, Railmagra, Rajasthan 313211" },
  { name: "Stonex Enterprises, Kotri, Dariba", location: "W5X5+965, Stonex Enterprises, Kotri, Dariba, Railmagra, Rajasthan 313211", query: "W5X5+965, Stonex Enterprises, Kotri, Dariba, Railmagra, Rajasthan 313211" },
  { name: "RD Micron LLP, Ricco Sanwad", location: "R4V2+3Q6, RD Microns Mavli, Rajasthan 313206", query: "R4V2+3Q6, RD Microns Mavli, Rajasthan 313206" },
  { name: "Stonex Enterprises, Borada, Sarwar", location: "52JQ+RJ Stonex Enterprises, Borada, Rajasthan 305412", query: "52JQ+RJ Stonex Enterprises, Borada, Rajasthan 305412" },
  { name: "RRR Microns Pvt Ltd, Borada, Sarwar", location: "52JV+WF5, RRR Micron Pvt, Borada, Rajasthan 305412", query: "52JV+WF5, RRR Micron Pvt, Borada, Rajasthan 305412" },
  { name: "Bal Gopal Microns LLP, Sapro ka Gurah, Amet", location: "6WJ3+M22, Bal Gopal Microns LLP, Saprao Ka Gurha, Amet, Rajasthan 313332", query: "6WJ3+M22, Bal Gopal Microns LLP, Saprao Ka Gurha, Amet, Rajasthan 313332" },
  { name: "Raj Microns Pvt Ltd, Makrana", location: "E 203 A, Raj Micron Pvt, industrial Area, Makrana, Rajasthan 341502", query: "E 203 A, Raj Micron Pvt, industrial Area, Makrana, Rajasthan 341502" },
  { name: "RR Global Industries, Borada, Sarwar", location: "R R global industries 52FQ+74G, RJ SH 7E, Borada, Dhanma, Rajasthan 305412", query: "R R global industries 52FQ+74G, RJ SH 7E, Borada, Dhanma, Rajasthan 305412" },
];

const machinery = [
  "Ball Mills",
  "Micronizer",
  "28 Roller with Classifier",
  "Multi Colour Grain Sorting Machine",
  "Gitti Sorting Machine",
  "Magnetic Sorting Machine",
  "Automatic Powder Coating Machines",
];

const Infrastructure = () => {
  // State for interactive sections
  const [activeMine, setActiveMine] = useState(mineLocations[0]);
  const [activePlant, setActivePlant] = useState(plants[0]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
                Our Infrastructure
              </h1>
              <p className="text-xl font-bold text-primary-foreground/90">
                World Class Infrastructure & Advanced Technology for Precision Mineral Processing
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Advanced Infrastructure & Manufacturing Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed [&_strong]:text-foreground">
                <RichText text="With strategically located mines, well equipped manufacturing facilities, advanced mineral processing machinery and an in house quality control laboratory, **STONEX ENTERPRISES** has established a strong infrastructure to serve the diverse requirements of industries across India." />
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">9</div>
                <p className="text-muted-foreground">Manufacturing Plants</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">4</div>
                <p className="text-muted-foreground">Mining Locations</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">1</div>
                <p className="text-muted-foreground">Warehouse Locations</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md text-center">
                <div className="font-heading font-bold text-3xl text-accent mb-2">230,000+ MT</div>
                <p className="text-muted-foreground">Annual Production</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE MINES SECTION --- */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Mountain className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">Mining Locations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: List of Mines */}
              <div className="space-y-4">
                {mineLocations.map((mine) => (
                  <div 
                    key={mine.name} 
                    // Added onMouseEnter to change state
                    onMouseEnter={() => setActiveMine(mine)}
                    className={`p-5 rounded-lg shadow-sm flex items-start gap-4 cursor-pointer transition-all duration-300 border-2 ${
                      activeMine.name === mine.name 
                        ? "bg-white border-accent scale-[1.02]" 
                        : "bg-card border-transparent hover:bg-white"
                    }`}
                  >
                    <MapPin className={`h-5 w-5 shrink-0 mt-1 transition-colors ${
                      activeMine.name === mine.name ? "text-accent" : "text-muted-foreground"
                    }`} />
                    <div>
                      <h4 className={`font-heading font-semibold ${
                        activeMine.name === mine.name ? "text-accent" : "text-foreground"
                      }`}>{mine.name}</h4>
                      <p className="text-muted-foreground text-sm">Mineral: <span className="font-bold text-foreground">{mine.minerals}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Dynamic Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <img
                  src={activeMine.image}
                  alt={activeMine.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  // Key forces re-render for animation if desired, or let React reconcile src change
                  key={activeMine.name} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE PLANTS SECTION --- */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Factory className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">Manufacturing Plants &amp; Google Map Locations</h2>
            </div>

            {/* Layout: Map Left, List Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              
              {/* Left: Dynamic Map Iframe */}
              <div className="order-2 lg:order-1 h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-100 border border-border">
                 <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activePlant.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    title="Plant Location"
                  ></iframe>
              </div>

              {/* Right: List of Plants */}
              <div className="order-1 lg:order-2 space-y-3">
                {plants.map((plant) => (
                  <div 
                    key={plant.name} 
                    onMouseEnter={() => setActivePlant(plant)}
                    className={`p-4 rounded-lg shadow-sm flex items-center justify-between cursor-pointer transition-all duration-300 border-l-4 ${
                       activePlant.name === plant.name 
                        ? "bg-accent/5 border-accent shadow-md" 
                        : "bg-card border-transparent hover:bg-accent/5"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`font-bold ${
                        activePlant.name === plant.name ? "text-foreground font-bold" : "text-foreground/80"
                      }`}>{plant.name}</span>
                      <span className="text-muted-foreground text-sm">{plant.location}</span>
                    </div>
                    {activePlant.name === plant.name && (
                         <MapPin className="h-4 w-4 text-accent animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            

          </div>
        </section>

        {/* Laboratory */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Advanced Quality Control Laboratory</h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed [&_strong]:text-foreground">
                  <RichText text="At **STONEX ENTERPRISES**, quality is engineered through precision testing and continuous process monitoring. Our in house laboratory evaluates the physical, chemical and performance characteristics of mineral products at every critical stage of manufacturing." />
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With a focus on mineral purity, particle size precision and product consistency, we ensure reliable quality standards that support the diverse requirements of industrial applications.
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Key Laboratory Testing Capabilities:</h3>
                <ul className="space-y-3">
                  {["Particle Size Distribution (PSD) Analysis", "Chemical Composition Analysis", "Brightness & Whiteness Testing", "Moisture Content Analysis", "Oil Absorption Testing"].map((test) => (
                    <li key={test} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-bold">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop"
                  alt="Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Warehouse className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Warehousing</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Large-capacity warehousing facilities strategically located for efficient storage and distribution across India.
                </p>
                <div className="space-y-4">
                  <div className="bg-card p-5 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      <h4 className="font-heading font-semibold text-foreground">Nashik, Maharashtra</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">Strategic location for West India distribution</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;