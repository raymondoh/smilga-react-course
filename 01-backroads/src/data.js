import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "this is the text for the saving money service" },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "this is the text for the endless hiking service",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "this is the text for the amazing comfort service",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "June 17th, 2024",
    title: "Tibet Adventure",
    text: "This is the text for the Tibet Adventure tour",
    location: "China",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "august 26th, 2023",
    title: "Best of Java",
    text: "This is the text for the Best of Java tour",
    location: "Indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2023",
    title: "explore hong kong",
    text: "This is the text for the Explore Hong Kong tour",
    location: "Hong Kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "December 10th, 2024",
    title: "Kenya Highlights",
    text: "This is the text for the kenya Highlights tour",
    location: "Hong Kong",
    duration: 20,
    price: 3300,
  },
];
