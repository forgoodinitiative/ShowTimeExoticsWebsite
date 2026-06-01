// Rolls-Royce Cullinan
import rrCullinan from "../../images/Fleet/Rolls_Royce_Cullinan_Widebody/cullinan.jpg";
import rrCullinan2 from "../../images/Fleet/Rolls_Royce_Cullinan_Widebody/SnapInsta.to_629735804_17979342752980443_1420471300738390911_n.jpg";
import rrCullinan3 from "../../images/Fleet/Rolls_Royce_Cullinan_Widebody/SnapInsta.to_630105298_17979342749980443_3857458863969106566_n.jpg";
// Ferrari 458 Italia / Spider
import ferrari458_1 from "../../images/Fleet/Ferrari_458_Italia/SnapInsta.to_620218065_17977225289980443_3230834165688940655_n.jpg";
import ferrari458_2 from "../../images/Fleet/Ferrari_458_Italia/SnapInsta.to_620980259_17977225307980443_3891923537053692332_n.jpg";
import ferrari458_3 from "../../images/Fleet/Ferrari_458_Italia/SnapInsta.to_621432797_17977225298980443_4709619834620531479_n.jpg";
// Lamborghini Huracán EVO
import huracan1 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_591157487_17973017492980443_339353143120649017_n.jpg";
import huracan2 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_598139184_17973017489980443_7206313964529330651_n.jpg";
import huracan3 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_599112661_17973017465980443_7619675575605116082_n.jpg";
import huracan4 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_600256818_17973017501980443_7168298517646342178_n.jpg";
import huracan5 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_600890270_17973017474980443_6467841283808050199_n.jpg";
import huracan6 from "../../images/Fleet/Lamborghini_Huracan_Evo/SnapInsta.to_601372125_17973017510980443_3337990756798813508_n.jpg";
// Ferrari 488 Spider
import ferrari488_1 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_539390247_17961139451980443_5213442020133374685_n.jpg";
import ferrari488_2 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_539592655_17961139460980443_1600221086334869611_n.jpg";
import ferrari488_3 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_539775603_17961139496980443_7627957444259844364_n.jpg";
import ferrari488_4 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_539893868_17961139439980443_6772971188924241040_n.jpg";
import ferrari488_5 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_540220661_17961139478980443_1916049358473843712_n.jpg";
import ferrari488_6 from "../../images/Fleet/Ferrari_488_Spider/SnapInsta.to_540689872_17961139487980443_3006382567644117950_n.jpg";
// Lamborghini Urus Widebody
import urus1 from "../../images/Fleet/Lamborghini_Urus_Widebody/Aurus.jpg";
import urus2 from "../../images/Fleet/Lamborghini_Urus_Widebody/SnapInsta.to_491893476_17946920225980443_16391685198145351_n.jpg";
// Cadillac Escalade V
import escalade1 from "../../images/Fleet/Cadillac_Escalade_V/SnapInsta.to_491897776_17946922103980443_1366481614108800463_n.jpg";
import escalade2 from "../../images/Fleet/Cadillac_Escalade_V/SnapInsta.to_491899943_17946922139980443_1387709031889371849_n.jpg";
import escalade3 from "../../images/Fleet/Cadillac_Escalade_V/SnapInsta.to_494109678_17946922121980443_7510073788325980423_n.jpg";
import escalade4 from "../../images/Fleet/Cadillac_Escalade_V/SnapInsta.to_494193412_17946922112980443_8468503057784635548_n.jpg";
// Lamborghini Aventador Roadster
import aventador from "../../images/Fleet/Lamborghini_Aventador_Roadster/aventador.jpg";
// Audi R8 Spyder
import r8_1 from "../../images/Fleet/Audi_R8_Spyder/r8.jpg";
import r8_2 from "../../images/Fleet/Audi_R8_Spyder/r82.jpg";
// Rolls-Royce Phantom
import phantom from "../../images/Fleet/Rolls_Royce_Phantom/phantom.jpg";
// Land Rover Range Rover
import rangeRover1 from "../../images/Fleet/Land_Rover_Range_Rover/rangeroverblue.jpg";
import rangeRover2 from "../../images/Fleet/Land_Rover_Range_Rover/rangeroverblue2.jpg";
// Mercedes-Benz G63 AMG
import g63 from "../../images/Fleet/Mercedes_Benz_G63_AMG/benzg63.jpg";
// Acura NSX
import nsx from "../../images/Fleet/Acura_NSX/nsx(1).jpg";

