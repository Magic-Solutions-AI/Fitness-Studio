export interface FacilityItem {
  id: string;
  caption: string;
  image: string;
  alt: string;
  title: string;
}

export const facilities: FacilityItem[] = [
  {
    id: "main-floor",
    caption: "Main Training Floor",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1200&auto=format&fit=crop",
    alt: "Spacious main training floor at AK Fitness Studio",
    title: "Main Strength & Conditioning Floor",
  },
  {
    id: "free-weights",
    caption: "Free Weights Area",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=800&auto=format&fit=crop",
    alt: "Dumbbells and heavy weight plates in free weights area",
    title: "Free Weights & Dumbbell Zone",
  },
  {
    id: "functional-zone",
    caption: "Functional Zone",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    alt: "Functional athletic training area with turf and kettlebells",
    title: "Functional Movement & Turf Zone",
  },
  {
    id: "cardio-area",
    caption: "Cardio Area",
    image: "https://images.unsplash.com/photo-1470468969717-61d5d54fd919?q=80&w=800&auto=format&fit=crop",
    alt: "Cardio equipment including rowing machines and treadmills",
    title: "Cardio & Endurance Section",
  },
  {
    id: "group-training",
    caption: "Group Training",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop",
    alt: "Dedicated group fitness and community training space",
    title: "Group Fitness & Conditioning Arena",
  },
];
