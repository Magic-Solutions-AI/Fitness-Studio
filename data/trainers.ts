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
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=300&auto=format&fit=crop",
    alt: "Arun Kumar - Founder & Head Coach at AK Fitness Studio",
    title: "Arun Kumar - Head Strength & Conditioning Coach",
  },
  {
    id: "vignesh-raja",
    name: "Vignesh Raja",
    role: "Personal Trainer — Muscle Building & Nutrition",
    bio: "Specializes in hypertrophy programming and practical nutrition coaching.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=300&auto=format&fit=crop",
    alt: "Vignesh Raja - Personal Trainer & Nutrition Coach",
    title: "Vignesh Raja - Muscle Building & Nutrition Specialist",
  },
  {
    id: "karthik-s",
    name: "Karthik S",
    role: "Functional Training Coach",
    bio: "Focused on movement quality, mobility and injury-resistant training.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop",
    alt: "Karthik S - Functional Training Coach at AK Fitness Studio",
    title: "Karthik S - Mobility & Functional Fitness Coach",
  },
  {
    id: "dinesh-m",
    name: "Dinesh M",
    role: "Weight Loss & Beginner Programs",
    bio: "Guides first-time members through their earliest, most important sessions.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=300&auto=format&fit=crop",
    alt: "Dinesh M - Weight Loss & Beginner Fitness Coach",
    title: "Dinesh M - Weight Loss & Beginner Fitness Coach",
  },
];
