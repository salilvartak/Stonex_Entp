import type { ElementType } from "react";
import {
  Sun, SlidersHorizontal, Droplet, CloudRain, ShieldCheck, Gem, DollarSign, Thermometer,
  FlaskConical, Sparkles, Waves, Ruler, Boxes, Flame, Layers, Factory, Award, Truck, Users,
  Sprout, PawPrint, Zap, Leaf, Heart, Footprints, CheckCircle2, Cog, Scale,
} from "lucide-react";

const rules: [RegExp, ElementType][] = [
  [/cost|pricing|economic|value driven/i, DollarSign],
  [/bright|white|colour|color|optical|appearance|opacity/i, Sun],
  [/oil absorption/i, Droplet],
  [/moisture|hydrophob/i, CloudRain],
  [/thermal|temperature|refractor|calcination|firing|heat/i, Thermometer],
  [/hardness|abrasion|wear|durab/i, Gem],
  [/particle|psd|grit size|grading|graded|mesh|size/i, SlidersHorizontal],
  [/dispers|distribution/i, Sparkles],
  [/rheolog|flow|viscosity|workability/i, Waves],
  [/dimension|stiffness|rigid|strength|shrinkage|stability/i, Ruler],
  [/chemi|inert|composition|cao|mgo|sio|caco|fe₂o₃|iron/i, FlaskConical],
  [/purity|impurit|quality|consisten/i, ShieldCheck],
  [/melt|glass|flux|slag/i, Flame],
  [/electric/i, Zap],
  [/soil|nutrient|agricult|phosph|alumin/i, Sprout],
  [/animal|feed/i, PawPrint],
  [/expert|experience/i, Award],
  [/supply|delivery|dispatch|pack/i, Truck],
  [/production|capacity|manufactur|processing|technology|crush|grind|micron|screen|sort|separation|wash/i, Factory],
  [/coating|surface|stearic/i, Layers],
  [/raw material|mine|lump|select/i, Cog],
  [/team/i, Users],
  [/garden|landscap|zen|planter|pathway|walkway|patio|water/i, Leaf],
  [/relax|stress|sleep|evening|comfort|massage/i, Heart],
  [/foot|balance|walking|reflexology/i, Footprints],
  [/loading|filler|formulation/i, Scale],
  [/versatil|application/i, Boxes],
];

export const pointIcon = (title: string): ElementType =>
  rules.find(([re]) => re.test(title))?.[1] ?? CheckCircle2;
