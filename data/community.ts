export interface CommunityImage {
  id: string;
  image: string;
  alt: string;
  title: string;
  gridClass: string;
}

export const communityImages: CommunityImage[] = [
  {
    id: "c1",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=900&auto=format&fit=crop",
    alt: "AK Fitness Studio members training together in a group session",
    title: "Member Group Workout Session",
    gridClass: "col-span-12 md:col-span-5 row-span-3",
  },
  {
    id: "c2",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    alt: "Community fitness workshop at AK Fitness Studio",
    title: "Studio Fitness Challenge & Workshop",
    gridClass: "col-span-6 md:col-span-3 row-span-2",
  },
  {
    id: "c3",
    image: "https://images.unsplash.com/photo-1583500178690-f7f9f5c4d5eb?q=80&w=900&auto=format&fit=crop",
    alt: "AK Fitness Studio member celebrating personal lifting record",
    title: "Member Personal Record Milestone",
    gridClass: "col-span-6 md:col-span-4 row-span-3",
  },
  {
    id: "c4",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=600&auto=format&fit=crop",
    alt: "AK Fitness Studio community members supporting each other",
    title: "Supportive Training Community",
    gridClass: "col-span-6 md:col-span-3 row-span-2",
  },
  {
    id: "c5",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=900&auto=format&fit=crop",
    alt: "High-intensity athletic conditioning group workout",
    title: "High-Intensity Group Conditioning",
    gridClass: "col-span-6 md:col-span-5 row-span-3",
  },
  {
    id: "c6",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=600&auto=format&fit=crop",
    alt: "Coaches and members posing together at AK Fitness Studio",
    title: "AK Fitness Studio Family Photo",
    gridClass: "hidden md:block md:col-span-4 row-span-2",
  },
];
