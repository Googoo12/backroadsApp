import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const ServicesInfo = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
    heading: "saving money",
    icon: "wallet",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
    heading: "endless hiking",
    icon: "tree",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia",
    heading: "amazing comfort",
    icon: "socks",
  },
];

export const ToursData = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    country: "china",
    time: "6 days",
    price: "$2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit qui corporis.",
  },
  {
    id: 2,
    img: tour2,
    date: "October 1th, 2020",
    title: "Best Of Java",
    country: "Indonesia",
    time: "11 days",
    price: "$1400",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit qui corporis.",
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    country: "Hong Kong",
    time: "8 days",
    price: "$5000",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit qui corporis.",
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    country: "Kenya",
    time: "20 days",
    price: "$3300",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit qui corporis.",
  },
];
