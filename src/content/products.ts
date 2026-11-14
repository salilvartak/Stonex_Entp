// Website copy sourced from "Final Web Site Docu 11 Nov".
// Text wrapped in **double asterisks** is rendered bold (see components/RichText.tsx).

export interface ContentPoint {
  title: string;
  description: string;
}

export interface ProductContent {
  name: string;
  description: string;
  how?: string;
  whatIs: { title: string; text: string[] }[];
  specs?: { label: string; value: string }[];
  capacity?: string;
  sizes?: string[];
  sizeNote?: string;
  packaging?: string[];
  sizeTable?: { title: string; rows: string[][] };
  typesTitle?: string;
  typesIntro?: string;
  types?: ContentPoint[];
  keyPropertiesTitle?: string;
  keyProperties?: ContentPoint[];
  processTitle?: string;
  steps?: ContentPoint[];
  applicationsTeaser?: string;
  whyChooseTitle?: string;
  whyChoose?: ContentPoint[];
  applications: {
    title: string;
    intro?: string;
    sections: { title: string; points: ContentPoint[] }[];
  };
}

export const productContent: Record<string, ProductContent> = {
  "calcite-powder": {
    "name": "Calcite Powder",
    "description": "Premium grade, high purity **Calcite Powder (CaCO₃)** is produced through advanced and controlled processing to achieve a consistent **Calcium Carbonate composition, excellent brightness, whiteness** and **uniform particle size**. Its high purity and carefully controlled physical properties contribute to efficient processing, smooth dispersion, formulation stability and consistent end product quality, making it a reliable mineral filler and functional raw material for a wide range of high performance industrial applications.",
    "how": "**STONEX ENTERPRISES** is one of India's Trusted Manufacturer & Supplier of **Premium Calcite Powder**, delivering high performance mineral solutions to diverse industries. With **over 15 years of expertise** in mineral mining, advanced grinding, processing technologies and quality management, we ensure excellence at every stage of production. Our premium grade **Calcite lumps** are sourced from our own mines and carefully selected mining sources across Rajasthan, enabling us to manufacture high quality Calcite Powder with **Purity >98.5%** and **Brightness >97%**. Supported by a robust production capacity of **5,000+ MT per month**, we are committed to providing consistent quality, superior whiteness and reliable supply that meets the evolving needs of industries application.",
    "whatIs": [
      {
        "title": "What is Calcite and Calcite Powder?",
        "text": [
          "Calcite is a naturally occurring mineral composed primarily of **Calcium Carbonate (CaCO₃)**. It is one of the most abundant minerals on Earth and the principal constituent of limestone, marble and chalk. Premium grade Calcite lumps are precision processed into high quality **Calcite powder** using advanced grinding, micronizing and classification technology. Calcite powder is known for its **high purity, excellent whiteness, smooth texture, low hardness, chemical stability and outstanding physicochemical properties**. It serves as an ideal filler, coating agent and performance enhancing additive across a wide range of industries, delivering superior quality and cost efficiency. Industries worldwide use calcite powder as a functional filler in paints and coatings, plastics, glass, paper, rubber, ceramics, agriculture and various other industrial applications."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Name",
        "value": "Calcium Carbonate (CaCO₃)"
      },
      {
        "label": "Purity (CaCO₃)",
        "value": ">98.5%"
      },
      {
        "label": "Brightness",
        "value": ">97%"
      },
      {
        "label": "Whiteness",
        "value": ">97%"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Oil Absorption",
        "value": "16 - 20 g/100g"
      },
      {
        "label": "pH Value",
        "value": "8.0 - 9.5"
      },
      {
        "label": "Mohs Hardness",
        "value": "Approximately 3"
      },
      {
        "label": "Specific Gravity",
        "value": "2.7 - 2.8 g/cm³"
      }
    ],
    "capacity": "5000+ MT Per Month",
    "sizes": [
      "500 Mesh",
      "1000 Mesh",
      "1250 Mesh",
      "2000 Mesh",
      "2750 Mesh"
    ],
    "sizeNote": "5 microns to 20 microns (as per mesh size)",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "keyPropertiesTitle": "Premium Calcite Powder Key Properties",
    "keyProperties": [
      {
        "title": "High CaCO₃ Purity & Controlled Impurity Profile",
        "description": "High calcium carbonate content with low and controlled levels of impurities supports **consistent chemical composition, predictable performance** and **reliable batch-to-batch quality** across industrial applications."
      },
      {
        "title": "High Brightness & Excellent Whiteness",
        "description": "Carefully selected high quality Calcite powder with excellent brightness and whiteness support **colour consistency, light reflectance** and a **uniform visual appearance** in finished product. Where applicable, it also contributes to opacity and overall product aesthetics."
      },
      {
        "title": "Precisely Controlled Particle Size",
        "description": "Advanced grinding, micronization and air classification technology delivers a controlled and uniform particle size distribution, supporting **consistent dispersion, efficient filler packing, smooth processing** and **uniform surface finish**."
      },
      {
        "title": "Controlled Oil Absorption",
        "description": "Controlled oil absorption helps manufacturers achieve **efficient filler loading, balanced binder** and **resin requirements,** consistent processing and cost effective formulation performance, depending on the grade and application."
      },
      {
        "title": "Low & Controlled Moisture Content",
        "description": "Low and controlled moisture helps **minimize particle agglomeration** and **feeding difficulties**, while supporting smooth handling, blending, dispersion and consistent filler incorporation into industrial formulations."
      },
      {
        "title": "Good Chemical Stability",
        "description": "Calcite provides good chemical stability under typical processing and formulation conditions, helping maintain **filler integrity, chemical consistency** and **predictable performance** across a broad range of suitable industrial applications."
      },
      {
        "title": "Controlled Mineral Hardness",
        "description": "With a **Mohs hardness of approximately 3**, Calcite Powder offers consistent mineral characteristics and predictable filler behaviour, supporting reliable processing, uniform surface quality and consistent performance across a wide range of industrial applications."
      },
      {
        "title": "Controlled Dispersion & Uniform Filler Distribution",
        "description": "A precisely controlled particle size distribution supports **uniform filler distribution, reduced agglomeration** and **consistent dispersion**, contributing to predictable mechanical, optical and surface properties in properly formulated finished products."
      }
    ],
    "processTitle": "How We Manufacture Premium Calcite Powder",
    "steps": [
      {
        "title": "Premium Raw Material Selection",
        "description": "High grade Calcite lumps with rich Calcium Carbonate (CaCO₃) content are carefully sourced from our own mines and selected trusted mining locations across Rajasthan, to ensure excellent purity, superior whiteness, consistent composition and reliable performance in final applications."
      },
      {
        "title": "Controlled Crushing & Screening",
        "description": "Selected high quality Calcite lumps undergo controlled crushing and screening to achieve the required feed size for subsequent processing. Screening helps remove oversized particles and remove surface unwanted impurities and ensure smooth processing while maintaining the natural quality of the mineral."
      },
      {
        "title": "High Precision Grinding & Micronization",
        "description": "Using advanced grinding and micronizing, Calcite lumps are processed into finely ground Calcite Powder with customized mesh sizes, controlled fineness, uniform particle distribution, excellent dispersion properties and enhanced surface performance for various industrial applications."
      },
      {
        "title": "Advanced Particle Classification",
        "description": "Advanced air classification systems enable precise particle separation and optimized particle size distribution (PSD), ensuring consistent product quality, uniform particle grading, improved handling characteristics and reliable performance across diverse industrial applications."
      },
      {
        "title": "Strict Quality Control & Laboratory Testing",
        "description": "Each production batch of Calcite Powder undergoes comprehensive quality analysis for CaCO₃ purity, brightness, whiteness, moisture content, oil absorption, particle size distribution and other essential parameters to ensure adherence to stringent industry requirements."
      },
      {
        "title": "Premium Packing & Reliable Dispatch",
        "description": "Finished Calcite Powder is packed in moisture resistant bags or jumbo bags to maintain product quality during storage and transportation. Careful handling, quality checks and efficient dispatch processes support safe delivery, consistent product condition and reliable supply to customers."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Calcite Powder delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Calcite Powder",
    "whyChoose": [
      {
        "title": "Proven Mineral Industry Expertise",
        "description": "Backed by 15+ years of expertise in mineral mining, processing, grinding technology, micronization and quality management, enabling us to deliver consistent product quality, reliable performance and dependable supply to industrial customers."
      },
      {
        "title": "Carefully Selected High Quality Calcite",
        "description": "Manufactured from carefully selected, high quality natural Calcite lumps sourced from our own mines and trusted premium grade mineral sources, providing a reliable foundation for producing high performance Calcite powder with consistent mineral characteristics."
      },
      {
        "title": "Superior Purity, Brightness & Product Consistency",
        "description": "Our premium Calcite Powder offers **>98.5% CaCO₃ Purity and >97% Brightness,** combined with controlled moisture, clean appearance and consistent particle characteristics to support excellent whiteness, formulation consistency and reliable performance across demanding industrial applications."
      },
      {
        "title": "Precision Processing & Advanced Manufacturing Technology",
        "description": "Advanced purification, grinding, micronization, air classification technology are employed to produce premium Calcite powder with controlled particle characteristics, excellent dispersion and consistent batch-to-batch quality."
      },
      {
        "title": "Flexible Particle Sizes & Large Scale Production",
        "description": "Available in a comprehensive range of **500, 1000, 1250, 2000 and 2750 mesh grades** to meet diverse industrial requirements and supported by a production capacity of **5,000+ MT per month** for efficient and dependable bulk supply."
      },
      {
        "title": "Competitive & Value Driven Pricing",
        "description": "We provide cost effective Calcite solutions with consistent premium quality, helping manufacturers optimize filler and extender costs while maintaining the required processing characteristics, formulation performance and product standards."
      },
      {
        "title": "Reliable Quality & Supply Capacity",
        "description": "Supported by robust manufacturing infrastructure, systematic quality control and process monitoring, we are equipped to fulfil regular bulk requirements, customized specifications and long term industrial supply programs with consistent quality and dependable delivery."
      }
    ],
    "applications": {
      "title": "Application of Calcite Powder",
      "intro": "Discover the versatile industrial applications and exceptional functional performance of high purity Premium Calcite Powder, engineered for consistent quality across diverse manufacturing industries.",
      "sections": [
        {
          "title": "Paint & Coating Industry",
          "points": [
            {
              "title": "High Brightness & Exceptional Whiteness",
              "description": "Manufactured from high purity Calcium Carbonate (CaCO₃), Premium Calcite Powder provides **excellent brightness and natural whiteness** for high quality paint and coating formulations. Its superior light reflectance **enhances brilliance, colour purity, opacity** and **coating uniformity**, particularly in white and pastel shades."
            },
            {
              "title": "Efficient TiO₂ Extension",
              "description": "Ultra fine Premium Calcite Powder functions as an efficient **mineral extender**, supporting optimized TiO₂ distribution and particle spacing within the coating film. This enhances **light scattering, hiding power, tint strength** and **coverage efficiency**, helping formulators optimize TiO₂ usage while maintaining desired visual performance."
            },
            {
              "title": "Low Oil Absorption & Optimized Rheology",
              "description": "Low oil absorption helps reduce the binder demand required to wet the mineral surface and supports efficient resin utilization during formulation. It contributes to **smooth flow, good leveling, improved brushability** and **sag control**, while enabling higher solids loading and optimized binder consumption and cost efficient high performance coatings."
            },
            {
              "title": "Superior Dispersion & Smooth Surface Finish",
              "description": "Precisely controlled micronization **promotes uniform dispersion** in both water based and solvent based coating systems, depending on the formulation. Reduced particle agglomeration helps minimize surface defects and supports **smooth film formation, consistent texture, improved finish quality** and reliable batch-to-batch performance."
            },
            {
              "title": "Enhanced Scrub & Abrasion Resistance",
              "description": "Controlled particle size and uniform mineral distribution contribute to improved coating film structure and surface performance, improving **film hardness, abrasion resistance, wet scrub resistance** and **mechanical durability**, making it suitable for demanding architectural and decorative coating formulations."
            },
            {
              "title": "Improved Film Durability & Weather Stability",
              "description": "High purity, controlled particle size and uniform particle distribution contribute to film integrity, durability and dimensional stability. When properly formulated, Calcite Powder can support **resistance to cracking, abrasion, moisture, temperature fluctuations** and **weathering**, contributing to longer lasting coating performance."
            },
            {
              "title": "Precisely Controlled Particle Size & Consistent Performance",
              "description": "Advanced micronization and air classification provide a controlled particle size distribution (PSD) for consistent formulation performance. This supports **uniform dispersion, oil absorption, balanced rheology, pigment extender balance, colour development, smooth film formation** and helping maintain reliable batch-to-batch consistency when properly formulated in paint & coating system."
            },
            {
              "title": "Cost Effective & Versatile Formulation",
              "description": "Premium Calcite Powder act as a **functional extender and mineral filler**, helping optimize pigment and binder usage while reducing formulation costs. It is suitable for **emulsion paints, primers, wall putties, textured paints, decorative coatings** and **industrial coatings**."
            }
          ]
        },
        {
          "title": "Paper Industry",
          "points": [
            {
              "title": "High Brightness & Excellent Whiteness",
              "description": "Premium Calcite Powder offers **high brightness, natural whiteness** and **effective light reflectance**, supporting the optical properties and visual uniformity of paper and paperboard. It contributes to **brighter, cleaner** and **more consistent sheets** with improved print appearance, making it suitable for printing, writing, coated, graphic and paperboard applications."
            },
            {
              "title": "Controlled Particle Size & Optimized PSD",
              "description": "Precisely controlled particle size and particle size distribution (PSD) promote uniform filler dispersion and efficient light scattering within the paper matrix, it support **opacity, brightness, smoothness, printability** and **consistent filler utilization**, contributing to stable and reliable papermaking performance."
            },
            {
              "title": "High CaCO₃ Purity & Low Impurities",
              "description": "**High purity Calcium Carbonate (CaCO₃)** with **low levels of silica, iron oxides** and **other** undesirable impurities, supports consistent paper quality and optical performance. Its superior purity enhances **brightness, whiteness, opacity, optical uniformity** and support chemical and process consistency."
            },
            {
              "title": "Effective Opacity & Light Scattering Performance",
              "description": "Optimized Calcite Powder particle characteristics enhance light scattering within the paper structure, helping reduce show through and improve the visual coverage of the sheet. This supports brighter, more opaque paper with enhanced print quality for printing, writing, publishing and coated paper applications."
            },
            {
              "title": "Excellent Dispersion & Filler Retention",
              "description": "Consistent particle characteristics and suitable surface properties support uniform filler dispersion and effective filler retention within the fiber network. This supports improved **sheet formation, opacity, surface smoothness** and **printability**, while promoting efficient filler utilization and consistent paper quality."
            },
            {
              "title": "Low Abrasion & Equipment Friendly Performance",
              "description": "Premium Calcite Powder with controlled particle size and low coarse particle content offers favourable abrasion characteristics. Properly processed and graded calcite powder help **minimize wear of expensive paper manufacturing equipment** during processing.This contributes to **longer equipment life, reduced maintenance costs** and improved operational efficiency."
            },
            {
              "title": "Enhanced Surface Smoothness & Printability",
              "description": "Fine and consistently graded Calcite Powder, particularly in suitable paper coating formulations, contributes to **uniform pigment distribution and improved surface characteristics**. It supports smoother paper surfaces, enhanced print uniformity, ink receptivity and improved visual appearance in printing and graphic paper applications."
            }
          ]
        },
        {
          "title": "Plastic & PVC Compound Industry",
          "points": [
            {
              "title": "Functional Filler & Formulation Cost Optimization",
              "description": "High quality **Calcite Powder (CaCO₃)** serves as a functional mineral filler in **PVC, PE, PP** and **masterbatch formulations**. Its controlled particle size and consistent quality **support optimized filler loading, partially replace polymer resin**, helping manufacturers optimize raw material costs while maintaining the required processing characteristics and end product performance"
            },
            {
              "title": "High Purity, Whiteness & Optical Performance",
              "description": "High purity **Calcium Carbonate (CaCO₃)** with a **controlled impurity profile** provides a clean and consistent mineral matrix for plastic formulations. Its high brightness and natural whiteness contribute to **improved whiteness, colour clarity and opacity**, particularly in white and light coloured compounds and can support optimization of **TiO₂ usage** depending on the formulation."
            },
            {
              "title": "Enhanced Strength & Dimensional Stability",
              "description": "Precisely processed Calcite Powder can contribute to increased the stiffness and flexural modulus of filled polymer compounds. It can also help control **shrinkage** and **deformation** during extrusion and injection molding. These characteristics are valuable in rigid PVC profiles, pipes, fittings, sheets. Performance depend on particle characteristics, filler loading, surface treatment and polymer compatibility."
            },
            {
              "title": "Controlled Particle Size & Uniform Dispersion",
              "description": "Precision grinding and controlled particle size distribution promote consistent uniform filler dispersion throughout the polymer matrix. Consistent dispersion helps **minimize agglomeration, supports stable compounding, smoother extrusion** and **molding**, contributing to consistent melt behaviour, supports uniform processing and consistent product quality."
            },
            {
              "title": "Low Oil Absorption & Efficient Filler Loading",
              "description": "Calcite Powder with low oil absorption can help reduce the demand for liquid additives requirements in suitable formulations and promotes efficient wetting of the mineral surface by polymer systems and plasticizers. When combined with appropriate particle size distribution and formulation, it can support **higher filler loading, efficient formulation cost management** and **consistent processing** performance in compatible PVC, PE and PP compounds."
            },
            {
              "title": "Surface Finish & Product Uniformity",
              "description": "Fine Calcite Powder with a controlled particle size distribution contribute to **smoother surfaces, uniform texture** and **improved visual appearance** in finished plastic products while minimizing roughness and surface imperfections in films, sheets, profiles and moulded components. Final performance depends on PSD, filler loading, dispersion, polymer system and processing conditions."
            },
            {
              "title": "Broad Polymer Application Versatility",
              "description": "Premium Calcite Powder is suitable for a wide range of polymer applications, including **PVC pipes and fittings, PE/PP compounds, automotive components, plastic furniture, films, woven sacks, packaging materials, cables, sheets, profiles and engineered polymer products**."
            }
          ]
        },
        {
          "title": "Rubber & Elastomer Industry",
          "points": [
            {
              "title": "Controlled Particle Size & Uniform Filler Dispersion",
              "description": "Precisely controlled particle size (PSD) promote uniform filler dispersion throughout the rubber matrix. Optimized particle characteristics support **efficient packing, mixing uniformity** and processing consistency while minimizing coarse particle related surface defects and supporting **consistent hardness, stiffness, tear strength, surface finish**."
            },
            {
              "title": "High Purity & Consistent Mineral Quality",
              "description": "High purity CaCO₃ with controlled impurities and low moisture provides consistent filler behaviour and reliable dispersion during rubber compounding. Controlled surface chemistry, bulk density and particle characteristics help **minimize agglomeration, processing variation** and **surface defects** while maintaining batch-to-batch consistency."
            },
            {
              "title": "Consistent Rheology & Processing Behaviour",
              "description": "Controlled particle size, surface properties and moisture help formulators manage compound **viscosity, rheology** and **processing behaviour during mixing, extrusion** and **molding**. Consistent filler characteristics support reproducible processing and improved batch-to-batch manufacturing."
            },
            {
              "title": "Controlled Hardness, Stiffness & Dimensional Stability",
              "description": "Precisely engineered Calcite powder can increase **hardness, stiffness** and **modulus** in suitable rubber and elastomer formulations. Its particle size, dispersion and filler loading can support shape retention, dimensional stability, reduced shrinkage and abrasion resistance, helping achieve a balanced combination of strength and durability."
            },
            {
              "title": "Low & Controlled Oil Absorption",
              "description": "Controlled oil absorption helps manage the liquid requirements of rubber compounds during mixing and processing. Properly selected calcite grades can support higher filler loading while maintaining manageable compound viscosity and processability, helping manufacturers optimize formulation costs without compromising required product performance."
            },
            {
              "title": "Cost Optimized Filler Loading",
              "description": "Premium Calcite provides a **cost effective mineral filler** that can partially replace higher cost polymers or other fillers in suitable formulations. Appropriate grade selection and filler loading help manufacturers optimize material costs while maintaining the required processing characteristics and finished-product performance."
            },
            {
              "title": "Versatile Applications Across Rubber & Elastomer Products",
              "description": "Calcite powder is used as a mineral filler in a wide range of rubber and elastomer products, including **sheets and mats, flooring** and **tiles, conveyor belts, hoses, gaskets, seals, profiles, cable compounds, footwear soles, automotive rubber components, molded rubber products, synthetic leather** and **industrial rubber goods.**"
            }
          ]
        },
        {
          "title": "Adhesives and Sealants Industry",
          "points": [
            {
              "title": "High Purity & Controlled Chemical Stability",
              "description": "High purity natural Calcium Carbonate (CaCO₃) with controlled impurities and consistent chemical composition supports **formulation stability and compatibility across acrylic, PVA, EVA, polyurethane, silicone and hybrid adhesive/sealant systems**. Controlled impurities help minimize batch-to-batch variations and maintain consistent processing and performance."
            },
            {
              "title": "Precisely Controlled Particle Size Distribution (PSD)",
              "description": "Precisely controlled particle size distribution (PSD) promote uniform filler dispersion and effective particle packing within the binder system. A consistent fine particle structure supports **smoother processing, uniformity and improved surface finish** while **minimizing coarse particles** that may affect product quality."
            },
            {
              "title": "High Brightness & Whiteness",
              "description": "High brightness and whiteness Calcite powder **provides a clean, consistent appearance** and **supports colour development in white and light coloured adhesive and sealant formulations**. Its optical properties support colour consistency and can also contribute to efficient pigment extension, including optimized titanium dioxide (TiO₂) utilization where the formulation and performance requirements permit."
            },
            {
              "title": "Low Moisture & Controlled Moisture Content",
              "description": "Low and consistent moisture content helps maintain raw material quality and formulation consistency. This is particularly important in **moisture sensitive polyurethane, certain silicone and silane terminated polymer (STP) systems**, where uncontrolled moisture may contribute to premature reactions, gas formation or storage instability."
            },
            {
              "title": "Controlled Rheology & Application Performance",
              "description": "Particle size, particle shape, surface area and surface treatment influence filler binder interactions and rheology behaviour. Appropriately selected Calcite Powder can help formulators achieve the desired viscosity, dispensing behaviour, shear thinning characteristics and resistance to sagging or slumping during vertical and overhead applications."
            },
            {
              "title": "Low & Controlled Oil Absorption",
              "description": "Controlled oil absorption helps regulate the interaction between the mineral surface and the binder phase. Lower and consistent absorption can support **efficient binder utilization, predictable viscosity, higher practical filler loading, and improved processing consistency**, contributing to better overall formulation efficiency and lower overall material costs."
            },
            {
              "title": "Cost Effective Filler & Formulation Optimization",
              "description": "Calcite Powder serves as a cost effective mineral filler that enables manufacturers to optimize filler loading and reduce overall formulation costs. Depending on the adhesive or sealant system, appropriate filler incorporation can partially replace more expensive formulation components while maintaining the required balance of workability, adhesion, flexibility, mechanical properties and durability."
            }
          ]
        },
        {
          "title": "Construction Product/ Chemicals Industry",
          "points": [
            {
              "title": "Optimized Particle Packing & Workability",
              "description": "Precisely controlled particle size distribution supports efficient particle packing and uniform filler distribution in cement based and dry mix formulations. Depending on the formulation, Calcite Powder can contribute to **balanced consistency, spreading, flowability and application characteristics** in tile adhesives, grouts, wall putty, skim coats and repair mortars."
            },
            {
              "title": "Dimensional Stability & Shrinkage Control",
              "description": "Controlled particle size and efficient packing enable Calcite Powder to contribute to dimensional stability by reducing the proportion of binder rich paste within the formulation. Its rigid mineral filler phase can help minimize dimensional changes and shrinkage related stresses, supporting reduced risk of cracking and surface defects, depend upon overall formulation design."
            },
            {
              "title": "High Purity, Whiteness & Colour Consistency",
              "description": "High purity natural Calcium Carbonate (CaCO₃), with excellent whiteness and low levels of unwanted impurities, **provides a clean and consistent mineral base for wall putty, white cement based products and decorative construction materials**. Its optical characteristics support uniform product appearance and colour development, particularly in white and light-coloured formulations."
            },
            {
              "title": "Controlled Particle Size & Low Oil Absorption",
              "description": "Controlled particle size distribution combined with low oil absorption promotes efficient filler incorporation and dispersion within suitable formulations. This can help optimize **binder or polymer demand, support higher filler loading, enhance packing density** and maintain desirable processing characteristics in construction chemicals, adhesives, sealants and polymer modified systems."
            },
            {
              "title": "Compatibility with Cementitious & Polymer Modified Systems",
              "description": "Calcite Powder is widely used as a mineral filler in cement based and compatible polymer modified formulations. Its calcium carbonate composition makes it suitable for many alkaline construction material systems, including **wall putty, tile adhesives, grouts, skim coats and repair mortars**. Compatibility and performance should be evaluated within the complete formulation, particularly where specialized polymers or chemical additives are involved."
            },
            {
              "title": "Functional Filler & Formulation Efficiency",
              "description": "Calcite Powder serves as a versatile functional mineral filler, allowing formulators to optimize filler loading, particle packing and raw material utilization. Its controlled quality and consistent physical properties can contribute to formulation efficiency, stable processing and consistent finished product performance, supporting cost effective construction material formulations."
            }
          ]
        }
      ]
    }
  },
  "dolomite-powder": {
    "name": "Dolomite Powder",
    "description": "Premium grade, high purity **Dolomite Powder (CaMg(CO₃)₂)** is manufactured through controlled processing to provide a consistent **Calcium & Magnesium Carbonate composition, high brightness, whiteness** and **precisely controlled particle size distribution**. Its balanced chemical composition and refined physical characteristics promote uniform dispersion, stable processing and consistent end product performance, making it a dependable mineral filler and functional raw material for a broad range of high performance industrial applications.",
    "how": "**STONEX ENTERPRISES** is one of India's trusted manufacturers and suppliers of **Premium grade Dolomite Powder**. We source premium quality Dolomite lumps, rich in high purity **Calcium & Magnesium Carbonate (CaMg(CO₃)₂)**, from our own and carefully selected mines across Rajasthan to ensure superior raw material quality. Backed by over 15 years of expertise in mineral mining, processing, advanced grinding technologies and quality management, we are committed to delivering superior product quality and reliable supply. Utilizing advanced processing technologies and stringent quality control measures, we manufacture high performance Dolomite Powder with **Purity >98.5%** and **Brightness >96%**. With a production capacity of **4,000+ MT per month**, we consistently deliver products with excellent whiteness, uniform quality and reliable performance, meeting the highest industry standards across a wide range of industrial applications.",
    "whatIs": [
      {
        "title": "What is Dolomite and Dolomite Powder?",
        "text": [
          "Dolomite is a naturally occurring carbonate mineral composed of **Calcium Magnesium Carbonate (CaMg(CO₃)₂)**, featuring a unique crystalline structure and a balanced **calcium & magnesium composition**. Formed through the process of dolomitization in sedimentary environments, dolomite deposits are created when magnesium rich fluids replace a portion of calcium in pre-existing limestone formations. **Dolomite Powder** is the finely processed and micronized form of natural Dolomite lumps, manufactured through advanced crushing, grinding and classification processes to achieve precise particle size, superior whiteness and consistent quality. Depending on its grade, particle size, surface treatment and purity, dolomite powder is widely used as a functional mineral filler, extender, coating agent and performance enhancing additive across various industries such **as paints and coatings, plastics and PVC, rubber, construction materials, ceramics and sanitaryware, glass, adhesives and sealants, agriculture, and animal nutrition**."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Name",
        "value": "Calcium Magnesium Carbonate (CaMg(CO₃)₂)"
      },
      {
        "label": "Purity (CaMg(CO₃)₂)",
        "value": ">98.5%"
      },
      {
        "label": "Brightness",
        "value": ">96%"
      },
      {
        "label": "Whiteness",
        "value": "95 - 97%"
      },
      {
        "label": "Calcium Carbonate (CaCO₃)",
        "value": "50 - 55%"
      },
      {
        "label": "Magnesium Carbonate (MgCO₃)",
        "value": "40 - 44%"
      },
      {
        "label": "Silica (SiO₂)",
        "value": "<1.0 %"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Oil Absorption",
        "value": "20 - 25 g/100g"
      },
      {
        "label": "pH Value",
        "value": "8.5 - 9.5"
      },
      {
        "label": "Mohs Hardness",
        "value": "Approximately 3.5 - 4"
      },
      {
        "label": "Specific Gravity",
        "value": "2.85 - 2.90 g/cm³"
      }
    ],
    "capacity": "4000+ MT Per Month",
    "sizes": [
      "200 Mesh",
      "300 Mesh",
      "400 Mesh",
      "500 Mesh",
      "1000 Mesh"
    ],
    "sizeNote": "10 microns to 74 microns (as per mesh size)",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "keyPropertiesTitle": "Premium Dolomite Powder Key Properties",
    "keyProperties": [
      {
        "title": "High Purity & Controlled Chemical Composition",
        "description": "High purity dolomite with a consistent **CaMg(CO₃)₂ mineral composition** provides a reliable source of calcium and magnesium carbonates, supporting consistent formulation chemistry and predictable performance across industrial applications across industrial formulations."
      },
      {
        "title": "High Brightness & Superior Whiteness",
        "description": "High brightness and whiteness make premium Dolomite Powder suitable for white and light coloured formulations. Its optical characteristics support the desired colour appearance and help manufacturers achieve consistent visual quality in **paints, coatings, plastics, ceramics and construction materials**."
      },
      {
        "title": "Controlled Particle Size Distribution",
        "description": "Carefully processed and classified Dolomite Powder offers a controlled particle size distribution (PSD), supporting **uniform filler distribution, efficient particle packing** and **smooth processing** and **consistent surface finish.** Selecting the appropriate particle size helps manufacturers meet the specific performance requirements of their formulations."
      },
      {
        "title": "Consistent Processing & Formulation Performance",
        "description": "Consistent mineral characteristics help manufacturers achieve **reliable mixing, filler incorporation and processing behaviour**. When matched to the formulation, premium Dolomite Powder can support uniform material distribution and repeatable production results across suitable industrial applications."
      },
      {
        "title": "Low & Controlled Moisture Content",
        "description": "Low and controlled moisture content **supports reliable storage, handling and material feeding** while helping **minimize moisture related processing variations**. It also assists manufacturers in maintaining consistent raw material conditions during formulation and production."
      },
      {
        "title": "Controlled Oil Absorption & Formulation Optimization",
        "description": "Controlled oil absorption can help optimize **binder** and **resin requirements**, improves filler loading efficiency, supports controlled rheology and contributing to more economical formulations when matched appropriately to the application."
      },
      {
        "title": "Bulk Density & Efficient Particle Packing",
        "description": "Optimized particle characteristics and bulk density promote **efficient particle packing, reduced voids between particles, improved filler loading** and **consistent formulation behavior**, supporting uniformity in finished products."
      },
      {
        "title": "Moderate Mineral Hardness & Processing Suitability",
        "description": "With a typical **Mohs hardness of approximately 3.5 - 4**, Dolomite offers a balance of mineral hardness and processability for many filler applications. Its suitability for grinding, handling and end use performance depends on particle size, equipment configuration and the requirements of the finished product."
      },
      {
        "title": "Cost Effective Functional Filler",
        "description": "Dolomite Powder provides manufacturers with an opportunity to **optimize raw material costs and increase mineral filler loading** in suitable formulations. With appropriate grade selection and formulation testing, it can partially replace other mineral fillers while maintaining the required processing characteristics and finished-product performance."
      }
    ],
    "processTitle": "How We Manufacture Premium Dolomite Powder",
    "steps": [
      {
        "title": "Premium Raw Material Selection",
        "description": "High purity Dolomite lumps with a consistent Calcium and Magnesium Carbonate composition are carefully selected from our own mines and trusted premium mining sources, helping ensure consistent quality, reliable processing and dependable product performance."
      },
      {
        "title": "Controlled Crushing & Screening",
        "description": "Selected high quality Dolomite lumps are efficiently crushed and screened to achieve a controlled feed size. Screening helps removing oversize particles and unwanted surface impurities and ensure smooth processing while maintaining the natural quality of the mineral."
      },
      {
        "title": "Advanced Grinding & Micronization",
        "description": "The crushed Dolomite lumps is processed through advanced grinding, micronization and air classification technologies to achieve finely ground Dolomite Powder with customized mesh sizes, controlled fineness, uniform particle distribution, excellent dispersion properties and enhanced surface performance for various industrial applications."
      },
      {
        "title": "Quality Testing & Assurance",
        "description": "Each production of Dolomite powder batch undergoes stringent quality testing for chemical composition, brightness, whiteness, particle size distribution, moisture content and other critical parameters, including relevant CaO, MgO and impurity levels, to ensure compliance with defined product specifications and customer requirements."
      },
      {
        "title": "Professional Packing & Dispatch",
        "description": "Finished Dolomite powder is packed in moisture resistant bags or jumbo bags, according to customer and application requirements. Strict quality control and handling procedures are followed during packing, storage and dispatch to support product integrity, safe handling and reliable delivery."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Dolomite Powder delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Dolomite Powder",
    "whyChoose": [
      {
        "title": "Trusted Industry Expertise",
        "description": "Backed by 15+ years of experience in mineral mining, processing, grinding, micronization and quality management, we combine technical expertise with robust manufacturing capabilities to produce consistent, high performance Dolomite Powder for demanding industrial applications."
      },
      {
        "title": "Carefully Selected Premium Dolomite Raw Material",
        "description": "Manufactured from carefully selected high quality natural Dolomite lumps, sourced from our own mines and trusted premium grade mineral sources, providing a reliable foundation for producing high performance Dolomite powder with consistent mineral characteristics."
      },
      {
        "title": "High Purity, Brightness & Consistent CaO–MgO Chemistry",
        "description": "Our Premium Dolomite Powder is produced with h**i**gh mineral purity, excellent brightness and controlled CaO-MgO chemistry, together with controlled moisture and impurity levels. This consistency supports reliable formulation performance, colour stability and predictable processing across a wide range of industrial applications."
      },
      {
        "title": "Precision Processing & Advanced Manufacturing Technology",
        "description": "Advanced purification, grinding, micronization, air classification technology are employed to produce Dolomite powder with controlled particle characteristics, excellent dispersion, low moisture and consistent batch-to-batch quality."
      },
      {
        "title": "Wide Particle Size Range & High Production Capability",
        "description": "Available in a comprehensive **range of 200, 300, 500 and 1000 mesh grades**, our Dolomite powder can be tailored to diverse industrial requirements. With a **production capacity of 4,000+ MT per month**, we are equipped to support both regular and large volume industrial requirements."
      },
      {
        "title": "Competitive & Value Driven Pricing",
        "description": "We provide cost effective Dolomite solutions with consistent premium quality, helping manufacturers optimize filler and extender costs while maintaining the required processing characteristics, formulation performance and product standards."
      },
      {
        "title": "Consistent Quality & Dependable Industrial Supply",
        "description": "Supported by systematic quality control, process monitoring and robust manufacturing infrastructure, we provide consistent Dolomite powder quality and are equipped to meet regular bulk requirements, customized specifications and long term industrial supply programs with dependable production and supply continuity."
      }
    ],
    "applications": {
      "title": "Application of Dolomite Powder",
      "intro": "Explore the versatile industrial applications and reliable functional performance of high purity Premium Dolomite Powder, engineered for consistent quality across diverse manufacturing industries.",
      "sections": [
        {
          "title": "Paint, Coating & Wall Putty Industry",
          "points": [
            {
              "title": "High Purity, Whiteness & Colour Consistency",
              "description": "High purity Dolomite with **excellent whiteness and controlled levels of iron and other colouring impurities** provides a clean and consistent mineral base for paints, coatings and wall putty. Support consistent colour development, clean appearance and uniform finished surfaces, while functioning as an effective mineral extender in white and light coloured formulations."
            },
            {
              "title": "Controlled Oil Absorption & Filler Loading",
              "description": "Premium Dolomite Powder with **low and consistently controlled oil absorption** promotes **efficient binder wetting** and **uniform particle dispersion**, helping formulators achieve an effective balance between filler loading, binder demand and viscosity. This **supports smooth processing, efficient binder utilization, formulation flexibility and consistent performance in paints, coatings and wall putty**."
            },
            {
              "title": "Hardness & Surface Wear Resistance",
              "description": "With a typical **Mohs hardness of approximately 3.5–4.0**, Dolomite can contribute to the mechanical performance for appropriately formulated coatings and wall putties. Its hardness, controlled particle size and good dispersion can help create a dense, well packed filler structure, supporting **surface hardness, scrub resistance** and **resistance to routine abrasion** and **durability**, depend on binder selection, filler loading and overall formulation design."
            },
            {
              "title": "Filler Packing & Dimensional Stability",
              "description": "A suitably designed particle size distribution of Dolomite powder support **efficient particle packing and uniform filler distribution in suitably formulated systems.** In cementitious, plaster and dry mix applications, this can contribute to dimensional stability and controlled shrinkage, r**educed risk of micro flaking, peeling and hairline cracking**, supporting more consistent surface integrity in appropriate formulation design."
            },
            {
              "title": "Controlled Particle Size, Dispersion & Application Performance",
              "description": "Precisely micronized and classified Dolomite Powder provides controlled particle size distribution and consistent grading, helping manufacturers achieve **uniform filler distribution and predictable formulation behaviour**. The appropriate grade can **support smooth mixing, manageable viscosity and uniform application**, contributing to a consistent surface finish in paints, coatings and wall putty."
            },
            {
              "title": "Weathering & Surface Durability",
              "description": "Dolomite's Calcium & Magnesium carbonate composition, mineral stability and hardness can contribute to surface durability in suitably formulated interior and exterior coatings. Its use as a mineral extender can support **resistance to routine surface wear and weathering**, with overall durability depending on the complete coating formulation, binder system and exposure conditions."
            }
          ]
        },
        {
          "title": "Iron & Steel Metallurgy Industry",
          "points": [
            {
              "title": "High CaO & MgO for Basic Slag Formation",
              "description": "Metallurgical grade Dolomite provides a controlled source of **Calcium Magnesium Oxide**, depending on its processing stage and chemical composition. These constituents contribute to **slag formation and basicity adjustment during steel making**. The Magnesium oxide can also help maintain slag compatibility with basic refractory linings when appropriately formulated within the steelmaking process."
            },
            {
              "title": "Consistent Chemistry & Controlled Impurities",
              "description": "Carefully processed Dolomite is supplied with controlled **CaO** and **MgO** levels and **closely monitored SiO₂, Fe₂O₃, Al₂O₃ and other impurities**. This controlled chemical profile helps steelmakers **maintain stable slag composition, control unwanted oxide inputs** and **achieve reliable performance** during metallurgical operations."
            },
            {
              "title": "Precisely Controlled Particle Size",
              "description": "Premium Dolomite powder is carefully milled and classified to achieve consistent particle size**, ensuring smooth feeding, easy handling** and **predictable reaction during metallurgical processing**. The controlled particle size promotes **efficient calcination, better material utilization** and **uniform interaction with slag**, while helping minimize excessive dust generation and unreacted material."
            },
            {
              "title": "Refractory Performance at High Temperatures",
              "description": "Calcined and dead burned Dolomite, composed primarily of CaO and MgO is used in doloma based refractory materials designed to withstand extreme temperatures and exposure to basic steelmaking slags. Its refractory characteristics make it suitable for manufacturing doloma refractory bricks, ramming mixes and fettling materials used in steelmaking furnaces and other high temperature metallurgical applications."
            },
            {
              "title": "Controlled Calcination & Reactivity",
              "description": "Consistent raw material chemistry and particle size help support controlled calcination of dolomite into calcium oxide and magnesium oxide. Controlled calcination supports **predictable reactivity, efficient conversion** and **consistent slag formation**, contributing to stable steelmaking operations."
            }
          ]
        },
        {
          "title": "Construction Material Industry",
          "points": [
            {
              "title": "High Mineral Purity & Controlled Chemical Composition",
              "description": "Premium Dolomite Powder, composed of calcium magnesium carbonate (CaMg(CO₃)₂), offers consistent mineral composition with controlled levels of silica, iron oxides, clay and other undesirable impurities. Its stable chemical characteristics support predictable formulation behaviour, reliable raw-material quality and batch-to-batch consistency in cement based construction products including mortar, plaster, tile adhesives, grouts and wall putty."
            },
            {
              "title": "Precisely Controlled Particle Size & Optimized Particle Packing",
              "description": "A carefully controlled particle size distribution (PSD) enables Dolomite Powder to **function as a mineral filler within cementitious formulations**. Properly selected fine particles can fill spaces between larger cement and aggregate particles, **improving particle packing, reducing internal voids and enhance mix consistency**. Optimized fineness can also support better surface finish and formulation efficiency."
            },
            {
              "title": "Improved Workability & Formulation Consistency",
              "description": "Optimized fineness and particle characteristics help manufacturers regulate the consistency and handling properties of dry mix and cement based formulations. When properly proportioned with cement, polymers, cellulose ethers and other additives, Dolomite Powder can support **uniform mixing, smooth spreading, easier application and consistent finishing** while helping maintain mix stability and minimize segregation in suitable concrete, mortar, plaster and dry mix applications."
            },
            {
              "title": "Micro Filling Effect & Pore Structure Optimization",
              "description": "Fine Dolomite Powder can contribute to the micro filling effect by occupying spaces between larger particles in appropriately designed cementitious systems. This helps **optimize particle packing, improve matrix uniformity and refine the internal pore structure.** When appropriately formulated these can help **reduce interconnected porosity, limit water penetration and fluid ingress,** and support durability and long term performance of construction materials."
            },
            {
              "title": "High Whiteness & Mineral Filler Efficiency",
              "description": "High whiteness, low impurity Dolomite Powder functions as an efficient mineral filler in **wall putty, dry mix mortars, skim coats, grouts, tile adhesives and selected construction coatings**. Its consistent quality and controlled fineness help manufacturers achieve **uniform texture, smooth surface finish, reliable product quality and efficient formulation economics**."
            }
          ]
        },
        {
          "title": "Plastic, Polymer & PVC Compound Industry",
          "points": [
            {
              "title": "Enhanced Stiffness, Hardness & Rigidity",
              "description": "Premium Dolomite Powder acts as a functional mineral filler that can **increase stiffness, flexural modulus and surface hardness** in properly formulated plastic and PVC compounds. Its rigid mineral structure supports to **reduce shrinkage, mechanical stress and deformation**, making it suitable for rigid PVC pipes, profiles, sheets, panels, and injection moulded components."
            },
            {
              "title": "Improved Dimensional Stability & Reduced Shrinkage",
              "description": "Dolomite Powder helps control dimensional changes in polymer compounds by reducing overall resin content and modifying the thermal expansion and shrinkage characteristics of the material. At appropriate filler loading, it can help **minimize moulding shrinkage, warping and dimensional variations**, supporting better dimensional consistency in finished plastic products."
            },
            {
              "title": "Controlled Particle Size for Superior Dispersion",
              "description": "Precisely controlled particle size distribution (PSD) promotes uniform filler distribution throughout PVC, PP, PE and other polymer matrices. Fine, consistent particles help minimize agglomeration and coarse particle defects, **supporting homogeneous compounding**, **consistent processing behaviour** and **improved surface finish** in finished products."
            },
            {
              "title": "High Mineral Purity & Consistent Chemical Composition",
              "description": "Premium Dolomite with **high carbonate purity** and **controlled levels of SiO₂, Fe₂O₃, Al₂O₃** and **other impurities** provides consistent mineral characteristics during polymer compounding. Its natural calcium magnesium carbonate CaMg(CO₃)₂ composition helps improve **rigidity, hardness, dimensional stability**, while controlled purity supports stable processing characteristics, **predictable filler performance, and consistent finished product quality**."
            },
            {
              "title": "Low Moisture & Improved Polymer Compatibility",
              "description": "Premium Dolomite with low and controlled moisture content supports **consistent compounding**, **smooth processing** and **uniform filler dispersion**. Stearic acid coated Dolomite Powder offers improved hydrophobicity and compatibility with suitable PVC and polymer formulations, helping reduce moisture related **defects such as voids, pinholes** and **surface imperfections in finished products**."
            },
            {
              "title": "Cost-Effective Filler & Resin Optimization",
              "description": "Dolomite Powder provides an **economical mineral filler** solution for partially replacing polymer resin and optimizing compound formulations. Its balanced particle characteristics and functional properties allow manufacturers to achieve targeted **stiffness, dimensional stability and surface characteristics** while optimizing material costs at appropriately designed filler-loading levels."
            }
          ]
        },
        {
          "title": "Glass Industry",
          "points": [
            {
              "title": "Balanced CaO & MgO Contribution",
              "description": "Premium Dolomite provides a consistent source of Calcium Oxide (CaO) and Magnesium Oxide (MgO) during glass melting process. Its controlled chemical composition **supports accurate batch formulation, uniform glass composition, glass stability, durability and controlled melt properties**. Its balanced oxide contributing to reliable glass manufacturing and formulation."
            },
            {
              "title": "Controlled Melt Properties & Processing Behaviour",
              "description": "The CaO and MgO contributed by dolomite act as network modifying and stabilizing oxides in silicate glass systems. This proportion i**nfluence melt structure, viscosity and flow behaviour** of glass melt at processing temperature. Consistent dolomite quality helps support **predictable melting, refining** and **forming conditions** when appropriately balanced within the overall glass formulation."
            },
            {
              "title": "Controlled Liquidus & Crystallization Control",
              "description": "MgO and CaO influence the **liquidus temperature** and **crystallization behaviour** of glass melts. Properly controlled oxide contributions help glass manufacturers optimize batch composition and manage the risk of unwanted crystallization during melting and forming, supporting consistent glass homogeneity and production quality."
            },
            {
              "title": "Low Iron & Controlled Impurities Levels",
              "description": "Glass grade Dolomite with low iron oxide (Fe₂O₃) content and controlled level of other impurity helps **minimize unwanted colouration and maintain optical clarity**. This is particularly important in the production of clear and high transmission glass, where colour consistency and optical performance are critical, especially in **automotive, solar and high transmission glass applications**."
            },
            {
              "title": "Contribution to Glass Chemical Durability & Stability",
              "description": "The CaO and MgO supplied by dolomite influence the chemical structure and stability of the glass network. When appropriately balanced with other glass forming and modifying oxides, they contribute to the **desired chemical durability**, helping manufacturers achieve the required **resistance to moisture, aqueous exposure and environmental conditions**."
            },
            {
              "title": "Consistent Raw Material for Diverse Glass Applications",
              "description": "Premium Dolomite powder is used in a wide range of glass manufacturing processes. Depend on appropriate formulation, it is suitable for **float glass, container glass, architectural glass, automotive glass, solar glass, pharmaceutical glass, tableware, fiberglass and selected specialty glass applications**, subject to the specific batch chemistry and quality requirements."
            }
          ]
        },
        {
          "title": "Ceramic Industry",
          "points": [
            {
              "title": "Controlled CaO & MgO Contribution",
              "description": "High purity Dolomite provides a consistent source of Calcium and Magnesium, which convert in to calcium oxide (CaO) and magnesium oxide (MgO) during firing. It helps manufacturers control **ceramic body and glaze chemistry, maintain accurate batch formulation and reducing the need for separate calcium and magnesium bearing raw materials**."
            },
            {
              "title": "Controlled Fluxing & Sintering Behaviour",
              "description": "Premium Dolomite provides a controlled source of CaO and MgO, which are released during firing and participate in **fluxing reactions, liquid phase formation and sintering** within suitable ceramic formulations. When properly balanced with silica, alumina and other fluxing constituents, dolomite can support **efficient densification, firing response and controlled vitrification** of ceramic bodies."
            },
            {
              "title": "Controlled Particle Size & Firing Reactivity",
              "description": "Precisely processed Dolomite powder with controlled particle size distribution **promotes uniform mixing, homogeneous distribution** and **more consistent reaction throughout the ceramic body**. Appropriate fineness also **helps manage carbonate decomposition** and reducing the risk of defects associated with coarse or poorly distributed carbonate particles."
            },
            {
              "title": "High Whiteness & Low Colouring Impurities",
              "description": "Ceramic grade Dolomite with high inherent whiteness, controlled iron oxide (Fe₂O₃) and other colouring impurities helps **minimize unwanted colouration after firing**. This is particularly important in **white bodied ceramics, porcelain tiles** and **sanitaryware production**, where cleaner fired colour consistency and visual quality are critical."
            },
            {
              "title": "Controlled Fired Phase Development",
              "description": "During firing, CaO and MgO from dolomite react with other ceramic constituents such as SiO₂ and Al₂O₃. Depending on the overall composition and firing conditions, these reactions can contribute to the **development of calcium and magnesium bearing crystalline phases, including anorthite and diopside**. These phases influence the **microstructure and physical characteristics** of the finished ceramic body."
            },
            {
              "title": "MgO Contribution to Glaze Surface Effects",
              "description": "Dolomite provides a useful source of MgO for selected ceramic glaze formulations. Depending on the glaze chemistry, firing temperature and cooling conditions, MgO can **influence melt viscosity, crystallization and surface characteristics**, supporting the development of matte, satin and silky finishes."
            },
            {
              "title": "Thermal Expansion & Body Glaze Compatibility",
              "description": "CaO and MgO influence the thermal expansion behaviour and crystalline phase composition of ceramic bodies and glazes. When appropriately balanced within the formulation, dolomite can help manufacturers achieve **better body glaze compatibility and better thermal compatibility**, helping **minimize glaze defects such as crazing and shivering** and supporting controlled behaviour during heating and cooling."
            },
            {
              "title": "Consistent Raw Material for Ceramic Manufacturing",
              "description": "With controlled **CaO & MgO chemistry, particle size distribution, whiteness** and **impurity levels**, Dolomite can be used in selected **ceramic bodies, wall and floor tiles, sanitaryware, tableware, glazes** and **other ceramic formulations** where consistent firing behaviour and controlled mineral chemistry are required."
            }
          ]
        },
        {
          "title": "Agriculture Industry",
          "points": [
            {
              "title": "Balanced Calcium & Magnesium Nutrient Source",
              "description": "High purity Dolomite provides Calcium (Ca) and Magnesium (Mg) in a naturally occurring carbonate form. Calcium contributes to **cell wall development, root growth** and **plant structural strength**, while magnesium is an essential component of **chlorophyll formation, supports photosynthesis process** and **enzyme activation**. It is suitable for fertilizers, soil amendments and crop nutrition formulations."
            },
            {
              "title": "Effective Soil Acidity Neutralization & pH Management",
              "description": "Premium Dolomite powder contains Calcium and Magnesium carbonates that **neutralize soil acidity** and **help raise the pH of acidic soils** toward a more suitable range. By neutralizing excess acidity, it helps create a **more favorable root zone environment** and improved conditions for crop growth and nutrient uptake."
            },
            {
              "title": "Improved Phosphorus Availability & Reduced Aluminium Toxicity",
              "description": "Excessive soil acidity can restrict phosphorus availability and increase the solubility of potentially toxic aluminium and manganese. Dolomite **helps correct soil acidity, reducing these adverse conditions** and supporting a more favourable chemical environment for root development and phosphorus utilization."
            },
            {
              "title": "High Purity & Consistent Composition",
              "description": "High quality agricultural Dolomite Powder offer consistent calcium carbonate and magnesium carbonate content, controlled insoluble impurities and reliable chemical characteristics. Consistent mineral composition **supports predictable nutrient contribution, accurate formulation and dependable performance in fertilizer and soil amendment manufacturing**."
            },
            {
              "title": "Controlled Particle Size for Efficient Soil Reactivity",
              "description": "Precisely controlled particle size provides a **greater reactive surface area, allowing dolomite to interact more efficiently with acidic soil**. Finer grades powder generally provide faster acid neutralization response than coarser particles, while the appropriate particle size should be selected according to the required reaction rate and agronomic application."
            },
            {
              "title": "Controlled Moisture & Consistent Processing Quality",
              "description": "Low and controlled moisture content, uniform fineness and consistent physical characteristics **support efficient handling, storage, blending and formulation**. These properties help agricultural input manufacturers maintain product uniformity, reliable processing and consistent quality across production batches."
            }
          ]
        },
        {
          "title": "Animal Nutrition Industry",
          "points": [
            {
              "title": "Natural Source of Essential Calcium & Magnesium",
              "description": "Premium feed grade Dolomite provides a natural source of Calcium (Ca) and Magnesium (Mg) in carbonate form, making it suitable for use as a mineral raw material in **animal feeds, mineral mixtures and feed supplements**. Calcium support **normal bone development, skeletal strength, teeth formation and muscle function**, while magnesium plays an essential role in **enzyme activity, energy metabolism, neuromuscular function** and normal mineral balance."
            },
            {
              "title": "Carbonate Based Acid Neutralizing Properties",
              "description": "Dolomite possesses natural acid neutralizing capacity due to its calcium and magnesium carbonate composition. Depending on its mineral reactivity, particle size, solubility and dietary inclusion level, it may contribute to acid neutralizing activity in appropriately formulated ruminant diets. Its suitability and effectiveness should be evaluated as part of the overall mineral and rumen buffering programme."
            },
            {
              "title": "Consistent Mineral Composition & Quality Control",
              "description": "High purity feed grade Dolomite offers a controlled and consistent supply of Calcium and Magnesium, with appropriate limits on unwanted impurities and contaminants. Consistent chemical composition, particle size specifications and batch wise quality testing help feed manufacturers **achieve accurate mineral formulation, uniform product quality and reliable batch-to-batch performance**."
            },
            {
              "title": "Controlled Particle Size for Feed Formulation",
              "description": "Dolomite supplied in a controlled and appropriate particle size range can support consistent incorporation and distribution within mineral mixtures and formulated feeds. Particle size **influences mixing uniformity, handling characteristics, dissolution behaviour** and overall formulation performance, making particle size control an important quality parameter for feed grade applications."
            }
          ]
        },
        {
          "title": "Rubber Industry",
          "points": [
            {
              "title": "Enhanced Hardness & Stiffness",
              "description": "Precisely processed Dolomite powder can contribute to **increase hardness, stiffness and modulus in properly formulated rubber compounds**, supporting consistent mechanical performance. Its mineral filler characteristics help manufacturers adjust modulus and load bearing properties to meet the mechanical requirements of different rubber products."
            },
            {
              "title": "Dimensional Stability & Shape Retention",
              "description": "Dolomite's rigid mineral particles can help **control deformation and improve dimensional stability in filled rubber compounds**. Depending on particle size, filler loading and formulation, this can support **better compression performance and shape retention** in molded products and other filled rubber applications."
            },
            {
              "title": "Controlled Particle Size & Uniform Dispersion",
              "description": "A fine, consistent particle size distribution and controlled surface characteristics promote more uniform incorporation and dispersion throughout the rubber matrix. Controlled particle characteristics and effective mixing help **minimize agglomeration, support compound uniformity and reliable processing during extrusion, calendaring and molding**."
            },
            {
              "title": "Processing & Batch Consistency",
              "description": "Consistent mineral quality, controlled particle characteristics and low moisture content help maintain predictable raw material behaviour during rubber compounding. These properties support **repeatable mixing, uniform compound process** and **material consistency**. Consistent mineral quality helps manufacturers maintain repeatable batch-to-batch performance across extrusion, calendaring and molding operations."
            },
            {
              "title": "Cost Effective Mineral Filler",
              "description": "Dolomite provides an economical mineral filler option for suitable rubber formulation. It can partially replace other mineral fillers or adjust the overall filler composition. Depending on the formulation, it can help optimize **filler loading, density, hardness and overall compound economics** while maintaining the required performance characteristics."
            },
            {
              "title": "Versatile Rubber Applications",
              "description": "Dolomite is used as a mineral filler in rubber applications including **conveyor belts, hoses, rubber sheets, footwear soles, gaskets, seals, floor mats, cable compounds, automotive components and molded rubber products.** Its suitability depends on the required mechanical properties and formulation specifications."
            }
          ]
        }
      ]
    }
  },
  "quartz-powder": {
    "name": "Quartz Powder",
    "description": "Manufactured from premium quality Quartz, our **high purity Quartz Powder** offers **excellent chemical stability, high whiteness** and **precisely controlled particle size** for consistent performance across demanding industrial applications. Its high purity mineral composition, uniform particle size distribution and controlled physical properties make it a reliable functional mineral filler for a wide range of industrial formulations.",
    "how": "**STONEX ENTERPRISES** is one of India's trusted manufacturers and suppliers of **Premium Quartz Powder**, delivering high performance silica mineral solutions for a wide range of industrial applications. With over **15 years of expertise** in mineral mining, advanced grinding, micronizing technology, processing and quality management, we ensure exceptional quality at every stage of production. Our premium grade Quartz Powder is manufactured from carefully selected high grade Quartz lumps sourced from our own and trusted mines across Rajasthan, ensuring superior raw material quality, chemical consistency and dependable supply. Through state-of-the-art manufacturing and micronizing processes, we produce high purity Quartz Powder with **SiO₂ Purity >99.6%** and **Brightness up to 96%**, offering a uniform particle size distribution, exceptional whiteness, excellent chemical stability and outstanding performance across diverse industrial applications. Backed by a robust production capacity of **4,000+ MT per month.**",
    "whatIs": [
      {
        "title": "What is Quartz and Quartz Powder?",
        "text": [
          "**Quartz** is a naturally occurring crystalline mineral composed primarily of **silicon dioxide (SiO₂)** and is one of the most abundant and widely distributed minerals in the Earth's crust. It is an important forming minerals, found naturally in **igneous, sedimentary** and **metamorphic rocks**. **Quartz Powder** is the finely ground form of high quality Quartz lumps, processed through controlled crushing, grinding and classification technologies to achieve the required particle size, purity and consistency for demanding industrial applications. Quartz is renowned for its **exceptional hardness of approximately 7 on the Mohs scale,** high chemical purity, excellent thermal stability, superior abrasion resistance, and low chemical reactivity. Crystalline quartz also exhibits piezoelectric property, meaning it can generate an electrical charge when subjected to mechanical stress. These exceptional physical, chemical, thermal and electrical properties make quartz and quartz powder highly versatile and reliable industrial minerals. Quartz occurs naturally in several varieties, including **clear, milky, smoky, rose** and **amethyst quartz**, with variations in colour, transparency and crystal characteristics. Owing to its excellent performance, durability and versatility, Quartz Powder is widely used across numerous industries, including **glass manufacturing, ceramics, paints & coatings, engineered stone & countertops, construction materials, foundries, electronics, refractories, adhesives & sealants, plastic & polymers and specialty chemicals.**"
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Formula",
        "value": "Silicon Dioxide (SiO₂)"
      },
      {
        "label": "Colour",
        "value": "White to Snow White"
      },
      {
        "label": "Purity (SiO₂)",
        "value": ">99.6%"
      },
      {
        "label": "Brightness",
        "value": "Up to 96%"
      },
      {
        "label": "Whiteness",
        "value": "96%"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Mohs Hardness",
        "value": "7"
      },
      {
        "label": "Specific Gravity",
        "value": "2.6 - 2.7 g/cm³"
      },
      {
        "label": "pH Value",
        "value": "6.5 - 7.5"
      }
    ],
    "capacity": "4000+ MT Per Month",
    "sizes": [
      "200 Mesh",
      "300 Mesh",
      "400 Mesh",
      "500 Mesh",
      "700 Mesh"
    ],
    "sizeNote": "10 to 74 (as per mesh size)",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "keyPropertiesTitle": "Premium Quartz Powder Key Properties",
    "keyProperties": [
      {
        "title": "High SiO₂ Purity & Controlled Impurity Profile",
        "description": "High **silica dioxide (SiO₂)** content with a **controlled level of iron oxide (Fe₂O₃), alumina (Al₂O₃)** and **other impurities** ensures consistent chemical composition, supports predictable processing, formulation stability and reliable end product quality across demanding industrial applications."
      },
      {
        "title": "High Whiteness & Consistent Colour Performance",
        "description": "High purity, naturally bright quartz with controlled colouring impurities provides **good whiteness, brightness and optical consistency**. These characteristics help maintain uniform colour appearance and visual quality in white, light-coloured and mineral based formulations."
      },
      {
        "title": "Precisely Controlled Particle Size Distribution",
        "description": "A controlled particle size distribution promote **uniform dispersion, efficient particle packing and consistent processing characteristics**. Fine Quartz grades can contribute to smoother surface characteristics and controlled filler distribution in coatings, plastics and engineered materials."
      },
      {
        "title": "Optimized Oil Absorption & Binder Demand",
        "description": "Carefully controlled particle size and morphology help manage **oil absorption, resin or binder requirements**. This enables manufacturers to optimize filler loading, manage formulation costs and achieve balanced processing characteristics according to application requirements."
      },
      {
        "title": "Low Moisture Content & Consistent Handling",
        "description": "Low and controlled moisture content supports **good powder handling, storage stability** and **consistent dry blending**. Maintaining appropriate moisture levels also helps minimize moisture related agglomeration and variation during storage, transportation and production."
      },
      {
        "title": "Chemical Inertness & Environmental Durability",
        "description": "Quartz exhibits **high chemical stability and resistance to weathering and many common chemical environments**. Its relatively inert nature makes it suitable for applications requiring mineral fillers with good long-term chemical and physical stability."
      },
      {
        "title": "Thermal Stability & Dimensional Reliability",
        "description": "Quartz offers good thermal stability under many industrial processing conditions, making it suitable for selected ceramic, glass, foundry and other mineral based applications. Its thermal behaviour should be considered when designing formulations involving elevated temperatures."
      },
      {
        "title": "High Hardness & Abrasion Resistance",
        "description": "With a **Mohs hardness of approximately 7**, quartz provides **excellent mineral hardness and resistance to scratching and abrasion.** These characteristics make it valuable in applications where surface durability, wear resistance and mechanical performance are important."
      },
      {
        "title": "Formulation Versatility & Cost Optimization",
        "description": "Premium Quartz Powder serves as a functional mineral filler across multiple industrial applications. Its controlled chemical composition, particle size and physical characteristics allow manufacturers to optimize **filler loading, material selection and overall formulation economics**, depending on the end use requirements."
      }
    ],
    "processTitle": "How We Manufacture Premium Quartz Powder",
    "steps": [
      {
        "title": "Premium Raw Material Selection",
        "description": "We carefully select high grade Quartz lumps with high Silicon Dioxide (SiO₂) purity from our own mines and trusted mining sources across Rajasthan. Each raw material batch is evaluated for chemical composition, mineral quality and consistency to ensure reliable performance in the finished product."
      },
      {
        "title": "Controlled Crushing & Screening",
        "description": "Selected Quartz lumps undergo controlled crushing and screening processes to achieve a suitable and uniform feed size for subsequent processing. This stage helps remove oversize and unwanted coarse material while preparing the Quartz for efficient grinding."
      },
      {
        "title": "Washing, Cleaning & Thermal Treatment",
        "description": "The crushed Quartz is thoroughly washed using an advanced washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the Quartz for subsequent further processing."
      },
      {
        "title": "Advanced Grinding & Micronization",
        "description": "Using state-of-the-art grinding and micronizing technology, the processed Quartz is transformed into ultra fine powder with controlled particle fineness, uniform particle size distribution. Different mesh grades can be produced to meet the requirements of diverse industrial applications."
      },
      {
        "title": "Precision Air Classification",
        "description": "Modern air classification systems are utilized to achieve precise particle separation and optimized particle size distribution, ensuring consistent quality, improved handling characteristics and superior product performance."
      },
      {
        "title": "Comprehensive Quality Testing & Assurance",
        "description": "Each production batch undergoes systematic laboratory testing for key parameters including SiO₂ purity, Fe₂O₃ content, moisture, Loss on Ignition (LOI), brightness, whiteness and particle size distribution, as applicable to the specified grade. This helps ensure consistent quality and compliance with agreed product specifications."
      },
      {
        "title": "Premium Packing & Reliable Dispatch",
        "description": "Finished Quartz Powder is carefully packed in moisture resistant bags or jumbo bags, depending on customer requirements. Controlled packing, handling and dispatch procedures help maintain product integrity and support safe, efficient and reliable delivery."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Quartz Powder delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Quartz Powder",
    "whyChoose": [
      {
        "title": "Extensive Industry Expertise",
        "description": "Backed by 15+ years of expertise in mineral mining, processing, grinding technology and quality management, enabling us to deliver consistent product quality, technical reliability and dependable supply."
      },
      {
        "title": "High Purity Quartz Raw Material",
        "description": "Manufactured from carefully selected premium quality Quartz lumps with high SiO₂ purity, sourced from our own mines and trusted premium mineral sources to ensure consistent quality and reliable performance across diverse industrial applications."
      },
      {
        "title": "High Silica Purity & Excellent Brightness",
        "description": "Our Premium Quartz Grits offer high and consistent **SiO₂ Purity >99.6%, Brightness up to 96%** and with controlled mineral impurities, deliver consistent quality, clean appearance and reliable performance across demanding industrial applications."
      },
      {
        "title": "Advanced Processing & Precision Manufacturing",
        "description": "Advanced purification, grinding, micronization, air classification technology are employed to produce premium Quartz powder with controlled particle characteristics, excellent dispersion, low moisture and consistent batch-to-batch quality."
      },
      {
        "title": "Wide Range of Mesh Sizes",
        "description": "Available in **200, 300, 400, 500 and 700 Mesh**, with customized particle sizes available to meet specific processing, formulation and performance requirements across different industries."
      },
      {
        "title": "High Production Capacity",
        "description": "With a production capacity of **4,000+ MT per month**, our modern processing facilities is equipped to handle substantial industrial requirements and large volume orders while maintaining consistent manufacturing standards and product quality."
      },
      {
        "title": "Reliable Bulk Supply & Timely Delivery",
        "description": "An efficient manufacturing, inventory management and logistics network enables us to support bulk industrial requirements with dependable product availability, coordinated dispatches and timely deliveries across domestic markets."
      },
      {
        "title": "Stringent Quality Control",
        "description": "Every production batch undergoes rigorous laboratory testing for SiO₂ purity, chemical composition, particle size distribution, moisture content and other critical quality parameters, ensuring consistent quality and dependable product performance."
      },
      {
        "title": "Competitive Pricing & Cost Efficiency",
        "description": "Efficient mineral sourcing, optimized processing and large scale production capabilities allow us to offer premium quality quartz powder at competitive prices. We focus on providing industrial customers with a practical balance of material performance, supply reliability and overall procurement cost efficiency."
      }
    ],
    "applications": {
      "title": "Application of Quartz Powder",
      "intro": "Experience exceptional purity and dependable functional performance with Premium Quartz Powder, precisely processed for consistent quality across diverse industrial applications.",
      "sections": [
        {
          "title": "Engineered Stone / Slab (Countertop) Industry",
          "points": [
            {
              "title": "High Hardness & Surface Durability",
              "description": "With a **Mohs hardness of approximately 7**, Quartz's hardness contributes to **surface hardness, scratch** and **wear resistance** in engineered stone slabs, helping withstand demanding everyday use and maintain long term surface durability. Its rigid mineral structure supports **wear resistance and surface durability** during fabrication and service. The performance depends on the composite formulation."
            },
            {
              "title": "High Purity, Whiteness & Colour Consistency",
              "description": "High purity Quartz with **low iron and controlled mineral impurities** provides a clean, bright mineral base for **uniform colour development** and **consistent appearance.** Precisely graded particles support **uniform dispersion** and **efficient packing,** contributing to visual consistency and predictable surface aesthetics in finished slabs."
            },
            {
              "title": "Optimized Particle Packing & Composite Density",
              "description": "A controlled Quartz particle size provide **efficient particle packing, minimizes interparticle voids** (empty space) and supporting effective resin distribution within the composite. Proper particle packing, together with effective resin impregnation and processing, contributes to a **dense, uniform slab structure with reduced pathways for water and staining agents**."
            },
            {
              "title": "Chemical Resistance & Thermal Stability",
              "description": "Quartz offers excellent resistance to **household chemicals, acids** and **cleaning agents** under normal service conditions. Its high thermal stability supports durability during processing and normal countertop use, while the overall chemical resistance of the finished slab depends on the resin system, formulation, curing and manufacturing process."
            },
            {
              "title": "Dimensional Stability & Structural Support",
              "description": "The rigid mineral structure of Quartz contributes to **stiffness, dimensional stability** and **mechanical performance** within the engineered stone composite. Its high mineral loading can help support consistent slab geometry and structural integrity, with final mechanical properties determined by the overall formulation and manufacturing process."
            },
            {
              "title": "Excellent Polishability & Surface Finish",
              "description": "Clean, uniformly processed Quartz particles support efficient **calibration, grinding** and **polishing** during slab fabrication. Appropriate particle sizing and mineral quality help manufacturers to achieve a **smooth, consistent** and **high gloss surface finish**. Controlled particle size and mineral quality can also contribute to uniform texture, gloss development and overall visual appearance."
            }
          ]
        },
        {
          "title": "Paint and Coating Industry",
          "points": [
            {
              "title": "High Mineral Hardness for Abrasion Resistance",
              "description": "Quartz has a **Mohs hardness of approximately 7**, making it a suitable hard mineral filler for coating systems designed for demanding service conditions. With appropriate particle size selection and formulation, it can contribute to **resistance against abrasion, rubbing and mechanical wear in industrial coatings, flooring systems** and other applications exposed to repeated mechanical contact and everyday wear."
            },
            {
              "title": "Controlled Particle Size & Surface Finish",
              "description": "Precisely graded Quartz Powder allows coating manufacturers to select particle sizes according to specific coating requirements. Depending on the grade and filler loading, it helps a**chieve the desired surface texture, gloss level, finish uniformity and overall appearance**, with finer grades generally supporting smoother finishes and coarser grades producing more textured surfaces."
            },
            {
              "title": "Excellent UV & Weathering Stability",
              "description": "Quartz is an inorganic mineral with excellent inherent stability under normal ultraviolet exposure. Its resistance to UV induced degradation makes it suitable for exterior coating formulations. The overall **weatherability, colour retention and long term film durability** depend on the binder, pigments, additives and complete coating system."
            },
            {
              "title": "Mechanical Durability & Film Performance",
              "description": "Quartz acts as a hard, durable and dimensionally stable mineral filler. Quartz Powder can contribute to the mechanical performance of properly formulated coatings. Appropriate grade selection, dispersion and loading help manufacturers balance **surface durability, filler incorporation and film integrity for coatings exposed to wear, rubbing and demanding service conditions**."
            },
            {
              "title": "Chemical Stability & Protective Coatings Application",
              "description": "Quartz offers good chemical stability and resistance to many common chemicals under suitable service conditions. Its incorporation makes it a useful mineral filler in selected industrial and protective coatings formulations where mineral stability and surface durability are important. The finished coating's **chemical and stain resistance** depend on the complete formulation and service environment."
            },
            {
              "title": "Formulation Versatility & Mineral Loading Optimization",
              "description": "Quartz Powder provides coating manufacturers with flexibility in mineral filler selection and formulation design. Its controlled particle size distribution and mineral characteristics allow manufacturers to **optimize mineral loading, rheological behaviour, surface characteristics** and **formulation economics** while maintaining the required coating performance."
            },
            {
              "title": "Versatile Filler for Diverse Coating Systems",
              "description": "Depending on particle size, surface characteristics and formulation requirements, Quartz Powder is suitable for selected **industrial and protective coatings, floor coatings, textured finishes, anti skid coatings, architectural and decorative paints and road marking formulation**. Its hardness and particle characteristics make it particularly relevant for applications requiring durable or textured coating surfaces."
            }
          ]
        },
        {
          "title": "Glass Industry",
          "points": [
            {
              "title": "High Silica Purity for Glass Formulation",
              "description": "Quartz Powder provides a high purity source of **Silicon Dioxide (SiO₂)**, the principal glass forming oxide in most commercial glass compositions. Consistent silica content supports **accurate batch formulation, controlled glass chemistry and reliable production of glass** with the required physical, optical and functional properties, that meets the manufacturer's specified quality requirements."
            },
            {
              "title": "Low Iron Content for Enhanced Optical Clarity",
              "description": "Quartz Powder with **low Fe₂O₃ content and controlled other colouring impurities helps minimize unwanted green, yellow or brown colouration in finished glass**. This is particularly important in clear, transparent and low iron glass applications, where raw material purity directly influences colour consistency, light transmission and optical appearance."
            },
            {
              "title": "Consistent Chemical Composition for Batch Control",
              "description": "Carefully controlled levels of **SiO₂, Al₂O₃, Fe₂O₃, TiO₂, CaO, MgO and alkali oxides** help maintain consistent raw material chemistry for accurate glass batch formulation. Consistent raw material chemistry helps **reduce batch-to-batch variation and supports predictable melting characteristics, and improved glass homogeneity** while reducing variations in finished product quality"
            },
            {
              "title": "Optimized Particle Size Distribution for Processing Efficiency",
              "description": "A controlled Particle Size Distribution (PSD) **supports uniform batch blending, consistent material feeding and efficient furnace processing**. Appropriate particle grading helps balance silica dissolution and melting behaviour while minimizing oversized particles that may dissolve slowly and excessive fines that can increase dust generation and handling difficulties."
            },
            {
              "title": "Mineralogical Cleanliness for Reduced Glass Defects",
              "description": "Properly processed Quartz Powder with **controlled levels of clay, mica, feldspar, iron bearing minerals and other unwanted contaminants helps reduce the risk of stones, inclusions, colour variation and melting difficulties in finished glass**. Consistent mineral cleanliness supports reliable processing and batch uniformity, helps manufacturers meet specified requirements for colour, optical quality and finished glass performance."
            },
            {
              "title": "Controlled Moisture and Low LOI for Batch Consistency",
              "description": "Controlled moisture content supports **accurate raw material weighing, uniform blending, stable batch feeding** and **consistent batch handling**, while low Loss on Ignition (LOI) helps **limit unwanted gas release, foaming and batch disturbances during processing**. Monitoring these parameters supports predictable batch preparation and furnace operation when considered alongside the complete batch composition."
            },
            {
              "title": "Application Specific Quartz Grades",
              "description": "Premium Quartz powder grades can be engineered according to required SiO₂ purity, iron level, impurity profile and particle size for applications **including float & architectural glass, container glass & packaging glass, automotive glass, fiberglass, tableware and selected specialty glass.**"
            }
          ]
        },
        {
          "title": "Ceramics & Vitrified Tiles Industry",
          "points": [
            {
              "title": "High Purity Silica Source for Ceramic Body Formulation",
              "description": "Premium Quartz Powder serves as an **essential silica rich raw material (SiO₂)** in ceramic body formulations. During firing, quartz partially dissolves into the developing glassy phase, while the remaining crystalline quartz contributes to the fired body's phase composition and microstructure. Its controlled incorporation helps manufacturers achieve the **desired physical, mechanical and thermal characteristics** of ceramic products."
            },
            {
              "title": "Controlled Particle Size for Microstructural Development",
              "description": "Precisely controlled particle size supports **uniform distribution, efficient particle packing** and **controlled dissolution** during ceramic processing and firing. Appropriate particle size distribution helps develop **uniform ceramic microstructure** and can improved mechanical properties. Excessively coarse quartz particles may increase thermal mismatch stresses and the risk of microcracking under certain firing conditions."
            },
            {
              "title": "Non Plastic Component for Dimensional Stability",
              "description": "**Quartz acts as a non plastic mineral component in ceramic body formulations**, helping manufacturers regulate the balance between plastic and non plastic raw materials. When properly proportioned with clay, feldspar and other constituents, it helps **control drying and firing shrinkage, supports dimensional stability** and contributes to consistent tile geometry during manufacturing."
            },
            {
              "title": "Thermal Expansion Control and Glaze Body Compatibility",
              "description": "Quartz influence the coefficient of thermal expansion (CTE) of ceramic bodies and plays an important role in glaze body compatibility. Appropriate formulation helps manufacturers tailor **thermal expansion behaviour** to the selected glaze system, **supporting surface integrity** and **helping reduce the risk of glaze crazing or shivering**, depending on formulation and cooling conditions."
            },
            {
              "title": "Low Iron Content for Clean, Bright Fired Appearance",
              "description": "High purity Quartz Powder with controlled iron oxide (Fe₂O₃) and other colouring impurities is particularly valuable in **white firing ceramic bodies, porcelain, sanitaryware** and **vitrified tiles**. Low levels of colouring impurities help **minimize unwanted discolouration and visible specking, supporting a cleaner, brighter** and **more uniform appearance** in finished ceramic products."
            },
            {
              "title": "Consistent Chemistry for Reliable Ceramic Processing",
              "description": "Consistent chemical composition, including **controlled SiO₂, Fe₂O₃, Al₂O₃, TiO₂, and alkali content**, helps ceramic manufacturers maintain predictable raw material quality and reduce batch-to-batch variation. Monitoring relevant impurities and loss on ignition, supports better firing behaviour and finished product quality when combined with appropriate formulation and kiln process control."
            },
            {
              "title": "Versatile Silica Raw Material for Diverse Ceramic Applications",
              "description": "Premium Quartz Powder can be selected for a broad range of ceramic applications, including **vitrified and porcelain tiles, wall and floor tiles, sanitaryware, tableware, ceramic glazes and frits, electrical porcelain, and selected refractory and technical ceramics.** Grade selection can be optimized according to particle size, PSD, SiO₂ purity, iron content and formulation requirements."
            }
          ]
        },
        {
          "title": "Plastic & PVC Compounds Industry",
          "points": [
            {
              "title": "Enhanced Hardness & Mechanical Stiffness",
              "description": "High purity Quartz Powder function as a **r**igid functional mineral filler, contributing to **increased stiffness, tensile modulus, flexural rigidity** and **surface hardness** in suitably formulated plastic and PVC compounds. Its performance depends on filler loading, particle characteristics and polymer filler compatibility."
            },
            {
              "title": "Improved Dimensional & Thermal Stability",
              "description": "Quartz has a rigid crystalline structure and relatively low thermal expansion compared with most polymer matrices. Quartz powder can help **reduce the composite thermal expansion, molding shrinkage, warpage and dimensional deformation** of polymer composites. This supports improved dimensional accuracy, structural rigidity and shape retention in finished plastic components."
            },
            {
              "title": "Superior Surface Hardness & Abrasion Resistance",
              "description": "With a **Mohs hardness of approximately 7.0**, Quartz Powder provides a highly hard mineral phase that can enhance **surface hardness, scratch resistance, abrasion resistance and wear durability** in appropriately designed PVC and polymer formulations. This makes it suitable for applications requiring enhanced surface durability and resistance to mechanical wear."
            },
            {
              "title": "Controlled Particle Size & Processing Consistency",
              "description": "A well controlled particle size distribution (PSD) **supports uniform filler dispersion** and **consistent compound characteristic**. Appropriate particle selection and dispersion help maintain **processing behaviour, surface finish** and **batch-to-batch consistency** during extrusion, compounding and injection molding. Actual flow behavior depends on particle characteristics, filler loading and overall formulation design."
            },
            {
              "title": "Low Moisture Absorption & Chemical Inertness",
              "description": "Quartz offers excellent chemical stability and low intrinsic moisture absorption. When supplied with controlled moisture content, it can help **minimize moisture related processing issues** and **support consistent compounding, better extrusion** and **injection molding, promotes uniform dispersion during dry blending**. Its chemical resistance is suitable for many environments, depending on the specific chemical and service conditions."
            },
            {
              "title": "Formulation Economics & Resin Optimization",
              "description": "Quartz Powder can **partially replace polymer resin**, helping manufacturers optimize raw material costs while maintaining targeted **stiffness, hardness and dimensional stability**. The optimum filler loading depends on the required mechanical properties, processing conditions and overall formulation economics."
            },
            {
              "title": "Versatile Applications in Plastics & PVC",
              "description": "Premium Quartz Powder is suitable for evaluation in various polymer applications, including **PVC pipes and fittings, electrical conduits, cable compounds, WPC profiles, rigid PVC sheets, plastic masterbatches, injection molded components, engineering plastics, automotive components** and **other industrial polymer products.**"
            }
          ]
        },
        {
          "title": "Adhesives & Sealants Industry",
          "points": [
            {
              "title": "High Purity Quartz as a Functional Mineral Filler",
              "description": "High purity **Quartz Powder (SiO₂)** serves as a functional mineral filler in selected adhesive and sealant formulations. Its inherent hardness and rigid particle structure can contribute to **increased hardness, stiffness, compressive strength and mechanical durability**, depending on the binder system, particle size, filler loading and overall formulation."
            },
            {
              "title": "Dimensional Stability & Reduced Cure Shrinkage",
              "description": "Quartz Powder can help improve dimensional stability and reduce formulation shrinkage by replacing a portion of the polymer or resin in suitable systems. This can help **minimize dimensional changes** during curing and **support stable joints, micro cracking, consistent gap filling** and **long term structural integrity,** particularly in resin based adhesives, epoxy compounds and industrial bonding systems."
            },
            {
              "title": "Controlled Particle Size for Rheology & Workability",
              "description": "Available in different particle size grades, Quartz Powder allows formulators to optimize filler distribution and loading according to application requirements. Appropriate particle size selection can **influence viscosity, flow behaviour, workability and sag resistance**, supporting consistent application in construction adhesives, grouts, joint fillers and selected vertical application systems."
            },
            {
              "title": "High Hardness for Abrasion & Wear Resistance",
              "description": "With a **Mohs hardness of approximately 7**, Quartz provides a hard mineral phase that can contribute to **improved surface hardness and resistance to mechanical wear and abrasion in suitable formulations**. This makes it useful in selected **epoxy flooring compounds, tile grouts, industrial mortars** and **heavy duty construction** systems exposed to regular wear and mechanical stress."
            },
            {
              "title": "Chemical & Thermal Stability",
              "description": "Quartz exhibits excellent chemical stability under many common service conditions and maintains its physical properties across a wide temperature range. Its incorporation into suitable formulations can **support dimensional integrity** and **long term product durability** of adhesive and sealant compound. The overall resistance to moisture, chemicals, heat and weathering depends on the binder system and finished formulation."
            },
            {
              "title": "Formulation Cost Optimization & Batch Consistency",
              "description": "Quartz Powder act as a cost effective mineral filler, can partially replace more expensive resin components or other mineral fillers in suitable formulations, **helping optimize raw material costs** without compromising targeted performance. Consistent purity and controlled particle size distribution also **support predictable dispersion, processing behaviour** and **batch-to-batch manufacturing consistency**."
            },
            {
              "title": "Versatile Applications Across Adhesives & Sealants",
              "description": "Premium Quartz Powder is suitable for evaluation in various adhesive and sealant applications, including **construction adhesives, epoxy based bonding compounds, tile grouts, joint fillers, industrial flooring systems, selected polyurethane, acrylic and other polymer based formulations**. Grade selection should be according to the binder chemistry, required particle size, filler loading and final performance specifications."
            }
          ]
        },
        {
          "title": "Rubber Industry",
          "points": [
            {
              "title": "High Hardness & Abrasion Resistance",
              "description": "Quartz powder with a **Mohs hardness of approximately 7,** making it a hard mineral filler for selected rubber formulations. Quartz Powder can contribute to improved **surface wear resistance and mechanical damage** in suitably formulated rubber compounds. It is particularly relevant for selected industrial rubber products where durability and resistance to abrasion are important."
            },
            {
              "title": "Enhanced Compound Stiffness & Hardness",
              "description": "The rigid mineral structure of Quartz Powder can contribute to increase **compound stiffness** and **hardness**, depending on filler loading, particle size and the overall rubber formulation. It supports the development of rubber products requiring **controlled flexibility and dimensional stability** in finished rubber products."
            },
            {
              "title": "Electrical Insulation Properties",
              "description": "Quartz Powder offers **low electrical conductivity** and can serve as a functional mineral filler in selected electrically insulating rubber compounds. Its suitability for application such as **insulating mats, cable accessories** and **other electrical rubber applications** depends on the complete formulation and verified electrical performance."
            },
            {
              "title": "Chemical Stability & Environmental Resistance",
              "description": "Quartz Powder exhibits good chemical stability and resistance in many service environments, making it useful in selected rubber compounds exposed to moisture, outdoor conditions, and compatible chemicals. Overall chemical and environmental resistance depends on the rubber polymer and complete formulation."
            },
            {
              "title": "Controlled Particle Size & Consistent Processing",
              "description": "Precisely graded Quartz powder with uniform particle size distribution **supports consistent filler incorporation** and **dispersion during rubber compounding**. Appropriate grading can help rubber manufacturers manage **processing characteristics, product uniformity, surface finish and batch-to-batch consistency.**"
            },
            {
              "title": "Cost Effective Mineral Filler & Formulation Flexibility",
              "description": "Quartz Powder can function as an extending mineral filler in selected rubber formulations, providing manufacturers with flexibility in mineral loading and raw material costs optimisation. Its performance depends on filler concentration, particle size distribution and compatibility with the rubber compound."
            },
            {
              "title": "Versatile Applications in Rubber Products",
              "description": "Premium Quartz Powder is suitable for evaluation in various rubber application such **industrial rubber goods, rubber mats, hoses, footwear components, conveyor belts, rubber sheets** and **electrical insulation products**. Its suitability depends on particle size, filler loading, rubber type and the required end product properties."
            }
          ]
        },
        {
          "title": "Foundries & Refractory Industry",
          "points": [
            {
              "title": "High SiO₂ Purity & Controlled Impurity Profile",
              "description": "High purity quartz with **high silicon dioxide (SiO₂) content and controlled levels of Fe₂O₃, Al₂O₃, CaO, MgO and alkali oxides** provides a consistent silica source for **selected foundry** and **refractory formulations**. Controlled impurity levels help manage **refractoriness, sintering behaviour,** and **unwanted high temperature reactions**, supporting reliable material performance and process consistency."
            },
            {
              "title": "Thermal Stability & High Temperature Performance",
              "description": "Quartz offers a **silica rich mineral** composition and high temperature resistance, making suitably graded quartz materials useful in **selected foundry moulding, core making** and **refractory applications**. Appropriate material selection and formulation helps manufacturers achieve predictable performance."
            },
            {
              "title": "Controlled Grain Characteristics & Thermal Behaviour",
              "description": "Consistent quartz mineralogy, grain size, grain shape, and purity help manufacturers achieve **predictable thermal behaviour during mould preparation, metal casting** and **refractory processing**. Selecting appropriate quartz grades supports formulation consistency and helps manage thermal expansion and dimensional changes under application specific conditions."
            },
            {
              "title": "Optimised Particle Size Distribution & Packing Density",
              "description": "Precisely controlled particle size distribution (PSD) helps **optimise packing, workability** and **processing consistency**. In refractory formulation, appropriate grain grading influences **permeability, surface finish, strength** and **porosity**. Appropriate combinations of particle sizes help manufacturers optimise formulation characteristics according to specific application requirements."
            },
            {
              "title": "Chemical Consistency & Controlled High Temperature Reactions",
              "description": "The predominantly SiO₂ based composition of quartz makes it a valuable raw material for many silica based industrial foundry and refractory formulations. Consistent chemical composition and controlled levels of fluxing impurities, including alkalis, CaO and MgO, help manufacturers manage **sintering behaviour, liquid phase formation** and **chemical interactions** at elevated temperatures, supporting predictable processing characteristics and material consistency."
            }
          ]
        }
      ]
    }
  },
  "quartz-grits": {
    "name": "Quartz Grits",
    "description": "Premium grade, high purity **Quartz Grits (SiO₂)** are precisely processed to deliver **high silica purity, excellent hardness, high whiteness** and **consistent particle size grading**. Their stable physical and chemical properties support **consistent processing, dependable performance and long term material durability** across a wide range of demanding industrial applications.",
    "how": "**STONEX ENTERPRISES** is one of India's trusted manufacturers and suppliers of **Premium Quartz Grits**, delivering high performance **silica solutions** for a wide range of industrial applications. Backed by over **15 years of expertise** in mineral mining, advanced processing technologies, particle size classification and quality management, we ensure exceptional consistency and reliability at every stage of production. Our Quartz Grits are manufactured from carefully selected premium grade Quartz lumps sourced from our own mines and trusted mining regions across Rajasthan, enabling us to manufacture high quality Quartz Grits with **Purity >99.6%** and **Brightness up to 96%.** Supported by a robust production capacity of **4,000+ MT per month.** We are committed to providing consistent quality, excellent whiteness with minimal impurities and reliable supply that meets the evolving needs of industries application.",
    "whatIs": [
      {
        "title": "What is Quartz and Quartz Grits?",
        "text": [
          "**Quartz** is one of the hardest, most abundant and widely occurring natural minerals in the Earth crust. It is composed primarily of **silicon dioxide (SiO₂)** and is one of the principal rock forming minerals, occurring naturally in **igneous, sedimentary** and **metamorphic rocks**. Premium grade quartz lumps are processed into high quality **Quartz Grits** through carefully controlled crushing, washing, magnetic separation, optical colour sorting and grading process. These controlled processing steps help achieve the desired **chemical purity, particle size distribution, colour consistency** and **reduced impurity levels** required for different industrial applications. Quartz is renowned for its **exceptional hardness of approximately 7 on the Mohs scale, chemical durability, thermal stability** and **abrasion resistance.** These outstanding **physical, chemical** and **thermal properties** make Quartz one of the most versatile and reliable industrial minerals. Quartz Grits are widely used in industries such as **engineered stone and countertops, ceramics and sanitaryware, glass manufacturing, foundry, paints and coatings, rubber, plastics and polymers, abrasives, and construction materials**."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Formula",
        "value": "Silicon Dioxide (SiO₂)"
      },
      {
        "label": "Colour",
        "value": "White to Snow White"
      },
      {
        "label": "Purity (SiO₂)",
        "value": ">99.6%"
      },
      {
        "label": "Brightness",
        "value": "Up to 96%"
      },
      {
        "label": "Whiteness",
        "value": "96%"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Mohs Hardness",
        "value": "7"
      },
      {
        "label": "Specific Gravity",
        "value": "2.6 - 2.7g/cm³"
      },
      {
        "label": "pH Value",
        "value": "6.5 - 7.5"
      },
      {
        "label": "Bulk Density",
        "value": "1.50-1.70 g/cm³ (depends on particle size)"
      }
    ],
    "capacity": "4000+ MT Per Month",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "sizeTable": {
      "title": "Explore Our Premium Quartz Grits Size Range",
      "rows": [
        [
          "S No",
          "Quartz Grits Size",
          "SiO₂",
          "Brightness",
          "Grade"
        ],
        [
          "01",
          "0.1mm - 0.4mm",
          "99.6%+",
          "96%",
          "Ultra Fine Quartz Grits"
        ],
        [
          "02",
          "0.3mm - 0.7mm",
          "99.6%+",
          "96%",
          "Fine Quartz Grits"
        ],
        [
          "03",
          "0.6mm - 1.2mm",
          "99.6%+",
          "96%",
          "Medium Quartz Grits"
        ],
        [
          "04",
          "1.2mm - 2.5mm",
          "99.6%+",
          "96%",
          "Coarse Quartz Grits"
        ],
        [
          "05",
          "2.5mm - 4mm",
          "99.6%+",
          "96%",
          "Extra Coarse Quartz Grits"
        ],
        [
          "06",
          "4mm - 6mm",
          "99.6%+",
          "96%",
          "Large Quartz Grits"
        ]
      ]
    },
    "keyPropertiesTitle": "Premium Quartz Grits Key Properties",
    "keyProperties": [
      {
        "title": "High SiO₂ Purity & Controlled Impurity Profile",
        "description": "High **silicon dioxide (SiO₂)** content, combined with c**ontrolled levels of iron oxide (Fe₂O₃), alumina (Al₂O₃)** and **other impurities**, supports consistent chemical composition, predictable processing behaviour and reliable end product quality across a range of industrial applications."
      },
      {
        "title": "High Whiteness & Excellent Optical Appearance",
        "description": "Naturally bright, high purity quartz offers **good whiteness, colour consistency and light reflectance**, making it suitable for white and light coloured formulations. Low levels of colouring impurities, particularly iron bearing compounds, help maintain the desired visual appearance and surface finish in finished products."
      },
      {
        "title": "Precisely Graded Grits Size & Distribution",
        "description": "Carefully crushed, screened and classified quartz grits provide **uniform particle size grading and controlled size distribution**. Consistent grading supports predictable **particle packing, formulation uniformity, efficient processing and reliable end product characteristics** across different industrial applications"
      },
      {
        "title": "Optimized Oil Absorption & Binder Demand",
        "description": "Quartz grit particle shape, surface texture, porosity and size distribution influence oil absorption, resin or binder requirement. Appropriate quartz grit selection helps manufacturers **optimise filler loading, manage binder consumption and achieve the desired processing** and end product properties."
      },
      {
        "title": "Low Moisture Content & Reliable Handling",
        "description": "Low and controlled moisture content in premium Quartz Grits helps **minimize moisture related agglomeration, caking and surface contamination**. It supports **handling, stable storage, consistent material feeding and reliable dry blending** during industrial processing."
      },
      {
        "title": "Chemical Resistance & Mineral Durability",
        "description": "Quartz exhibits good resistance to many common chemicals and acids under appropriate conditions, making it suitable for applications requiring **mineral durability and chemical stability**. Its suitability depends on the specific chemicals environment, concentrations, temperatures and duration of exposure."
      },
      {
        "title": "Thermal Behaviour",
        "description": "Quartz maintains its mineral integrity and functional properties over a **wide temperature range**, making it suitable for formulations exposed to elevated processing or service temperatures. Appropriate grade selection and formulation design help manufacturers manage thermal behaviour under specified operating conditions."
      },
      {
        "title": "High Hardness & Abrasion Resistance (~7 Mohs)",
        "description": "With a **Mohs hardness of approximately 7**, quartz provides excellent resistance to **wear, abrasion** and **scratching**. This inherent hardness makes it suitable for applications requiring durable mineral aggregates, wear resistant surfaces and mechanically robust formulations."
      },
      {
        "title": "Cost Effective Mineral Filler & Formulation Flexibility",
        "description": "Quartz grits can serve as a functional mineral filler or aggregate in suitable industrial formulations, enabling manufacturers to **optimise raw material costs, particle packing, material selection and filler loading** while maintaining the required physical, mechanical and functional properties of the finished product."
      }
    ],
    "processTitle": "How We Manufacture Premium Quartz Grits",
    "steps": [
      {
        "title": "Premium Quartz Raw Material Selection",
        "description": "High quality Quartz lumps are carefully selected from our own mines and trusted mineral rich sources mines across Rajasthan. Each batch of raw material is evaluated for SiO₂ purity, brightness, colour, mineral composition and overall quality before processing."
      },
      {
        "title": "Primary Controlled Crushing",
        "description": "Selected large Quartz lumps are processed through heavy duty primary crushing equipment (jaw crushers), to reduce them into smaller, manageable feed sizes."
      },
      {
        "title": "Washing, Cleaning & Thermal Treatment",
        "description": "The crushed Quartz is thoroughly washed using an washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes through controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the Quartz for subsequent further processing."
      },
      {
        "title": "Secondary Controlled Crushing",
        "description": "The cleaned Quartz undergoes controlled secondary crushing to achieve the required particle size while minimizing excessive fines generation. This stage helps maintain the natural hardness, crystal integrity and quality of the Quartz grains."
      },
      {
        "title": "High Intensity Magnetic Separation",
        "description": "Advanced high intensity magnetic separators are used to reduce iron bearing and other magnetically susceptible impurities. This process helps achieve low iron content, improved brightness and enhanced silica purity, supporting the requirements of demanding industrial applications."
      },
      {
        "title": "Precision Screening & Size Classification",
        "description": "High frequency multi deck screens classify the purified Quartz into precise particle size ranges using advanced grading equipment to achieve uniform particle size distribution according to customer specifications."
      },
      {
        "title": "Advanced Colour Sorting & Optical Inspection",
        "description": "Advance optical colour sorting technology identifies and removes discoloured particles and visually contrasting mineral grains. This stage enhances brightness, colour uniformity and overall visual consistency of the finished Quartz Grits."
      },
      {
        "title": "Quality Testing & Packaging",
        "description": "Every production batch undergoes rigorous quality testing for particle size distribution, silica purity, brightness, moisture and other critical parameters before being securely packed in moisture resistant bags and prepared for safe transportation."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Quartz Grits delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Quartz Grits",
    "whyChoose": [
      {
        "title": "Extensive Industry Expertise",
        "description": "Backed by 15+ years of expertise in mineral mining, processing, crushing, screening and quality management, enabling us to deliver consistent Quartz Grit quality, technical reliability and dependable supply to industrial customers."
      },
      {
        "title": "High Silica Purity & Excellent Brightness",
        "description": "Our Premium Quartz Grits offer high and consistent **SiO₂ Purity >99.6%, Brightness up to 96%** and with controlled mineral impurities, deliver consistent quality, clean appearance and reliable performance across demanding industrial applications."
      },
      {
        "title": "Wide Range of Grit Sizes",
        "description": "Available in a wide range of precisely screened and graded grit sizes to meet diverse industrial requirements, with customized particle sizes available to suit specific processing, formulation and end use performance needs across different industries."
      },
      {
        "title": "Advanced Processing Technology",
        "description": "Advance crushing, washing, thermal treatment, magnetic separation, precision screening and colour sorting systems enable effective impurity removal, controlled particle sizing and consistent product quality."
      },
      {
        "title": "Premium Raw Material",
        "description": "Manufactured from carefully selected high quality natural Quartz lumps sourced from our own mines and trusted premium mineral sources, providing a reliable raw material foundation for producing of Quartz grits."
      },
      {
        "title": "High Production Capacity",
        "description": "With a production capacity of **4,000+ MT per month**, our modern processing facilities are equipped to handle large volume Quartz Grit orders while maintaining consistent product quality and supply continuity."
      },
      {
        "title": "Stringent Quality Control",
        "description": "Every production batch undergoes rigorous laboratory and process quality checks for SiO₂ purity, chemical composition, grit size distribution, particle characteristics, moisture content and other critical quality parameters, ensuring consistent quality and dependable product performance."
      },
      {
        "title": "Reliable Bulk Supply & Timely Delivery",
        "description": "An efficient manufacturing and supply chain system enables us to provide dependable bulk supply, consistent product availability and timely deliveries, supporting the ongoing requirements of industrial customers."
      },
      {
        "title": "Competitive Pricing & Cost Efficiency",
        "description": "Efficient mineral sourcing, optimized crushing, screening and grading processes and high volume production enable us to offer premium quality Quartz Grits at competitive prices, providing an effective balance of quality performance and overall cost efficiency."
      }
    ],
    "applications": {
      "title": "Application of Quartz Grits",
      "intro": "Explore high purity Premium Quartz Grits, engineered with precise grading and exceptional consistency for consistent quality across diverse manufacturing industries.",
      "sections": [
        {
          "title": "Engineered Stone/ Slab (Countertop) Industry",
          "points": [
            {
              "title": "High Hardness & Abrasion Resistance",
              "description": "With an inherent **Mohs hardness of approximately 7**, natural Quartz Grits provide excellent resistance to **scratching, surface abrasion** and **everyday wear** of engineered stone slabs. When properly formulated with suitable resins and processed under controlled conditions, quartz hard crystalline structure support durable **surfaces integrity** and **appearance** for kitchen countertops, flooring, wall cladding and other architectural applications."
            },
            {
              "title": "High Silica Purity & Low Mineral Impurities",
              "description": "High purity Quartz Grit with **SiO₂** and controlled levels of iron bearing minerals,dark inclusions and other unwanted impurities **support consistent raw material quality and reliable processing**, which help manufacturers **achieve cleaner, more consistent, stable processing** and **visually superior engineered stone surfaces**, particularly in white and light coloured slabs."
            },
            {
              "title": "Brightness & Visual Consistency",
              "description": "Bright, carefully selected Quartz Grits with consistent natural colour characteristics and minimal visible inclusions contribute to the visual quality of engineered stone surfaces. Carefully selected quartz aggregates support the **production of white, marble effect, speckled** and **decorative engineered stone designs**, helping minimize unwanted colour variation and visible imperfections, resulting in a cleaner and more consistent finished surface."
            },
            {
              "title": "Controlled Particle Size Distribution & Optimized Packing",
              "description": "Precisely graded Quartz Grits enable controlled blending of different particle size fractions for consistent mixing and efficient particle packing. A well designed particle size distribution supports **effective resin distribution, minimizes void formation and promotes uniform compaction.** These factors contribute to consistent slab density, reduced porosity and improved manufacturing uniformity."
            },
            {
              "title": "Versatile Grit Sizes & Decorative Design Flexibility",
              "description": "The availability of multiple quartz grit sizes allows manufacturers to customize aggregate combinations according to specific production requirements and desired surface appearances. Different particle size fractions and colour characteristics support the development of **uniform, speckled, terrazzo inspired and natural stone effect designs**, providing greater flexibility in decorative patterns, textures and finished slab aesthetics."
            },
            {
              "title": "Contribution to Slab Strength & Structural Performance",
              "description": "Quartz Grits form the principal mineral aggregate framework in many engineered quartz formulations. Their inherent hardness and physical properties contribute to the finished slab's **overall mechanical strength, abrasion resistance and durability**, depending on the formulation, aggregate grading, resin system and manufacturing conditions."
            }
          ]
        },
        {
          "title": "Ceramic & Sanitaryware Industry",
          "points": [
            {
              "title": "High SiO₂ Purity for Consistent Ceramic Formulation",
              "description": "High purity Quartz Grits provide a reliable source of **silica (SiO₂)** for ceramic and sanitaryware formulations. Consistent silica content and controlled chemical composition support precise raw material proportioning and formulation consistency. Low levels of undesirable impurities help manufacturers maintain the required chemical specifications and product quality, particularly in white firing and light coloured ceramic applications."
            },
            {
              "title": "Low Colouring Impurities for a Cleaner Fired Appearance",
              "description": "Controlled levels of colouring impurities, particularly **iron oxide (Fe₂O₃)**, are important in white firing ceramic and sanitaryware applications. Carefully processed Quartz Grits with suitable chemical purity help **minimize unwanted discolouration and support a cleaner, brighter and more uniform fired appearance**. This is particularly important for **white sanitaryware, porcelain and other light coloured ceramic products.**"
            },
            {
              "title": "Hardness and Contribution of Fired Body Properties",
              "description": "With a **Mohs hardness of approximately 7**, Quartz provides hard mineral that contributes to the mineral composition and microstructure of ceramic bodies. Its contribution to the fired body's mechanical properties depends on particle size, distribution, formulation and firing conditions. Properly selected quartz grades can support the development of the **strength, stiffness, dimensional stability** and **surface durability** of the fired body."
            },
            {
              "title": "Controlled Firing Shrinkage & Dimensional Stability",
              "description": "Quartz acts as a relatively rigid, non plastic mineral constituent in ceramic bodies and influences dimensional behaviour during drying and firing. When appropriately balanced with clay, feldspar and other raw materials it can help manufacturers **manage drying & firing shrinkage and maintain consistent product dimensions**. Properly graded Quartz Grits also influence **particle packing and microstructural development during firing.** The final results depend on the overall formulation and firing schedule."
            },
            {
              "title": "Precisely Controlled Particle Size and PSD",
              "description": "Carefully graded Quartz Grits **promote uniform distribution of raw materials and efficient particle packing within ceramic formulations**. A controlled particle size distribution influences the interaction of quartz with clay and fluxing materials during firing, contributing to **consistent densification, phase formation and microstructural development**. Uniform grading supports stable processing conditions, predictable firing behaviour and consistent quality in finished ceramic and sanitaryware products."
            },
            {
              "title": "Thermal Expansion and Body Glaze Compatibility",
              "description": "Quartz plays an important role in controlling the thermal expansion behaviour of ceramic bodies through its particle size, concentration and interaction with the fired matrix. Appropriate formulation and firing control help manufacturers **manage dimensional changes during heating, cooling and achieve suitable body glaze compatibility**. This is important in controlling glaze fit defects such as **crazing and shivering**."
            },
            {
              "title": "Versatile Applications Across Ceramic and Sanitaryware Products",
              "description": "Premium Quartz Grits are suitable for consideration in a range of ceramic formulations, including **sanitaryware, wall** and **floor tiles, porcelain, vitrified products, ceramic tableware** and **other whiteware applications**. Their suitability depends on the required silica content, impurity limits, particle size distribution and the specific processing conditions of each application."
            }
          ]
        },
        {
          "title": "Glass Industry",
          "points": [
            {
              "title": "High SiO₂ Purity for Consistent Glass Chemistry",
              "description": "High purity Quartz Grits provide a reliable silica source for glass manufacturing, **supporting accurate batch formulation** and **consistent glass composition**. High SiO₂ content helps maintain the required silica proportion while limiting the contribution of unwanted mineral impurities, s**upporting uniform glass quality and predictable finished product properties.**"
            },
            {
              "title": "Low Fe₂O₃ for Optical Clarity & Colour Control",
              "description": "**Low and controlled iron oxide (Fe₂O₃)** content helps minimize iron related colouration that can impart unwanted green, yellow or brown tints to glass. Properly specified low iron Quartz Grits support **improved optical clarity, brightness** and **colour consistency**, making them suitable for clear glass, high transparency products and other colour sensitive applications."
            },
            {
              "title": "Controlled Particle Size Distribution for Efficient Batch Processing",
              "description": "A consistent particle size distribution promotes uniform blending of Quartz Grits with other glass batch constituents and supports predictable silica melting behaviour. Properly graded particles help **reduce segregation** and **variations in batch composition, contributing to consistent batch feeding, reliable melting performance** and **reduced risk of residual unmelted silica**, contributing to efficient furnace operation and consistent glass production."
            },
            {
              "title": "Controlled Chemical Composition & Impurity Profile",
              "description": "Carefully monitored levels of **Fe₂O₃, Al₂O₃, CaO, MgO, TiO₂, and alkali oxides** help maintain consistent batch chemistry in glass manufacturing. A stable chemical composition and controlled impurity profile support **consistent glass colour, optical clarity** and **finished product quality**, particularly in high quality and colour sensitive glass applications, depending on the overall batch formulation and processing conditions."
            },
            {
              "title": "Thermal Stability for High Temperature Glass Processing",
              "description": "Quartz provides a reliable silica source for high temperature glass manufacturing. Its refractory characteristics make it suitable for **glass batch applications**, while appropriate particle grading and controlled batch formulation help support **predictable processing and silica incorporation during melting**. Actual melting behaviour depends on the quartz characteristics, other batch ingredients, and furnace conditions."
            },
            {
              "title": "Controlled Moisture for Consistent Batch Handling",
              "description": "Low and controlled moisture content supports **accurate material weighing, material flow, effcient handling** and **batch feeding**. Minimizing moisture variation helps maintain accurate batch proportions and reduces fluctuations associated with wet raw materials, contributing to more consistent batch preparation and reliable production operations."
            }
          ]
        },
        {
          "title": "Paints & Coatings Industry",
          "points": [
            {
              "title": "High Hardness & Abrasion Resistance",
              "description": "With a **Mohs hardness of approximately 7**, natural Quartz Grits provide a hard mineral component for suitably formulated industrial and protective coatings. Their inherent hardness can contribute to **surface abrasion resistance, scratch resistance** and **resistance to mechanical wear**, making them suitable for heavy duty flooring, industrial floor coatings and other applications requiring durable surface performance."
            },
            {
              "title": "Controlled Particle Size & Surface Texture",
              "description": "Precisely graded Quartz Grits allow coating manufacturers to select particle sizes according to **coating thickness, surface profile, texture** and **application requirements**. Coarser grades help create textured and anti slip finishes, while finer grades can support more controlled uniform surface profiles in compatible coating systems. Consistent grading helps achieve repeatable texture and uniform application results."
            },
            {
              "title": "High Silica Purity, Brightness & Low Moisture",
              "description": "With high **SiO₂ purity**, good brightness and controlled moisture content provide consistent mineral quality for suitable coating formulations. Low levels of colouring impurities and controlled moisture can **support colour consistency, formulation control and reliable processing across a range of water borne, solvent borne and resin based coating systems**. Performance depends on the overall coating formulation and processing conditions."
            },
            {
              "title": "Weathering & UV Stability",
              "description": "Quartz offers excellent inherent resistance to **UV exposure and normal environmental weathering.** Its inorganic mineral structure remains stable under normal outdoor conditions, making appropriately formulated quartz filled coatings suitable for **exterior architectural, industrial flooring and protective coating systems**. Overall coating durability also depends on the binder, pigments and exposure conditions."
            },
            {
              "title": "Chemical Resistance & Mineral Stability",
              "description": "Quartz exhibits good chemical stability and resistance to many common acids and industrial chemicals. This property make it suitable for selected **industrial coating, protective and resin based coating formulation**. Its chemical stability can contribute to the durability of properly designed coating systems exposed to demanding service environments."
            },
            {
              "title": "Thermal Stability & Dimensional Performance",
              "description": "Quartz is a thermally stable inorganic mineral under normal coating service conditions. Its physical properties can **support dimensional stability and durable surface performance** in appropriately formulated coating systems exposed to routine temperature variations. Performance under elevated temperatures or thermal cycling should be evaluated according to the complete coating system."
            },
            {
              "title": "Versatile Applications Across Coating Systems",
              "description": "Precisely graded Quartz Grits are suitable for a wide range of **industrial flooring, anti slip coatings, protective coatings, textured finishes, decorative coatings, and resin based systems**. Selecting the appropriate particle size and grading helps manufacturers tailor surface texture, profile, and functional performance to the requirements of each application."
            }
          ]
        },
        {
          "title": "Rubber Industry",
          "points": [
            {
              "title": "High SiO₂ Purity & Controlled Composition",
              "description": "High purity **silicon dioxide (SiO₂)** in Quartz Grits provide a chemically stable mineral extender for appropriately formulated rubber compounds. Controlled chemical composition, low impurity levels and processing conditions support **consistent formulation chemistry, predictable processing** and **batch-to-batch uniformity**, making them suitable for rubber sheets, flooring, molded products, seals and other mineral filled elastomer applications."
            },
            {
              "title": "High Mineral Hardness & Mechanical Stability",
              "description": "With a **Mohs hardness of 7**, quartz offers a hard mineral phase for selected rubber formulations. Depending on particle size, filler loading and compound formulation, it can **contribute to the surface characteristics and dimensional stability of mineral filled rubber products**. Supporting durability in demanding applications such as rubber matting, flooring, footwear components, conveyor systems and industrial rubber products."
            },
            {
              "title": "Controlled Particle Sizes Distribution & Grading",
              "description": "Available in carefully controlled particle size grades, allow manufacturers to select suitable particle sizes according to product specifications, processing requirements and desired surface characteristics. Consistent particle grading **supports controlled filler incorporation, uniform distribution and predictable compound behaviour during mixing, extrusion and molding operations**."
            },
            {
              "title": "Low Thermal Expansion of the Mineral Phase",
              "description": "Quartz has a relatively low thermal expansion compared with many common mineral materials. When incorporated into appropriately designed rubber formulations, its mineral phase can contribute to **dimensional stability, control thermal expansion behaviour**, **minimizing shrinkage** and **deformation behaviour** of the finished rubber product. The overall performance depends on polymer selection, filler loading, formulation and processing conditions."
            },
            {
              "title": "Chemical Stability & Environmental Durability",
              "description": "Quartz offers excellent chemical stability under many common environmental conditions and serve as a mineral extender in appropriately formulated rubber products. Its suitability for **seals, gaskets, flooring, protective linings** and **other industrial rubber.** The finished product's chemical resistance and environmental durability depend primarily on the rubber polymer, formulation and intended service conditions."
            },
            {
              "title": "Formulation Flexibility & Filler Incorporation",
              "description": "Available in different particle size grades, Quartz Grits provide manufacturers with flexibility in selecting mineral filler proportions and specifications. Particle size, shape, surface characteristics help manufacturers optimize **filler loading, dispersion, compound processing** and **the balance between material cost and finished product performance**."
            },
            {
              "title": "Versatile Industrial Rubber Applications",
              "description": "Quartz Grits can be used as a mineral extender or filler in appropriately formulated rubber compounds for applications such as **rubber sheets, mats, flooring, seals, gaskets, molded rubber products, conveyor components and other industrial rubber products**. Final application suitability should be established through formulation trials and performance testing."
            }
          ]
        },
        {
          "title": "Foundry Manufacturing Industry",
          "points": [
            {
              "title": "High SiO₂ Purity & Refractoriness",
              "description": "**High purity Silicon Dioxide (SiO₂)** provides a refractory foundation for foundry moulding and core making applications. Controlled levels of iron oxide (Fe₂O₃), alumina (Al₂O₃), alkali oxides and other impurities help maintain refractoriness under elevated temperatures. With a melting point of approximately **1710°C**, quartz offers suitable thermal resistance for a wide range of metal casting processes. Its performance depends on chemical composition, grain characteristics and casting conditions."
            },
            {
              "title": "Controlled Moisture & Low Fines",
              "description": "Controlled moisture levels and limited unwanted fine particles are important for maintaining consistent sand handling and mould preparation characteristics. Properly processed Quartz Grits support **uniform mixing, effective compaction, adequate gas permeability, optimized binder consumption and consistent mould/core strength**. Maintaining suitable moisture and fines specifications helps ensure predictable processing performance."
            },
            {
              "title": "Controlled Grain Size Distribution & Permeability",
              "description": "Precisely graded Quartz Grits help foundries to optimize **packing density, mould permeability, casting surface finish** and **mechanical strength**.Appropriate particle size distribution allows gases to escape effectively during metal pouring while supporting mould strength and casting surface quality, helping to reduce gas related defects such as **blowholes and pinholes**."
            },
            {
              "title": "Thermal Stability & Expansion Characteristics",
              "description": "Quartz undergoes a significant phase transformation near 573°C, accompanied by a characteristic volume change. This characteristics thermal behaviour is an important consideration in foundry mould and core designs, particularly for iron and steel casting application. Appropriate grain size selection, binder formulation and mould design help manage **thermal stresses and minimize the risk of expansion related casting defects, such as veining and surface cracking**."
            },
            {
              "title": "Consistent Grain Shape & Surface Characteristics",
              "description": "Uniform grain morphology and surface characteristics support packing behaviour, mould/core strength and binder efficiency. Appropriate grain characteristics help **balance grain interlocking, gas evacuation and casting surface finish**. Consistency in these properties supports reliable mould and core preparation across production batches."
            }
          ]
        },
        {
          "title": "Construction Products Industry",
          "points": [
            {
              "title": "High Hardness & Excellent Abrasion Resistance",
              "description": "With a **Mohs hardness of approximately 7**, quartz provides a hard, durable mineral aggregate for construction applications requiring resistance to surface wear and abrasion. Its hardness suitable for **epoxy flooring systems, terrazzo, decorative concrete, engineered surfaces** and **industrial flooring**, where the performance of the finished system depends on aggregate selection and overall formulation."
            },
            {
              "title": "High SiO₂ Purity & Chemical Stability",
              "description": "High purity **Quartz Grits (SiO₂)** with controlled levels of impurities such as Fe₂O₃, Al₂O₃, and CaO provide a consistent mineral component for **cementitious, epoxy, polyurethane, and resin based construction systems**. A low impurity profile supports formulation consistency and colour uniformity, particularly in white or light coloured mortars, renders, terrazzo and engineered stone."
            },
            {
              "title": "Controlled Particle Size Distribution & Optimised Packing",
              "description": "Precisely graded Quartz Grits with a controlled particle size distribution (PSD) support efficient particle packing and uniform aggregate distribution within construction matrices. Appropriate grading helps **minimise interparticle voids**, contributing to **higher packing density, improved dimensional uniformity and efficient binder utilisation**. These characteristics are valuable in concrete, terrazzo, epoxy flooring and polymer based construction materials."
            },
            {
              "title": "Rigid Mineral Structure & Mechanical Performance",
              "description": "Quartz particles offer a hard, rigid crystalline structure that makes them suitable for **concrete, polymer mortars, screeds, terrazzo and industrial flooring**. When properly graded and incorporated into suitable binder systems, they contribute to **composite stiffness, structural consistency and resistance to mechanical deformation**. Overall performance depends on aggregate grading, binder selection and overall formulation design."
            },
            {
              "title": "Low Water Absorption & Consistent Surface Quality",
              "description": "Dense quartz particles generally exhibit **low intrinsic water absorption**, helping maintain consistent aggregate characteristics in construction formulations. Their controlled grading, cleanliness and particle characteristics **support uniform distribution and predictable surface texture**, making them suitable for **terrazzo, decorative concrete, resin flooring and polymer concrete applications**."
            }
          ]
        },
        {
          "title": "Abrasive Industry",
          "points": [
            {
              "title": "High Mohs Hardness for Effective Abrasion",
              "description": "With a **Mohs hardness of approximately 7**, Quartz Grits offer **effective scratching, cutting, and abrasion of softer materials**. Their inherent hardness supports material removal and surface preparation and finishing in suitable abrasive applications, including stone processing, surface finishing, and selected bonded abrasive formulations."
            },
            {
              "title": "Angular Particle Geometry for Efficient Surface Abrasion",
              "description": "Quartz Grits processed through controlled crushing can develop **angular particle profiles and characteristic conchoidal fracture surfaces**. This particle geometries provide effective contact points for **scratching, cutting** and **material removal**. Depending on particle shape and processing conditions, making them suitable for selected **surface preparation, stone processing and selected abrasive formulations**."
            },
            {
              "title": "Chemical Stability for Industrial Durability",
              "description": "Quartz Grits exhibit **good chemical stability and resistance to many common industrial chemicals**, helping maintain their mineral integrity during storage, handling and processing. This property makes them suitable for applications requiring chemically stable mineral constituents under compatible operating conditions."
            },
            {
              "title": "Controlled Particle Size for Consistent Surface Finishing",
              "description": "Precisely screened and graded Quartz Grits provide **controlled particle size distribution** for more predictable abrasive action and surface finishing. Consistent grit sizing helps manufacturers select suitable grades to achieve the required material removal, surface texture and finishing characteristics across different applications."
            },
            {
              "title": "High Purity and Controlled Impurity Profile",
              "description": "High purity Quartz Grits with **consistent silicon dioxide (SiO₂) content and controlled levels of mineral impurities** provide dependable raw material quality for industrial abrasive applications. A controlled impurity profile supports formulation consistency and helps meet application specific material quality requirements."
            }
          ]
        }
      ]
    }
  },
  "dolomite-grits": {
    "name": "Dolomite Grits",
    "description": "Premium grade **Dolomite Grits (CaMg(CO₃)₂)** are carefully processed and graded to deliver **consistent particle sizing, reliable mineral composition and dependable physical properties**. Their calcium & magnesium carbonate composition, natural whiteness and application specific hardness make them suitable for a wide range of industrial applications. Controlled grading and quality checks support **uniform processing, consistent material quality and reliable performance** across diverse end use requirements.",
    "how": "**STONEX ENTERPRISES** is one of India’s trusted manufacturers and suppliers of **Premium grade Dolomite Grits**, delivering high quality mineral solutions for a wide range of industrial applications. With over **15 years of expertise** in mineral mining, advanced processing, classification and quality management, we maintain stringent control over product quality, consistency and performance at every stage of production. Our **Dolomite Grits** are manufactured from carefully selected, premium grade dolomite lumps sourced from our own mines and trusted mining regions across Rajasthan. Through controlled processing, screening and precise particle size grading, we produce high quality Dolomite Grits with **Purity >98.5%** and **Brightness >96%**, offering a reliable source of calcium and magnesium along with consistent particle sizing, controlled impurities levels and dependable processing performance, backed by a robust production capacity of **4,000+ MT per month.** We are committed to providing consistent quality, high brightness, controlled particle size, low impurity levels and reliable supply, meeting the diverse and evolving requirements of manufacturers across demanding industrial applications.",
    "whatIs": [
      {
        "title": "What are Dolomite and Dolomite Grits ?",
        "text": [
          "Dolomite is a naturally occurring carbonate mineral composed of **Calcium Magnesium Carbonate (CaMg(CO₃)₂)**, featuring a unique crystalline structure and a balanced **calcium & magnesium composition**. Formed through the process of dolomitization in sedimentary environments, dolomite deposits are created when magnesium rich fluids replace a portion of calcium in pre existing limestone formations. Premium **Dolomite Grits** are uniformly sized, precisely graded granular particles produced from carefully selected natural Dolomite lumps using advanced crushing, washing, magnetic separation, colour sorting, screening and precision classification processes. These advanced processing methods help achieve consistent particle size, improved cleanliness, controlled whiteness, less impurities and reliable product quality. Owing to their versatile physical and chemical characteristics, Dolomite Grits are widely used across industries such a **ceramics & sanitaryware, glass, construction materials, paints & coatings, rubber, plastics & polymers, agriculture and other mineral based industrial applications**."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Name",
        "value": "Calcium Magnesium Carbonate (CaMg(CO₃)₂)"
      },
      {
        "label": "Purity (CaMg(CO₃)₂)",
        "value": ">98.5%"
      },
      {
        "label": "Brightness",
        "value": ">96%"
      },
      {
        "label": "Whiteness",
        "value": "95 - 97%"
      },
      {
        "label": "Calcium Carbonate (CaCO₃)",
        "value": "50 - 55%"
      },
      {
        "label": "Magnesium Carbonate (MgCO₃)",
        "value": "40 - 44%"
      },
      {
        "label": "Silica (SiO₂)",
        "value": "<1.0 %"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Oil Absorption",
        "value": "20 - 25 g/100g"
      },
      {
        "label": "pH Value",
        "value": "8.5 - 9.5"
      },
      {
        "label": "Mohs Hardness",
        "value": "3.5 - 4"
      },
      {
        "label": "Low Impurity Control",
        "value": ""
      },
      {
        "label": "Controlled Particle Size",
        "value": ""
      }
    ],
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "sizeTable": {
      "title": "Explore Our Premium Dolomite Grits Size Range",
      "rows": [
        [
          "S No",
          "Grits Grade",
          "Grits Size"
        ],
        [
          "01",
          "Coarse Grits",
          "1mm, 2mm, 3mm, 4mm"
        ],
        [
          "02",
          "Fine & Graded Grits",
          "16 x 32 Mesh, 24 x 60 Mesh, 30 x 80 Mesh, 50 x 150 Mesh"
        ]
      ]
    },
    "keyPropertiesTitle": "Premium Dolomite Grits Key Properties",
    "keyProperties": [
      {
        "title": "High Purity Calcium Magnesium Carbonate CaMg(CO₃)₂",
        "description": "Premium Dolomite Grits are composed primarily of **Calcium Magnesium Carbonate (CaMg(CO₃)₂)**, providing a natural source of calcium and magnesium carbonates. Their mineral composition makes them suitable for a wide range of industrial applications requiring consistent dolomitic raw materials."
      },
      {
        "title": "Consistent CaCO₃ & MgCO₃ Chemistry",
        "description": "Controlled level of **CaCO₃ and MgCO₃** together with low levels of **SiO₂, Fe₂O₃, Al₂O₃ and other impurities,** help meet application specific chemical requirements. Consistent chemical composition supports **predictable processing behaviour and batch to batch uniformity** in industrial applications."
      },
      {
        "title": "High Brightness & Clean Appearance",
        "description": "High natural brightness and controlled level of **Fe₂O₃ and other colour bearing impurities** provide a clean, light coloured mineral grit for applications where colour consistency and visual quality are important. Low iron bearing impurities help **minimize unwanted colouration and maintain a consistent appearance** in the finished product**.**"
      },
      {
        "title": "Precisely Controlled Grit Size & Low Fines",
        "description": "Precisely crushed, screened and graded Dolomite Grits provide uniform particle sizes and controlled fines content to **support consistent feeding, handling and material utilisation**. Appropriate particle size distribution helps improve **process consistency, efficient material handling and predictable performance** in application specific operations."
      },
      {
        "title": "Good Hardness & Mechanical Durability",
        "description": "With a typical **Mohs hardness of approximately 3.5–4**, Dolomite Grits offer good mechanical durability for many industrial handling and processing requirements. Their natural hardness supports **particle integrity and granular structure** during storage, conveying and application, depending on particle shape and operating conditions."
      },
      {
        "title": "Controlled Moisture for Efficient Handling",
        "description": "Controlled low moisture content promotes **stable storage, free flowing handling and consistent processing**, particularly in dry formulation applications. Lower surface moisture helps **reduce caking, material agglomeration and moisture related handling issues** during storage, conveying and mixing."
      },
      {
        "title": "CaO  & MgO Contribution at Elevated Temperature",
        "description": "During high temperature processing, Dolomite undergoes thermal decomposes and release CO₂ and forming **calcium and magnesium bearing oxide.** These oxide component contributing to controlled phase formation,melt chemistry, slag composition and fired body properties in ceramic, glass and metallurgical applications."
      }
    ],
    "processTitle": "How We Manufacture Premium Dolomite Grits",
    "steps": [
      {
        "title": "Carefully Selected Premium Dolomite Lumps",
        "description": "Carefully selected, premium quality Dolomite lumps sourced from our own mines and reliable mineral rich regions across Rajasthan. Every batch of raw material undergoes stringent quality assessment for CaMg(CO₃)₂ purity, brightness, colour, mineral composition and overall suitability before processing."
      },
      {
        "title": "Heavy Duty Primary Crushing",
        "description": "Selected Dolomite lumps are feed into heavy duty primary crushing equipment, reduce the large rocks into a suitable feed size. Controlled crushing ensures efficient size reduction while preserving the inherent quality and structure of the mineral."
      },
      {
        "title": "Washing, Cleaning & Thermal Treatment",
        "description": "The crushed Dolomite is thoroughly washed using an advanced washing and cleaning system to remove surface dust, clay, adhering fines and other unwanted materials. The washed material then undergoes controlled thermal treatment to reduce residual moisture and remove moisture related contaminants, preparing the dolomite for subsequent further processing."
      },
      {
        "title": "Controlled Secondary Size Reduction",
        "description": "After cleaning, Dolomite undergoes controlled secondary crushing to produce the required granular sizes while minimizing the formation of excessive fines. This stage helps preserve the natural hardness, grain integrity and physical characteristics of the dolomite grains."
      },
      {
        "title": "High Efficiency Magnetic Separation",
        "description": "The processed Dolomite grains passes through high efficiency magnetic separation systems to remove or reduce iron bearing and other magnetically responsive impurities. This process helps improve brightness, colour consistency and overall mineral quality."
      },
      {
        "title": "Precision Screening & Size Classification",
        "description": "High frequency multi deck screening systems classify the purified Dolomite into precise defined particle size ranges using advanced grading equipment to achieve uniform particle size distribution according to customer specifications."
      },
      {
        "title": "Advanced Colour Sorting & Optical Quality Control",
        "description": "Modern optical Colour Sorting systems identify and separate discoloured particles and visually contrasting mineral grains. This additional quality control stage helps achieve more uniform appearance, enhanced brightness and consistent colour quality in the finished Dolomite Grits."
      },
      {
        "title": "Quality Testing & Secure Packaging",
        "description": "Every production batch undergoes comprehensive quality testing for particle size distribution, purity, brightness, moisture and other critical parameters. Approved material is securely packed in suitable moisture resistant packaging and prepared for safe transportation and reliable delivery."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Dolomite Grits delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Dolomite Grits",
    "whyChoose": [
      {
        "title": "Proven Industry Experience",
        "description": "Backed by 15+ years of expertise in mineral mining, advanced processing, grinding technology and quality management, enabling us to deliver consistent product quality and dependable supply to industrial customers."
      },
      {
        "title": "Premium Grade Raw Material",
        "description": "Manufactured from carefully selected, high purity dolomite lumps sourced from our own mines and trusted premium quality mining regions, ensuring consistent raw material quality and consistent product performance."
      },
      {
        "title": "High Purity, Brightness & Consistent Quality",
        "description": "Produced using carefully selected Dolomite with purity and brightness, along with controlled colouring impurities, ensuring consistent chemical composition, clean appearance and reliable performance across demanding industrial applications."
      },
      {
        "title": "Precision Graded Grits Size",
        "description": "Advanced screening, grading and size classification processes produce uniform dolomite grit sizes while minimizing unwanted oversize and undersize particles. Consistent grading support predictable material handling, processing and application performance."
      },
      {
        "title": "Wide Range of Grit Sizes",
        "description": "Available in a wide range of precisely screened and graded dolomite grit sizes to meet particle size requirements for diverse industrial applications. Customized sizing options support specific processing, manufacturing and surface finishing requirements."
      },
      {
        "title": "Advanced Processing & Mineral Purification",
        "description": "Produced through controlled crushing, washing, magnetic separation, colour sorting, screening and classification to improve mineral cleanliness, remove targeted impurities and achieve consistent grit sizing and product quality."
      },
      {
        "title": "Low Moisture & Controlled Impurities",
        "description": "Carefully controlled moisture content and undesirable mineral impurities support reliable storage, handling and processing. Consistent quality parameters help maintain dependable product characteristics and batch to batch uniformity."
      },
      {
        "title": "Reliable Quality & Supply Capacity",
        "description": "Supported by robust manufacturing infrastructure, stringent quality control and a production capacity of 4,000+ MT per month, we are equipped to meet large scale industrial requirements with consistent quality and dependable supply."
      },
      {
        "title": "Competitive Pricing & Cost Efficiency",
        "description": "Efficient mineral sourcing, optimized crushing, screening and grading processes and large scale production enable us to offer premium quality dolomite grits at competitive prices, delivering an effective balance of quality, performance and overall cost efficiency."
      }
    ],
    "applications": {
      "title": "Dolomite Grits Application",
      "sections": [
        {
          "title": "Steel & Metallurgy Industry",
          "points": [
            {
              "title": "Basic Flux for Slag Formation & Chemistry",
              "description": "Natural Dolomite serves as a source of calcium and magnesium carbonates in steelmaking processes. During high temperature processing, it decomposes to form **calcium oxide (CaO) and magnesium oxide (MgO).** These basic oxides help control **slag chemistry, support effective slag formation and support the incorporation and removal of impurities during steel making**, depending on process conditions."
            },
            {
              "title": "Controlled Grit Size & Dissolution Behaviour",
              "description": "Precisely graded Dolomite Grits provide uniform particle size and consistent material handling, supporting consistent furnace charging. Appropriate sizing **influences heat transfer, decomposition and dissolution behaviour in molten slag**, helping **optimize flux utilization and maintain predictable slag forming performance** under established operating conditions."
            },
            {
              "title": "High Purity & Controlled Impurities",
              "description": "High purity Dolomite with **low levels of SiO₂, Al₂O₃, sulfur and phosphorus** helps maintain optimized slag chemistry while minimizing unwanted constituents into the metallurgical process. A consistent chemical composition supports **reliable flux quality, reduces batch-to-batch variations** in slag chemistry and **supports stable, efficient and predictable performance** in modern steel making processes."
            },
            {
              "title": "Low & Controlled Moisture",
              "description": "Low and controlled moisture content supports **better storage, handling, flowability and consistent material feeding,** while reducing material sticking and unwanted moisture input. It helps **maintain consistent grit weight and chemical dosing during flux addition**, supporting better control of the metallurgical process."
            },
            {
              "title": "MgO Contribution & Refractory Protection",
              "description": "Dolomite provides an additional source of magnesium oxide (MgO) to the steelmaking slag, helping maintain the required magnesium oxide level under suitable operating conditions, which **reduces the chemical wear and dissolution of MgO based refractory linings**. This helps protect the furnace lining, reduce refractory damage and support **smooth, stable and efficient furnace operation**."
            },
            {
              "title": "Consistent Quality & Reliable Flux Performance",
              "description": "Consistent chemical composition, particle size distribution, moisture level and controlled impurity levels help steel manufacturers achieve predictable material handling and flux addition. Reliable batch-to-batch consistency, supports consistent process control and helps meet the operational requirements of modern steelmaking facilities."
            }
          ]
        },
        {
          "title": "Construction & Building Materials Industry",
          "points": [
            {
              "title": "High Hardness & Mechanical Durability",
              "description": "Dolomite has a **Mohs hardness of approximately 3.5–4.0**. Dolomite Grits provide a hard, dense and durable mineral aggregate component for **concrete, precast products, screeds, mortars and other construction material formulations**. Their suitability for load bearing and wear resistant applications depends on aggregate strength, abrasion resistance, particle grading."
            },
            {
              "title": "Optimized Particle Size Distribution & Packing Density",
              "description": "Carefully graded Dolomite Grits provide controlled particle size distribution support **efficient particle packing and reduced interparticle voids** when incorporated into a suitably designed aggregate blend. Appropriate grading can help **improve packing density and optimized binder utilization**, depending on the formulation and grading requirements."
            },
            {
              "title": "Angular Particle Shape & Mechanical Interlocking",
              "description": "Crushed Dolomite Grits with angular particle shapes, rough textured particle surfaces can **promote mechanical interlocking within compatible aggregate and binder systems**. Appropriate particle geometry and surface characteristics **influence aggregate stability, packing efficiency, workability** and the overall performance of the finished material."
            },
            {
              "title": "Consistent Carbonate Mineral Composition",
              "description": "Dolomite Grits are principally composed of **calcium magnesium carbonate (CaMg(CO₃)₂).** Dolomite grits provides naturally occurring carbonate based mineral component for **suitable construction and building material formulations**. Controlled mineral composition and low levels of undesirable impurities help meet the chemical requirements of application specific formulations."
            },
            {
              "title": "Abrasion Resistance & Mechanical Performance",
              "description": "Produced from suitably selected and processed dolomite rock, Dolomite Grits can serve in construction applications requiring **resistance to mechanical wear and abrasion**. Actual durability and weathering performance depend on the source rock, aggregate quality, exposure conditions and the properties of the finished formulation."
            },
            {
              "title": "Controlled Grading & Quality Consistency",
              "description": "Consistent control over particle size distribution, chemical composition, moisture content, water absorption and impurity levels supports reliable material handling, accurate batching and uniform blending. These parameters help manufacturers maintain consistent raw material quality and predictable performance in finished construction products."
            }
          ]
        },
        {
          "title": "Ceramic & Sanitaryware Industry",
          "points": [
            {
              "title": "Balanced CaO & MgO Contribution",
              "description": "Dolomite provides a natural source of **Calcium and Magnesium**, which form calcium oxide (CaO) and magnesium oxide (MgO) during firing. These oxides contribute to the chemical composition of ceramic bodies and glazes. Its balanced CaO & MgO contribution supports controlled formulation chemistry and predictable firing behaviour."
            },
            {
              "title": "Fluxing, Sintering & Vitrification Behaviour",
              "description": "The CaO and MgO derived from dolomite influence the fluxing behaviour, sintering reaction and vitrification in suitable ceramic formulations. When properly balanced with silica, alumina and other materials, dolomite can help achieve the desired **fired density, mechanical strength and microstructure.**"
            },
            {
              "title": "Controlled Thermal Decomposition & Gas Release",
              "description": "During ceramic firing, dolomite undergoes thermal decomposition, releasing carbon dioxide (CO₂) and forming CaO and MgO. Controlled particle size, uniform distribution and appropriate firing conditions help manage decomposition and gas release, supporting better control over porosity. This ensures defect free firing and minimizes bloating or pinholing in finished ware."
            },
            {
              "title": "Precisely Controlled Particle Size",
              "description": "Precisely graded Dolomite Grits provide consistent particle distribution within the ceramic batches. Depending on the application and formulation, particle size can influence **raw material packing, predictable reaction behaviour and repeatable processing**. It can also **influence packing efficiency, permeability, sintering behaviour and the microstructure of the fired body.**"
            },
            {
              "title": "High Brightness & Controlled Colouring Impurities",
              "description": "High brightness dolomite with controlled levels of iron oxide (Fe₂O₃), titanium dioxide (TiO₂) and other colouring impurities can help maintain raw material quality and helps manufacturers manage fired colour consistency. This is particularly important for **white ceramic bodies, glazed products, porceline and sanitaryware**, where surface appearance and colour uniformity are key considerations."
            },
            {
              "title": "Consistent Chemical Composition & Formulation Control",
              "description": "Controlled level of **CaMg(CO₃)₂, CaO, MgO, SiO₂, Al₂O₃ and Fe₂O₃** and other impurities support better control over ceramic batch formulation. Reliable chemical composition helps minimize raw material variability, maintain predictable processing conditions and achieve consistent finished product quality."
            },
            {
              "title": "Ceramic & Sanitaryware Applications",
              "description": "Depending on particle size, chemical composition and formulation requirements, Dolomite grits are widely used in the ceramic and sanitaryware industry as a source of calcium and magnesium oxides. Suitable for **sanitaryware, ceramic tiles, glazed tiles, tableware, porcelain products, ceramic glazes** and other specialized ceramic applications."
            }
          ]
        },
        {
          "title": "Glass Industry",
          "points": [
            {
              "title": "Balanced CaO & MgO Contribution",
              "description": "Dolomite (**CaMg(CO₃)₂)** is an important dual source raw material of **calcium oxide (CaO) and magnesium oxide (MgO)** in glass manufacturing. Its balanced contribution of both oxides help manufacturers achieve the **required glass composition, chemical stability and physical properties** in suitable formulations. Its also provides greater flexibility in batch formulation for different glass types."
            },
            {
              "title": "Controlled MgO for Melt & Glass Properties",
              "description": "The **magnesium oxide (MgO)** supplied by dolomite **influences glass melt viscosity, liquidus temperature and crystallization behaviour**, depending on the overall glass composition. Properly controlled MgO levels help manufacturers achieve the desired melting, refining and forming characteristics while supporting the required properties of the finished glass."
            },
            {
              "title": "Low Iron & Controlled Impurity Profile",
              "description": "High purity Dolomite with **controlled Fe₂O₃, SiO₂, Al₂O₃ and other colouring impurities** helps to minimize unwanted colouration, supports consistent colour, clarity and optical quality, especially in clear, white and high transmission glass. A controlled impurity profile is especially important where high visual clarity and low colour variation are required**.**"
            },
            {
              "title": "Consistent Chemical & Physical Quality",
              "description": "Consistent CaO and MgO content, together with controlled particle size distribution, moisture and impurity levels supports precise batch preparation, predictable melting behaviour and uniform finished glass quality. This ensures greater batch-to-batch consistency and process stability in glass production."
            },
            {
              "title": "Predictable Thermal Decomposition",
              "description": "During heating, **Dolomite CaMg(CO₃)₂** undergoes thermal decomposes and produce **CaO and MgO** with the release of **CO₂**. Consistent chemical composition and particle characteristics help maintain predictable batch reactions during the melting process. Controlled decomposition helps achieve consistent CO₂ release and steady formation of CaO and MgO, supporting predictable melting behaviour."
            },
            {
              "title": "Controlled Grit Size for Batch Uniformity",
              "description": "Uniformly screened Dolomite Grits with controlled particle size distribution and minimal excessive fines promote **homogeneous batch mixing, predictable melting and efficient incorporation** into the glass melt. Appropriate particle size matching with other batch ingredient helps **minimize particle segregation and variations in melting behaviour**."
            },
            {
              "title": "Low Decrepitation & Thermal Stability",
              "description": "Dolomite with low decrepitation characteristics offers better **resistance to cracking and disintegration during rapid heating**. This can help minimize excessive fines generation and dust formation during thermal processing, supporting cleaner batch handling and more consistent furnace feed quality. Actual furnace performance also depends on raw material handling, batch preparation and operating conditions."
            }
          ]
        },
        {
          "title": "Paint & Coating Industry",
          "points": [
            {
              "title": "High Brightness & Controlled Colour Impurities",
              "description": "High quality Dolomite with excellent **natural high brightness and controlled iron bearing impurities, such as Fe₂O₃,** provides a reliable mineral filler for paint and coating formulations. Consistent mineral composition and controlled colour characteristics help maintain **brightness, colour uniformity** and **shade consistency**, particularly in white, pastel and light coloured coatings application."
            },
            {
              "title": "Mineral Hardness & Coating Durability",
              "description": "With a typical **Mohs hardness of approximately 3.5–4.0**, dolomite offers suitable mineral hardness for selected architectural, industrial and texture coatings applications. When appropriately formulated, it can contribute to **improved scrub resistance, abrasion resistance and coating film durability**. This mineral hardness helps coatings resist routine wear and mechanical contact."
            },
            {
              "title": "Low Oil Absorption & Formulation Efficiency",
              "description": "Dolomite grits offers **naturally low oil absorption**, enabling higher filler loading without significantly increasing resin or binder requirements. This supports efficient **mineral filler incorporation, higher practical filler loading** and **optimization of formulation costs**. Its oil absorption characteristics also assist manufacturers in balancing **pigment volume concentration (PVC), viscosity and coating performance** according to the intended application."
            },
            {
              "title": "Graded Particle Size for Texture & Surface Finish",
              "description": "Available in different particle size graded Dolomite Powder and Grits provide **flexibility in controlling particle packing, surface texture finish and formulation**. Fine grades are suitable for applications requiring smoother finishes, while coarser grades can help develop **matte, textured, decorative and structured surface finishes**. Appropriate particle selection helps manufacturers achieve the desired surface profile and appearance."
            },
            {
              "title": "Consistent Particle Size Distribution & Dispersion",
              "description": "A controlled particle size distribution (PSD) and consistent particle characteristics **support predictable filler incorporation and uniform particle distribution** throughout the coating formulation. This helps improve **formulation consistency, processing repeatability and surface finish uniformity**, supporting repeatable processing and consistent finished product quality."
            },
            {
              "title": "Controlled Moisture for Reliable Processing",
              "description": "Low and controlled moisture content supports consistent **mineral handling, storage** and **incorporation into paint and coating formulations**. It helps minimize moisture related processing variations such as viscosity variation and agglomeration and supports **reliable mixing, consistent viscosity control** and **uniform filler incorporation**, particularly in moisture sensitive formulations."
            },
            {
              "title": "Suitable for Textured & Decorative Coatings",
              "description": "Precisely graded Dolomite Grits are suitable for **textured paints, decorative wall coatings, exterior texture finishes and stone effect coatings**. Appropriate grit selection helps achieve the desired **surface profile, decorative appearance and texture consistency** in accordance with the coating system and application method."
            }
          ]
        },
        {
          "title": "Agriculture Industry",
          "points": [
            {
              "title": "Effective Soil Acidity Neutralization",
              "description": "Agricultural grade Dolomite helps **neutralize soil acidity and raise soil pH through its natural calcium and magnesium carbonate content**. It helps maintain more favourable conditions for root growth and nutrient availability in acidic soils. Its dual carbonates react with soil acidity, helping buffer soil pH and improve the chemical environment for healthy plant development."
            },
            {
              "title": "Natural Source of Calcium & Magnesium",
              "description": "Premium Dolomite naturally supplies **Calcium (Ca) and Magnesium (Mg)**, two essential secondary plant nutrients. **Calcium supports cell wall development, root growth** and structural integrity of plant, while **magnesium is a key component of chlorophyll** and plays an important role in photosynthesis and plant metabolism."
            },
            {
              "title": "Consistent Chemical Quality & Neutralizing Value",
              "description": "High quality Dolomite offers consistent carbonate composition, controlled Ca and Mg content, and reliable neutralizing value support predictable agricultural performance. Controlled insoluble matter and undesirable impurities further contribute to product quality and suitability for applicable agricultural requirements."
            },
            {
              "title": "Helps Reduce Aluminium & Manganese Availability",
              "description": "In acidic soils, excessive soluble aluminium and manganese can adversely affect root development and plant growth. By helping raise soil pH, Dolomite reduces the solubility and availability of potentially toxic forms of these elements, supporting a more favorable soil chemical environment, root development."
            },
            {
              "title": "Supports Better Nutrient Availability",
              "description": "Properly applied Dolomite helps maintain a suitable soil pH level, which can improve the availability of essential plant nutrients such as **Nitrogen (N), Phosphorus (P) and Potassium (K)** in acidic soils, while supporting balanced nutrient uptake. Its overall effect on nutrient availability depends on the initial soil pH, soil characteristics and application rate."
            },
            {
              "title": "Controlled Particle Size for Consistent Reactivity",
              "description": "Precisely controlled Dolomite Grit particle size and grading support consistent handling and soil contact characteristics. Finer particles provide greater surface area and generally react faster with soil acidity, while coarser grades dissolve more gradually. Controlled fineness and grading help determine reaction rate and neutralizing efficiency."
            }
          ]
        },
        {
          "title": "Plastic & Polymer Industry",
          "points": [
            {
              "title": "Improved Stiffness & Dimensional Stability",
              "description": "High purity **Dolomite Grits (CaMg(CO₃)₂)** functions as a mineral filler that can enhance **stiffness, hardness and dimensional stability** in suitably formulated polymer compounds. Its performance depends on polymer type, filler loading, particle size, dispersion and surface treatment. Properly optimized filler incorporation can help control dimensional changes and support consistent component geometry**.**"
            },
            {
              "title": "Controlled Particle Size for Consistent Filler Distribution",
              "description": "Precisely classified **Dolomite Grits** provide a uniform particle size distribution that improves **particle packing, formulation balance, consistent filler loading** and **compound uniformity**. Their controlled grading promotes smoother processing, better dimensional stability and consistent surface quality in plastic and polymer compounds."
            },
            {
              "title": "High Brightness & Colour Uniformity",
              "description": "High brightness Dolomite with **controlled iron oxide (Fe₂O₃) and other colouring impurities** provides a suitable mineral filler for consistent colour, opacity and visual appearance in white PVC, masterbatch and other light coloured plastic products. Appropriate mineral brightness and purity help maintain **whiteness and colour uniformity** in the finished compound according to formulation."
            },
            {
              "title": "Controlled Chemistry & Low Moisture for Reliable Processing",
              "description": "Consistent chemical composition, controlled impurities and low moisture content support reliable **material handling, storage and incorporation into suitable polymer** and composite systems. Proper moisture management helps minimize the risk of moisture related bubbles, voids and surface imperfections during polymer processing, supporting improved finished-product quality."
            },
            {
              "title": "Optimized Oil Absorption & Formulation Efficiency",
              "description": "Controlled oil absorption is an important parameter in evaluating mineral filler compatibility with polymer formulations and associated processing additives. Suitable oil absorption characteristics can help **optimize additive requirements, filler incorporation and formulation balance**. When matched to the polymer system, they support efficient formulation development and consistent compound performance."
            }
          ]
        }
      ]
    }
  },
  "coated-dolomite": {
    "name": "Stearic Acid Coated Dolomite Powder",
    "description": "Premium grade **Stearic Acid Coated Dolomite Powder** is manufactured from high purity **Calcium & Magnesium Carbonate (CaMg(CO₃)₂)** and engineered with a precisely controlled stearic acid surface treatment to deliver **exceptional hydrophobicity, good filler polymer compatibility, superior filler dispersion, reduced moisture absorption** and enhanced processing performance, making it a reliable functional mineral filler for a wide range of high performance industrial applications.",
    "how": "**STONEX ENTERPRISES** is one of India's trusted manufacturer and supplier of **Premium Stearic Acid Coated Dolomite Powder**, delivering high performance mineral solutions to diverse industries. **Backed by 15+ years of manufacturing expertise**, we combine premium raw materials with modern processing technology to deliver consistent industrial performance. Our carefully selected high purity Dolomite lumps are sourced from our own mines and carefully selected sources across Rajasthan, then processed through modern grinding, classification and controlled stearic acid coating systems to achieve uniform particle size and consistent surface treatment. This engineered coating enhances hydrophobicity, filler dispersion, moisture resistance and compatibility with polymer matrices. With strong in house production capabilities, advanced processing infrastructure and rigorous quality testing, we deliver Coated Dolomite Powder with **Purity >97% and Brightness >95%**, meeting the highest industry standards across a wide range of industrial applications.",
    "whatIs": [
      {
        "title": "What are Dolomite and Coated Dolomite Powder ?",
        "text": [
          "Dolomite is a naturally occurring carbonate mineral composed of **Calcium Magnesium Carbonate (CaMg(CO₃)₂)** and is one of the most widely used industrial minerals for high performance filler applications. Carefully selected high purity Dolomite is processed through advanced crushing, grinding, air classification and particle size control to produce premium quality Dolomite Powder with consistent chemical composition and uniform fineness. For **Coated Dolomite Powder**, these precisely micronized particles undergo a controlled **Stearic Acid surface treatment**, creating a uniform hydrophobic coating around each particle. This engineered surface modification significantly improves hydrophobicity, polymer compatibility, dispersion efficiency and moisture resistance. Coated Dolomite Powder combines the natural advantages of high purity CaMg(CO₃)₂ including excellent whiteness, chemical stability, controlled particle size and dimensional stability with enhanced surface properties required for demanding industrial formulations. It is widely used as a premium functional filler in **PVC pipes & fittings, PE/PP filler masterbatch, wire & cable compounds, rubber products, WPC, SPC flooring, polymer compounds and other advanced industrial applications**."
        ]
      },
      {
        "title": "What is Stearic Acid ?",
        "text": [
          "Stearic Acid is a naturally derived **long chain saturated fatty acid (C18H36O2)** widely used as a **surface treatment agent for mineral fillers** such as Dolomite. In coated mineral manufacturing, it forms an thin molecular layer around each particle, **transforming the naturally hydrophilic surface into a hydrophobic**, reducing surface affinity for water and improving compatibility with selected polymer systems."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Name",
        "value": "Calcium Magnesium Carbonate CaMg(CO₃)₂"
      },
      {
        "label": "Purity (CaMg(CO₃)₂)",
        "value": ">97%"
      },
      {
        "label": "Brightness",
        "value": ">95%"
      },
      {
        "label": "Whiteness",
        "value": "95 - 97%"
      },
      {
        "label": "Calcium Carbonate (CaCO₃)",
        "value": "50 - 55%"
      },
      {
        "label": "Magnesium Carbonate (MgCO₃)",
        "value": "40 - 44%"
      },
      {
        "label": "Stearic Acid",
        "value": "1-2%"
      },
      {
        "label": "Silica (SiO₂)",
        "value": "<1.0 %"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Oil Absorption",
        "value": "15 - 20 g/100g"
      },
      {
        "label": "pH Value",
        "value": "8.5 - 9.5"
      },
      {
        "label": "Mohs Hardness",
        "value": "3.5 - 4"
      },
      {
        "label": "Specific Gravity",
        "value": "2.85-2.90 g/cm³"
      },
      {
        "label": "Surface Character",
        "value": "Hydrophobic/ Activated"
      },
      {
        "label": "Coating Uniformity",
        "value": "Controlled/ Uniform"
      }
    ],
    "sizes": [
      "200 Mesh",
      "300 Mesh",
      "400 Mesh",
      "500 Mesh",
      "1000 Mesh"
    ],
    "sizeNote": "10 microns to 74 microns (as per mesh size)",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "keyPropertiesTitle": "Premium Coated Dolomite Powder Key Properties",
    "keyProperties": [
      {
        "title": "High Purity & Controlled Chemical Composition",
        "description": "High purity dolomite with a consistent **CaMg(CO₃)₂** composition provides a reliable source of **Calcium and Magnesium carbonates.** Its controlled chemical composition supports consistent formulation chemistry and predictable performance across industrial applications across industrial formulations."
      },
      {
        "title": "Advanced Stearic Acid Surface Treatment",
        "description": "Controlled **stearic acid surface treatment** modifies the mineral surface of each particle from hydrophilic to more hydrophobic and organophilic. This treatment can **enhance compatibility and dispersion in PVC, plastics, rubber, masterbatch, and other polymer based formulations**, depending on the application and processing conditions."
      },
      {
        "title": "High Brightness & Consistent Whiteness",
        "description": "Carefully selected and processed Dolomite provide **high brightness and whiteness, supporting clean, bright mineral filler** that supports consistent colour, visual appearance and premium surface quality in finished products. Actual performance depends on the mineral grade and the requirements of the end application."
      },
      {
        "title": "Low Moisture & Improved Moisture Resistance",
        "description": "With controlled Low Moisture content supports **reliable handling, storage and processing**. Combined with its stearic acid treated surface, coated dolomite helps minimize moisture related effects in moisture sensitive polymer and rubber formulations where moisture control is important."
      },
      {
        "title": "Controlled Particle Size & Particle Size Distribution PSD",
        "description": "Precisely controlled particle size and consistent particle size distribution (PSD) support **uniform filler incorporation, predictable processing behaviour and consistent surface finish**. Appropriate particle size selection helps meet the requirements of different polymer and rubber applications."
      },
      {
        "title": "Controlled Oil Absorption",
        "description": "With controlled oil absorption, dolomite powder offers controlled binder demand and predictable interaction with resin and polymer systems, supporting formulation and viscosity control. The resulting performance depends on the resin system, filler concentration and overall formulation design."
      },
      {
        "title": "Functional Mechanical Filler Performance",
        "description": "With a typical **Mohs hardness of approximately 3.5–4**, dolomite serves as a functional mineral filler in polymer and rubber compounds. Depending on the formulation and loading level, it can contribute to **stiffness, hardness, dimensional stability** and **cost effective filler utilization.**"
      },
      {
        "title": "Chemical Stability & Consistent Surface Characteristics",
        "description": "The combination of stable carbonate mineral composition and stearic acid surface treatment supports consistent filler behaviour in suitable organic matrices. Appropriate surface treatment reduces unwanted surface interactions, supporting lower moisture sensitivity, consistent filler behavior, improved dispersion and processing stability in polymer and rubber formulations."
      }
    ],
    "processTitle": "How We Manufacture Premium Coated Dolomite Powder",
    "steps": [
      {
        "title": "Premium Dolomite Raw Material Selection",
        "description": "We begin with carefully selected high purity Dolomite (CaMg(CO₃)₂) sourced from our own mines and trusted mining sources across Rajasthan, ensuring purity, excellent whiteness and consistent mineral composition for premium industrial applications."
      },
      {
        "title": "Controlled Crushing & Screening",
        "description": "Selected Dolomite lumps is processed through advanced crushing and precision screening systems to produce uniform feed material, eliminating oversized particles, removing surface impurities and maintaining consistent quality before micron grinding."
      },
      {
        "title": "Ultra Fine Grinding & Precision Micronization",
        "description": "Using advanced micronizers and grinding systems, Dolomite is processed into ultra fine powder with customized mesh sizes, narrow particle size distribution, excellent dispersion characteristics and consistent fineness for high performance industrial applications"
      },
      {
        "title": "Stearic Acid Surface Coating Technology",
        "description": "The micronized dolomite powder is uniformly treated with Premium Stearic Acid in a temperature controlled coating system. This specialized surface modification creates a highly hydrophobic mineral filler with improved polymer compatibility, reduced moisture absorption, enhanced dispersion and better processing efficiency."
      },
      {
        "title": "Strict Quality Control & Laboratory Testing",
        "description": "Every production batch of coated dolomite powder undergoes rigorous testing for CaMg(CO₃)₂ purity, brightness, coating efficiency, particle size distribution, moisture content **a**nd other essential parameters, ensuring consistent batch to batch performance that meets the most demanding industrial specifications."
      },
      {
        "title": "Professional Packing & Dispatch",
        "description": "Finished Coated Dolomite powder is packed in high quality moisture resistant bags under strict quality protocols, ensuring safe transportation, long shelf life, consistent product integrity and reliable supply for large scale industrial customers."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Coated Dolomite Powder delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Coated Dolomite Powder",
    "whyChoose": [
      {
        "title": "Extensive Industry Experience",
        "description": "Backed by 15+ years of expertise in mineral mining, advanced processing, grinding technology, surface treatment and quality management, enabling us to deliver consistent product quality, reliable performance and dependable supply to industrial customers."
      },
      {
        "title": "Premium Grade Dolomite Raw Material",
        "description": "Our coated dolomite powder is manufactured using carefully selected natural Dolomite with controlled CaO and MgO composition, high brightness and low impurity levels. Consistent raw-material selection provides a reliable foundation for premium grade coated filler production."
      },
      {
        "title": "Advanced Stearic Acid Surface Treatment",
        "description": "Our controlled stearic acid coating process modifies the dolomite particle surface, enhancing hydrophobicity and organophilic characteristics. This supports improved compatibility, incorporation and dispersion in suitable polymer, rubber, adhesive, sealant and other organic formulation systems."
      },
      {
        "title": "High Purity, Brightness & Batch Consistency",
        "description": "We maintain stringent quality parameters for mineral purity, brightness, whiteness, moisture and chemical composition. Systematic inspection and quality monitoring help maintain consistent product characteristics and reliable batch to batch performance for demanding industrial applications."
      },
      {
        "title": "Advanced Purification & Processing",
        "description": "Our advanced purification, grinding, micronization, classification and controlled surface treatment technologies are employed to achieve precise particle characteristics, uniform coating, improved dispersion and enhanced compatibility with polymeric and organic binder systems."
      },
      {
        "title": "Competitive & Value Driven Pricing",
        "description": "We provide cost effective coated dolomite solutions with consistent quality and performance, helping manufacturers optimize filler loading and overall formulation economics without compromising required processing and application requirements."
      },
      {
        "title": "Reliable Manufacturing & Bulk Supply",
        "description": "Supported by established manufacturing infrastructure, systematic quality control and organized logistics, we are equipped to serve regular bulk requirements and customized specifications. Our focus on production consistency, timely dispatch and long term customer relationships makes us a dependable mineral supply partner."
      }
    ],
    "applications": {
      "title": "Application of Stearic Acid Coated Dolomite Powder",
      "intro": "Enhance polymer processing with premium Stearic Acid Coated Dolomite Powder, engineered to support improved filler dispersion, enhanced hydrophobicity, better polymer compatibility and consistent processing performance across diverse manufacturing industries.",
      "sections": [
        {
          "title": "PVC Pipes & Fittings Industry",
          "points": [
            {
              "title": "Enhanced Hydrophobicity & Reduced Moisture Pickup",
              "description": "Precisely controlled stearic acid surface treatment modifies the surface characteristics of dolomite particles, making them more hydrophobic and organophilic. This **reduces moisture pickup and improves powder handling, storage stability and compatibility with PVC compounding systems**. It also supports more efficient incorporation of the mineral filler during dry blending and processing."
            },
            {
              "title": "Improved Dispersion & PVC Compatibility",
              "description": "Uniform stearic acid coating provide uniform wetting characteristics of dolomite particles, helping **minimize particle agglomeration and promote more uniform dispersion throughout the PVC compounding**. Effective dispersion contributes extrusion performance, consistent compound composition and helps maintain uniform properties throughout the finished PVC product."
            },
            {
              "title": "Increased Stiffness & Dimensional Stability",
              "description": "Dolomite, with its **calcium magnesium carbonate (CaMg(CO₃)₂) composition** and **3.5 - 4 Mohs hardness,** dolomite acts as a rigid mineral filler in uPVC and CPVC compounds. At appropriately optimized loading levels and with effective dispersion, it can **increase stiffness, flexural modulus, dimensional stability and resistance to deformation**, helping control post extrusion shrinkage and consistent performance of rigid PVC pipes and fittings. The resulting performance depends on the overall formulation and extrusion conditions."
            },
            {
              "title": "Optimized Filler Loading & Formulation Economics",
              "description": "Controlled particle size distribution, suitable oil absorption characteristics and stearic acid surface treatment support efficient filler incorporation into PVC formulations. At suitable loading levels, dolomite can **partially replace PVC resin, supporting formulation efficiency and optimize raw material cost** while maintaining required product properties, processing characteristics and finished product performance."
            },
            {
              "title": "Consistent Processing & Extrusion Performance",
              "description": "Stearic acid treatment modifies the surface characteristics of dolomite, supporting improved incorporation and more uniform distribution within the PVC compound This can contribute to **consistent melt processing, stable extrusion and improved product surface quality** when properly matched to the formulation."
            },
            {
              "title": "Uniform Finished Product Quality",
              "description": "Consistent mineral purity, controlled particle size distribution, reduces particle to particle friction and uniform surface treatment help manufacturers maintain batch-to-batch consistency in PVC compounds. These characteristics support reliable production of pipes and fittings with controlled physical properties, dimensional uniformity and consistent surface appearance."
            }
          ]
        },
        {
          "title": "Wire & Cable Manufacturing Industry",
          "points": [
            {
              "title": "Hydrophobic Surface for Moisture Resistance",
              "description": "Stearic acid surface treatment modifies the dolomite particles surface into a more hydrophobic and organophili filler. **This reduces surface energy, moisture affinity and improving compatibility with the PVC matrix**. The treated surface helps minimize moisture defects such as voids, porosity and surface imperfections during extrusion and supports consistent filler incorporation in PVC wire and cable insulation and sheathing compounds."
            },
            {
              "title": "Consistent Processing & Extrusion Performance",
              "description": "Uniform particle size distribution, controlled moisture content and effective surface modification support consistent filler incorporation during PVC compounding. These characteristics can contribute to stable processing behaviour, improved compound uniformity and a smoother extrusion finish in wire and cable insulation and sheathing applications."
            },
            {
              "title": "Controlled Oil Absorption for Plasticizer Efficiency",
              "description": "Stearic acid treatment can reduces surface energy and oil absorption. This can help manage interactions between filler and plasticizer such as DOP and DINP, supporting better control over plasticizer requirements. This supports efficient filler loading while maintaining a balance of flexibility, dimensional stability, processability and mechanical properties."
            },
            {
              "title": "Improved Filler Dispersion & Polymer Compatibility",
              "description": "Stearic acid coating improves the surface characteristics of dolomite, promoting better wetting and more uniform distribution within the PVC matrix. This helps **reduce particle agglomeration and supports consistent compound homogeneity, contributing to reliable processing, improve extrusion stability, uniform insulation thickness and surface finish** in wire and cable application when processing conditions are properly controlled."
            },
            {
              "title": "High Whiteness for Colour Consistency",
              "description": "High purity and high brightness dolomite provides a clean, white coloured mineral filler base for white and light coloured PVC wire and cable compounds. Its brightness and colour consistency can helps manufacturers **achieve uniform appearance and consistent colour development** with the appropriate pigment system, subject to the specified grade and final formulation."
            },
            {
              "title": "Mineral Composition for Formulation Flexibility",
              "description": "Dolomite, consisting primarily of calcium magnesium carbonate (CaMg(CO₃)₂), offers a functional mineral filler option for PVC compound manufacturers. Its chemical composition, hardness, particle size distribution and surface characteristics allow formulators to optimize filler loading, compound cost and physical properties according to specific wire and cable application requirements"
            }
          ]
        },
        {
          "title": "Adhesive and Sealant Industry",
          "points": [
            {
              "title": "Enhanced Surface Compatibility & Organic Phase Affinity",
              "description": "A controlled stearic acid surface treatment reduces the polarity of dolomite surface and provides a more hydrophobic and organophilic surface characteristics. This **improves compatibility and wetting with suitable organic binders, polymers and plasticizers and uniform filler incorporation into suitable adhesive and sealant formulation**."
            },
            {
              "title": "Improved Dispersion & Uniform Filler Distribution",
              "description": "Uniform and controlled mineral surface treatment, combined with a well controlled particle size distribution (PSD), supports improved filler dispersion within the binder matrix. This helps **minimize particle agglomeration and excessive filler to filler interactions, promoting homogeneous filler distribution** throughout the adhesive or sealant matrix. Improved dispersion contributes to consistent rheological behaviour, uniform product properties and reduced filler related processing variations."
            },
            {
              "title": "Rheology Control & Application Consistency",
              "description": "Controlled particle size distribution, oil absorption and filler loading **influence viscosity, flow behaviour and consistency in adhesive and sealant formulations**. When appropriately balanced with the binder system and rheology modifiers, coated dolomite can help achieve the desired application properties, including workability, extrusion behaviour and sag resistance."
            },
            {
              "title": "Low Moisture Content & Reduced Moisture Sensitivity",
              "description": "Low moisture content is particularly important in moisture sensitive adhesive and sealant formulations. Stearic acid coating **imparts water repellent surface characteristics, helping reduce the mineral's affinity for moisture**. These properties support improved filler handling and processing reliability in **suitable polyurethane (PU), silane modified polymer (SMP/MS polymer)** and other compatible sealant systems"
            },
            {
              "title": "Low Oil Absorption & Efficient Filler Incorporation",
              "description": "Optimized oil absorption helps manage binder and plasticizer requirements during formulation. Lower oil absorption can helps **reduce binder demand and facilitates efficient incorporation of mineral filler into organic formulations**. This can support higher filler loading while maintaining workable viscosity and processing characteristics when properly matched to the resin system."
            },
            {
              "title": "Consistent Mineral Quality & Batch-to-Batch Stability",
              "description": "Consistent dolomite purity (CaMg(CO₃)₂), controlled moisture content, particle size distribution, oil absorption and stearic acid coating levels are essential for dependable formulation performance. These controlled properties help adhesive and sealant manufacturers achieve repeatable processing behaviour, consistent product characteristics and reliable production quality."
            }
          ]
        },
        {
          "title": "PE (Polyethylene) & PP (Polypropylene) Filler Masterbatch Industry",
          "points": [
            {
              "title": "Enhanced Polymer Compatibility & Surface Wetting",
              "description": "Stearic acid treatment modifies the dolomite particle surface, increasing its hydrophobic character and improving its compatibility for non polar PE and PP polymer systems. This treatment improves wetting and promotes more effective incorporation of the mineral filler into the polymer matrix. Resulting efficient high loading in filler masterbatch production and smoother processing."
            },
            {
              "title": "Improved Dispersion & Reduced Agglomeration",
              "description": "The stearic acid coating helps reduce particle to particle interaction and improves the compatibility of fine dolomite particles throughout the polymer matrix. This **promotes more uniform particle dispersion, reduces agglomeration, supports smoother extrusion and consistent processing** in applications such as blown film, injection molding and other PE/PP products."
            },
            {
              "title": "Supports High Filler Loading",
              "description": "Improved surface compatibility and particle dispersion can support the incorporation of higher dolomite loading into PE/PP masterbatch formulations. This provides formulation flexibility and opportunities for mineral loading optimization while maintaining the desired processing characteristics and end product properties. Achievable loading depends on particle size distribution, surface treatment, carrier resin and formulation design."
            },
            {
              "title": "Low & Controlled Oil Absorption",
              "description": "Controlled oil absorption, combined with suitable particle size distribution and stearic acid surface treatment, supports efficient filler incorporation and dispersion in PE and PP masterbatch formulations. These characteristics may help **optimize formulation design and support higher mineral loading** while maintaining the required processing and product performance characteristics."
            },
            {
              "title": "Improved Powder Flow & Processing Behaviour",
              "description": "A uniform stearic acid coating can improve powder flow and reduce unwanted particle interactions. This supporting more **consistent feeding, blending and incorporation** during masterbatch compounding, helping manufacturers maintain stable processing conditions during masterbatch production. Actual extrusion performance depends on equipment settings and formulation design."
            },
            {
              "title": "Reduced Moisture Affinity",
              "description": "The hydrophobic nature of stearic acid treated dolomite reduces the mineral surface's affinity for moisture, **helping limit moisture pickup during storage, handling and material processing**. This supports better powder handling and helps maintain more consistent material conditions when combined with appropriate packaging and storage practices."
            },
            {
              "title": "Controlled Particle Size & Consistent Quality",
              "description": "Carefully controlled particle size distribution, chemical purity, brightness, controlled moisture, oil absorption and uniformly stearic acid coating help to maintain consistent filler performance during PE/PP masterbatch production.These characteristics support predictable dispersion, uniform filler distribution, consistent pellet quality and reliable batch to batch performance masterbatch formulations."
            }
          ]
        },
        {
          "title": "Rubber & Automotive Elastomers Industry",
          "points": [
            {
              "title": "Enhanced Hydrophobicity & Filler Dispersion",
              "description": "Stearic acid surface treatment modifies the surface characteristics of Dolomite Powder, reducing its surface polarity and improving its hydrophobic nature. This supports better compatibility and incorporation into non polar rubber systems such as **Natural Rubber (NR), Styrene Butadiene Rubber (SBR) and Ethylene Propylene Diene Monomer (EPDM)**. The treated surface **improves bond between the filler and rubber and promote uniform dispersion throughout the rubber matrix**, depending on the formulation and processing conditions."
            },
            {
              "title": "Reduced Agglomeration & Improved Filler Dispersion",
              "description": "Controlled surface treatment reduces the surface energy of mineral particles, helping minimize particle to particle attraction and agglomeration during rubber compounding. This supports more **uniform filler distribution during processing in Banbury internal mixers and two roll mills**, contributing to consistent compound quality and batch t batch processing stability."
            },
            {
              "title": "Controlled Hardness, Stiffness & Dimensional Stability",
              "description": "Dolomite (CaMg(CO₃)₂), with its rigid mineral structure, acts as a functional mineral filler that can contribute to **controlled compound hardness, stiffness and tear resistance** when appropriately formulated, while **supporting dimensional stability and deformation resistance**. Its reinforcing contribution depends on particle size, filler loading, dispersion and interfacial interaction. Suitable for automotive profiles, seals, gaskets and molded rubber components."
            },
            {
              "title": "Improved Processing & Filler Incorporation",
              "description": "Stearic acid coating can provide a lubricating effect at the mineral particle surface, reducing friction between mineral particles and facilitating filler incorporation during compounding. This can support **smoother mixing, consistent extrusion, improved material flow** and more **consistent processing**. Actual processing benefits depend on coating level, compound composition and equipment settings."
            },
            {
              "title": "Thermal Stability & High Temperature Processing Suitability",
              "description": "Dolomite offers **good inherent thermal stability** under typical rubber processing conditions, making it a suitable mineral filler for appropriately formulated elastomer compounds. Its inorganic mineral structure remains stable during conventional compounding and processing temperatures. It is **suitable for EPDM seals, hoses, gaskets and automotive elastomer profiles**."
            },
            {
              "title": "Low Oil Absorption & Formulation Efficiency",
              "description": "Controlled oil absorption characteristics can help rubber manufacturers **optimize processing oil requirements and filler loading in compound formulations**. Depending on particle size, surface treatment and formulation design, Dolomite Powder can serve as an economical mineral extender while maintaining the desired balance of compound processability, physical properties and production cost."
            }
          ]
        },
        {
          "title": "Paint & Coating Industry",
          "points": [
            {
              "title": "High Brightness & Colour Consistency",
              "description": "High brightness and low iron content can **provide a clean, bright colour neutral mineral extender for white and light coloured paints and coatings formulations**. Its consistent mineral quality and controlled particle characteristics help maintain colour uniformity and a clean appearance in finished coatings. Depending on the formulation, it can help optimize the use of higher cost pigments such as titanium dioxide (TiO₂)."
            },
            {
              "title": "Enhanced Hydrophobicity & Binder Compatibility",
              "description": "Stearic acid surface treatment converts dolomite from hydrophilic to a more hydrophobic and organophilic surface, improving compatibility with organic binder systems. This **support better wetting and dispersion in alkyd, acrylic, epoxy and other coating formulation**, helping minimize particle agglomeration and promoting a more uniform filler distribution."
            },
            {
              "title": "Controlled Particle Size & Uniform Dispersion",
              "description": "Precisely controlled particle size and surface treatment promote uniform incorporation of dolomite throughout the paint and coating formulation. Appropriate particle sizing helps **minimize particle agglomeration, improve formulation consistency and support a smoother, more uniform coating film** with effective dispersion and suitable processing conditions."
            },
            {
              "title": "Low Oil Absorption & Formulation Efficiency",
              "description": "Low and controlled oil absorption can helps reduce the amount of liquid binder required to wet the mineral filler, depending on particle characteristics and formulation design. This can support **higher filler loading flexibility, manageable viscosity and improved raw material utilization**, **contributing to formulation cost optimization** without compromising the required coating performance."
            },
            {
              "title": "Mineral Hardness & Mechanical Performance",
              "description": "With a typical Mohs hardness of approximately 3.5–4.0, dolomite offers a moderately hard mineral filler for selected paint and coating applications. Its mineral characteristics can **contribute to coating film hardness and resistance to mechanical wear**. The resulting abrasion resistance and scrub performance depend on particle size distribution, filler loading, binder selection and overall formulation design."
            },
            {
              "title": "Controlled Rheology & Surface Finish",
              "description": "The combination of controlled particle size distribution, low oil absorption and stearic acid treatment supports predictable rheology, stable viscosity, smooth application and consistent flow. It also helps achieve a uniform surface finish, gloss, matt appearance and surface texture depend on particle size, loading and binder formulation."
            },
            {
              "title": "Application in Paint & Coating",
              "description": "Premium stearic acid coated Dolomite Powder is suitable for properly formulated in solvent based **architectural and decorative paints, industrial coating formulation paint, anti corrosive primers, powder coatings, road marking paints, marine protective coatings**."
            }
          ]
        }
      ]
    }
  },
  "coated-calcite": {
    "name": "Stearic Acid Coated Calcite Powder",
    "description": "Premium grade **Stearic Acid Coated Calcite Powder** is manufactured from **high purity Calcium Carbonate (CaCO₃)** and treated with a precisely controlled stearic acid surface coating to enhance **hydrophobicity, polymer compatibility, superior filler dispersion and moisture resistance**. Its modified surface promotes efficient filler incorporation and supports improved processing performance, making it a reliable functional mineral filler for a wide range of high performance industrial applications.",
    "how": "**STONEX ENTERPRISES** is one of India's trusted manufacturer and supplier of **Premium Stearic Acid Coated Calcite Powder**, delivering high performance mineral solutions to diverse industries. With over 15 years of expertise in mineral mining, advanced grinding, surface treatment and quality management, we maintain stringent control throughout the manufacturing process. Our **high purity Calcite lumps** are sourced from our own mines and carefully selected sources across Rajasthan, then processed through modern grinding, classification and controlled stearic acid coating systems to achieve uniform particle size and consistent surface treatment. This engineered coating enhances **hydrophobicity, filler dispersion, moisture resistance** and **compatibility with polymer matrices**. With strong in house production capabilities, advanced processing infrastructure and rigorous quality testing, we deliver Coated Calcite Powder with **CaCO₃ Purity >97% and Brightness >96%**, meeting the highest industry standards across a wide range of industrial applications.",
    "whatIs": [
      {
        "title": "What is Calcite and Coated Calcite Powder?",
        "text": [
          "Calcite is a naturally occurring mineral primarily composed of **Calcium Carbonate (CaCO₃)**, it is one of the most abundant minerals on earth and the principal constituent of limestone, marble and chalk. Selected premium grade Calcite lumps are carefully processed through advanced crushing, grinding, micronizing and classification systems to produce finely grade Calcite Powder. **Coated Calcite Powder** is produced by treating precisely processed Calcite Powder with a controlled **stearic acid surface coating process**, which modifies the particle surface, imparting enhanced hydrophobicity, improved polymer compatibility, superior dispersion and moisture resistance. Coated Calcite combines the inherent benefits of **high purity CaCO₃**, including excellent whiteness, chemical stability, controlled particle size and improved surface properties for demanding formulations. It is particularly valuable as a functional filler and performance enhancing mineral in **filler masterbatch, plastics, PVC pipes and profiles, wire and cables compoud, rubber, WPC and other compatible polymer systems.**"
        ]
      },
      {
        "title": "What is Stearic Acid ?",
        "text": [
          "Stearic Acid is a naturally derived **long chain saturated fatty acid (C18H36O2)** widely used as a **surface treatment agent for mineral fillers** such as Calcite. In coated mineral manufacturing, it forms an thin molecular layer around each particle, **transforming the naturally hydrophilic surface into a hydrophobic**, reducing surface affinity for water and improving compatibility with selected polymer systems."
        ]
      }
    ],
    "specs": [
      {
        "label": "Chemical Name",
        "value": "Calcium Carbonate (CaCO₃)"
      },
      {
        "label": "Purity (CaCO₃)",
        "value": ">97%"
      },
      {
        "label": "Brightness",
        "value": ">96%"
      },
      {
        "label": "Whiteness",
        "value": ">96%"
      },
      {
        "label": "Stearic Acid",
        "value": "1-2%"
      },
      {
        "label": "Moisture Content",
        "value": "<0.20%"
      },
      {
        "label": "Oil Absorption",
        "value": "15 - 20 g/100g"
      },
      {
        "label": "pH Value",
        "value": "8.0 - 9.5"
      },
      {
        "label": "Mohs Hardness",
        "value": "Approximately 3"
      },
      {
        "label": "Specific Gravity",
        "value": "2.7 - 2.8 g/cm³"
      },
      {
        "label": "Surface Character",
        "value": "Hydrophobic/ Activated"
      },
      {
        "label": "Coating Uniformity",
        "value": "Controlled/ Uniform"
      }
    ],
    "sizes": [
      "500 Mesh",
      "1000 Mesh",
      "1250 Mesh",
      "2000 Mesh",
      "2750 Mesh"
    ],
    "sizeNote": "5 microns to 20 microns (as per mesh size)",
    "packaging": [
      "25 Kg PP Bags",
      "50 Kg PP Bags",
      "1 MT Jumbo Bags"
    ],
    "keyPropertiesTitle": "Premium Coated Calcite Powder Key Properties",
    "keyProperties": [
      {
        "title": "High CaCO₃ Purity & Controlled Impurity Profile",
        "description": "High **Calcium Carbonate (CaCO₃)** content with low and controlled impurities ensures consistent chemical composition and dependable material quality. This supports predictable filler performance, formulation stability and reliable batch-to-batch consistency in industrial applications."
      },
      {
        "title": "Stearic Acid Surface Treatment",
        "description": "Precisely controlled **stearic acid surface treatment** creates a **uniform hydrophobic coating on each particle**, enhance compatibility with suitable polymer and organic based formulations.This surface modification supports better filler incorporation, dispersion and moisture resistance during processing."
      },
      {
        "title": "Controlled Particle Size Distribution",
        "description": "Advanced grinding and air classification process delivers a controlled particle size distribution. This supporting uniform filler dispersion, surface finish, formulation consistency and processing performance in finished products."
      },
      {
        "title": "High Brightness & Excellent Whiteness",
        "description": "Carefully selected and processed natural calcite **provides high brightness and excellent whiteness**, helping maintain clean colour development and visual consistency. It serves as an effective mineral extender in applications where brightness, opacity and finished product appearance are important."
      },
      {
        "title": "Low Moisture & Improved Material Handling",
        "description": "Controlled moisture content and appropriate surface treatment help **minimize moisture related agglomeration, handling difficulties** and supports efficient storage, smooth feeding, blending and dispersion during processing."
      },
      {
        "title": "Low & Controlled Oil Absorption",
        "description": "Optimized particle characteristics and surface treatment help achieve controlled oil absorption. This can support **efficient filler loading, formulation consistency and binder utilization**, depending on the end use system."
      },
      {
        "title": "Natural Mineral Hardness",
        "description": "With a **Mohs hardness of approximately 3**, calcite provides a balanced mineral hardness that supports controlled filler behaviour, surface characteristics and processing performance across a range of industrial formulations."
      }
    ],
    "processTitle": "How We Manufacture Premium Coated Calcite Powder",
    "steps": [
      {
        "title": "Premium Calcite Raw Material Selection",
        "description": "We carefully select high grade natural Calcite with high calcium carbonate (CaCO₃) purity from our own mines and trusted mining sources across Rajasthan, ensuring exceptional whiteness, consistent mineral composition and reliable quality for premium coated mineral fillers."
      },
      {
        "title": "Controlled Crushing & Screening",
        "description": "Selected Calcite lumps undergo efficient crushing and screening processes to achieve an optimized feed size, remove unwanted surface impurities and ensure smooth processing while maintaining the natural quality of the mineral."
      },
      {
        "title": "Ultra Fine Grinding & Precision Micronization",
        "description": "Using advanced micronizers and grinding systems, Calcite is processed into ultra fine powder with customized mesh sizes, controlled fineness, uniform particle size distribution, excellent dispersion characteristics for high performance industrial applications"
      },
      {
        "title": "Stearic Acid Surface Coating Technology",
        "description": "The micronized Calcite Powder is uniformly treated by premium stearic acid in a temperature controlled coating system. This specialized surface modification creates hydrophobic mineral filler with improve polymer compatibility, moisture resistance, enhanced dispersion and better processing efficiency."
      },
      {
        "title": "Strict Quality Control & Laboratory Testing",
        "description": "Each production batch of coated calcite powder undergoes comprehensive quality analysis for CaCO₃ purity, brightness, whiteness, coating efficiency, hydrophobicity, moisture content, oil absorption and particle size distribution and other essential parameters to ensure adherence to stringent industry requirements."
      },
      {
        "title": "Moisture Proof Packing & Dependable Supply",
        "description": "Finished Coated Calcite powder is packed in high quality moisture resistant bags under strict quality protocols, ensuring safe transportation, long shelf life, consistent product integrity and reliable supply for large scale industrial customers."
      }
    ],
    "applicationsTeaser": "Explore the wide range of industries and specialized applications where our high purity Coated Calcite Powder delivers consistent performance and reliable results.",
    "whyChooseTitle": "Why Choose Our Premium Coated Calcite Powder",
    "whyChoose": [
      {
        "title": "Extensive Industry Experience",
        "description": "Backed by 15+ years of expertise in mineral mining, advanced processing, grinding technology and quality management, enabling us to deliver consistent product quality and dependable supply to industrial customers."
      },
      {
        "title": "Premium Grade Raw Material",
        "description": "Manufactured from carefully selected, high quality natural Calcite with high CaCO₃ purity, excellent whiteness and controlled mineral chemistry, providing a reliable foundation for premium grade coated filler production."
      },
      {
        "title": "Advanced Stearic Acid Surface Treatment",
        "description": "Precisely controlled Stearic Acid Coating modifies the calcite surface to make it more hydrophobic, improving filler polymer compatibility, dispersion and processing performance in non polar and moderately polar polymer systems."
      },
      {
        "title": "High Purity, Brightness & Consistent Quality",
        "description": "Our Coated Calcite Powder is processed to achieve high CaCO₃ purity, excellent brightness, whiteness, controlled particle size distribution, clean appearance and reliable performance across demanding industrial applications."
      },
      {
        "title": "Advanced Purification & Processing",
        "description": "Advanced purification, grinding, micronization, classification and stearic acid coating processes are employed to achieve controlled particle characteristics, effective surface treatment, improved dispersion and enhanced compatibility with polymeric systems."
      },
      {
        "title": "Competitive & Value Driven Pricing",
        "description": "We offer competitive pricing without compromising on product quality and consistency, helping industrial customers optimize formulation costs while maintaining their desired performance and product standards."
      },
      {
        "title": "Reliable Quality & Supply Capacity",
        "description": "Supported by robust manufacturing infrastructure, systematic quality control and dependable supply capabilities, we are equipped to support regular bulk requirements, customized specifications and long term industrial supply programs with consistent product quality."
      }
    ],
    "applications": {
      "title": "Application of Stearic Acid Coated Calcite Powder",
      "intro": "Optimize high performance formulations with Premium Stearic Acid Coated Calcite Powder, engineered to deliver enhanced hydrophobicity, improved filler dispersion, superior polymer compatibility and consistent quality across diverse manufacturing industries.",
      "sections": [
        {
          "title": "Masterbatch Filler Industry",
          "points": [
            {
              "title": "Enhanced Hydrophobicity & Polymer Compatibility",
              "description": "Precisely controlled **stearic acid surface treatment** modifies the hydrophilic nature of calcium carbonate (CaCO₃), creating a more hydrophobic mineral surface. This treatment can **improve resin wetting, dispersion and compatibility with PE, PP, HDPE, and LDPE**. Reduced moisture related defects, voids, pinholes and phase separation related defects, when combined with appropriate material handling and formulation practices."
            },
            {
              "title": "Improved Dispersion & Particle Distribution",
              "description": "Uniform surface coating, combined with controlled particle size distribution, helps **minimize particle agglomeration and promotes consistent dispersion** of calcite throughout the polymer matrix. This supports improved compound homogeneity, reduced filler related surface defects, smooth extrusion and consistent product quality during masterbatch production and subsequent processing."
            },
            {
              "title": "Improved Processing & Melt Flow Characteristics",
              "description": "Stearic acid coating provides a lubricating effect that can reduce friction between mineral and polymer matrix during melt compounding and extrusion. This can support **smoother processing, improved flow behaviour and more efficient filler incorporation**. Reduce lower extrusion torque and energy consumption depend on the equipment, resin system, filler loading and processing parameters."
            },
            {
              "title": "Enhanced Stiffness & Dimensional Stability",
              "description": "Calcium carbonate acts as a functional mineral filler that can **improve the stiffness, rigidity and dimensional stability of polymer compounds**. Its controlled incorporation can help **manage moulding shrinkage and improve dimensional consistency** in suitable applications, including injection moulded products, pipes, plastic sheets, films and woven plastic products. The resulting mechanical properties depend on filler loading, particle size, polymer type and formulation design."
            },
            {
              "title": "High Whiteness & TiO₂ Pigment Extension",
              "description": "High purity, high whiteness Calcite e**nhances the brightness, whiteness and visual appearance** in white and light coloured plastics products. In appropriately designed white masterbatch formulations, calcium carbonate can also function as a **partial titanium dioxide (TiO₂) extender**, helping optimize pigment usage and formulation costs while maintaining the required optical properties."
            },
            {
              "title": "High Filler Loading & Formulation Cost Optimization",
              "description": "Premium stearic acid coated calcite is designed to support efficient mineral incorporation at appropriate filler loadings. By replacing a portion of the polymer carrier or resin in suitable formulations, it can help reduce resin consumption per unit of compound and help lower material costs. The achievable loading depends on dispersion, processing performance an d over all formulation."
            },
            {
              "title": "Low Oil Absorption, Moisture Resistance & Cost Efficiency",
              "description": "Low and controlled oil absorption **supports efficient polymer wetting and filler dispersion**, while stearic acid treatment **improves hydrophobicity, reduce moisture uptake and agglomeration** during polymer processing. Higher filler loading can reduce resin requirements, improve masterbatch bulk density and support overall production cost efficiency."
            }
          ]
        },
        {
          "title": "PVC Compound Industry",
          "points": [
            {
              "title": "Stearic Acid Surface Treatment for Enhanced Compatibility",
              "description": "Precisely controlled stearic acid treatment modifies the surface of Calcite Powder and improve to hydrophobic nature and compatibility with the PVC formulation. This **enhances filler incorporation and dispersion within PVC compound, supporting more consistent mixing, processing behaviour** and finished product quality. The effectiveness depends on coating uniformity and formulation requirements."
            },
            {
              "title": "Precisely Controlled Particle Size & PSD",
              "description": "Carefully controlled particle size distribution (PSD) **promote uniform filler dispersion and fiiler uniformity throughout the PVC compound**. Minimizing oversized particles and maintaining an appropriate particle size range helps reduce filler related surface irregularities, supporting a smoother surface finish, consistent product appearance and reliable processing performance."
            },
            {
              "title": "Improved Dispersion & Reduced Agglomeration",
              "description": "Stearic acid coated calcite powder surface modification **improves filler polymer compatibility, reduces particle to particle interaction within the PVC compounding**. Properly treated and classified particles **minimize agglomeration formation** during high speed dry blending and extrusion and promotes a more homogeneous PVC compound and reduces filler related surface defects."
            },
            {
              "title": "Low & Controlled Moisture for Stable Processing",
              "description": "Low and controlled residual moisture, combined with the hydrophobic characteristics of stearic acid surface treatment, helps **minimize moisture uptake during storage, transportation, handling and compounding**. This reducing the risk of steam generation, porosity, voids and melt instability during extrusion while supporting smoother feeding, efficient mixing and consistent PVC processing."
            },
            {
              "title": "Controlled Oil Absorption & Formulation Flexibility",
              "description": "Controlled oil absorption characteristics provide important information about the liquid uptake behaviour and surface characteristics of Calcite Powder. Selecting an appropriate oil absorption grade helps PVC formulators **optimize additive requirements, filler incorporation and compound consistency**. This **supports formulation flexibility efficient mixing and material utilizatio**n across different PVC applications."
            },
            {
              "title": "High Purity, Whiteness & Controlled Impurities",
              "description": "High purity **Calcium Carbonate (CaCO₃)** with excellent whiteness and controlled levels of iron, silica and other mineral impurities **provides consistent chemical and optical characteristics**. These properties are particularly important in white and light coloured PVC products, where colour consistency, brightness and finished product appearance are essential quality requirements."
            },
            {
              "title": "Enhanced Stiffness & Dimensional Stability",
              "description": "As a rigid mineral filler, Calcium Carbonate can **increase stiffness, hardness and flexural modulus in PVC compounds** when appropriately selected and incorporated. With optimized particle characteristics, surface treatment and filler loading, it helps manufacturers **balance mechanical properties, dimensional requirements, processing performance and overall formulation costs**. The final performance depends on PVC grade, additives and application specific formulation."
            }
          ]
        },
        {
          "title": "PVC Pipes & Fittings Industry",
          "points": [
            {
              "title": "Enhanced Dispersion & Processing Stability",
              "description": "Stearic acid surface treatment provides a more hydrophobic surface, improving filler wetting, compatibility and dispersion of Calcium Carbonate in rigid PVC compounds. When properly formulated it helps minimize agglomeration and die buildup, supporting stable extrusion, uniform material flow, consistent processing of pipes and fitting with smooth surface finish."
            },
            {
              "title": "Improved Stiffness & Dimensional Stability",
              "description": "Stearic acid Coated Calcite powder functions as a mineral filler in rigid PVC compounds, contributing to **improve modulus, hardness, stiffness and dimensional stability**. When properly formulated, it can help achieve the required mechanical characteristics for **PVC pipes, fittings and other rigid extrusion products.** The resulting performance depends on filler loading, particle size and the overall compound formulation."
            },
            {
              "title": "Consistent Extrusion & Product Uniformity",
              "description": "Controlled particle size distribution and uniform filler dispersion contribute to consistent compound behaviour and material flow during PVC extrusion. This supports reliable manufacturing conditions and helps maintain **uniform pipe wall thickness, dimensions and product geometry** when extrusion, calibration and cooling are properly controlled."
            },
            {
              "title": "Improved Surface Finish & Product Appearance",
              "description": "Fine particle size, effective surface treatment and uniform dispersion help minimize filler related surface irregularities and **support a smooth, consistent finish in finished PVC products**. The controlled whiteness and quality of coated calcite also contribute to consistent product appearance in appropriately designed formulations."
            },
            {
              "title": "Low Moisture Content & Storage Stability",
              "description": "Low moisture content combined with the hydrophobic surface characteristics of stearic acid coated Calcium Carbonate **helps minimize moisture uptake during storage and handling and processing**. This supports more reliable material feeding, compounding, processing and helps minimize moisture related extrusion problems."
            },
            {
              "title": "High Purity, Whiteness & Formulation Cost Optimization",
              "description": "Coated Calcite powder combines with high calcium carbonate (CaCO₃) purity, good whiteness and controlled particle size support **consistent colour, appearance, dispersion and filler performance**. In properly designed PVC formulations, coated Calcite Powder can **partially replace PVC resin**, helping optimize raw material costs while maintaining the required product performance."
            },
            {
              "title": "Applications in PVC Pipes & Fittings",
              "description": "Premium Stearic acid Coated Calcite powder is suitable for properly formulated rigid PVC and uPVC compounds used in the manufacture of **drainage and sewerage pipes, non pressure pipes, electrical conduits, plumbing fittings and other extrusion or moulding products**."
            }
          ]
        },
        {
          "title": "Plastic & Polymer Industry",
          "points": [
            {
              "title": "Enhanced Hydrophobicity & Moisture Resistance",
              "description": "Stearic acid surface treatment modifies the naturally hydrophilic surface of Calcium Carbonate, imparting improved hydrophobic characteristics and **reduces moisture absorption during storage, handling and processing**. Its water repellent surface helps maintain better filler flowability and supports **reduced moisture related processing defects, such as bubbles and voids**, in properly controlled PVC, PE and PP compounding applications."
            },
            {
              "title": "Improved Polymer Compatibility & Filler Dispersion",
              "description": "Uniform Stearic acid coating enhance the compatibility between Calcium Carbonate and polymer resins. This **improves resin wetting, reduce particle agglomeration, promote uniform filler dispersion** and supports consistent compound homogeneity in PVC, PE, PP and polymer filler masterbatch formulations."
            },
            {
              "title": "Improved Processing Efficiency & Lubricating Properties",
              "description": "Stearic acid surface treatment helps reduce interparticle friction and provides a lubricating effect during filler incorporation and polymer compounding. This can facilitate **smoother material processing**, **promoting easier filler incorporation and improved dispersion within polymer compounds**. Depending on the resin system, filler loading and formulation, coated Calcite Powder can support **smoother extrusion, improved melt flow behaviour** and more consistent processing in PVC, PE, and PP applications."
            },
            {
              "title": "Enhanced Rigidity, Hardness & Dimensional Stability",
              "description": "Calcite Powder acts as a functional mineral filler that can **enhance stiffness and hardness** in properly formulated polymer compounds. Its controlled particle size and uniform dispersion help **regulate polymer shrinkage, improve dimensional stability and support structural consistency** in finished products. These characteristics make it suitable for PVC pipes, profiles, cable compounds, WPC and selected PE/PP applications."
            },
            {
              "title": "Higher Filler Loading & Cost Effective Formulation",
              "description": "Proper surface treatment and effective particle dispersion can facilitate increased Calcium Carbonate incorporation in suitable polymer formulations while maintaining desirable processing and product characteristics. This enables manufacturers to **optimize polymer consumption, improve mineral filler utilization and achieve cost effective formulations** in PE/PP filler masterbatch, PVC compounds and other filled polymer applications."
            },
            {
              "title": "Improved Surface Finish & Product Consistency",
              "description": "Controlled particle size distribution and uniform filler dispersion help **achieve smoother surface characteristics and consistent product appearance** in finished polymer products. Stearic acid coating **supports better filler incorporation and helps minimize particle agglomeration and surface irregularities**. This contributes to improved appearance and batch-to-batch consistency in PVC, PE, PP and filler masterbatch applications.."
            }
          ]
        },
        {
          "title": "Wire & Cable Industry",
          "points": [
            {
              "title": "Enhanced Moisture Resistance & Hydrophobicity",
              "description": "A uniform stearic acid surface treatment makes Calcite particles more hydrophobic, **reducing moisture pick up** and improving their compatibility and dispersion within PVC compounds. This supports consistent compounding and helps maintain the desired insulation performance and dielectric properties in wire and cable compounds. This all depend on proper overall formulation."
            },
            {
              "title": "Improved Dispersion & PVC Compatibility",
              "description": "Stearic Acid coating enhances Calcite compatibility with PVC resin and plasticizers, **promoting more uniform filler dispersion** throughout the polymer matrix and **helps minimize particle agglomeration and filler related micro voids**. This supports smoother compounding, consistent extrusion, uniform insulation thickness and consistent surface finish in wire and cable product."
            },
            {
              "title": "Balance Mechanical & Dimensional Stability",
              "description": "Properly selected and uniformly dispersed stearic acid coated Calcite supports consistent filler distribution within the PVC matrix, helping **optimize stiffness, dimensional stability and overall mechanical performance**. Its contribution to the final mechanical properties depends on particle size distribution, filler concentration, PVC grade and the overall formulation, including the required flexibility and elongation."
            },
            {
              "title": "Consistent Processing & Extrusion Performance",
              "description": "Uniform surface treatment and controlled particle characteristics support **efficient filler incorporation and processing consistency in PVC wire and cable compounds**. Its controlled surface characteristics and appropriate particle size distribution **support uniform compounding, smoother material flow and consistent extrusion** when matched to the formulation and processing conditions."
            },
            {
              "title": "Controlled Purity & Particle Size Distribution",
              "description": "High purity Calcite (CaCO₃) with a controlled particle size distribution (PSD), low moisture content and consistent formulation promotes **uniform PVC compounding, effective filler dispersion and consistent extrusio**n. Reliable control of these parameters helps manufacturers maintain batch-to-batch consistency and meet the physical and electrical requirements of their wire and cable compounds."
            },
            {
              "title": "Efficient Filler Utilization & Formulation Flexibility",
              "description": "Stearic acid coated Calcite offers manufacturers **flexibility in optimizing filler loading, processing efficiency and material costs**. The appropriate dosage can help achieve a balanced combination of processability, mechanical performance, surface quality and electrical properties, subject to formulation trials and application specific testing."
            }
          ]
        },
        {
          "title": "Rubber Product Industry",
          "points": [
            {
              "title": "Improved Hydrophobicity & Filler Dispersion",
              "description": "Stearic acid surface treatment modifies the surface characteristics of Calcite, making the particles more hydrophobic and improving their compatibility with natural and synthetic rubber compounds. It helps **reduce particle agglomeration and promote more uniform filler dispersion** during mixing rubber compounds, resulting in consistent mechanical performance, improved processability and superior finished product quality."
            },
            {
              "title": "Controlled Hardness & Mechanical Properties",
              "description": "Coated Calcite serves as a reinforcing functional mineral filler in natural and synthetic rubber compounds. It allows rubber manufacturers to adjust compound hardness, stiffness and filler loading while balancing tensile strength, elongation, tear resistance and abrasion performance according to specific product requirements. The resulting properties depend on rubber type, particle size, surface treatment, loading level and other compounding ingredients."
            },
            {
              "title": "Improved Filler Incorporation & Dimensional Uniformity",
              "description": "Consistent particle size distribution and stearic acid surface treatment support uniform filler dispersion throughout the rubber compound. Proper dispersion **helps minimize filler agglomeration and promotes uniform hardness, dimensional stability, shape retention and surface finish**. Formulated coated Calcite suitable for extruded seals, weatherstripping, industrial hoses and molded rubber components."
            },
            {
              "title": "Moisture Control for Processing Consistency",
              "description": "Consistent surface treatment, particle size distribution and controlled moisture content **support reliable filler handling, storage and incorporation during rubber compounding**. Low moisture coated Calcite can help **minimize moisture related variations** during processing, contributing to more consistent compound preparation and manufacturing conditions."
            },
            {
              "title": "Cost Effective Formulation Optimization",
              "description": "Stearic Acid Coated Calcite offers an economical mineral filler solution for optimizing rubber compound formulations. Manufacturers can **optimize raw material costs and reduce dependence on more expensive ingredients,** while maintaining the desired balance of processing characteristics, physical properties and finished-product specifications."
            },
            {
              "title": "Versatile Applications Across Rubber Products",
              "description": "Stearic acid coated Calcite is suitable for selected natural and synthetic rubber formulations used in **automotive seals and gaskets, industrial hoses, conveyor belts, footwear soles, rubber profiles, vibration control components and general molded rubber goods**. Final suitability depends on application specific performance requirements."
            }
          ]
        }
      ]
    }
  },
  "pebble": {
    "name": "Pebbles",
    "description": "**Pebbles** are small, rounded or semi rounded stone valued for their durability, natural appearance and decorative appeal. Available in various sizes, colours and finishes, they are widely used in **landscaping, architectural projects, garden features, water features and wellness pathways**. Their versatility, low maintenance requirements and long lasting performance make them a popular choice for both functional and aesthetic applications.",
    "whatIs": [
      {
        "title": "What are Natural Pebbles?",
        "text": [
          "**Natural Pebbles** are stones that have been naturally shaped and smoothed over time through the continuous action of flowing water, weathering and natural erosion. Characterized by their rounded shape, smooth surface and unique natural variations, they are widely used in landscaping, decorative gardens, reflexology pathways and architectural environments. Their authentic appearance and timeless beauty add a natural and elegant touch to outdoor and indoor spaces."
        ]
      },
      {
        "title": "What are Manufactured Pebbles?",
        "text": [
          "**Manufactured Pebbles** are produced through the controlled crushing, tumbling, sizing and processing of high quality mineral stones such as Quartz and Dolomite. Engineered to achieve consistent size, shape and quality, they offer excellent durability, uniform appearance and reliable performance across a wide range of decorative and landscaping applications. Their controlled grading and availability in various sizes make them an ideal choice for modern architectural, landscape and wellness projects."
        ]
      }
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Quartz, Dolomite, Polished, River Pebbles"
      },
      {
        "label": "Shape",
        "value": "Rounded & Semi Rounded"
      },
      {
        "label": "Surface",
        "value": "Smooth & Naturally Attractive"
      },
      {
        "label": "Sizes",
        "value": "5 to 60 mm"
      },
      {
        "label": "Colours",
        "value": "White, Off white, Grey & Mixed natural pebbles"
      }
    ],
    "packaging": [
      "25 kg",
      "50 kg",
      "Jumbo Bags"
    ],
    "sizeTable": {
      "title": "Product Range",
      "rows": [
        [
          "S No",
          "Size",
          "Grade",
          "Application"
        ],
        [
          "1",
          "5 - 8 mm",
          "Fine",
          "Decorative pots & Aquariums"
        ],
        [
          "2",
          "8 - 12 mm",
          "Small",
          "Landscaping & Pathways"
        ],
        [
          "3",
          "12 - 20 mm",
          "Medium",
          "Garden Beds & Water features"
        ],
        [
          "4",
          "20 - 40 mm",
          "Large",
          "Architectural Landscapes"
        ],
        [
          "5",
          "40 - 60 mm",
          "Extra Large",
          "Premium decorative projects"
        ]
      ]
    },
    "typesTitle": "Type of Pebble Stones",
    "typesIntro": "**STONEX ENTERPRISES** offers premium quality pebble stones carefully manufactured and selected from high purity mineral sources, delivering exceptional aesthetic appeal, durability and functional performance for landscaping, architectural, decorative and wellness applications.",
    "types": [
      {
        "title": "Quartz & Dolomite Pebbles",
        "description": "Premium Quartz & Dolomite Pebbles manufactured from carefully selected mineral stones, offering excellent durability, consistent sizing and natural aesthetic appeal. Their smooth finish, attractive appearance and long lasting performance make them **ideal for landscaping, architectural features, decorative installations, garden pathways, water features and wellness environments**."
      },
      {
        "title": "Polished Pebbles",
        "description": "Polished pebbles are premium decorative stones carefully processed with advanced polishing techniques to enhance their natural colour, smooth texture and elegant glossy finish. Their refined appearance and excellent durability make them an **ideal choice for interior decor, water features, luxury landscaping, hotels, resorts and high end architectural projects.**"
      },
      {
        "title": "River Pebbles",
        "description": "River Pebbles are naturally rounded stones shaped over time by continuous flow of river water, creating smooth surfaces and distinctive natural character. Renowned for their durability, weather resistance and timeless aesthetic appeal, they are widely used in **gardens, landscape pathways, reflexology walkways, water features, drainage systems and premium outdoor architectural environments.**"
      }
    ],
    "applicationsTeaser": "Explore the diverse landscaping, decorative and wellness applications where our Natural Pebbles bring timeless beauty, natural elegance and versatile functionality to outdoor spaces, interior designs and wellness environments.",
    "applications": {
      "title": "Applications of Pebbles",
      "intro": "Discover naturally selected Premium Natural Pebbles, offering exceptional durability, timeless aesthetic appeal and consistent quality for landscaping, architectural, decorative and wellness & reflexology applications.",
      "sections": [
        {
          "title": "Natural Pebbles for Landscaping & Decorative Applications",
          "points": [
            {
              "title": "Garden Borders & Ground Cover",
              "description": "Create well defined garden borders and attractive ground cover designs with premium natural pebbles. When installed at a suitable depth, they help suppress weed growth, reduce soil exposure and limit direct evaporation from the soil surface while enhancing the overall appearance of landscaped areas."
            },
            {
              "title": "Pathways & Walkways",
              "description": "Enhance garden paths, pedestrian walkways and landscaped passages with carefully selected natural pebbles. Their natural colours and textures complement lawns, plants and architectural features. Appropriate grading, edging and surface preparation help improve stability and usability."
            },
            {
              "title": "Water Features & Aquascaping",
              "description": "Add natural character to ponds, fountains, waterfalls and decorative streams with carefully selected pebbles. Their varied shapes, colours and textures create visual contrast and depth, making them suitable for ornamental water features and selected aquascaping designs. Pebble selection should be appropriate for the intended water environment."
            },
            {
              "title": "Driveways, Patios & Courtyards",
              "description": "Introduce natural texture and visual appeal to driveways, patios, courtyards and outdoor living spaces. Natural pebbles can be used for decorative borders, accent sections and selected surface applications. For load bearing or frequently used areas, suitable aggregate grading, base preparation and installation are essential for surface stability."
            },
            {
              "title": "Zen & Rock Gardens",
              "description": "Inspired by traditional Japanese landscaping, natural pebbles are perfect for Zen gardens, rock gardens, meditation spaces and contemporary landscape designs. Their organic shapes, smooth surface and natural colour variations complement landscape stones, ornamental plants and contemporary outdoor designs."
            },
            {
              "title": "Planters & Decorative Pots",
              "description": "Improve the presentation of indoor and outdoor planters by using natural pebbles as a decorative top dressing. They create a clean, finished appearance around succulents, cacti and ornamental plants while helping reduce direct evaporation from the soil surface. Pebble placement should allow appropriate water movement and avoid interfering with the plant's drainage requirements."
            }
          ]
        },
        {
          "title": "Wellness & Reflexology Benefits",
          "points": [
            {
              "title": "Reflexology Inspired Foot Stimulation",
              "description": "Walking barefoot on smooth natural pebbles provides gentle pressure and varied tactile sensations across the soles of the feet. This creates a reflexology inspired experience while enhancing awareness of different surface textures."
            },
            {
              "title": "Supports Foot Comfort & Movement",
              "description": "Gentle barefoot walking encourages natural foot movement and engagement with the walking surface. The experience may support general foot comfort and movement when performed on a suitable, stable pebble pathway."
            },
            {
              "title": "Promotes Relaxation & Stress Relief",
              "description": "The natural textures and rhythmic movement of pebble walking can create a calming sensory experience. Combined with mindful breathing and a relaxed pace, it can provide an enjoyable way to unwind from everyday routines."
            },
            {
              "title": "Encourages Balance & Foot Awareness",
              "description": "Walking carefully across a suitably designed pebble pathway encourages attention to foot placement and body positioning. This sensory challenge may help develop balance awareness and coordination, depending on the surface design and individual ability."
            },
            {
              "title": "Supports a Relaxing Evening Routine",
              "description": "A gentle pebble walking session can form part of a calming evening routine. When combined with other relaxation habits, it support healthier sleep and nighttime relaxation."
            },
            {
              "title": "Provides a Natural Foot Massage Like Experience",
              "description": "Smooth, rounded pebbles create varied contact sensations beneath the feet, offering a gentle massage like walking experience. Appropriate pebble selection and a comfortable walking pace can make the experience soothing and enjoyable."
            },
            {
              "title": "Offers a Customizable Sensory Walking Experience",
              "description": "Pebbles of different sizes, shapes and surface textures can be arranged to create varied sensory pathways for gardens, wellness spaces and relaxation areas. Smooth, appropriately sized and securely placed pebbles help create a more comfortable walking environment."
            }
          ]
        }
      ]
    }
  }
};
