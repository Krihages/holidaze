import { StaticImageData } from "next/image";
import newZealand from "@/images/explore/pin-new-zealand.png";
import france from "@/images/explore/pin-france.png";
import norway from "@/images/explore/pin-norway.png";
import china from "@/images/explore/pin-china.png";
import italy from "@/images/explore/pin-italy.png";
import southAfrica from "@/images/explore/pin-south-africa.png";
import lasVegas from "@/images/explore/pin-las-vegas.png";
import ushuaia from "@/images/explore/pin-ushuaia.png";
import cancun from "@/images/explore/pin-cancun.png";
import tasiilaq from "@/images/explore/pin-tasiilaq.png";

/* 
Data for the explore component/section (home page)
*/
export const exploreContent = {
  "new-zealand": {
    country: "New Zealand",
    region: "Oceania",
    city: "Auckland",
    description:
      "Known for its stunning harbors, vibrant culture, Sky Tower, and beautiful nearby beaches and islands.",
  },
  france: {
    country: "France",
    region: "Europe",
    city: "Paris",
    description:
      "Known for its iconic Eiffel Tower, art museums, charming cafes, and romantic atmosphere.",
  },
  norway: {
    country: "Norway",
    region: "Europe",
    city: "Tromso",
    description:
      "Known for its Arctic landscapes, Northern Lights, midnight sun, and vibrant Sami culture.",
  },
  china: {
    country: "China",
    region: "Asia",
    city: "Beijing",
    description:
      "Known for its ancient landmarks like the Great Wall, Forbidden City, and its rich history blended with modern culture.",
  },
  italy: {
    country: "Italy",
    region: "Europe",
    city: "Rome",
    description:
      "Known for its ancient landmarks like the Colosseum, Roman Forum, and its rich history blended with modern culture.",
  },
  "south-africa": {
    country: "South Africa",
    region: "Africa",
    city: "Cape Town",
    description:
      "Known for its stunning landscapes, vibrant culture, and beautiful nearby beaches and islands.",
  },
  argentina: {
    country: "Argentina",
    region: "South America",
    city: "Ushuaia",
    description:
      "Known as the southernmost city in the world, Ushuaia is a popular gateway for Antarctic cruises and excursions to the nearby Tierra del Fuego National Park.",
  },
  "united-states": {
    country: "United States",
    region: "North America",
    city: "Las Vegas",
    description:
      "Known as the Entertainment Capital of the World, Las Vegas is famous for its vibrant nightlife, casinos, world-class shows, and luxurious resorts.",
  },
  mexico: {
    country: "Mexico",
    region: "North America",
    city: "Cancún",
    description:
      "Known for its stunning white-sand beaches, crystal-clear turquoise waters, and lively nightlife.",
  },
  greenland: {
    country: "Greenland",
    region: "North America",
    city: "Tasiilaq",
    description:
      "Known as one of the best locations in the world to view the Northern Lights, Tasiilaq offers stunning natural beauty with its surrounding mountains and fjords.",
  },
};

export type Destination = {
  name: string;
  /* 
  Positions are in percentage (to make response to different screen sizes) starting in middle of the screen
  only takes in top and left values, so to go up you need to go negative (top) and to go down you need to go positive
  and same for left and right
   */
  position: {
    top: number;
    left: number;
  };
  url: StaticImageData;
};
export const destinations: Destination[] = [
  { name: "argentina", position: { top: 45, left: -20 }, url: ushuaia },
  { name: "new-zealand", position: { top: 35, left: 35 }, url: newZealand },
  { name: "south-africa", position: { top: 30, left: 4 }, url: southAfrica },
  { name: "mexico", position: { top: 5, left: -30 }, url: cancun },
  { name: "italy", position: { top: 4, left: 13 }, url: italy },
  { name: "china", position: { top: -5, left: 30 }, url: china },
  { name: "france", position: { top: -10, left: 0 }, url: france },

  { name: "united-states", position: { top: -30, left: -37 }, url: lasVegas },
  { name: "norway", position: { top: -35, left: 7 }, url: norway },
  { name: "greenland", position: { top: -40, left: -12 }, url: tasiilaq },
];
