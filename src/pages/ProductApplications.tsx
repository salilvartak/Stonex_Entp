import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle2,
  Sun,
  Layers,
  Droplet,
  Sparkles,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
  DollarSign,
  Boxes,
  Thermometer,
  Gem,
  FlaskConical,
  Waves,
  Factory,
  Beaker,
  Blend,
  Diamond,
  Sprout,
  PawPrint,
  Flame,
  CloudRain,
  Zap,
  Cpu,
  Ruler,
  Mountain,
  Snowflake,
  Wind,
  Scale,
  Package,
  Recycle,
  Grid3x3,
  Hammer,
  Gauge,
  PackageCheck,
  CircleDot,
} from "lucide-react";
import { motion } from "framer-motion";
import paintCoatingImage from "@/assets/images/paint&coating.jpeg";

type ApplicationPoint = string | { icon: React.ElementType; title: string; description: string };

// --- Data Structure ---
const applicationsData: Record<string, {
  name: string;
  sections: {
    title: string;
    image: string;
    points: ApplicationPoint[];
  }[];
}> = {
  "calcite-powder": {
    name: "Calcite Powder",
    sections: [
      {
        title: "Paint & Coating Industry",
        image: "https://i.ibb.co/0R77Jqfd/paint-coating.jpg",
        points: [
          { icon: Sun, title: "High Brightness & Exceptional Whiteness", description: "High-purity Calcium Carbonate (CaCO₃) with excellent brightness and natural whiteness provides superior light reflectance, enhancing brilliance, color purity, opacity, and uniformity in white and pastel coatings." },
          { icon: Layers, title: "Efficient TiO₂ Extension & Enhanced Opacity", description: "Ultra fine calcite optimizes TiO₂ particle spacing and distribution, improving light scattering, hiding power, tint strength and coverage efficiency while enabling optimized TiO₂ consumption and cost effective formulations." },
          { icon: Droplet, title: "Low Oil Absorption & Optimized Rheology", description: "Low oil absorption reduces binder demand for mineral wetting and supports efficient resin utilization, smooth flow, leveling, brushability, sag control and higher solids loading, contributing to economical high-performance coatings." },
          { icon: Sparkles, title: "Superior Dispersion & Smooth Surface Finish", description: "Precisely micronized particles disperse rapidly and uniformly in water based and solvent based coating systems, minimizing agglomeration and surface defects while promoting smooth film formation, consistent texture and superior finish quality." },
          { icon: ShieldCheck, title: "Enhanced Scrub & Abrasion Resistance", description: "Controlled particle size and uniform packing within the coating matrix contribute to improved film hardness, wet-scrub resistance, surface abrasion resistance and mechanical wear resistance, supporting durable interior and decorative coatings." },
          { icon: ShieldCheck, title: "Improved Film Durability & Weather Stability", description: "High purity, fine particle size, and uniform distribution help strengthen film integrity and dimensional stability, supporting resistance to cracking, abrasion, moisture, UV exposure, temperature fluctuations and weathering." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & Consistent Performance", description: "Advanced micronization and air classification provide a tightly controlled particle size distribution (PSD) for consistent dispersion, oil absorption, rheology, pigment-extender balance, color development, film formation and reliable batch-to-batch performance." },
          { icon: DollarSign, title: "Cost-Effective & Versatile Formulation", description: "Premium Calcite Powder functions as a high-performance mineral filler and functional extender, helping optimize pigment and binder usage while reducing formulation costs. It is suitable for emulsion paints, primers, wall putties, textured paints, decorative coatings and industrial coatings." },
        ],
      },
      {
        title: "Paper Industry",
        image: "https://knnindia.co.in/uploads/newsfiles/Paper-Industry.jpg",
        points: [
          { icon: Sun, title: "High Brightness & Excellent Whiteness", description: "High brightness, whiteness and light reflectance enhance the optical appearance, sheet uniformity and print quality of paper and paperboard, making it suitable for printing, writing, coated and graphic papers." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & Optimized PSD", description: "Precisely controlled particle size and narrow particle size distribution (PSD) promote uniform filler dispersion, efficient light scattering, consistent sheet formation and improved filler utilization, while supporting smoothness and printability." },
          { icon: ShieldCheck, title: "High CaCO₃ Purity & Low Impurities", description: "High-purity Calcium Carbonate (CaCO₃) with controlled levels of silica, iron oxides and soluble impurities supports consistent brightness, whiteness, opacity, optical uniformity and process stability." },
          { icon: Layers, title: "Superior Opacity & Light-Scattering Performance", description: "Optimized particle size and morphology provide effective light scattering and opacity, helping reduce show-through and light transmission while producing brighter, more opaque sheets with improved print quality." },
          { icon: Sparkles, title: "Excellent Dispersion & Filler Retention", description: "Good dispersion and effective retention within the fiber network promote uniform filler distribution, improved sheet formation, brightness, opacity, surface smoothness and printability, while maximizing filler utilization." },
          { icon: Wrench, title: "Low Abrasion & Equipment-Friendly Performance", description: "Calcite's low abrasiveness helps minimize wear on paper-processing equipment, supporting longer equipment life, lower maintenance requirements, reduced downtime and improved operational efficiency." },
          { icon: Droplet, title: "Neutral & Alkaline System Compatibility with Low Moisture", description: "Excellent compatibility with neutral and alkaline papermaking systems, with low moisture supporting free flowing handling, efficient conveying, consistent slurry preparation, reduced agglomeration and improved storage stability." },
          { icon: DollarSign, title: "Cost-Effective Filler & Improved Production Economics", description: "Efficient filler loading enables partial fiber replacement, reducing raw material costs while maintaining brightness, opacity, smoothness and printability, with high purity, controlled PSD, dispersion and retention improving filler utilization and process efficiency." },
        ],
      },
      {
        title: "Plastic & PVC Compound Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: DollarSign, title: "High Performance Functional Filler & Cost Optimization", description: "Premium Calcite Powder (CaCO₃) acts as an efficient functional filler for PVC, PE, PP and masterbatch applications, enabling higher mineral loading, optimized polymer consumption and formulation cost reduction while maintaining consistent processing and product performance." },
          { icon: Sun, title: "High Purity & Superior Whiteness", description: "High-purity CaCO₃ with a low impurity profile and superior brightness provides a clean, consistent mineral matrix that supports stable processing and reliable fusion while enhancing whiteness, opacity, color clarity and overall product appearance. It can also help optimize TiO₂ usage in white and light colored formulations." },
          { icon: ShieldCheck, title: "Enhanced Strength, Rigidity & Dimensional Stability", description: "Precisely processed Calcite improves rigidity, flexural strength, tensile stiffness and dimensional stability, while helping reduce shrinkage, warpage and deformation during extrusion and injection molding for stronger, more dimensionally accurate products." },
          { icon: Sparkles, title: "Excellent Dispersion & Processing Stability", description: "Advanced micron grinding and controlled particle size promote uniform dispersion with minimal agglomeration throughout the polymer matrix. This supports consistent compounding, smoother extrusion, improved melt flow, superior surface finish and stable high-speed processing." },
          { icon: Droplet, title: "Low Oil Absorption & Higher Filler Efficiency", description: "Low oil absorption enables efficient wetting of Calcite by polymer resin and plasticizers, supporting higher filler loading, efficient resin utilization, stable melt viscosity and smoother extrusion for cost-effective PVC, PE and PP compounds." },
          { icon: Layers, title: "Superior Surface Finish & Product Appearance", description: "Ultra-fine Calcite with a controlled particle size distribution helps deliver smoother surfaces, enhanced gloss, improved opacity and uniform texture while minimizing surface imperfections, flow marks and roughness in extruded and injection-molded products." },
          { icon: Boxes, title: "Wide Application Versatility", description: "Premium Calcite Powder is suitable for PVC pipes and fittings, plastic compounds, PE/PP compounds, automotive components, plastic furniture, films, woven sacks, packaging materials, cables, sheets, profiles and engineered polymer products." },
        ],
      },
      {
        title: "Rubber & Elastomer Industry",
        image: "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp",
        points: [
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "A well-defined particle-size distribution (PSD) promotes uniform filler dispersion, efficient packing, mixing consistency and stable processing. Controlled particle size helps minimize coarse particles, supporting consistent hardness, stiffness, tear strength, surface finish and dimensional stability." },
          { icon: ShieldCheck, title: "High Purity, Low Moisture & Consistent Mineral Quality", description: "High purity CaCO₃ with controlled impurities and low moisture provides consistent filler behaviour and reliable dispersion during compounding. Controlled surface chemistry, bulk density and particle characteristics help minimize agglomeration, processing variation and surface defects while maintaining batch-to-batch consistency." },
          { icon: Thermometer, title: "Consistent Compound Rheology & Thermal Stability", description: "Controlled particle size, PSD, surface properties and moisture help maintain consistent compound viscosity, rheology and processing behaviour during mixing, extrusion and molding. Calcite's thermal stability also supports stable processing and dimensional consistency under elevated-temperature conditions." },
          { icon: Gem, title: "Controlled Hardness, Stiffness & Dimensional Stability", description: "Precisely engineered calcite can contribute to controlled hardness, stiffness, modulus and load-bearing properties in suitable elastomer formulations. Optimized particle size and filler loading support shape retention, dimensional stability, reduced shrinkage and abrasion resistance, helping achieve a balanced combination of strength and durability." },
          { icon: Droplet, title: "Low & Controlled Oil Absorption", description: "Controlled oil absorption and specific surface area help manage plasticizer and process-oil requirements during rubber compounding. A well-balanced calcite grade can support higher filler loading, manageable viscosity, good processability and uniform dispersion, helping optimize formulation economics." },
          { icon: DollarSign, title: "Cost Optimized Filler Loading", description: "Premium calcite provides a cost effective mineral filler that can partially replace higher-cost polymers or other fillers in suitable formulations. Consistent purity, PSD and dispersion help achieve targeted physical properties while improving formulation economics without compromising processing consistency." },
          { icon: Boxes, title: "Versatile Applications Across Rubber & Elastomer Products", description: "Calcite powder is used as a mineral filler in a wide range of rubber and elastomer products, including sheets and mats, flooring and tiles, conveyor belts, hoses, gaskets, seals, profiles, cable compounds, footwear soles, automotive rubber components, molded rubber products, synthetic leather and industrial rubber goods." },
        ],
      },
      {
        title: "Adhesives and Sealants Industry",
        image: "https://parsonadhesives.in/wp-content/uploads/2023/10/505813c81f.jpeg",
        points: [
          { icon: FlaskConical, title: "High Purity & Controlled Chemical Composition", description: "Premium calcite with high CaCO₃ purity, low inert impurities and consistent chemical composition supports formulation stability and compatibility across acrylic, PVA, EVA, polyurethane, silicone and hybrid adhesive/sealant systems. Controlled impurities help minimize unwanted interactions and maintain consistent processing and performance." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "A fine and uniform particle size distribution promotes efficient dispersion, high packing density and a more homogeneous filler polymer matrix. Controlled PSD supports consistent viscosity, processing behaviour, surface finish and mechanical performance while minimizing coarse particles and grit." },
          { icon: Sun, title: "High Brightness & Whiteness", description: "High brightness & whiteness provides a clean, bright and consistent appearance in suitable adhesive and sealant formulations. It can also support pigment extension and optimized TiO₂ utilization where colour and opacity requirements permit." },
          { icon: Droplet, title: "Low Moisture & Controlled Moisture Adsorption", description: "Low moisture and controlled moisture adsorption help reduce premature curing, bubble formation and formulation instability in moisture sensitive PU, silicone and hybrid/STP sealants, while supporting predictable viscosity and storage stability." },
          { icon: Waves, title: "Optimized Rheology, Viscosity & Anti-Sag Performance", description: "Engineered particle size, PSD, surface area and applicable surface treatment help optimize viscosity and rheology, enabling smooth processing, easy dispensing, shear-thinning behaviour and improved sag/slump resistance." },
          { icon: Droplet, title: "Low & Controlled Oil Absorption", description: "Low and controlled oil and binder absorption reduces the amount of binder required to wet the mineral surface, supporting higher filler loading, predictable viscosity, efficient dispersion and smoother processing. This can contribute to improved formulation efficiency and lower overall material costs." },
          { icon: DollarSign, title: "Cost-Effective Filler & Formulation Optimization", description: "Premium calcite enables partial replacement of higher-cost polymers and resins, allowing manufacturers to optimize filler loading and improve formulation economics. Its controlled particle characteristics support efficient incorporation without unnecessarily compromising essential product performance." },
        ],
      },
      {
        title: "Construction Product & Chemicals Industry",
        image: "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb",
        points: [
          { icon: Waves, title: "Optimized Rheology, Flow & Workability", description: "Precisely controlled particle size and PSD optimize fine-particle packing and rheological balance, helping control yield stress, plastic viscosity, flowability and sag resistance for smooth application and consistent workability in tile adhesives, grouts, skim coats, plasters and repair mortars." },
          { icon: ShieldCheck, title: "Dimensional Stability & Shrinkage Control", description: "Precisely graded calcite improves particle packing and reduces shrinkage prone binder paste volume, while its rigid mineral structure helps minimize dimensional changes, shrinkage stresses, cracking and surface defects in properly formulated cementitious and polymer-modified systems." },
          { icon: Sun, title: "High Purity & Superior Whiteness", description: "High-purity natural Calcium Carbonate (CaCO₃) with excellent whiteness, brightness and low impurities provides a clean, color-consistent filler, enhancing appearance, opacity and surface smoothness in wall putty, tile adhesives, grouts, skim coats and decorative cement products." },
          { icon: Droplet, title: "Controlled Particle Size & Low Oil Absorption", description: "A narrow particle size distribution and low oil absorption promote efficient wetting, dispersion and filler distribution, helping optimize polymer/resin demand, maintain viscosity and higher filler loading in construction chemicals, adhesives, sealants and coatings." },
          { icon: FlaskConical, title: "Chemical Stability & Formulation Compatibility", description: "Calcite is chemically inert and compatible with alkaline cementitious, water-based and polymer-modified systems. Premium Calcite Powder minimizes undesirable interactions and supports formulation stability, long-term durability and consistent performance in construction chemicals and dry-mix products." },
          { icon: DollarSign, title: "Cost-Effective Functional Filler", description: "Premium Calcite Powder enables efficient filler loading while maintaining mechanical strength, surface quality and dimensional stability. Its high purity, controlled PSD and good dispersion can reduce binder/cement demand, optimize raw-material utilization and improve production economics." },
        ],
      },
    ],
  },
  "dolomite-powder": {
    name: "Dolomite Powder",
    sections: [
      {
        title: "Paint, Coating & Wall Putty Industry",
        image: paintCoatingImage,
        points: [
          { icon: Sun, title: "High Purity, Whiteness & Colour Consistency", description: "High purity dolomite with excellent whiteness and tightly controlled iron and other impurities provides a clean mineral base for uniform colour development, brightness and consistent finished appearance. Its extender properties can also help optimize TiO₂ usage and formulation cost." },
          { icon: Droplet, title: "Low & Controlled Oil Absorption", description: "Premium Dolomite Powder with low and consistently controlled oil absorption promotes efficient binder wetting and uniform particle dispersion, helping formulators achieve an effective balance between filler loading, binder demand, and formulation viscosity. This supports smooth processing, efficient binder utilization, formulation flexibility, and consistent performance in paints, coatings, and wall putty." },
          { icon: ShieldCheck, title: "Hardness, Scrub Resistance & Surface Durability", description: "With a typical Mohs hardness of approximately 3.5–4.0, properly processed dolomite can contribute to surface hardness, abrasion resistance and mechanical durability in formulated products such as paints, coatings and wall putties. Its controlled particle size and good dispersion can help create a dense, well-packed filler structure, supporting improved scrub resistance, washability, surface wear resistance and longer service life when properly balanced with the binder system." },
          { icon: Layers, title: "Dimensional Stability & Crack-Resistance Support", description: "Its carbonate composition and alkaline character make it compatible with cementitious systems, lime plasters and dry-mix mortars. Controlled particle size and efficient packing support dimensional stability, reduced shrinkage and reduced risk of micro flaking, peeling and hairline cracking." },
          { icon: Sparkles, title: "Excellent Dispersion, Rheology & Smooth Finish", description: "Uniformly micronized and classified dolomite promotes consistent dispersion and efficient particle packing, supporting controlled rheology, workability and sag resistance. Optimized particle size also improves smooth filling, uniform finished surface." },
          { icon: CloudRain, title: "Weathering & Exterior Surface Durability", description: "The calcium & magnesium carbonate composition, chemical stability and mineral hardness of dolomite can support weathering resistance, surface durability and wear resistance in suitably formulated exterior paints, coatings and wall putty." },
          { icon: FlaskConical, title: "Support for Corrosion-Protection Performance", description: "Dolomite's alkaline mineral character and stable carbonate composition can support corrosion-protection performance in selected coating formulations, particularly where controlled filler chemistry and durable surface properties are required." },
        ],
      },
      {
        title: "Iron & Steel Metallurgy Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIasWdt9AwAjORhjiaTPtXswFPuurmTQR9A&s",
        points: [
          { icon: Flame, title: "High CaO & MgO Content for Basic Slag Formation", description: "Premium Metallurgical Dolomite provides a consistent source of CaO and MgO, supporting essential basic oxide for slag formation and basicity control during steelmaking. Its MgO contribution helps maintain the desired slag composition and refractory compatibility, promoting stable furnace operation." },
          { icon: ShieldCheck, title: "Consistent Chemistry & Low Impurity Profile", description: "Controlled CaO & MgO chemistry with low SiO₂, Fe₂O₃, Al₂O₃ and other impurities helps minimize unwanted slag additions, supporting predictable metallurgical reactions, controlled slag chemistry and consistent steelmaking performance." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size", description: "Premium dolomite powder is carefully milled and classified to achieve consistent particle size, ensuring smooth feeding, easy handling and predictable reaction during metallurgical processing. The controlled particle size promotes efficient calcination, better material utilization and uniform interaction with slag, while helping reduce dust losses and unreacted material for more stable furnace operation." },
          { icon: Thermometer, title: "High-Temperature Refractory Stability", description: "High-purity calcined and dead-burned dolomite offers excellent resistance to high temperatures, slags and chemical attack. Its high CaO–MgO content and dense structure make it suitable for producing doloma refractory bricks, ramming masses and fettling materials used in steelmaking furnaces, vessels and ladles, where materials must withstand extreme heat, slag corrosion and mechanical wear." },
          { icon: Recycle, title: "Controlled Calcination & Reactivity", description: "Consistent Dolomite quality enables uniform thermal decomposition into reactive CaO and MgO. Controlled calcination supports predictable reactivity, efficient conversion and consistent slag formation, contributing to stable steelmaking operations." },
        ],
      },
      {
        title: "Construction Material & Product Industry",
        image: "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb",
        points: [
          { icon: FlaskConical, title: "High Purity & Consistent Chemistry", description: "Premium dolomite powder provides a consistent CaMg(CO₃)₂ composition with controlled silica, iron oxides, clay and other impurities, supporting predictable formulation behavior and consistent performance in dry-mix mortars, concrete-related formulations, plaster, tile adhesives, grouts, wall putty and skim coats." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size", description: "A well controlled particle size promotes efficient packing among cement, sand and other mineral components, helping reduce internal voids, improve matrix uniformity and enhance mix consistency. Optimized fineness can also support better surface finish and formulation efficiency." },
          { icon: Waves, title: "Controlled Workability, Flow & Rheology", description: "Optimized particle size, fineness, particle shape and density help improve mix consistency, flow, workability and stability, supporting easier mixing, pumping, spreading and finishing while minimizing bleeding and segregation, suitable for concrete, repair mortars and other cement based formulations." },
          { icon: Layers, title: "Improved Microstructure & Mechanical Strength", description: "Fine dolomite particles provide micro-filling and improved particle packing, contributing to a denser cementitious matrix and a stronger interfacial transition zone (ITZ), which can support improved compressive, flexural and tensile strength when properly formulated." },
          { icon: ShieldCheck, title: "Refined Pore Structure & Enhanced Durability", description: "Effective micro filling helps refine pore structure and reduce interconnected capillary voids, lowering water absorption and fluid permeability and supporting better resistance to moisture and other aggressive agents, improving durability and long term performance of construction materials." },
          { icon: Sun, title: "High Whiteness, Filler Efficiency & Cost Optimization", description: "High-whiteness, low-impurity dolomite acts as an efficient mineral filler in wall putty, dry-mix mortars, plaster, grouts and selected coatings, supporting good surface finish, consistent quality and formulation cost optimization." },
        ],
      },
      {
        title: "Plastic, Polymer & PVC Compound Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Diamond, title: "Enhanced Stiffness, Hardness & Dimensional Stability", description: "Premium dolomite's rigid mineral structure and Mohs hardness of 3.5–4.0 enhances stiffness, flexural rigidity, hardness and scratch resistance in properly formulated plastic and PVC compounds. It also helps reduce shrinkage, thermal expansion, deformation and warping in rigid PVC and polymer products." },
          { icon: Thermometer, title: "Improved Thermal Stability & Heat Resistance", description: "Premium dolomite's Calcium Magnesium carbonate composition supports improved thermal stability, heat resistance and dimensional stability in properly formulated PVC and polymer compounds. Its endothermic decomposition absorbs heat and releases CO₂, helping moderate heat build-up and improve thermal performance in pipes, cable compounds, profiles and technical polymer products." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & Superior Dispersion", description: "A fine and consistent particle size promotes uniform dispersion in PVC, PP, PE and other polymer matrices. Controlled particle size minimizes agglomeration and coarse particles while supporting smooth processing, consistent filler distribution and improved surface finish." },
          { icon: FlaskConical, title: "High Purity & Controlled Ca–Mg Carbonate Composition", description: "Premium Dolomite with high carbonate purity and controlled levels of SiO₂, Fe₂O₃, Al₂O₃, moisture and other impurities provides consistent filler quality and reliable compounding performance. Its natural CaMg(CO₃)₂ composition helps improve rigidity, hardness, dimensional stability and thermal performance, while controlled purity supports stable processing and reduces the risk of thermal degradation during high-temperature extrusion." },
          { icon: Droplet, title: "Low Moisture & Improved Polymer Compatibility", description: "Premium Dolomite with low and controlled moisture content supports consistent compounding, smooth processing, and uniform filler dispersion. Surface treated grades offer improved moisture resistance and better compatibility with PVC and polymer matrices, helping reduce moisture-related defects such as voids, pinholes, and surface imperfections in finished products." },
          { icon: DollarSign, title: "Cost-Effective Filler & Resin Optimization", description: "Premium dolomite provides an economical mineral filler that can partially replace higher-cost resin or other fillers, helping optimize formulation cost while maintaining stiffness, hardness, dimensional stability and appearance at properly controlled filler loading." },
        ],
      },
      {
        title: "Glass Industry",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          { icon: Beaker, title: "Precisely Balanced CaO & MgO Chemistry", description: "Premium Dolomite provides a consistent source of CaO and MgO, supporting accurate batch formulation, uniform glass composition. During heating, dolomite decomposes and releases these oxides into the glass melt, supporting glass stability, durability and controlled melt properties. Its balanced oxide contribution can also simplify raw material handling and formulation." },
          { icon: Thermometer, title: "Controlled Melt Viscosity & High Temperature Processing", description: "Dolomite derived CaO and MgO act as network modifying oxides in silicate glass, helping control the viscosity and flow behaviour of the glass melt. This supports smooth melting, refining, forming and consistent high-temperature processing." },
          { icon: SlidersHorizontal, title: "Devitrification Control & Liquidus Optimization", description: "The MgO and CaO contribution influences liquidus temperature and crystallization behaviour of the glass melt, helping control unwanted crystal formation when properly balanced within the glass composition. This supports melt homogeneity, clarity and consistent glass quality." },
          { icon: Sparkles, title: "Ultra-Low Iron & Controlled Impurities", description: "Glass-grade Dolomite with low Fe₂O₃ and controlled impurities helps minimize unwanted coloration and light absorption in glass melt. This supports high optical transmission, colour consistency and clarity, especially in automotive, solar and high transmission glass applications." },
          { icon: ShieldCheck, title: "Enhanced Chemical & Environmental Durability", description: "Dolomite derived CaO and MgO contribute to the chemical durability of glass, helping improve resistance to moisture, aqueous chemicals and environmental weathering. This supports greater long-term stability and service life when properly balanced within the overall glass formulation." },
          { icon: Boxes, title: "Suitable for Diverse Glass Applications", description: "Premium Dolomite is suitable for a wide range of glass manufacturing applications, including float glass, container glass, architectural glass, automotive glass, solar glass, pharmaceutical glass, tableware, fiberglass, and specialty glass." },
        ],
      },
      {
        title: "Ceramic Industry",
        image: "https://b2bindustry.net/wp-content/uploads/ceramics-industry.jpg",
        points: [
          { icon: Beaker, title: "Balanced CaO–MgO Contribution", description: "Premium Dolomite provides a consistent, naturally balanced source of CaO and MgO during firing. It helps manufacturers control ceramic body and glaze chemistry, maintain proper formulation and reduce the need for separate calcium and magnesium bearing raw materials." },
          { icon: Flame, title: "Controlled Fluxing & Sintering Performance", description: "The CaO and MgO from Dolomite act as fluxing components during firing, supporting controlled melt formation, sintering, vitrification and densification within the ceramic body. Proper formulation can also help optimize firing behaviour and energy efficiency." },
          { icon: Recycle, title: "Predictable Thermal Decomposition & Firing Reactivity", description: "With consistent mineralogy, controlled particle size and low impurities, Dolomite decomposes predictably, releasing CO₂ and forming reactive CaO and MgO. This supports uniform reactions and controlled gas release, helping minimize pinholes, blisters and other firing defects." },
          { icon: Sun, title: "High Whiteness & Low Fe₂O₃ Content", description: "High whiteness, ceramic grade Dolomite with low Fe₂O₃, TiO₂ and other colouring impurities helps minimize unwanted coloration, supporting a cleaner fired appearance, better colour consistency and white bodied ceramic and sanitaryware production." },
          { icon: Layers, title: "Controlled Phase Formation & Microstructure", description: "During firing, CaO and MgO react with SiO₂, Al₂O₃ and other ceramic materials to form phases such as anorthite, diopside and akermanite, depending on formulation and firing conditions. Controlled chemistry and particle size promote uniform microstructure, dimensional stability and reliable fired-body performance." },
          { icon: Thermometer, title: "Controlled Thermal Expansion & Glaze Fit", description: "The CaO & MgO contribution influences the thermal expansion behaviour of ceramic bodies and glazes. Properly balanced Dolomite helps improve body glaze compatibility and dimensional stability, reducing the risk of crazing and shivering during firing and cooling." },
          { icon: Boxes, title: "Wide Ceramic Manufacturing Applications", description: "Premium Dolomite is suitable for ceramic tiles, wall and floor tiles, sanitaryware, tableware, electrical ceramics, ceramic bodies, glazes and selected refractory applications, where controlled CaO & MgO chemistry, whiteness, particle size and reliable firing behaviour are required." },
        ],
      },
      {
        title: "Agriculture Industry",
        image: "https://images.stockcake.com/public/8/c/7/8c7936bc-2068-4f27-8387-6b7e617c6b8c_large/agriculture-meets-industry-stockcake.jpg",
        points: [
          { icon: Sprout, title: "Balanced Calcium & Magnesium Nutrient Source", description: "Premium dolomite provides Calcium (Ca) and Magnesium (Mg) in carbonate form, supporting cell-wall development, chlorophyll formation, photosynthesis and enzyme activity. It is suitable for fertilizers, soil amendments and crop-nutrition products." },
          { icon: FlaskConical, title: "Effective Soil Acidity Neutralization & pH Management", description: "Premium dolomite powder contains Calcium and Magnesium carbonates that neutralize soil acidity and help raise acidic-soil pH toward a more suitable range. By reducing excessive acidity, it creates a more favorable root-zone environment and can improve the availability of several essential plant nutrients while supporting more efficient nutrient utilization and healthier soil conditions." },
          { icon: ShieldCheck, title: "High Purity & Consistent Quality", description: "High purity dolomite with a consistent CaCO₃–MgCO₃ composition, controlled moisture and low undesirable impurities ensures reliable blending, smooth processing, formulation accuracy and consistent performance in fertilizer, soil-amendment and other agricultural products." },
          { icon: DollarSign, title: "Improved Nutrient Availability & Fertilizer Efficiency", description: "Premium dolomite helps correct excessive soil acidity and optimize root-zone pH, creating more favorable conditions for the availability and uptake of essential nutrients, including nitrogen (N), phosphorus (P) and potassium (K). By improving the soil chemical environment, it can enhance nutrient-use efficiency and fertilizer effectiveness, particularly in acidic soils where nutrient availability is restricted." },
          { icon: SlidersHorizontal, title: "Controlled Fine Particle Size for Faster & Uniform Reaction", description: "Precisely controlled fine particle size provides greater reactive surface area, promoting faster and more uniform interaction with acidic soils and consistent performance in fertilizer blends and soil-amendment formulations." },
        ],
      },
      {
        title: "Animal Nutrition Industry",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
        points: [
          { icon: PawPrint, title: "Balanced Calcium & Magnesium Contribution", description: "Premium feed-grade dolomite provides a natural and consistent source of calcium (Ca) and magnesium (Mg) in carbonate form for animal feeds, mineral mixtures and feed supplements. Calcium supports bone strength, skeletal development, teeth formation and muscle function, while magnesium contributes to bone mineralization and normal protein, carbohydrate and lipid metabolism." },
          { icon: Waves, title: "Rumen Buffering & pH Stability", description: "As a natural calcium–magnesium carbonate (CaMg(CO₃)₂), dolomite provides acid-neutralizing and buffering capacity in appropriately formulated ruminant diets. It can help moderate dietary acid load and maintain more stable ruminal pH, supporting a favourable environment for normal microbial fermentation and feed utilization." },
          { icon: ShieldCheck, title: "High Purity & Consistent Mineral Composition", description: "Premium feed-grade dolomite offers a controlled calcium–magnesium composition with low levels of unwanted impurities, helping feed manufacturers achieve accurate mineral formulation, uniform feed quality and consistent batch-to-batch performance." },
          { icon: Boxes, title: "Feed Processing & Handling Performance", description: "Premium dolomite provides calcium and magnesium while, in suitable feed-grade formulations, it can also support better flow, handling and resistance to caking of feed and mineral mixtures. Its effectiveness depends on purity, particle size, processing quality and the specific formulation." },
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp",
        points: [
          { icon: Diamond, title: "Enhanced Hardness, Stiffness & Modulus", description: "Precisely processed Dolomite can increase hardness, stiffness and modulus in properly formulated rubber compounds, supporting consistent mechanical performance. Fine, uniformly distributed particles promote better filler rubber interaction and dispersion, helping manufacturers achieve more consistent compound properties." },
          { icon: ShieldCheck, title: "Improved Dimensional Stability & Compression Performance", description: "The rigid mineral particles in Dolomite can help reduce deformation under load and improve hardness, stiffness and dimensional stability when used at an appropriate loading level. In properly formulated rubber compounds, this can support better compression performance and shape retention in molded products and other filled rubber applications." },
          { icon: SlidersHorizontal, title: "Controlled Hardness, Stiffness & Surface Finish", description: "Controlled Dolomite particle size, morphology and loading allow manufacturers to fine tune hardness, stiffness, density and surface characteristics while maintaining the required balance of flexibility and mechanical performance. Proper formulation is essential to avoid excessive filler loading and particle agglomeration." },
          { icon: Sparkles, title: "Fine Particle Size for Better Dispersion & Processing", description: "A fine, consistent particle size, low moisture and controlled surface characteristics promote more uniform dispersion throughout the rubber matrix. This supports consistent mixing and compound quality and can improve the reliability of extrusion, calendaring and molding operations." },
          { icon: Thermometer, title: "Thermal Stability & Controlled Cure Behaviour", description: "Dolomite provides good thermal stability under typical rubber processing conditions and can influence scorch safety and curing behaviour depending on its particle size, surface characteristics, loading and the overall vulcanization system. Properly selected and consistently processed grades support stable compounding, predictable curing and consistent vulcanized-rubber performance." },
          { icon: DollarSign, title: "Cost-Effective Filler & Formulation Optimization", description: "Dolomite provides an economical source of mineral filler that can partially replace higher cost formulation ingredients while helping control hardness, stiffness, density and overall compound cost. Controlled particle size and oil absorption further support efficient dispersion and processing." },
          { icon: Boxes, title: "Key Rubber Manufacturing Applications", description: "Suitable for automotive rubber components, conveyor belts, hoses, sheets, footwear soles, gaskets, seals, floor mats, cable compounds, molded rubber products and various industrial rubber goods." },
        ],
      },
    ],
  },
  "dolomite-grits": {
    name: "Dolomite Grits",
    sections: [
      {
        title: "Steel & Metallurgy Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIasWdt9AwAjORhjiaTPtXswFPuurmTQR9A&s",
        points: [
          { icon: Flame, title: "Basic Flux for Slag Chemistry", description: "Dolomite acts as a basic flux, supplying CaO and MgO during high-temperature processing. These basic oxides help control slag basicity, support slag formation, and facilitate impurity removal during steelmaking." },
          { icon: SlidersHorizontal, title: "Controlled Grit Size & Consistent Charging", description: "Precisely graded Dolomite Grits provide uniform particle size and predictable charging, supporting consistent reactions, slag formation, and stable furnace operation." },
          { icon: ShieldCheck, title: "High Purity & Controlled Impurities", description: "High-purity Dolomite with controlled levels of SiO₂, Al₂O₃, sulfur, and phosphorus helps maintain consistent slag chemistry, minimize unwanted constituents, and ensure reliable flux performance." },
          { icon: Droplet, title: "Low & Controlled Moisture", description: "Low moisture improves storage, handling, flowability, and consistent charging while reducing material sticking and unwanted moisture input. It also supports accurate grit weight and chemical dosing." },
          { icon: Beaker, title: "MgO for Slag & Refractory Compatibility", description: "Dolomite supplies MgO to the slag, helping maintain suitable MgO levels and reducing dissolution of MgO-based refractory linings into MgO-deficient slag, thereby supporting improved lining protection." },
          { icon: Gauge, title: "Consistent Quality & Reliable Flux Performance", description: "Consistent chemical composition, grit size, moisture, and impurity levels provide predictable flux addition and reaction behaviour, supporting reliable metallurgical performance from batch to batch." },
          { icon: DollarSign, title: "Efficient Flux Utilization & Cost Optimization", description: "Dolomite Grits provide CaO and MgO in a readily usable form, supporting efficient flux utilization, optimized flux consumption, and improved overall steelmaking process economics." },
        ],
      },
      {
        title: "Construction & Building Materials Industry",
        image: "https://www.colliers.com/-/media/images/colliers/asia/india/1536x1040_08022024.ashx?bid=f4a70a56b86f4e79bf7fe4d4234900cb",
        points: [
          { icon: Diamond, title: "High Hardness & Mechanical Durability", description: "With a Mohs hardness of approximately 3.5–4.0, Dolomite Grits provide a hard, dense and mechanically durable mineral aggregate for concrete, precast products, screeds, mortars and other construction materials requiring resistance to mechanical wear." },
          { icon: SlidersHorizontal, title: "Controlled Grading for Efficient Particle Packing", description: "Precisely graded Dolomite Grits improve particle packing and void filling, helping create a more compact structure and potentially reduce binder demand in properly designed formulations." },
          { icon: Hammer, title: "Angular Shape & Effective Mechanical Interlock", description: "Crushed Dolomite Grits with angular, rough-textured surfaces provide effective mechanical interlocking and load transfer, supporting aggregate stability and cohesive construction-material structures." },
          { icon: Scale, title: "High Mineral Density & Efficient Proportioning", description: "With a typical specific gravity of approximately 2.8–2.9, Dolomite Grits provide a dense mineral aggregate for efficient aggregate proportioning and compact particle structures. Specific gravity also supports absolute-volume mix design and void assessment." },
          { icon: FlaskConical, title: "Consistent Carbonate Mineral Composition", description: "Primarily composed of calcium magnesium carbonate [CaMg(CO₃)₂], Dolomite Grits provide a consistent carbonate mineral component for suitable construction and building-material formulations." },
          { icon: ShieldCheck, title: "Good Durability & Environmental Resistance", description: "Produced from durable dolomite rock, properly selected Grits offer good resistance to weathering, abrasion, handling and normal service exposure, with performance depending on rock quality, porosity, water absorption and particle strength." },
          { icon: Gauge, title: "Controlled Quality for Consistent Performance", description: "Controlled chemical composition, particle-size distribution, moisture, absorption and impurity levels support predictable batching, uniform mixing, efficient packing, consistent workability and controlled water demand." },
        ],
      },
      {
        title: "Ceramic & Sanitaryware Industry",
        image: "https://b2bindustry.net/wp-content/uploads/ceramics-industry.jpg",
        points: [
          { icon: Beaker, title: "Balanced CaO–MgO Contribution", description: "Dolomite provides Calcium and Magnesium, which convert to CaO and MgO during firing, supporting balanced formulation chemistry and predictable firing behaviour in ceramic bodies and glazes." },
          { icon: Flame, title: "Fluxing, Sintering & Densification Support", description: "The resulting CaO and MgO act as alkaline-earth fluxing components, supporting sintering, vitrification and densification while contributing to desired fired density, strength and microstructure." },
          { icon: Recycle, title: "Controlled Thermal Decomposition & Gas Release", description: "During firing, CaMg(CO₃)₂ decomposes into CaO and MgO with CO₂ release. Controlled particle size and formulation help promote uniform gas release and minimize risks of excessive porosity, bloating and pinholing." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size", description: "Uniformly graded Dolomite Grits provide consistent particle distribution and packing, supporting predictable reaction behaviour, permeability, sintering and microstructure development during firing." },
          { icon: Sun, title: "High Brightness & Low Colouring Impurities", description: "High-brightness Dolomite with controlled Fe₂O₃, TiO₂ and other colouring impurities supports brightness, colour consistency and a cleaner appearance in white ceramic bodies and sanitaryware." },
          { icon: FlaskConical, title: "Consistent Chemical Composition & Batch Control", description: "Controlled CaMg(CO₃)₂, CaO, MgO, SiO₂, Al₂O₃ and Fe₂O₃ levels support consistent batch formulation, predictable firing behaviour and repeatable finished-product properties." },
        ],
      },
      {
        title: "Glass Industry",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          { icon: Beaker, title: "Balanced CaO–MgO Contribution", description: "Dolomite provides CaO and MgO during melting, helping maintain the required glass composition, chemical stability and physical properties. Its combined contribution enables efficient adjustment of the glass batch chemistry." },
          { icon: Waves, title: "Controlled MgO for Melt & Glass Properties", description: "The MgO contribution influences melt viscosity, liquidus behaviour and crystallization tendency. Properly controlled MgO supports the desired melt flow, working viscosity and forming characteristics." },
          { icon: Sparkles, title: "Low Iron & Controlled Impurity Profile", description: "High-purity Dolomite with controlled Fe₂O₃, SiO₂, Al₂O₃ and other colouring impurities helps minimize unwanted coloration and supports consistent colour, clarity and optical quality, especially in clear and high-transmission glass." },
          { icon: Gauge, title: "Consistent Chemical & Physical Quality", description: "Consistent CaO/MgO chemistry, particle-size distribution, moisture and impurity levels support accurate batch preparation, predictable melting behaviour and batch-to-batch uniformity in glass production." },
          { icon: Recycle, title: "Predictable Thermal Decomposition", description: "During heating, CaMg(CO₃)₂ decomposes to CaO and MgO with the release of CO₂. Consistent composition and particle characteristics help provide predictable CO₂ release and CaO/MgO formation during melting." },
          { icon: SlidersHorizontal, title: "Controlled Grit Size for Batch Uniformity", description: "Uniformly screened Dolomite Grits with a controlled particle-size distribution and minimal excessive fines promote homogeneous batch mixing and predictable melting. Proper particle-size matching also helps reduce segregation." },
          { icon: Thermometer, title: "Low Decrepitation for Furnace Performance", description: "Glass-grade Dolomite with controlled decrepitation helps resist excessive cracking during rapid heating, reducing dust generation and potential furnace deposits and supporting more reliable furnace operation." },
        ],
      },
      {
        title: "Paint & Coating Industry",
        image: paintCoatingImage,
        points: [
          { icon: Sun, title: "High Brightness & Controlled Colour Impurities", description: "High-purity dolomite with high brightness and controlled Fe₂O₃/iron-bearing impurities provides a clean mineral filler for consistent colour, brightness and shade stability in white and light-coloured coatings." },
          { icon: Diamond, title: "Natural Hardness for Scrub & Abrasion Resistance", description: "With a typical Mohs hardness of 3.5–4.0, dolomite can contribute to scrub resistance, abrasion resistance and coating-film durability, especially in architectural and exterior coatings." },
          { icon: Droplet, title: "Low Oil Absorption & Efficient Binder Utilization", description: "Low oil absorption supports efficient filler loading with controlled binder demand, helping optimize Pigment Volume Concentration (PVC), formulation cost, viscosity and coating-film integrity." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size for Texture & Surface Finish", description: "Precisely graded dolomite particles provide control over particle packing, surface texture and finish, making suitable grades available for smooth, semi-matte, textured and decorative coatings." },
          { icon: Layers, title: "Consistent PSD & Good Dispersion", description: "A controlled particle-size distribution (PSD) and consistent particle morphology promote uniform filler dispersion, supporting stable formulation behaviour, consistent application and surface finish." },
          { icon: FlaskConical, title: "Alkaline Mineral Character for Protective Coatings", description: "Dolomite's naturally alkaline, carbonate-based character can support formulation stability in selected protective, primer and exterior coating systems, particularly where resistance to mildly acidic conditions is desired." },
          { icon: CloudRain, title: "Low Moisture & Formulation Stability", description: "Low and controlled moisture content supports reliable filler handling, dispersion and formulation stability, particularly in moisture-sensitive coating systems." },
          { icon: Boxes, title: "Suitable for Textured & Decorative Coatings", description: "Dolomite grits are well suited for textured paints, decorative wall coatings, exterior texture finishes, stone-texture coatings and other surface-finish applications." },
        ],
      },
      {
        title: "Agriculture Industry",
        image: "https://images.stockcake.com/public/8/c/7/8c7936bc-2068-4f27-8387-6b7e617c6b8c_large/agriculture-meets-industry-stockcake.jpg",
        points: [
          { icon: FlaskConical, title: "Effective Soil Acidity Neutralization", description: "Agricultural-grade Dolomite supplies calcium and magnesium carbonates that neutralize soil acidity and help raise soil pH, creating more favourable conditions for plant growth and nutrient availability." },
          { icon: Sprout, title: "Natural Source of Calcium & Magnesium", description: "Dolomite provides calcium (Ca) and magnesium (Mg), essential secondary plant nutrients. Calcium supports cell-wall development and root growth, while magnesium is essential for chlorophyll formation and photosynthesis." },
          { icon: ShieldCheck, title: "Consistent Chemical Quality & Neutralizing Value", description: "High-quality Dolomite offers consistent carbonate composition, controlled Ca and Mg content, reliable neutralizing value, and controlled insoluble matter and undesirable impurities for predictable agronomic performance." },
          { icon: Recycle, title: "Helps Reduce Aluminium & Manganese Availability", description: "By correcting excessive soil acidity, Dolomite can help reduce the availability of potentially toxic aluminium and manganese, supporting healthier root development and nutrient uptake." },
          { icon: DollarSign, title: "Supports Better Nutrient Availability", description: "Maintaining a suitable soil pH with properly applied Dolomite can improve the availability of essential nutrients, including Nitrogen (N), Phosphorus (P), and Potassium (K), particularly in acidic soils." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size for Predictable Soil Reaction", description: "Precisely controlled Dolomite Grit particle size and grading provide consistent handling and soil-contact characteristics. Finer particles offer greater surface area and generally react faster with soil acidity." },
        ],
      },
      {
        title: "Plastic & Polymer Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Diamond, title: "High-Purity Dolomite for Improved Rigidity & Dimensional Stability", description: "High-purity CaMg(CO₃)₂ Dolomite acts as a mineral filler that can improve stiffness, hardness and dimensional stability in suitably formulated polymer compounds. Performance depends on polymer type, filler loading, particle size and surface treatment." },
          { icon: SlidersHorizontal, title: "Controlled Particle Grading for Efficient Filler Loading", description: "Precisely classified Dolomite Grits provide controlled particle size distribution and improved packing, supporting higher filler loading, efficient resin utilization and consistent performance in engineered stone, polymer concrete and resin-bound flooring." },
          { icon: Sun, title: "High Brightness & Low Colouring Impurities", description: "High-brightness Dolomite with controlled Fe₂O₃ and other colouring impurities supports consistent whiteness, colour and visual appearance in white PVC, masterbatch and other light-coloured plastic products." },
          { icon: CloudRain, title: "Controlled Chemistry & Low Moisture for Reliable Processing", description: "Consistent CaMg(CO₃)₂ composition, controlled impurities and low moisture support reliable compounding, extrusion and moulding, while reducing moisture-related bubbles, voids and surface defects." },
          { icon: Droplet, title: "Low & Controlled Oil Absorption for Efficient Filler Loading", description: "Optimized low oil absorption reduces liquid or resin demand for mineral wetting and supports efficient filler loading and suitable compound rheology." },
          { icon: Waves, title: "Surface Treatment for Improved Polymer Compatibility", description: "Stearic-acid or other suitable surface treatments improve Dolomite's polymer compatibility and dispersion, while reducing moisture sensitivity and supporting more efficient filler incorporation into selected polymer systems." },
        ],
      },
    ],
  },
  "quartz-powder": {
    name: "Quartz Powder",
    sections: [
      {
        title: "Engineered Stone / Slab (Countertop) Industry",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359646957/UV/UL/DL/69656835/kitchen-countertop-granite-slab.jpg",
        points: [
          { icon: Gem, title: "High Hardness, Scratch & Abrasion Resistance (~7 Mohs)", description: "Quartz's high hardness contributes to surface hardness, scratch and abrasion resistance in engineered-stone slabs, helping withstand demanding everyday use and maintain long-term surface durability. Its rigid mineral structure also enhances wear resistance and resistance to mechanical surface damage during fabrication and service." },
          { icon: Sun, title: "High Purity, Whiteness & Colour Consistency", description: "High purity quartz with low iron and controlled mineral impurities provides a clean, bright mineral base for uniform colour, consistent appearance and aesthetic quality. Precisely graded particles support uniform dispersion, efficient packing and resin wetting, contributing to a dense, smooth and highly polishable surface." },
          { icon: Layers, title: "Dense Structure & Low Porosity", description: "A well controlled quartz particle size provides efficient particle packing, minimizes interparticle voids and supports matrix densification, helping achieve low porous engineered stone slabs with improved resistance to water penetration, staining and everyday contamination, ensuring long-lasting beauty, durability and easy maintenance." },
          { icon: FlaskConical, title: "Chemical Resistance & Thermal Stability", description: "Quartz offers excellent resistance to household chemicals, acids and cleaning agents under normal service conditions. Its high thermal stability supports durability during processing and normal countertop use, while overall thermal shock performance depends on the complete composite formulation and manufacturing process." },
          { icon: ShieldCheck, title: "Dimensional Stability & Structural Integrity", description: "The rigid mineral framework of quartz contributes to high stiffness, mechanical strength and dimensional stability. Its high mineral content helps limit deformation, maintain slab geometry and structural integrity and support load bearing performance." },
          { icon: Sparkles, title: "Excellent Polishability & Surface Finish", description: "Precise and uniformly graded quartz particles support efficient grinding, calibration and polishing, enabling a smooth, uniform, high gloss decorative surface with consistent gloss, texture and visual appearance while helping minimize surface defects." },
        ],
      },
      {
        title: "Paint & Coating Industry",
        image: paintCoatingImage,
        points: [
          { icon: Gem, title: "High Hardness for Superior Abrasion & Scratch Resistance", description: "Quartz has a Mohs hardness of approximately 7, making it an effective hard mineral filler for improving abrasion, scratch, wear, wet-scrub and burnish resistance for formulated coatings. Its high mineral hardness helps the coating surface resist repeated mechanical contact and everyday wear, making quartz particularly suited for industrial, flooring, architectural and other high-wear coatings." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size for Surface & Gloss Control", description: "Precisely processed quartz with controlled particle size provides uniform packing and dispersion within the coating matrix. Grade selection helps control surface texture, gloss, finish uniformity and coating smoothness, while minimizing coarse particle surface defects." },
          { icon: Sun, title: "Excellent UV Stability & Weatherability", description: "Quartz is UV-stable, chemically inert and resistant to environmental degradation, making it suitable for exterior coatings. It helps maintain surface integrity and coating performance during prolonged exposure to sunlight, moisture and changing weather conditions." },
          { icon: ShieldCheck, title: "Mechanical Durability & Film Performance", description: "Quartz acts as a hard, durable mineral filler that can contribute to coating film hardness, abrasion resistance, dimensional stability and overall mechanical durability. Its controlled particle size provides consistent filler structure and reinforcement within the coating matrix, helping coatings withstand wear, rubbing and demanding service conditions when properly dispersed and formulated." },
          { icon: FlaskConical, title: "High Chemical Inertness for Chemical & Stain Resistance", description: "Quartz offers high chemical inertness and stability, supporting resistance to many chemicals and staining agents. This makes it suitable for industrial, protective and high-performance coating systems exposed to demanding environments." },
          { icon: DollarSign, title: "Formulation Optimization & Cost Efficiency", description: "Quartz Powder acts as a functional mineral filler/extender, helping optimize mineral loading, rheology, surface characteristics and durability. Proper grade selection and loading can also improve formulation consistency and cost efficiency." },
          { icon: Boxes, title: "Versatile Filler for Diverse Coating Applications", description: "Quartz Powder is suitable for architectural and decorative paints, industrial and protective coatings, floor coatings, textured coatings, anti-skid coatings, road-marking coatings and high-wear surface coatings, depending on grade and formulation requirements." },
        ],
      },
      {
        title: "Glass Industry",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          { icon: Beaker, title: "High SiO₂ Purity, Essential Glass Forming Raw Material", description: "Premium Quartz Powder provides a high purity source of SiO₂, the principal glass forming oxide in most commercial glass. Consistent SiO₂ purity supports accurate batch formulation, stable glass chemistry, predictable melting and consistent glass quality." },
          { icon: Sparkles, title: "Ultra Low Iron & Controlled Colouring Impurities", description: "Ultra low Fe₂O₃ with tightly controlled Cr₂O₃, TiO₂ and other colouring impurities helps minimize unwanted green, yellow or brown coloration. This supports high optical clarity, consistent light transmission and uniform colour, especially in clear and high transparency glass." },
          { icon: FlaskConical, title: "Consistent Chemical Composition & Precise Batch Chemistry", description: "Premium Quartz Powder with tightly controlled SiO₂ purity and rigorously managed levels of Al₂O₃, Fe₂O₃, TiO₂, CaO, MgO and alkali oxides provides a consistent silica source for accurate glass batch formulation. This minimizes batch-to-batch variation and supports predictable melting behaviour, glass homogeneity and final-glass quality." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size Distribution for Uniform Melting", description: "Precisely controlled particle size and a consistent Particle Size Distribution (PSD) promote uniform batch mixing, consistent packing and predictable melting and dissolution behaviour. Optimized particle sizing helps minimize excessively coarse particles that may remain unmelted, while controlling excessive fines improves handling, reduces dust generation and supports consistent batch feeding and furnace operation." },
          { icon: ShieldCheck, title: "Low Contamination & Clean Mineral Quality", description: "Properly processed Quartz Powder minimizes clay, mica, feldspar, iron-bearing minerals and other unwanted contaminants that can help reduce the risk of stones, inclusions, colour variation and melting difficulties. Clean mineral quality supports better batch uniformity, stable melting behaviour, improved glass clarity and reliable production performance." },
          { icon: Droplet, title: "Controlled Moisture & Low Loss on Ignition (LOI)", description: "Low and controlled moisture and LOI support accurate batch weighing, stable feeding and predictable furnace behaviour. This helps minimize unwanted gas release, foaming and batch disturbances during furnace operation, contributing to smoother melting and consistent glass quality." },
          { icon: Boxes, title: "Application-Specific Quartz Grades", description: "Quartz grades can be engineered according to required SiO₂ purity, iron level, impurity profile and particle size for applications including float & architectural glass, container glass, automotive glass, fiberglass, tableware and selected specialty glass." },
        ],
      },
      {
        title: "Ceramics & Vitrified Tiles Industry",
        image: "https://b2bindustry.net/wp-content/uploads/ceramics-industry.jpg",
        points: [
          { icon: Beaker, title: "High Purity Silica Source for Controlled Ceramic Formulation", description: "Premium Quartz Powder provides a consistent SiO₂-rich raw material for ceramic bodies. During firing, quartz partly remains crystalline and partly dissolves into the glassy phase, helping control microstructure, thermal expansion, strength and overall fired-body performance." },
          { icon: Grid3x3, title: "Controlled Particle Size for Strength & Microstructural Development", description: "Precisely controlled particle size is critical to ceramic performance. Properly sized quartz promotes controlled particle packing, dissolution and microstructural development during firing. Optimized quartz particle size can improve mechanical strength, elastic modulus and fracture toughness." },
          { icon: Ruler, title: "Dimensional Stability & Controlled Firing Shrinkage", description: "Quartz acts as an important non-plastic mineral filler in ceramic formulations, helping control firing shrinkage and dimensional change. Properly balanced quartz content and particle size contribute to dimensional stability, shape retention and reduced deformation during drying and firing." },
          { icon: Thermometer, title: "Controlled Thermal Expansion & Glaze–Body Compatibility", description: "Quartz plays an important role in controlling the thermal expansion behaviour of ceramic bodies. Its carefully controlled content and particle size enable manufacturers to fine-tune the body's coefficient of thermal expansion (CTE) and optimize the required glaze–body fit. Proper quartz selection and dosage help control thermal expansion differences between the ceramic body and glaze, supporting better surface integrity, glaze adhesion and resistance to defects such as crazing and shivering in the finished ceramic product." },
          { icon: Sun, title: "Low Iron Chemistry for High Whiteness & Clean Fired Appearance", description: "Premium low iron Quartz Powder with controlled Fe₂O₃ and other colouring impurities supports bright, clean and consistent fired colour. It is particularly suitable for white firing bodies, sanitaryware, porcelain and vitrified ceramics, helping minimize discolouration, visible specking and supporting higher aesthetic quality for the finished product." },
          { icon: FlaskConical, title: "High Chemical Purity & Low Impurity Content", description: "High-purity Quartz Powder with controlled SiO₂, Fe₂O₃, Al₂O₃, TiO₂ and alkali impurities, along with low volatile/organic contamination, provides consistent raw material chemistry. This helps reduce batch-to-batch variation and the risk of impurity related defects such as discolouration, specking, blistering and pinholing, subject to proper formulation and firing control." },
          { icon: Boxes, title: "Versatile Silica Raw Material for Advanced Ceramic Applications", description: "Premium Quartz Powder is suitable for vitrified and porcelain tiles, wall and floor tiles, sanitaryware, tableware, ceramic glazes and frits, electrical porcelain, refractory ceramics and technical ceramics. Grade selection can be optimized according to particle size, PSD, SiO₂ purity, iron content and formulation requirements." },
        ],
      },
      {
        title: "Plastic & PVC Compounds Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Diamond, title: "High Hardness & Mechanical Reinforcement", description: "High purity Quartz Powder acts as a rigid functional mineral filler, contributing to increased stiffness, tensile modulus, flexural rigidity and surface hardness in properly formulated plastic and PVC compounds. With optimized filler loading and polymer filler compatibility, it supports stronger, more rigid and mechanically stable finished products." },
          { icon: Thermometer, title: "Superior Dimensional Stability & Low Thermal Expansion", description: "Quartz has a rigid crystalline structure and relatively low thermal expansion compared with most polymer matrices, helping reduce molding shrinkage, warpage and thermal deformation for improved dimensional accuracy and stability during processing and service." },
          { icon: Gem, title: "Excellent Scratch, Abrasion & Wear Resistance", description: "With a Mohs hardness of approximately 7.0, Quartz Powder provides a hard mineral phase that can enhance surface hardness, scratch resistance, abrasion resistance and wear durability, particularly in rigid plastic and PVC applications." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & Uniform Dispersion", description: "Precisely controlled particle size distribution (PSD), fine particle size and good dispersibility promote uniform filler distribution, supporting consistent processing, rheology, melt processing, surface finish and batch-to-batch quality." },
          { icon: FlaskConical, title: "High Thermal Stability & Chemical Resistance", description: "Quartz offers high thermal stability, chemical inertness and resistance to many acids and alkalis under suitable conditions. As a functional mineral filler, it can contribute to the thermal performance and chemical durability of polymer composites, supporting structural integrity in demanding service environments." },
          { icon: ShieldCheck, title: "Reduced Molding Shrinkage & Warpage", description: "The rigid mineral structure of Quartz Powder helps reduce polymer shrinkage and dimensional changes during molding. It helps control shrinkage, warpage and deformation, while improving the rigidity, dimensional accuracy and structural stability of finished plastic and PVC products." },
          { icon: Droplet, title: "Low Moisture & Processing Stability", description: "Premium Quartz Powder with low and controlled moisture content minimizes moisture related processing issues, supporting consistent dispersion, stable compounding, uniform rheology, and smooth processing. It is particularly beneficial in extrusion, injection molding, and dry-blending, helping achieve reliable resin wetting and a consistent, high-quality surface finish." },
          { icon: DollarSign, title: "Cost-Optimized High-Performance Formulation", description: "Quartz Powder can partially replace polymer resin while contributing hardness, stiffness, dimensional stability and wear resistance, helping optimize formulation economics when particle size, loading and polymer filler compatibility are properly controlled." },
          { icon: Boxes, title: "Applications in Plastics & PVC", description: "Premium Quartz Powder is suitable for PVC pipes and fittings, electrical conduits, cable compounds, WPC profiles, rigid PVC sheets, plastic masterbatches, injection-molded components, engineering plastics, automotive components and other industrial polymer products." },
        ],
      },
      {
        title: "Adhesives & Sealants Industry",
        image: "https://www.tech-masters.com/files/5c/a5bfd1b5dc0e27a81e726fbef1ce4d/Adhesives%20%26%20Sealants%20Kopie_2000x900_10.jpg",
        points: [
          { icon: ShieldCheck, title: "High Purity Quartz as a Structural Filler", description: "High-purity Quartz Powder functions as a rigid mineral filler within polymer binder matrices, contributing to improved mechanical strength, hardness, tensile and shear performance and cohesive durability in properly formulated structural adhesives and heavy-duty sealants." },
          { icon: Ruler, title: "Excellent Dimensional Stability & Reduced Cure Shrinkage", description: "Quartz Powder provides excellent dimensional stability and reduces the proportion of shrinkage prone polymer matrix, helping to minimize volumetric shrinkage, micro-cracking and joint deformation during curing while supporting long-term dimensional integrity and reliable gap-filling performance." },
          { icon: Waves, title: "Controlled Particle Size for Rheology & Workability", description: "Engineered with a controlled particle size distribution, micronized Quartz Powder supports viscosity control, flow behavior and processing workability, while suitable particle size can also improve slump and sag resistance during vertical application, supporting smooth application and consistent processing." },
          { icon: Gem, title: "High Hardness for Abrasion & Wear Resistance", description: "With a Mohs hardness of approximately 7, Quartz Powder enhances surface hardness, scratch resistance, abrasion resistance and wear durability in applications such as tile grouts, floor coatings and industrial mortars exposed to heavy loads and frequent use." },
          { icon: CloudRain, title: "Heat, Moisture, Chemical & Weathering Resistance", description: "Quartz is a chemically and thermally stable mineral filler that can contribute to improved resistance of formulated adhesives and sealants against heat, moisture, chemicals and environmental weathering, contributing to long-term durability." },
          { icon: DollarSign, title: "Formulation Cost Optimization & Batch Consistency", description: "As a high-performance mineral filler, Quartz Powder can partially replace costly polymer/resin content in suitable formulations, helping optimize formulation economics. Its high purity and controlled particle size also support consistent dispersion, processing and batch-to-batch manufacturing consistency." },
          { icon: Boxes, title: "Versatile Application Across Adhesive & Sealant Systems", description: "Suitable for tile adhesives, construction adhesives, epoxy and PU adhesives, silicone, acrylic and MS polymer sealants, joint fillers, grouts and industrial bonding compounds, where hardness, dimensional stability and durability are required." },
        ],
      },
      {
        title: "Electronics & Electronic Components Industry",
        image: "https://www.open.edu/openlearn/pluginfile.php/2481055/tool_ocwmanage/image/0/t312_OLHP_786x400.jpg",
        points: [
          { icon: Zap, title: "High Electrical Insulation & Thermal Stability", description: "High purity Quartz Powder (SiO₂) offers high electrical resistivity, excellent dielectric properties, thermal stability and chemical inertness, supporting reliable performance under demanding operating conditions." },
          { icon: ShieldCheck, title: "Improved Mechanical Strength & Dimensional Stability", description: "The high hardness and rigid structure of Quartz Powder enhance the stiffness, mechanical strength and dimensional stability of epoxy resins and polymer compounds, supporting the manufacture of durable, dimensionally stable components." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & PSD", description: "Precisely controlled particle size distribution (PSD) promotes uniform dispersion, efficient filler packing, controlled viscosity and consistent resin flow, supporting smooth processing, reliable molding and consistent batch-to-batch quality." },
          { icon: Thermometer, title: "Low Thermal Expansion for Reliable Packaging", description: "High-purity silica fillers, especially fused silica, offer very low thermal expansion and help lower the CTE of epoxy molding compounds (EMCs). This improves dimensional stability, minimizes thermal stress, package warpage and interfacial mismatch, and supports reliable semiconductor package performance during repeated thermal cycling." },
          { icon: FlaskConical, title: "High Purity & Low Impurity Profile", description: "High-purity Quartz Powder with a controlled level of metallic and ionic impurities supports stable electrical and dielectric performance and long-term reliability in sensitive electronic, PCB and semiconductor packaging applications." },
          { icon: Cpu, title: "Versatile Functional & Cost-Effective Filler", description: "Quartz Powder serves as a functional mineral filler in PCB laminates, semiconductor molding compounds, epoxy encapsulants, IC packaging materials, electronic adhesives and potting compounds, supporting performance and formulation efficiency." },
        ],
      },
      {
        title: "Foundries & Refractory Industry",
        image: "https://chromitesand.net/wp-content/uploads/2024/06/foundry.jpg",
        points: [
          { icon: FlaskConical, title: "High SiO₂ Purity & Controlled Impurity Profile", description: "High-purity Quartz with high SiO₂ content and controlled Fe₂O₃, Al₂O₃, CaO, MgO and alkali levels provides a consistent silica source for foundry moulds, cores and refractory formulations. Low impurities help minimize premature softening, excessive liquid phase formation and unwanted reactions with molten metal or slag." },
          { icon: Mountain, title: "High-Temperature Resistance & Refractory Stability", description: "Quartz provides a high-SiO₂ mineral phase with strong resistance to melting and high-temperature degradation, making it suitable for appropriately formulated foundry moulds, cores and refractory materials. It supports dimensional stability and consistent high-temperature service performance." },
          { icon: Thermometer, title: "Controlled Thermal Behavior & Dimensional Consistency", description: "Consistent Quartz mineralogy, grain size, grain shape and purity help manufacturers achieve predictable thermal behavior during metal casting and refractory firing. Properly engineered quartz grades can contribute to controlled dimensional changes and improved consistency of moulds, cores and refractory bodies." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "Uniform particle size and distribution help achieve better packing, smooth processing and consistent mould and core quality. Properly graded quartz also helps maintain the right balance of strength, permeability, flowability and binder requirement for different foundry and refractory applications." },
          { icon: ShieldCheck, title: "Chemical Stability & Controlled High-Temperature Reactivity", description: "The predominantly SiO₂-based composition provides good chemical stability in many foundry and refractory environments. Controlled levels of alkalis, CaO, MgO and other fluxing impurities help manage sintering, liquid-phase formation and unwanted high-temperature reactions." },
        ],
      },
    ],
  },
  "quartz-grits": {
    name: "Quartz Grits",
    sections: [
      {
        title: "Engineered Stone / Slab (Countertop) Industry",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359646957/UV/UL/DL/69656835/kitchen-countertop-granite-slab.jpg",
        points: [
          { icon: Gem, title: "High Hardness & Superior Wear Resistance", description: "Premium Quartz Grits have a Mohs hardness of approximately 7, providing excellent resistance to scratching, surface abrasion and everyday wear in engineered stone slabs and countertops. Their hard crystalline structure helps maintain surface integrity and appearance under frequent use, supporting durable performance in kitchen countertop, flooring, wall cladding and other demanding applications." },
          { icon: ShieldCheck, title: "High Purity & Controlled Mineral Composition", description: "High SiO₂ Quartz Grits with low iron, dark inclusions and unwanted mineral impurities support cleaner surfaces, consistent colour development and predictable finished slab quality, especially in white and light-coloured designs." },
          { icon: Sun, title: "Excellent Whiteness & Visual Consistency", description: "Optically clean, bright and colour consistent Quartz Grits help manufacturers achieve uniform slab colour, clarity and visual depth, supporting premium white, marble effect and decorative engineered stone designs. Low levels of dark inclusions and foreign minerals help minimize spots, colour variation and visible defects." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & Consistent Grading", description: "Precisely graded Quartz Grits provide controlled particle-size distribution, promoting uniform mixing, efficient particle packing, resin wetting and consistent compaction, supporting stable manufacturing and consistent slab quality." },
          { icon: Grid3x3, title: "Multiple Grit Sizes for Design Flexibility", description: "A range of controlled grit sizes enables manufacturers to optimize aggregate combinations for different textures, patterns and decorative effects, including distinctive designs, including uniform, speckled, terrazzo like and natural stone inspired appearances." },
          { icon: Layers, title: "Contribution to Overall Slab Performance", description: "As the principal mineral aggregate, high quality Quartz Grits form a hard and rigid mineral framework within the resin matrix, contributing to hardness, wear resistance and overall mechanical performance when properly formulated, compacted and cured." },
        ],
      },
      {
        title: "Ceramic & Sanitaryware Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOe_bmMn3gxPdqZGqEM6Grz-EeGAxEKv2zA&s",
        points: [
          { icon: Beaker, title: "High SiO₂ Purity for Consistent Formulation", description: "High purity Quartz Grits provide a consistent silica source for ceramic and sanitaryware formulation. Low colouring impurities support a clean, bright and uniform fired appearance. Consistent raw-material quality also helps manufacturers maintain batch-to-batch uniformity." },
          { icon: Gem, title: "Quartz Hardness Supporting Body Strength", description: "With a Mohs hardness of approximately 7, Quartz provides a hard, rigid mineral phase within the ceramic microstructure. Its controlled particle size and distribution can contribute to mechanical strength, rigidity, dimensional stability and surface durability of the fired body." },
          { icon: Sun, title: "Low Iron Content for Whiter Fired Appearance", description: "Low levels of colouring impurities like Fe₂O₃ are important for white ceramic and sanitaryware formulations. Carefully processed, low iron Quartz Grits help minimize unwanted coloration and dark inclusions, supporting a cleaner, brighter and more uniform fired appearance." },
          { icon: Ruler, title: "Controlled Firing Shrinkage & Dimensional Stability", description: "Quartz acts as a relatively rigid, non plastic phase within ceramic bodies, helping control drying and firing shrinkage. Properly graded Grits also support controlled particle packing and microstructural development during firing, contributing to better dimensional stability of the product." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "Precisely graded Quartz Grits provide consistent particle packing and controlled dissolution during firing. This influences phase development, firing shrinkage and thermal expansion, supporting consistent processing and finished ceramic and sanitaryware products." },
          { icon: Thermometer, title: "Controlled Thermal Expansion Behaviour", description: "Quartz contributes to the thermal expansion characteristics of fired ceramic bodies. Properly graded Quartz Grits help control dimensional changes during heating and cooling and support better body glaze compatibility, reducing the risk of crazing and shivering." },
          { icon: Boxes, title: "Versatile Application Across Ceramic Products", description: "Premium Quartz Grits are suitable for sanitaryware, wall and floor tiles, ceramic tableware, porcelain, vitrified products and other whiteware ceramics, where controlled SiO₂ content, particle size and low colouring impurities are important for consistent firing and product quality." },
        ],
      },
      {
        title: "Glass Industry",
        image: "https://www.processparameters.co.uk/wp-content/uploads/2023/07/Glass-manufacturing-process.jpg",
        points: [
          { icon: Beaker, title: "High SiO₂ Purity for Consistent Glass Chemistry", description: "Premium Quartz Grits with high purity SiO₂ provide a reliable silica source for accurate glass formulation, supporting stable glass composition, uniform quality and predictable melting behaviour. High purity silica also helps minimize unwanted impurities and supports a strong, chemically resistant and optically clear glass matrix." },
          { icon: Sparkles, title: "Low Fe₂O₃ for Superior Optical Clarity & Colour Control", description: "Precisely controlled low Fe₂O₃ minimizes iron related green, blue or brown coloration, supporting clearer, brighter and more colour-consistent glass. Particularly suitable for clear, high-transparency and colour-sensitive glass applications." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & PSD for Uniform Batch Melting", description: "A precisely controlled and consistent PSD promotes uniform blending with other batch materials and fluxing agents, supporting predictable melting and silica dissolution. Properly graded particles help minimize segregation and variations in batch composition, contributing to more consistent furnace operation and reduced risk of unmelted silica particles." },
          { icon: FlaskConical, title: "Controlled Chemical Composition & Impurity Profile", description: "Precisely controlled levels of SiO₂, Fe₂O₃, Al₂O₃, CaO, MgO, TiO₂ and alkali oxides in Quartz Grits help glass manufacturers maintain consistent quality. A well controlled impurity profile helps minimize batch-to-batch variations in melting behaviour, glass colour, clarity and overall product quality." },
          { icon: Thermometer, title: "High Temperature Stability & Reliable Melting Performance", description: "Quartz offers excellent thermal stability and high temperature resistance, making it a reliable silica source for demanding glass-melting operations. Its stable behaviour supports consistent melting and controlled batch-to-batch melt conversion." },
          { icon: Droplet, title: "Low & Controlled Moisture for Consistent Batch Handling", description: "Quartz Grits with low and controlled moisture support consistent material flow, weighing, blending and batch feeding. It helps maintain stable batch composition and predictable furnace operation while reducing moisture-related handling variations." },
        ],
      },
      {
        title: "Paints & Coatings Industry",
        image: paintCoatingImage,
        points: [
          { icon: Gem, title: "Exceptional Hardness & Abrasion Resistance", description: "With a Mohs hardness of approximately 7.0, Quartz Grits provide a hard mineral aggregate that enhances surface hardness, abrasion resistance, scratch resistance and mechanical wear resistance. Ideal for heavy-duty flooring, industrial, anti-slip and protective coatings exposed to foot traffic and mechanical contact." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & Surface Texture", description: "Precisely graded Quartz Grits allow manufacturers to select particle sizes according to coating thickness, surface profile and texture requirements. Coarser grades create durable anti-slip and decorative textures, while finer grades support smoother and more uniform surfaces." },
          { icon: Sun, title: "High Purity, Brightness & Controlled Moisture", description: "High SiO₂ purity, brightness and low moisture content Quartz Grits provide consistent mineral quality and a clean appearance. Low colouring impurities and controlled moisture support formulation stability, processing consistency and batch-to-batch uniformity in water borne, solvent borne and resin based coatings." },
          { icon: CloudRain, title: "Excellent Weathering & UV Stability", description: "Quartz offers excellent resistance to weathering, sunlight and prolonged environmental exposure. Its inherent stability makes Quartz Grits suitable for exterior, architectural, industrial flooring and protective coating systems requiring long-term surface stability. Its inorganic and chemically stable nature provides excellent resistance to sunlight and UV exposure, with minimal degradation of the quartz mineral itself." },
          { icon: FlaskConical, title: "High Chemical Stability", description: "Quartz provides excellent chemical stability and resistance to many acids, alkalis and environmental agents. Its chemically stable nature supports long term coating durability and resistance to aggressive environments, particularly in industrial, protective, flooring and construction coating systems exposed to demanding environments." },
          { icon: Thermometer, title: "Low Thermal Expansion & Dimensional Stability", description: "Quartz has a relatively low coefficient of thermal expansion, which can contribute to dimensional stability during normal temperature fluctuations. This characteristic can be advantageous in coating and construction-material systems exposed to changing environmental temperatures." },
          { icon: Boxes, title: "Versatile Applications Across Coating Systems", description: "Precisely graded Quartz Grits are suitable for industrial flooring, anti-slip coatings, protective coatings, textured finishes, decorative coatings and resin-based systems, with particle size selected according to the desired surface texture, profile and performance." },
        ],
      },
      {
        title: "Rubber Industry",
        image: "https://www.airbench.com/wp-content/uploads/rubber-tires.jpg.webp",
        points: [
          { icon: FlaskConical, title: "High SiO₂ Purity & Controlled Composition", description: "High SiO₂ purity Quartz Grits provide a chemically stable mineral filler/extender for rubber compounds, supporting consistent formulation chemistry, predictable processing and batch-to-batch uniformity, making them suitable for rubber sheets, flooring, molded products, seals and other mineral-filled elastomer applications." },
          { icon: Gem, title: "High Hardness for Wear Resistance", description: "With a Mohs hardness of approximately 7, Quartz Grits introduce a hard mineral phase into appropriately designed rubber compounds. When properly selected grits are incorporated into suitable rubber formulations, they can help improve wear, abrasion and scuff resistance, supporting longer service life in demanding applications such as rubber mats, flooring, footwear components, conveyor systems and industrial rubber products." },
          { icon: SlidersHorizontal, title: "Precisely Graded Particle Size", description: "Precisely graded Quartz Grits allow manufacturers to optimize filler loading, dispersion, processing behavior, surface characteristics, and cost efficiency. Uniform grain distribution supports predictable viscosity during extrusion or molding, reduces internal void entrapment and balances physical durability with cost efficiency." },
          { icon: Thermometer, title: "Low Thermal Expansion & Dimensional Stability", description: "Quartz has a relatively low thermal expansion compared with many common mineral materials, allowing its mineral filler phase to support dimensional stability and controlled thermal expansion in appropriately formulated rubber compounds during temperature variations." },
          { icon: Flame, title: "Excellent Thermal Stability", description: "Quartz Grits offer excellent thermal stability and a high melting temperature of approximately 1,700°C. Their stable mineral structure supports consistent filler behaviour during mixing and vulcanization. This helps maintain dimensional stability and filler integrity under elevated processing temperatures." },
          { icon: ShieldCheck, title: "Chemical & Environmental Stability", description: "Quartz offers excellent resistance to chemicals, solvents, moisture, and harsh environmental conditions, making it suitable for seals, gaskets, flooring, linings, and industrial rubber products. Its durability helps prevent chemical degradation and atmospheric aging, ensuring reliable long-term performance." },
          { icon: Blend, title: "Filler Dispersion & Formulation Flexibility", description: "Controlled Quartz Grits can function as an extending mineral filler, helping manufacturers optimize filler loading, dispersion, compound processing and the balance between material cost and finished-product performance." },
          { icon: Boxes, title: "Versatile Rubber Applications", description: "Quartz Grits are suitable as a mineral filler/extender in appropriately formulated rubber sheets, mats, flooring, seals, gaskets, molded products, conveyor components, footwear components, and other industrial rubber products." },
        ],
      },
      {
        title: "Foundry Manufacturing Industry",
        image: "https://chromitesand.net/wp-content/uploads/2024/06/foundry.jpg",
        points: [
          { icon: FlaskConical, title: "High SiO₂ Purity & High Refractoriness", description: "High SiO₂ purity Quartz Grits provide a high purity silica base for foundry mould and core systems. Controlled Fe₂O₃, Al₂O₃, alkali oxides and other fluxing impurities help maintain resistance to premature softening, supporting mould integrity and reducing metal penetration, burn-on and other thermally induced casting defects." },
          { icon: Mountain, title: "Excellent High-Temperature Resistance", description: "Quartz is a highly refractory silica material with a fusion point of approximately 1700°C. Quartz Grits provide excellent thermal endurance during metal pouring and solidification. Their high temperature stability helps maintain mould/core integrity and is particularly suitable for demanding iron and steel foundry applications." },
          { icon: Droplet, title: "Controlled Moisture & Low Fines", description: "Controlled low moisture and fine-particle content are important for maintaining predictable sand flow, compaction, permeability, binder demand and mould/core strength. Properly processed and consistently graded Quartz Grits support stable foundry sand-system performance and help maintain batch-to-batch reproducibility." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Grain Size & Grading", description: "Precisely graded grit sizing and grading help optimize packing density, permeability, surface finish and binder demand. A balanced grain distribution supports effective gas evacuation and helps reduce blowholes, pinholes and other gas-related defects." },
          { icon: Thermometer, title: "Controlled Thermal Expansion Behaviour", description: "Quartz undergoes a significant phase transformation near 573°C. Controlled grain size, grading and distribution are important for managing dimensional changes and reducing casting defects. Proper grading helps reduce thermal expansion related defects such as veining, rattails and surface cracking." },
        ],
      },
      {
        title: "Construction Products Industry",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        points: [
          { icon: Gem, title: "High Hardness & Excellent Wear Resistance", description: "Quartz has a Mohs hardness of approximately 7, providing high surface hardness and excellent scratch, abrasion, and mechanical wear resistance. It is suitable for epoxy flooring, terrazzo, concrete products, engineered surfaces and other construction materials exposed to heavy traffic." },
          { icon: FlaskConical, title: "High SiO₂ Purity & Controlled Impurity Profile", description: "High purity Quartz Grits with controlled Fe₂O₃, Al₂O₃ and CaO provide a chemically and physically stable mineral component for cementitious, epoxy, polyurethane and resin-based construction systems. Their low impurity profile supports consistent formulation performance, color stability and chemical resistance, especially in white and light-colored mortars, renders, terrazzo and engineered stone." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & Efficient Particle Packing", description: "Precisely graded Quartz Grits with controlled particle size distribution (PSD) promote efficient packing and reduce void spaces within the matrix. This supports higher packing density, dimensional consistency, processing stability, and potentially lower binder or resin demand." },
          { icon: ShieldCheck, title: "Rigid Mineral Structure & Mechanical Performance", description: "The hard and rigid structure of quartz particles provides a durable mineral aggregate within properly formulated concrete, contributing to the mechanical strength, stiffness, load-bearing capacity, and mechanical wear resistance of properly formulated concrete, polymer mortars, screeds, terrazzo, and industrial flooring systems." },
          { icon: Droplet, title: "Dense Structure & Low Water Absorption", description: "Dense, well-processed Quartz Grits generally exhibit low water absorption, suitable for construction formulations where controlled aggregate moisture is important. Combined with efficient particle packing, they support reduced voids, lower water absorption and improved durability in properly formulated construction materials." },
          { icon: Sparkles, title: "Consistent Grading & Surface Finish", description: "Uniform Quartz Grits with controlled particle size, cleanliness, and surface characteristics provide consistent texture and predictable appearance. They support reproducible surface finish and batch-to-batch consistency in terrazzo, decorative concrete, resin flooring, and polymer concrete." },
        ],
      },
      {
        title: "Industrial Abrasives",
        image: "https://binicabrasive.com/wp-content/uploads/2025/09/industrial-abrasive-tools.webp",
        points: [
          "Quartz is used as an abrasive material in different industrial applications due to its Inherent Hardness, Durability, High Melting Point, Gritty texture, and Chemical Stability.",
          "Quartz use in Sand Blasting, Grinding, Polishing, Stone Cutting, Sandpaper, Abrasive Cloths, Scouring Cleaners."
        ],
      },
    ],
  },
  "coated-calcite": {
    name: "Coated Calcite Powder",
    sections: [
      {
        title: "Masterbatch Filler Manufacturers",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Waves, title: "Enhanced Hydrophobicity & Polymer Compatibility", description: "Precisely controlled Stearic Acid coating reduces the hydrophilic nature of CaCO₃ and provides a more hydrophobic, polymer-compatible surface. It improves resin wetting, dispersion and compatibility with PE, PP, PVC, HDPE and LDPE, helping minimize moisture-related defects, voids, pinholes and phase separation." },
          { icon: Sparkles, title: "Superior Dispersion & Reduced Agglomeration", description: "Stearic Acid surface treatment helps reduce particle agglomeration and promotes uniform Calcite dispersion throughout the polymer matrix. A controlled particle size and PSD supports stable extrusion, consistent filler distribution and helps minimize filter-screen blockage." },
          { icon: Wind, title: "Improved Processing & Melt Flow", description: "The Stearic Acid coating provides a lubricating effect, reducing interfacial friction during melt compounding. This supports smoother processing, improved melt flow, lower extrusion torque and potentially higher extruder output with improved energy efficiency." },
          { icon: Diamond, title: "Enhanced Stiffness & Dimensional Stability", description: "Coated Calcite acts as a rigid mineral filler, helping improve stiffness, dimensional stability and shrinkage control in filled polymer compounds. It is suitable for applications such as injection molding, blow molding, pipes, films and woven plastics, depending on the polymer and formulation." },
          { icon: Sun, title: "High Whiteness & Cost-Effective Pigment Extension", description: "High-purity, high-whiteness Calcite enhances brightness, whiteness and visual appearance in white and light-coloured plastics. In suitable white masterbatch formulations, CaCO₃ can also serve as a cost-effective TiO₂ extender, helping optimize pigment loading and formulation cost." },
          { icon: Package, title: "High Filler Loading & Reduced Resin Consumption", description: "Premium Stearic Acid Coated Calcite supports high mineral loading with good dispersion and processability. Higher CaCO₃ loading can reduce carrier-resin consumption, increase mineral content and help lower the overall formulation cost per unit of masterbatch." },
          { icon: DollarSign, title: "Low Oil Absorption, Moisture Resistance & Cost Efficiency", description: "Low and controlled oil absorption supports efficient polymer wetting and filler dispersion, while Stearic Acid treatment improves hydrophobicity and moisture resistance. Combined with high filler loading, this can reduce resin requirements, improve masterbatch bulk density and support overall production cost efficiency." },
        ],
      },
      {
        title: "PVC Compounding Industry",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGH6-teIRYb4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1739041660313?e=2147483647&v=beta&t=petzcu1ZMEiFfq9uX9HH3Ys3wpKy5EyQ0MriMX1PzII",
        points: [
          { icon: Waves, title: "Advanced Stearic Acid Surface Treatment", description: "Precisely controlled stearic acid coating modifies Calcite from hydrophilic to more hydrophobic, reducing moisture affinity and improving wetting, dispersion and compatibility within the PVC matrix. It supports consistent processing and surface quality." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "Engineered particle size and controlled particle size distribution (PSD) promote uniform filler dispersion and efficient incorporation throughout the PVC compound. It helps minimize coarse particles and agglomerates, supporting smooth processing and consistent surface finish." },
          { icon: Sparkles, title: "Improved Dispersion & Reduced Agglomeration", description: "Stearic-acid-coated Calcite improves filler–polymer compatibility and reduces inter-particle friction and attraction, helping minimize agglomeration during high-speed dry blending and extrusion. This promotes a more homogeneous compound and reduces filler-related surface defects." },
          { icon: CloudRain, title: "Low & Controlled Moisture for Stable Processing", description: "A more hydrophobic surface combined with low and controlled residual moisture helps minimize moisture uptake during storage, handling and compounding. This reduces the risk of steam generation, porosity, voids and melt instability during extrusion." },
          { icon: Droplet, title: "Controlled Oil Absorption & Formulation Compatibility", description: "Controlled oil absorption indicates predictable Calcite surface characteristics and liquid uptake. When matched to the PVC formulation, it supports interaction with plasticizers and other components, contributing to efficient mixing, filler incorporation and consistent processing." },
          { icon: Sun, title: "High Purity, Whiteness & Controlled Impurities", description: "High-purity CaCO₃ with excellent whiteness and controlled levels of iron, silica and other mineral impurities provides consistent chemical and optical characteristics. This is especially beneficial for white and light-coloured PVC products, supporting colour consistency and appearance." },
          { icon: Diamond, title: "Improved Stiffness & Dimensional Stability", description: "Calcium Carbonate functions as a rigid mineral filler that can improve stiffness, hardness and dimensional stability when particle size, surface treatment and filler loading are properly optimized for the PVC formulation." },
        ],
      },
      {
        title: "PVC Pipes & Fittings Industry",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        points: [
          { icon: Sparkles, title: "Enhanced Dispersion & Stable Extrusion", description: "Stearic-acid treatment provides a more hydrophobic and organophilic surface, improving wetting, compatibility and dispersion of CaCO₃ in rigid PVC compounds. This helps reduce agglomeration and die buildup, supporting stable extrusion, uniform material flow and smooth surface finish." },
          { icon: Diamond, title: "Improved Stiffness & Dimensional Stability", description: "Coated Calcite functions as a mineral filler in rigid PVC, helping improve modulus, hardness, stiffness and dimensional stability when properly formulated. Performance depends on particle characteristics, filler loading and overall PVC formulation." },
          { icon: Ruler, title: "Consistent Pipe & Fitting Dimensions", description: "Uniform filler dispersion supports a consistent PVC compound structure and material flow, helping achieve uniform wall thickness, dimensions and product geometry when extrusion, calibration and cooling are properly controlled." },
          { icon: Wind, title: "Smooth Processing & Surface Quality", description: "Stearic-acid treatment improves filler flow and processing behaviour, while controlled particle size and good dispersion support a smooth, uniform and defect-minimized surface in finished PVC pipes and fittings." },
          { icon: CloudRain, title: "Low Moisture & Reliable Processing", description: "Low moisture content combined with the hydrophobic coated surface helps minimize moisture uptake during storage, handling and processing, supporting consistent compounding and reducing potential moisture-related extrusion issues." },
          { icon: Sun, title: "High Purity, Whiteness & Controlled Particle Size", description: "High CaCO₃ purity, superior whiteness and controlled particle size support consistent colour, appearance, dispersion and filler performance. Optimized filler loading can also enable partial PVC resin replacement and formulation cost optimization." },
          { icon: Boxes, title: "Applications in PVC Pipes & Fittings", description: "Suitable for properly formulated uPVC/PVC water-supply pipes, pressure and non-pressure pipes, drainage and sewerage pipes, electrical conduits, plumbing fittings and other rigid PVC extrusion and moulding applications." },
        ],
      },
      {
        title: "Plastic & Polymer Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: CloudRain, title: "Enhanced Hydrophobicity & Moisture Resistance", description: "Stearic-acid surface treatment increases Calcite hydrophobicity, reducing moisture uptake and helping minimize moisture-related bubbles, voids, and surface defects during compounding and extrusion. Suitable for PVC, PE, and PP." },
          { icon: Blend, title: "Improved Polymer Compatibility & Filler Dispersion", description: "The surface treatment improves resin wetting and polymer–filler compatibility, reducing particle agglomeration and promoting uniform Calcium Carbonate dispersion for consistent compound quality and processing." },
          { icon: Wind, title: "Improved Melt Flow & Processing Efficiency", description: "Stearic-acid treatment reduces surface polarity and provides a lubricating effect, supporting easier filler dispersion, smoother extrusion, improved melt flow, and stable injection-moulding processing." },
          { icon: Diamond, title: "Enhanced Rigidity, Hardness & Dimensional Stability", description: "Coated Calcite acts as an effective mineral filler, enhancing rigidity, hardness, impact stability, and dimensional stability in properly formulated compounds. Suitable for PVC pipes, profiles, cable compounds, WPC, and selected engineering plastics." },
          { icon: DollarSign, title: "Higher Filler Loading & Cost-Effective Formulation", description: "Good surface treatment and dispersion can support higher Calcium Carbonate loading while maintaining desirable processing characteristics. Widely used in PE/PP filler masterbatch, PVC compounds, and other filled polymer systems to optimize formulation cost and production efficiency." },
        ],
      },
      {
        title: "Wire & Cable Industry",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        points: [
          { icon: CloudRain, title: "Enhanced Moisture Resistance & Hydrophobicity", description: "Stearic Acid surface treatment makes Calcite particles more hydrophobic, reducing moisture pick-up and improving compatibility with PVC. This supports consistent electrical insulation, volume resistivity and dielectric properties." },
          { icon: Sparkles, title: "Superior Dispersion & PVC Compatibility", description: "Stearic Acid coating improves CaCO₃ compatibility with PVC resin and plasticizers, promoting uniform dispersion and reducing agglomeration and filler-related micro-voids. This supports smooth extrusion, uniform insulation thickness and consistent surface finish." },
          { icon: ShieldCheck, title: "Optimized Filler–Polymer Interaction & Mechanical Stability", description: "Uniformly dispersed Coated Calcite promotes effective filler–polymer interaction and stress distribution, supporting mechanical strength, stiffness, abrasion resistance and dimensional stability while maintaining the required flexibility and elongation at optimized loading." },
          { icon: Zap, title: "Support for PVC Thermal Stability & Processing", description: "CaCO₃ can help scavenge HCl released during PVC thermal degradation, reducing dehydrochlorination and supporting colour stability, processing consistency and reduced corrosive effects on equipment during extrusion." },
          { icon: Sun, title: "High Purity & Controlled Particle Size", description: "High-purity Calcite with controlled PSD, low moisture and consistent physical properties promotes uniform compounding, effective dispersion and stable extrusion, supporting smooth surface finish and batch-to-batch consistency." },
          { icon: DollarSign, title: "Optimized Filler Loading & Processing Efficiency", description: "Precisely controlled, surface-treated Calcite enables efficient filler dispersion and consistent processing, helping maintain the desired balance of mechanical, processing and electrical properties at the selected loading level." },
        ],
      },
      {
        title: "Rubber Product Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjMqzAkLghu9rpC8FqEmV6GlfKbtv1Sn3Jw&s",
        points: [
          { icon: Waves, title: "Stearic Acid Surface Treatment for Improved Dispersion", description: "Stearic acid treatment makes Calcite more hydrophobic and organophilic, improving compatibility with natural and synthetic rubber. It helps reduce agglomeration and promote uniform filler dispersion for consistent processing and compound quality." },
          { icon: Diamond, title: "Supports Mechanical Performance & Durability", description: "Coated Calcite acts as a functional mineral filler that helps control hardness, stiffness and overall compound performance. Its effect on tensile, tear and abrasion resistance depends on rubber type, particle size, surface treatment and loading." },
          { icon: Ruler, title: "Uniform Dispersion for Dimensional Consistency", description: "Fine, uniformly coated particles support consistent filler distribution, hardness, dimensional stability, shape retention and surface finish. This is beneficial for seals, weatherstripping, hoses and molded rubber components." },
          { icon: DollarSign, title: "Cost-Effective Filler for Formulation Optimization", description: "Coated Calcite provides a cost-effective mineral filler that helps optimize formulation economics while maintaining a desirable balance of processability, compound performance and finished-product quality." },
          { icon: SlidersHorizontal, title: "Precisely Controlled Particle Size & PSD", description: "Controlled particle size and particle-size distribution (PSD) promote uniform dispersion and consistent compound rheology, supporting repeatable processing and batch-to-batch quality." },
          { icon: Boxes, title: "Wide Range of Rubber Product Applications", description: "Premium Coated Calcite is suitable for automotive seals and gaskets, industrial hoses, rubber profiles, conveyor belts, footwear soles, molded components, vibration-control parts and general technical rubber goods." },
        ],
      },
    ],
  },
  "coated-dolomite": {
    name: "Coated Dolomite Powder",
    sections: [
      {
        title: "PVC Pipes & Fittings Industry",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        points: [
          { icon: CloudRain, title: "Hydrophobic Surface & Moisture Resistance", description: "Stearic acid surface treatment makes dolomite more hydrophobic and polymer-compatible, reducing moisture pickup during storage, dry blending and compounding. This supports better dispersion and consistent PVC processing." },
          { icon: Sparkles, title: "Enhanced Dispersion & PVC Compatibility", description: "The surface-treated dolomite improves wetting and compatibility with the PVC matrix, reducing particle agglomeration and promoting uniform filler distribution throughout the compound for consistent extrusion performance." },
          { icon: Diamond, title: "Enhanced Rigidity & Dimensional Stability", description: "With its CaMg(CO₃)₂ composition and ~3.5–4.0 Mohs hardness, dolomite acts as a rigid mineral filler in uPVC and CPVC compounds. At optimized loading, it can improve stiffness, flexural modulus and dimensional stability, while helping control post-extrusion shrinkage." },
          { icon: DollarSign, title: "Controlled Filler Loading & Formulation Efficiency", description: "Controlled particle size, low oil absorption and stearic acid treatment enable efficient filler incorporation and dispersion. At suitable loading levels, dolomite can partially replace PVC resin, supporting formulation efficiency and cost optimization while maintaining required product properties." },
          { icon: Wind, title: "Improved Processing & Extrusion Consistency", description: "Stearic acid treatment reduces dolomite's surface energy, facilitating easier incorporation and more uniform dispersion. This supports stable melt processing, consistent extrusion and improved surface quality." },
          { icon: Blend, title: "Reduced Particle Interaction & Smoother Processing", description: "The stearic acid coating reduces particle-to-particle interaction and friction, improving filler flow and incorporation within the PVC compound. This promotes smoother processing, better melt homogeneity and consistent extrusion performance." },
        ],
      },
      {
        title: "Wire & Cable Manufacturing",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        points: [
          { icon: CloudRain, title: "Hydrophobic Surface for Moisture Resistance", description: "Stearic-acid treatment converts dolomite into a more hydrophobic and organophilic filler, reducing moisture affinity and improving compatibility with the PVC matrix for insulation and sheathing compounds." },
          { icon: Droplet, title: "Low Moisture Affinity for Smooth Extrusion", description: "Low moisture uptake helps minimize voids, porosity, and surface imperfections during PVC extrusion, supporting smoother processing and more consistent insulation quality." },
          { icon: Zap, title: "Carbonate Chemistry for Thermal Stability", description: "The CaMg(CO₃)₂ structure provides calcium and magnesium carbonate components that can assist in fixing HCl released during PVC thermal degradation. Alongside a suitable heat-stabilizer system, this helps retard dehydrochlorination, reduce thermal discoloration, and support stable processing." },
          { icon: Waves, title: "Controlled Oil Absorption for Plasticizer Efficiency", description: "Stearic-acid treatment reduces surface energy and oil absorption, limiting excessive interaction with plasticizers such as DOP and DINP. This supports efficient filler loading while maintaining a balance of flexibility, dimensional stability, processability, and mechanical properties." },
          { icon: Sparkles, title: "Enhanced Dispersion for Consistent Extrusion", description: "Surface functionalization reduces interparticle attraction and surface energy, promoting de-agglomeration and uniform dispersion during high-shear PVC compounding. This supports smooth extrusion, consistent compound quality, and uniform insulation thickness and surface finish." },
          { icon: Sun, title: "High Whiteness for Clean Cable Appearance", description: "High-purity, high-brightness dolomite provides a clean white filler base for white and light-coloured PVC cable compounds, supporting uniform appearance and consistent colour development with the appropriate pigment system." },
        ],
      },
      {
        title: "PE & PP Filler Masterbatch Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Blend, title: "Enhanced PE & PP Compatibility", description: "Stearic-acid treatment makes dolomite more hydrophobic and compatible with non-polar PE and PP resins, improving wetting, reducing filler–filler attraction and supporting uniform dispersion." },
          { icon: Sparkles, title: "Improved Dispersion & Reduced Agglomeration", description: "The surface coating promotes better particle dispersion and reduced agglomeration within the polymer melt, supporting smoother extrusion and consistent processing in blown film, injection molding and other PE/PP applications." },
          { icon: Package, title: "Supports High Filler Loading", description: "Improved surface compatibility and dispersion support the incorporation of higher dolomite loadings while maintaining uniform filler distribution. Actual loading depends on particle size, coating level, resin grade and formulation design." },
          { icon: Droplet, title: "Low & Controlled Oil Absorption", description: "Low oil absorption supports efficient wetting and incorporation of dolomite, helping optimize mineral loading and polymer-carrier requirements for PE/PP masterbatch formulations." },
          { icon: Wind, title: "Smooth Processing & Stable Extrusion", description: "Stearic-acid coating helps reduce particle-to-particle friction and improves filler movement within the polymer melt, supporting smooth material flow and more stable extrusion." },
          { icon: CloudRain, title: "Reduced Moisture Affinity", description: "The hydrophobic surface treatment reduces dolomite's affinity for moisture, helping minimize moisture pickup during storage and handling and supporting more consistent processing." },
          { icon: SlidersHorizontal, title: "Controlled Particle Size & Consistent Quality", description: "Consistent particle size, chemical purity, brightness, moisture content and stearic-acid coating help maintain predictable filler behaviour, uniform dispersion, pellet quality, appearance and batch-to-batch processing stability." },
        ],
      },
      {
        title: "Rubber & Automotive Elastomers Industry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjMqzAkLghu9rpC8FqEmV6GlfKbtv1Sn3Jw&s",
        points: [
          { icon: Blend, title: "Enhanced Elastomer Compatibility & Dispersion", description: "Stearic-acid treatment makes dolomite more hydrophobic and elastomer-compatible, promoting uniform dispersion and improved filler–rubber interaction in NR, SBR, EPDM and other elastomer systems." },
          { icon: Sparkles, title: "Reduced Agglomeration & Consistent Compounding", description: "The treated surface reduces particle-to-particle attraction and filler agglomeration during Banbury mixing and two-roll milling, supporting uniform filler distribution and batch-to-batch consistency." },
          { icon: Diamond, title: "Controlled Hardness, Stiffness & Tear Resistance", description: "Rigid Dolomite [CaMg(CO₃)₂] can increase hardness, stiffness and tear resistance when properly formulated, while supporting dimensional stability and deformation resistance." },
          { icon: Wind, title: "Improved Processing & Material Flow", description: "Stearic-acid treatment provides a lubricating effect at the filler surface, facilitating filler incorporation and smoother mixing, extrusion and molding with more consistent processing." },
          { icon: Thermometer, title: "Thermal Stability & Long-Term Performance", description: "Dolomite offers good thermal stability, helping maintain mechanical and dimensional consistency during elevated-temperature processing and service in properly formulated compounds." },
          { icon: Droplet, title: "Low Oil Absorption & Formulation Efficiency", description: "Controlled low oil absorption supports efficient filler incorporation, consistent compound rheology and processing, and improved surface finish in extruded and molded rubber products." },
        ],
      },
      {
        title: "Plastic & Polymer Compound Industry",
        image: "https://blog.industryinform.com/wp-content/uploads/2018/07/Plastics_industry_2.jpg",
        points: [
          { icon: Blend, title: "Enhanced Polymer Compatibility & Filler Dispersion", description: "Stearic-acid treatment converts the hydrophilic dolomite surface into a more hydrophobic and organophilic surface, improving compatibility with PE, PP and other polymer matrices. This enhances filler wetting, reduces agglomeration and supports uniform dispersion throughout the polymer." },
          { icon: Sparkles, title: "Uniform Dispersion & Consistent Compound Quality", description: "A uniform stearic-acid coating minimizes particle agglomeration during compounding and promotes consistent filler distribution. This supports uniform density, appearance, surface finish and batch-to-batch consistency in filled plastic compounds." },
          { icon: Wind, title: "Improved Processing & Lubricating Behaviour", description: "Stearic-acid treatment provides a lubricating effect at the polymer–filler interface, helping reduce processing friction. This can promote smoother melt flow, stable processing and potentially lower extrusion torque or die pressure, depending on formulation and filler loading." },
          { icon: Diamond, title: "Increased Stiffness & Dimensional Stability", description: "Dolomite's rigid mineral structure makes it an effective inorganic reinforcing/extending filler for selected PE, PP and other polymer compounds. Proper dispersion can increase stiffness and flexural modulus while helping control molding shrinkage and dimensional deformation." },
          { icon: CloudRain, title: "Reduced Moisture Sensitivity & Surface Defects", description: "The hydrophobic surface treatment reduces the filler's moisture affinity and moisture uptake, supporting more stable storage, feeding and melt processing. Along with proper drying and process control, this helps minimize moisture-related bubbles, voids and surface imperfections." },
        ],
      },
    ],
  },
  "pebble": {
    name: "Pebble",
    sections: [
      {
        title: "Uses in Landscaping",
        image: "https://cdn.shopify.com/s/files/1/0717/5271/2479/files/Gardening-stones-on-pathway_75a2af72-baf5-4986-b2b0-b3e3e9ca79b1_1024x1024.jpg?v=1679737218",
        points: [
          "Garden Borders: Pebbles are a great way to cover garden soil, providing a polished look while helping to retain moisture and prevent weeds.",
          "Pathways: Pebble stone pathways create a natural, inviting look in gardens or entryways, offering a soft and comfortable walking surface that complements plants and other landscaping elements.",
          "Water Features: Whether it's a pond, fountain, or waterfall, adding pebbles enhances water features by adding texture and colour, creating a serene, spa-like ambiance.",
          "Driveways and Patios: Pebbles can be used to cover entire surfaces or to accentuate design elements in driveways and patios, bringing depth and sophistication to these areas.",
          "Zen and Rock Gardens: Inspired by traditional Japanese gardens, pebbles are essential in creating minimalist and peaceful rock gardens or Zen spaces. Their clean look and neutral colours foster relaxation and simplicity.",
          "Planters and Flower Pots: Small pebbles are great for topping soil in pots, adding aesthetic value while helping with drainage. They're also ideal for creating succulent and cactus arrangements."
        ],
      },
      {
        title: "Health Benefits",
        image: "https://vital-wellbeing.com/wp-content/uploads/2019/09/walking-on-stones-proprioception-shutterstock_211023196-188575_1080x675.jpg",
        points: [
          "Stimulates Acupressure Points: The soles of the feet contain numerous nerve endings and acupressure points connected to various organs and systems in the body. Stimulating these points can improve energy flow and circulation.",
          "Enhances Blood Circulation: Applying pressure to the feet encourages better blood flow throughout the body, delivering more oxygen and nutrients to tissues.",
          "Reduces Stress and Anxiety: The meditative nature of focusing on foot placement while walking on pebbles, combined with the sensory experience, can help calm the mind and lower stress levels.",
          "Improves Sleep Quality: The calming effect and nerve stimulation may contribute to better relaxation and more restful sleep, making it helpful for those with insomnia."
        ],
      },
    ],
  },
};

const ProductApplications = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = productId && applicationsData[productId] 
    ? applicationsData[productId] 
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
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-16 text-center">
            <div className="inline-block mb-4">
                <Link to={`/products/${productId}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Product Details
                </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Applications of <span className="text-primary">{product.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the versatile industrial uses and technical benefits of our premium {product.name}.
            </p>
        </section>

        {/* Applications List */}
        <div className="container mx-auto px-4 space-y-24">
          {product.sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="[&::after]:content-[''] [&::after]:block [&::after]:clear-both"
            >
              {/* Image floats top, text wraps beside it then spans full width once it runs past the image */}
              <div className={`relative group overflow-hidden rounded-2xl shadow-xl float-none w-full sm:w-2/3 lg:w-3/5 mb-6 ${
                index % 2 === 0 ? "sm:float-left sm:mr-8" : "sm:float-right sm:ml-8"
              }`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
              </div>

              <h2 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-4 mb-6">
                {section.title}
              </h2>

              {/* Beside the image while it's still floated - kept narrow on purpose */}
              <ul className="space-y-4">
                {section.points.slice(0, 4).map((point, i) => {
                  const isDetailed = typeof point !== "string";
                  const Icon = isDetailed ? point.icon : CheckCircle2;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {isDetailed ? (
                        <span className="text-muted-foreground text-lg leading-snug">
                          <span className="font-heading font-semibold text-foreground">{point.title}: </span>
                          {point.description}
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-lg leading-snug mt-0.5">
                          {point}
                        </span>
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              {/* Past the image height - full width */}
              {section.points.length > 4 && (
                <ul className="clear-both space-y-4 mt-4 pt-2">
                  {section.points.slice(4).map((point, i) => {
                    const isDetailed = typeof point !== "string";
                    const Icon = isDetailed ? point.icon : CheckCircle2;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        {isDetailed ? (
                          <span className="text-muted-foreground text-lg leading-snug">
                            <span className="font-heading font-semibold text-foreground">{point.title}: </span>
                            {point.description}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-lg leading-snug mt-0.5">
                            {point}
                          </span>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
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