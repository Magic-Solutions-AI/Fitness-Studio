export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "praveen-k",
    quote: "Joining AK Fitness Studio completely changed my approach to fitness and discipline. I look forward to training now.",
    name: "Praveen K.",
    role: "Member since 2023",
  },
  {
    id: "meena-s",
    quote: "The coaches actually watch your form every session. That kind of attention is rare and it's why I've stuck with it.",
    name: "Meena S.",
    role: "Member since 2024",
  },
  {
    id: "ashwin-r",
    quote: "I walked in knowing nothing about training. A year later I'm coaching my own progress, not guessing at it.",
    name: "Ashwin R.",
    role: "Member since 2022",
  },
];
