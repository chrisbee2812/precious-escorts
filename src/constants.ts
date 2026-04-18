export interface Escort {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  thumbnail: string;
  gallery: string[];
  languages: string[];
  stats: {
    height: string;
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
    location: "London",
    bio: "Elara is the embodiment of sophistication and grace. With a background in classical arts and a keen mind for deep conversation, she is the perfect companion for high-profile events or intimate evenings. Her presence is both calming and captivating, ensuring every moment spent in her company is nothing short of extraordinary.",
    thumbnail: "https://picsum.photos/seed/elara-main/600/900",
    gallery: [
      "https://picsum.photos/seed/elara-1/800/1200",
      "https://picsum.photos/seed/elara-2/800/1200",
      "https://picsum.photos/seed/elara-3/800/1200"
    ],
    languages: ["English", "French"],
    stats: {
      height: "5'8\"",
      bust: "34B",
      eyes: "Emerald",
      hair: "Chestnut"
    }
  },
  {
    id: "seraphina",
    name: "Seraphina",
    age: 26,
    location: "Mayfair",
    bio: "A true connoisseur of luxury and elegance. Seraphina brings an air of mystery and allure to every encounter. Whether you're dining at the finest establishments or enjoying a quiet night in, her charisma and intelligence will make the experience unforgettable.",
    thumbnail: "https://picsum.photos/seed/seraphina-main/600/900",
    gallery: [
      "https://picsum.photos/seed/seraphina-1/800/1200",
      "https://picsum.photos/seed/seraphina-2/800/1200",
      "https://picsum.photos/seed/seraphina-3/800/1200"
    ],
    languages: ["English", "Italian", "Spanish"],
    stats: {
      height: "5'9\"",
      bust: "32C",
      eyes: "Hazel",
      hair: "Raven"
    }
  },
  {
    id: "aria",
    name: "Aria",
    age: 23,
    location: "Kensington",
    bio: "Full of life and youthful energy, Aria is as spirited as she is beautiful. Her infectious laughter and adventurous soul make her the ideal companion for those seeking a vibrant and engaging experience.",
    thumbnail: "https://picsum.photos/seed/aria-main/600/900",
    gallery: [
      "https://picsum.photos/seed/aria-1/800/1200",
      "https://picsum.photos/seed/aria-2/800/1200",
      "https://picsum.photos/seed/aria-3/800/1200"
    ],
    languages: ["English"],
    stats: {
      height: "5'6\"",
      bust: "34C",
      eyes: "Blue",
      hair: "Blonde"
    }
  },
  {
    id: "isabella",
    name: "Isabella",
    age: 28,
    location: "Chelsea",
    bio: "Mature, elegant, and deeply cultured. Isabella is a world traveler with stories that fascinate and a presence that commands respect. She is the ultimate partner for a refined gentleman.",
    thumbnail: "https://picsum.photos/seed/isabella-main/600/900",
    gallery: [
      "https://picsum.photos/seed/isabella-1/800/1200",
      "https://picsum.photos/seed/isabella-2/800/1200",
      "https://picsum.photos/seed/isabella-3/800/1200"
    ],
    languages: ["English", "Russian"],
    stats: {
      height: "5'10\"",
      bust: "36C",
      eyes: "Brown",
      hair: "Auburn"
    }
  }
];
