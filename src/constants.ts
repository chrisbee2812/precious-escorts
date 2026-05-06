import { Atom, Clock, Lock, HandHeart, Phone, Shield, RulerDimensionLine, Heart, SmilePlus } from "lucide-react";
import { JSX, createElement } from "react";

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
  stats: {
    height: string;
    bust: string;
    eyes: string;
    hair: string;
  };
}

export interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const ESCORTS: Escort[] = [
  {
    id: "elaraa",
    name: "Elara",
    age: 24,
    location: "London",
    bio: "Elara is the embodiment of sophistication and grace. With a background in classical arts and a keen mind for deep conversation, she is the perfect companion for high-profile events or intimate evenings. Her presence is both calming and captivating, ensuring every moment spent in her company is nothing short of extraordinary.",
    thumbnail: "https://picsum.photos/seed/elara-main/600/900",
    gallery: [
      "https://picsum.photos/seed/elara-1/800/1200",
      "https://picsum.photos/seed/elara-2/800/1200",
      "https://picsum.photos/seed/elara-3/800/1200",
      "https://picsum.photos/seed/elara-4/800/1200",
      "https://picsum.photos/seed/elara-5/800/1200"
    ],
    languages: ["English", "French"],
    featured: false,
    stats: {
      height: "5'8\"",
      bust: "34B",
      eyes: "Emerald",
      hair: "Chestnut"
    }
  },
  {
    id: "seraphinaa",
    name: "Seraphina",
    age: 26,
    location: "Mayfair",
    bio: "A true connoisseur of luxury and elegance. Seraphina brings an air of mystery and allure to every encounter. Whether you're dining at the finest establishments or enjoying a quiet night in, her charisma and intelligence will make the experience unforgettable.",
    thumbnail: "https://picsum.photos/seed/seraphina-main/600/900",
    gallery: [
      "https://picsum.photos/seed/seraphina-1/800/1200",
      "https://picsum.photos/seed/seraphina-2/800/1200",
      "https://picsum.photos/seed/seraphina-3/800/1200",
      "https://picsum.photos/seed/seraphina-4/800/1200",
      "https://picsum.photos/seed/seraphina-5/800/1200"
    ],
    languages: ["English", "Italian", "Spanish"],
    featured: true,
    stats: {
      height: "5'9\"",
      bust: "32C",
      eyes: "Hazel",
      hair: "Raven"
    }
  },
  {
    id: "ariaa",
    name: "Aria",
    age: 23,
    location: "Kensington",
    bio: "Full of life and youthful energy, Aria is as spirited as she is beautiful. Her infectious laughter and adventurous soul make her the ideal companion for those seeking a vibrant and engaging experience.",
    thumbnail: "https://picsum.photos/seed/aria-main/600/900",
    gallery: [
      "https://picsum.photos/seed/aria-1/800/1200",
      "https://picsum.photos/seed/aria-2/800/1200",
      "https://picsum.photos/seed/aria-3/800/1200",
      "https://picsum.photos/seed/aria-4/800/1200",
      "https://picsum.photos/seed/aria-5/800/1200"
    ],
    languages: ["English"],
    featured: false,
    stats: {
      height: "5'6\"",
      bust: "34C",
      eyes: "Blue",
      hair: "Blonde"
    }
  },
  {
    id: "isabellaa",
    name: "Isabella",
    age: 28,
    location: "Chelsea",
    bio: "Mature, elegant, and deeply cultured. Isabella is a world traveler with stories that fascinate and a presence that commands respect. She is the ultimate partner for a refined gentleman.",
    thumbnail: "https://picsum.photos/seed/isabella-main/600/900",
    gallery: [
      "https://picsum.photos/seed/isabella-1/800/1200",
      "https://picsum.photos/seed/isabella-2/800/1200",
      "https://picsum.photos/seed/isabella-3/800/1200",
      "https://picsum.photos/seed/isabella-4/800/1200",
      "https://picsum.photos/seed/isabella-5/800/1200"
    ],
    languages: ["English", "Russian"],
    featured: false,
    stats: {
      height: "5'10\"",
      bust: "36C",
      eyes: "Brown",
      hair: "Auburn"
    }
  },
  {
    id: "mayaa",
    name: "Maya",
    age: 25,
    location: "Belgravia",
    bio: "Exotic, mysterious, and incredibly attentive. Maya specializes in creating deep, personal connections. Her background in psychology allows her to read the room perfectly, making her the ideal companion for everything from high-pressure business dinners to relaxed private retreats.",
    thumbnail: "https://picsum.photos/seed/maya-main/600/900",
    gallery: [
      "https://picsum.photos/seed/maya-1/800/1200",
      "https://picsum.photos/seed/maya-2/800/1200",
      "https://picsum.photos/seed/maya-3/800/1200",
      "https://picsum.photos/seed/maya-4/800/1200",
      "https://picsum.photos/seed/maya-5/800/1200"
    ],
    languages: ["English", "Arabic", "French"],
    featured: true,
    stats: {
      height: "5'7\"",
      bust: "34D",
      eyes: "Amber",
      hair: "Ebony"
    }
  },
  {
    id: "elarab",
    name: "Elara",
    age: 24,
    location: "London",
    bio: "Elara is the embodiment of sophistication and grace. With a background in classical arts and a keen mind for deep conversation, she is the perfect companion for high-profile events or intimate evenings. Her presence is both calming and captivating, ensuring every moment spent in her company is nothing short of extraordinary.",
    thumbnail: "https://picsum.photos/seed/elara-main/600/900",
    gallery: [
      "https://picsum.photos/seed/elara-1/800/1200",
      "https://picsum.photos/seed/elara-2/800/1200",
      "https://picsum.photos/seed/elara-3/800/1200",
      "https://picsum.photos/seed/elara-4/800/1200",
      "https://picsum.photos/seed/elara-5/800/1200"
    ],
    languages: ["English", "French"],
    featured: false,
    stats: {
      height: "5'8\"",
      bust: "34B",
      eyes: "Emerald",
      hair: "Chestnut"
    }
  },
  {
    id: "seraphinab",
    name: "Seraphina",
    age: 26,
    location: "Mayfair",
    bio: "A true connoisseur of luxury and elegance. Seraphina brings an air of mystery and allure to every encounter. Whether you're dining at the finest establishments or enjoying a quiet night in, her charisma and intelligence will make the experience unforgettable.",
    thumbnail: "https://picsum.photos/seed/seraphina-main/600/900",
    gallery: [
      "https://picsum.photos/seed/seraphina-1/800/1200",
      "https://picsum.photos/seed/seraphina-2/800/1200",
      "https://picsum.photos/seed/seraphina-3/800/1200",
      "https://picsum.photos/seed/seraphina-4/800/1200",
      "https://picsum.photos/seed/seraphina-5/800/1200"
    ],
    languages: ["English", "Italian", "Spanish"],
    featured: false,
    stats: {
      height: "5'9\"",
      bust: "32C",
      eyes: "Hazel",
      hair: "Raven"
    }
  },
  {
    id: "ariab",
    name: "Aria",
    age: 23,
    location: "Kensington",
    bio: "Full of life and youthful energy, Aria is as spirited as she is beautiful. Her infectious laughter and adventurous soul make her the ideal companion for those seeking a vibrant and engaging experience.",
    thumbnail: "https://picsum.photos/seed/aria-main/600/900",
    gallery: [
      "https://picsum.photos/seed/aria-1/800/1200",
      "https://picsum.photos/seed/aria-2/800/1200",
      "https://picsum.photos/seed/aria-3/800/1200",
      "https://picsum.photos/seed/aria-4/800/1200",
      "https://picsum.photos/seed/aria-5/800/1200"
    ],
    languages: ["English"],
    featured: false,
    stats: {
      height: "5'6\"",
      bust: "34C",
      eyes: "Blue",
      hair: "Blonde"
    }
  },
  {
    id: "isabellab",
    name: "Isabella",
    age: 28,
    location: "Chelsea",
    bio: "Mature, elegant, and deeply cultured. Isabella is a world traveler with stories that fascinate and a presence that commands respect. She is the ultimate partner for a refined gentleman.",
    thumbnail: "https://picsum.photos/seed/isabella-main/600/900",
    gallery: [
      "https://picsum.photos/seed/isabella-1/800/1200",
      "https://picsum.photos/seed/isabella-2/800/1200",
      "https://picsum.photos/seed/isabella-3/800/1200",
      "https://picsum.photos/seed/isabella-4/800/1200",
      "https://picsum.photos/seed/isabella-5/800/1200"
    ],
    languages: ["English", "Russian"],
    featured: false,
    stats: {
      height: "5'10\"",
      bust: "36C",
      eyes: "Brown",
      hair: "Auburn"
    }
  },
  {
    id: "mayab",
    name: "Maya",
    age: 25,
    location: "Belgravia",
    bio: "Exotic, mysterious, and incredibly attentive. Maya specializes in creating deep, personal connections. Her background in psychology allows her to read the room perfectly, making her the ideal companion for everything from high-pressure business dinners to relaxed private retreats.",
    thumbnail: "https://picsum.photos/seed/maya-main/600/900",
    gallery: [
      "https://picsum.photos/seed/maya-1/800/1200",
      "https://picsum.photos/seed/maya-2/800/1200",
      "https://picsum.photos/seed/maya-3/800/1200",
      "https://picsum.photos/seed/maya-4/800/1200",
      "https://picsum.photos/seed/maya-5/800/1200"
    ],
    languages: ["English", "Arabic", "French"],
    featured: false,
    stats: {
      height: "5'7\"",
      bust: "34D",
      eyes: "Amber",
      hair: "Ebony"
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
