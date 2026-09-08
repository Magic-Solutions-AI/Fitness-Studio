export interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  title: string;
  cardSize?: "wide" | "narrow" | "tall" | "default" | "wide-tall";
  emoji: string;
  color: string;
}

export const programs: Program[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Progressive barbell programming to build raw, usable strength — squat, press, pull.",
    image: "/images/program-strength-1.jpg",
    alt: "AK Fitness Studio athlete performing heavy barbell squat strength training",
    title: "Barbell Strength Training Program at AK Fitness Studio",
    emoji: "🏋️‍♂️",
    color: "#22c55e",
  },
  {
    id: "weight-loss",
    name: "Weight Loss",
    description: "Structured conditioning and nutrition guidance built around sustainable results.",
    image: "/images/program-weightloss-1.jpg",
    alt: "Dedicated member undergoing weight loss conditioning at AK Fitness Studio",
    title: "Sustainable Weight Loss & Conditioning Program",
    emoji: "🏃‍♀️",
    color: "#38bdf8",
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one coaching designed entirely around your schedule and goal.",
    image: "/images/program-personal-1.jpg",
    alt: "Man and woman training together in personal coaching session",
    title: "1-on-1 Personal Training Coaching",
    emoji: "🤝",
    color: "#c084fc",
  },
  {
    id: "functional-training",
    name: "Functional Training",
    description: "Movement-based conditioning that carries over into daily life and sport.",
    image: "/images/program-strength-2.jpg",
    alt: "Functional fitness kettlebell and athletic movement training session",
    title: "Functional Fitness & Athletic Conditioning",
    emoji: "🤸",
    color: "#fbbf24",
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    description: "Hypertrophy-focused programming with structured progressive overload.",
    image: "/images/program-weightloss-2.jpg",
    alt: "Dedicated hypertrophy and muscle building training session",
    title: "Progressive Muscle Building Program",
    emoji: "💪",
    color: "#f87171",
  },
  {
    id: "beginner-fitness",
    name: "Beginner Fitness",
    description: "A guided starting point — proper form, realistic pacing, real confidence.",
    image: "/images/facility-1.jpg",
    alt: "Beginner member receiving form instruction from fitness coach",
    title: "Guided Beginner Fitness Program",
    emoji: "🌱",
    color: "#a3e635",
  },
];
