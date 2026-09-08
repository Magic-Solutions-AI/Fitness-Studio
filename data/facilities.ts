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
    image: "/images/facility-1.jpg",
    alt: "Spacious main training floor at AK Fitness Studio",
    title: "Main Strength & Conditioning Floor",
  },
  {
    id: "free-weights",
    caption: "Free Weights Area",
    image: "/images/facility-2.jpg",
    alt: "Dumbbells and heavy weight plates in free weights area",
    title: "Free Weights & Dumbbell Zone",
  },
  {
    id: "functional-zone",
    caption: "Functional Zone",
    image: "/images/facility-3.jpg",
    alt: "Functional athletic training area with turf and kettlebells",
    title: "Functional Movement & Turf Zone",
  },
  {
    id: "cardio-area",
    caption: "Cardio Area",
    image: "/images/facility-4.jpg",
    alt: "Cardio equipment including rowing machines and treadmills",
    title: "Cardio & Endurance Section",
  },
  {
    id: "group-training",
    caption: "Group Training",
    image: "/images/facility-5.jpg",
    alt: "Dedicated group fitness and community training space",
    title: "Group Fitness & Conditioning Arena",
  },
];