export interface Car {
  id: string;
  brand: string;
  model: string;
  year?: string;
  Trim?: string;
  BodyStyle?: string;
  ExteriorColor?: string;
  InteriorColor?: string;
  image: string;
  images: string[];
  StandoutFeatures?: string;
  available: boolean;
  description?: string;
  category?: string;
  rate?: string;
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Rolls-Royce",
    model: "Cullinan",
    BodyStyle: "Widebody SUV",
    ExteriorColor: "N/A",
    image: rrCullinan,
    images: [rrCullinan, rrCullinan2, rrCullinan3],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "2",
    brand: "Ferrari",
    model: "458",
    Trim: "Italia",
    BodyStyle: "Coupe",
    ExteriorColor: "Bianco Avus",
    image: ferrari458_1,
    images: [ferrari458_1, ferrari458_2, ferrari458_3],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "3",
    brand: "Lamborghini",
    model: "Huracan",
    Trim: "EVO",
    BodyStyle: "Coupe",
    InteriorColor: "Bianco Polar",
    image: huracan1,
    images: [huracan1, huracan2, huracan3, huracan4, huracan5, huracan6],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "5",
    brand: "Ferrari",
    model: "488",
    Trim: "Spider",
    BodyStyle: "Convertible",
    ExteriorColor: "Bianco Avus",
    InteriorColor: "Red",
    image: ferrari488_1,
    images: [ferrari488_1, ferrari488_2, ferrari488_3, ferrari488_4, ferrari488_5, ferrari488_6],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "6",
    brand: "Lamborghini",
    model: "Urus",
    BodyStyle: "Novitech WideBody SUV",
    ExteriorColor: "Bianco Monocerus",
    image: urus1,
    images: [urus1, urus2],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "7",
    brand: "Cadillac",
    model: "Escalade",
    Trim: "V",
    BodyStyle: "SUV",
    ExteriorColor: "Satin Black",
    image: escalade1,
    images: [escalade1, escalade2, escalade3, escalade4],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "8",
    brand: "Lamborghini",
    model: "Aventador",
    Trim: "S",
    BodyStyle: "Roadster",
    ExteriorColor: "Nero Noctis",
    image: aventador,
    images: [aventador],
    StandoutFeatures: "Butterfly Doors",
    available: true,
  },
  {
    id: "10",
    brand: "Audi",
    model: "R8",
    Trim: "Spyder",
    BodyStyle: "Convertible",
    ExteriorColor: "Sepang Blue",
    image: r8_1,
    images: [r8_1, r8_2],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "13",
    brand: "Rolls-Royce",
    model: "Phantom",
    BodyStyle: "Saloon",
    ExteriorColor: "Arctic White",
    image: phantom,
    images: [phantom],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "15",
    brand: "Land Rover",
    model: "Range Rover",
    BodyStyle: "SUV",
    ExteriorColor: "Estoril Blue",
    image: rangeRover1,
    images: [rangeRover1, rangeRover2],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "16",
    brand: "Mercedes-Benz",
    model: "G63",
    BodyStyle: "SUV",
    ExteriorColor: "Gloss Black",
    image: g63,
    images: [g63],
    StandoutFeatures: "N/A",
    available: true,
  },
  {
    id: "17",
    brand: "Acura",
    model: "NSX",
    BodyStyle: "Coupe",
    ExteriorColor: "White",
    image: nsx,
    images: [nsx],
    StandoutFeatures: "N/A",
    available: true,
  },
];
