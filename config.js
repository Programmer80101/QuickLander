const url = "https://quicklander.vercel.app";

const config = {
  name: "QuickLander",
  abbr: "QL",
  id: "quick-lander",
  description: "Collection of landing pages!",
  url: url,
  author: "Surprized Pikachu",
  themeColor: "#202020",
  gtag: "G-",
  adsense: "",
  hideNavbarPaths: ["/auth"],
  hideFooterPaths: ["/auth"],
  socials: {
    github: "",
    youtube: "",
    twitter: "@surprizedPika",
    linkedIn: "",
    discord: "",
    email: "programmer80101@gmail.com",
    bluesky: "surprizedpika.bsky.social",
  },
  assets: {
    favicon: `${url}favicon.ico`,
    logo: `${url}/logo.png`,
    logoSize: 350,
    card: `${url}/card.png`,
    cardWidth: 1200,
    cardHeight: 628,
  },
  keywords: ["landing pages", "landing page"],
};

export default config;
