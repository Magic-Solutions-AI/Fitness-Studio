export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  title: string;
}

export const trainers: Trainer[] = [
  {
    id: "arun-kumar",
    name: "Arun Kumar",
    role: "Founder & Head Coach — Strength & Conditioning",
    bio: "Founded AK Fitness Studio to bring real, personal coaching to everyday training.",
    image: "/images/trainer-1.jpg",
    alt: "Arun Kumar - Founder & Head Coach at AK Fitness Studio",
    title: "Arun Kumar - Head Strength & Conditioning Coach",
  },
  {
    id: "vignesh-raja",
    name: "Vignesh Raja",
    role: "Personal Trainer — Muscle Building & Nutrition",
    bio: "Specializes in hypertrophy programming and practical nutrition coaching.",
    image: "/images/trainer-2.jpg",
    alt: "Vignesh Raja - Personal Trainer & Nutrition Coach",
    title: "Vignesh Raja - Muscle Building & Nutrition Specialist",
  },
  {
    id: "karthik-s",
    name: "Karthik S",
    role: "Functional Training Coach",
    bio: "Focused on movement quality, mobility and injury-resistant training.",
    image: "/images/trainer-3.jpg",
    alt: "Karthik S - Functional Training Coach at AK Fitness Studio",
    title: "Karthik S - Mobility & Functional Fitness Coach",
  },
  {
    id: "dinesh-m",
    name: "Dinesh M",
    role: "Weight Loss & Beginner Programs",
    bio: "Guides first-time members through their earliest, most important sessions.",
    image: "/images/trainer-4.jpg",
    alt: "Dinesh M - Weight Loss & Beginner Fitness Coach",
    title: "Dinesh M - Weight Loss & Beginner Fitness Coach",
  },
];
