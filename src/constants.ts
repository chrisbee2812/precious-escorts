import { Atom, Clock, Lock, HandHeart, Phone, Shield, RulerDimensionLine, Heart, SmilePlus } from "lucide-react";
import { JSX, createElement } from "react";

export interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface Availability {
  days: string;
  windows: string[];
}

export interface Escort {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  thumbnail: string;
  gallery: string[];
  languages: string[];
  featured: boolean;
  preferences: ("Solo" | "Couples" | "Groups")[];
  availability: Availability[];
  stats: {
    heightCm: number;
    bust: string;
    eyes: string;
    hair: string;
  };
}

export const ESCORTS: Escort[] = [
  {
    id: "elara",
    name: "Elara",
    age: 24,
    location: "Leeds",
    bio: "Elara is the embodiment of sophistication and grace. With a background in classical arts and a keen mind for deep conversation, she is the perfect companion for high-profile events or intimate evenings. Her presence is both calming and captivating, ensuring every moment spent in her company is nothing short of extraordinary.",
    thumbnail: "./silhouette0.webp",
    gallery: [
      "./silhouette2.webp",
      "./silhouette3.webp",
      "./silhouette4.webp",
      "./silhouette5.webp",
      "./silhouette6.webp"
    ],
    languages: ["English", "French"],
    featured: false,
    preferences: ["Solo", "Couples"],
    availability: [
      { days: "Monday - Friday", windows: ["10:00 - 16:00", "20:00 - 02:00"] },
      { days: "Saturday", windows: ["14:00 - 04:00"] }
    ],
    stats: {
      heightCm: 172,
      bust: "34B",
      eyes: "Emerald",
      hair: "Chestnut"
    }
  },
  {
    id: "seraphina",
    name: "Seraphina",
    age: 26,
    location: "Leeds Central",
    bio: "A true connoisseur of luxury and elegance. Seraphina brings an air of mystery and allure to every encounter. Whether you're dining at the finest establishments or enjoying a quiet night in, her charisma and intelligence will make the experience unforgettable.",
    thumbnail: "./silhouette2.webp",
    gallery: [
      "./silhouette3.webp",
      "./silhouette4.webp",
      "./silhouette5.webp",
      "./silhouette6.webp",
      "./silhouette7.webp"
    ],
    languages: ["English", "Italian", "Spanish"],
    featured: false,
    preferences: ["Solo", "Couples", "Groups"],
    availability: [
       { days: "Wednesday - Sunday", windows: ["18:00 - 02:00"] }
    ],
    stats: {
      heightCm: 175,
      bust: "32C",
      eyes: "Hazel",
      hair: "Raven"
    }
  },
  {
    id: "aria",
    name: "Aria",
    age: 23,
    location: "Headingley",
    bio: "Full of life and youthful energy, Aria is as spirited as she is beautiful. Her infectious laughter and adventurous soul make her the ideal companion for those seeking a vibrant and engaging experience.",
    thumbnail: "./silhouette3.webp",
    gallery: [
      "./silhouette4.webp",
      "./silhouette5.webp",
      "./silhouette6.webp",
      "./silhouette7.webp",
      "./silhouette8.webp"
    ],
    languages: ["English"],
    featured: false,
    preferences: ["Solo"],
    availability: [
      { days: "Monday - Thursday", windows: ["09:00 - 18:00"] }
    ],
    stats: {
      heightCm: 165,
      bust: "34C",
      eyes: "Blue",
      hair: "Blonde"
    }
  },
  {
    id: "isabella",
    name: "Isabella",
    age: 28,
    location: "Roundhay",
    bio: "Mature, elegant, and deeply cultured. Isabella is a world traveler with stories that fascinate and a presence that commands respect. She is the ultimate partner for a refined gentleman.",
    thumbnail: "./silhouette4.webp",
    gallery: [
      "./silhouette5.webp",
      "./silhouette6.webp",
      "./silhouette7.webp",
      "./silhouette8.webp",
      "./silhouette9.webp"
    ],
    languages: ["English", "Russian"],
    featured: false,
    preferences: ["Solo", "Couples"],
    availability: [
      { days: "Friday - Sunday", windows: ["12:00 - 00:00"] }
    ],
    stats: {
      heightCm: 178,
      bust: "36C",
      eyes: "Brown",
      hair: "Auburn"
    }
  },
  {
    id: "maya",
    name: "Maya",
    age: 25,
    location: "Horsforth",
    bio: "Exotic, mysterious, and incredibly attentive. Maya specializes in creating deep, personal connections. Her background in psychology allows her to read the room perfectly, making her the ideal companion for everything from high-pressure business dinners to relaxed private retreats.",
    thumbnail: "./silhouette5.webp",
    gallery: [
      "./silhouette6.webp",
      "./silhouette7.webp",
      "./silhouette8.webp",
      "./silhouette9.webp",
      "./silhouette0.webp"
    ],
    languages: ["English", "Arabic", "French"],
    featured: true,
    preferences: ["Solo", "Couples", "Groups"],
    availability: [
      { days: "Monday - Saturday", windows: ["14:00 - 22:00"] }
    ],
    stats: {
      heightCm: 170,
      bust: "34D",
      eyes: "Amber",
      hair: "Ebony"
    }
  },
  {
    id: "sofia",
    name: "Sofia",
    age: 22,
    location: "Leeds",
    bio: "Sofia is a breath of fresh air. Her curious nature and love for intellectual discourse make her a unique and stimulating companion. She enjoys exploring the city's hidden gems and sharing meaningful conversations.",
    thumbnail: "./silhouette6.webp",
    gallery: [
      "./silhouette7.webp",
      "./silhouette8.webp",
      "./silhouette9.webp",
      "./silhouette0.webp",
      "./silhouette2.webp"
    ],
    languages: ["English", "Italian"],
    featured: false,
    preferences: ["Solo"],
    availability: [
      { days: "Tuesday, Thursday, Friday", windows: ["10:00 - 18:00"] }
    ],
    stats: {
      heightCm: 160,
      bust: "32B",
      eyes: "Blue",
      hair: "Brunette"
    }
  },
  {
    id: "lina",
    name: "Lina",
    age: 27,
    location: "Leeds",
    bio: "Elegant and worldly, Lina possesses an innate talent for making everyone she meets feel at ease. Her extensive travels have gifted her with a wealth of fascinating stories and a broad perspective on life.",
    thumbnail: "./silhouette7.webp",
    gallery: [
      "./silhouette8.webp",
      "./silhouette9.webp",
      "./silhouette0.webp",
      "./silhouette2.webp",
      "./silhouette3.webp"
    ],
    languages: ["English", "French", "German"],
    featured: false,
    preferences: ["Solo", "Couples"],
    availability: [
      { days: "Monday - Sunday", windows: ["11:00 - 23:00"] }
    ],
    stats: {
      heightCm: 168,
      bust: "34C",
      eyes: "Green",
      hair: "Honey"
    }
  },
  {
    id: "clara",
    name: "Clara",
    age: 24,
    location: "Leeds",
    bio: "Clara's charm lies in her quiet intelligence and observant nature. She is the perfect companion for those who appreciate subtlety and a deeper connection. Her poise and grace are evident in everything she does.",
    thumbnail: "./silhouette8.webp",
    gallery: [
      "./silhouette9.webp",
      "./silhouette0.webp",
      "./silhouette2.webp",
      "./silhouette3.webp",
      "./silhouette4.webp"
    ],
    languages: ["English"],
    featured: false,
    preferences: ["Solo", "Couples"],
    availability: [
      { days: "Monday, Wednesday, Friday", windows: ["13:00 - 21:00"] }
    ],
    stats: {
      heightCm: 158,
      bust: "32B",
      eyes: "Blue",
      hair: "Platinum"
    }
  },
  {
    id: "olivia",
    name: "Olivia",
    age: 26,
    location: "Leeds",
    bio: "Olivia is a dynamic and multifaceted individual with a passion for art and culture. Her engaging personality and sharp wit make her a delight to be around, whether she's attending a gallery opening or enjoying a quiet dinner.",
    thumbnail: "./silhouette9.webp",
    gallery: [
      "./silhouette0.webp",
      "./silhouette2.webp",
      "./silhouette3.webp",
      "./silhouette4.webp",
      "./silhouette5.webp"
    ],
    languages: ["English", "Spanish"],
    featured: true,
    preferences: ["Solo", "Couples", "Groups"],
    availability: [
      { days: "Monday - Friday", windows: ["09:00 - 17:00"] }
    ],
    stats: {
      heightCm: 180,
      bust: "36D",
      eyes: "Brown",
      hair: "Caramel"
    }
  },
  {
    id: "vienna",
    name: "Vienna",
    age: 25,
    location: "Leeds",
    bio: "Vienna is the epitome of modern elegance. Her effortless style and sophisticated outlook on life make her a fascinating companion. She has a talent for finding the beauty in the everyday and sharing it with others.",
    thumbnail: "./silhouette0.webp",
    gallery: [
      "./silhouette2.webp",
      "./silhouette3.webp",
      "./silhouette4.webp",
      "./silhouette5.webp",
      "./silhouette6.webp"
    ],
    languages: ["English", "French"],
    featured: false,
    preferences: ["Solo", "Couples"],
    availability: [
      { days: "Saturday - Sunday", windows: ["10:00 - 02:00"] }
    ],
    stats: {
      heightCm: 174,
      bust: "34B",
      eyes: "Grey",
      hair: "Silver"
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "punctuality",
    icon: createElement(Clock, { size: 20 }),
    title: "Punctuality",
    description: "Your time is precious. We never keep you waiting — because anticipation should be pleasure, not frustration. When we say a time, we mean it."
  },
  {
    id: "confidentiality",
    icon: createElement(Lock, { size: 20 }),
    title: "Confidentiality",
    description: "Your name, your business, your secrets — they're yours alone. We don't kiss and tell. Ever. From first message to goodbye, everything stays between us."
  },
  {
    id: "genuine-chemistry",
    icon: createElement(Atom, { size: 20 }),
    title: "Genuine Chemistry",
    description: "Fake smiles and scripted lines aren't our style. We only connect when the attraction is real. That's what makes every encounter feel natural, exciting, and unforgettable."
  },
  {
    id: "handpicked-companions",
    icon: createElement(HandHeart, { size: 20 }),
    title: "Handpicked Companions",
    description: "We don't just hire for looks. Every lady is chosen for her charm, her energy, and that little spark that makes you feel like the only man in the room."
  },
  {
    id: "simple-sleek-booking",
    icon: createElement(Phone, { size: 20 }),
    title: "Simple, Sleek Booking",
    description: "No endless forms. No awkward questions. Just a quick, discreet conversation and a clear arrangement. You focus on the anticipation — we handle the rest."
  },
  {
    id: "safety-respect",
    icon: createElement(Shield, { size: 20 }),
    title: "Safety & Respect",
    description: "Your comfort isn't just important — it's everything. Boundaries are never pushed. Respect is given both ways. That's the real secret to a night you actually enjoy."
  },
  {
    id: "tailored-encounters",
    icon: createElement(RulerDimensionLine, { size: 20 }),
    title: "Tailored Encounters",
    description: "You're not a number. Every meeting is shaped around what you're craving — whether it's wild and spontaneous or slow and sensual. Tell us your mood. We'll make it happen."
  },
  {
    id: "trusted-network",
    icon: createElement(Heart, { size: 20 }),
    title: "Unforgettable Chemistry",
    description: "Some bookings you forget. Ours? You'll think about the next morning. That's not by accident. It's by design. We only connect when the chemistry is undeniable. That's what makes every encounter feel electric and unforgettable."
  },
  {
    id: "discreet-service",
    icon: createElement(SmilePlus, { size: 20 }),
    title: "Genuine Availability",
    description: "We don't overbook or juggle. When we say a lady is free, she's truly free to focus on you. No rushing. No clock-watching. Just real, present time together."
  }
];
