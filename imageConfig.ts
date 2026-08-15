/**
 * AMC image configuration — Saffron Editorial Hearth visual system.
 * Replace only the URL strings below to use your own logo, event, food, and menu photographs.
 * Keep public URLs in quotation marks. Do not change the key names unless you also update Home.tsx.
 */
import amcHero from "./images/amc-hero.jpg";
import amcMark from "./images/amc-mark.png";
import table from "./images/table.jpg";
import facebook from "./images/facebook.jpg";
import chickenKarahi from "./images/chicken-karahi.jpg";
import whitechicken from "./images/white-chicken.jpg";
import beefNihari from "./images/beef-nihari.jpg";
import beefHaleem from "./images/beef-haleem.jpg";
import beefkorma from "./images/beef-korma.jpg";
import muttonKarahi from "./images/mutton-karahi.jpg";
import muttonkorma from "./images/mutton-korma.jpg";
import kunnamutton from "./images/kunna-mutton.jpg";
import lahoriBiryani from "./images/lahori-biryani.jpg";
import bombayBiryani from "./images/bombay-biryani.jpg";
import degipilau from "./images/degi-pilau.jpg";
import zarda from "./images/zarda.jpg";
import shahichicken from "./images/shahi-chicken.jpg";
import gur from "./images/gur.jpg";
import chinesefried from "./images/chinese-fried.jpg";
import freshjuice from "./images/fresh-juice.jpg";
import walialoo from "./images/wali-aloo.jpg";
import russianSalad from "./images/russian-salad.jpg";
import seasonalsalad from "./images/seasonal-salad.jpg";
import kachumarsalad from "./images/kachumar-salad.jpg";
import mangodessert from "./images/mango-dessert.jpg";
import mithai from "./images/mithai.jpg";
import mithaidessert from "./images/mithai-dessert.jpg";
import layers from "./images/layers.jpg";
import plenty from "./images/plenty.jpg";
import firstserve from "./images/first-serve.jpg";
import tableshared from "./images/table-shared.jpg";

export const siteImages = {
  logo: amcMark,
  hero: amcHero,
  about: table,
  buffet: tableshared,
  menuFeature: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=85",
} as const;

export const menuImages = {
  shadiChickenQorma: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",
  chickenKarahi: chickenKarahi,
  chickenWhiteQorma: whitechicken,
  degiBeefQorma: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  beefNihari: beefNihari,
  beefHaleem: beefHaleem,
  beefKorma: beefkorma,
  premiumMuttonQorma: muttonkorma,
  muttonKarahi: muttonKarahi,
  muttonKunna: muttonkorma,
  lahoriBiryani: lahoriBiryani,
  bombayBiryani: bombayBiryani,
  yakhniPulao: degipilau,
  shahiMutanjan: shahichicken,
  traditionalZarda: zarda,
  gurWaleyChawal: gur,
  chineseFriedRice: chinesefried,
  seasonalJuices: freshjuice,
  chutneysAndRaita: walialoo,
  russianSalad: russianSalad,
  gardenSalad: seasonalsalad,
  kachumarSalad: kachumarsalad,
  hotDesserts: mangodessert,
} as const;

export const galleryImages = {
  sharedTable: siteImages.buffet,
  finishedWithCare: siteImages.about,
  signaturePlatter: siteImages.menuFeature,
  tableWithPlenty: plenty,
  grill: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
  sweetFinish: mithaidessert,
  tableStyling: layers,
  liveService: firstserve,
  platedService: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=88",
  familyFeast: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1400&q=88",
} as const;
