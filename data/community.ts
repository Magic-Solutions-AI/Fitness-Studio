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
    image: "/images/community-1.jpg",
    alt: "AK Fitness Studio members training together in a group session",
    title: "Member Group Workout Session",
    gridClass: "col-span-12 md:col-span-5 row-span-3",
  },
  {
    id: "c2",
    image: "/images/community-2.jpg",
    alt: "Community fitness workshop at AK Fitness Studio",
    title: "Studio Fitness Challenge & Workshop",
    gridClass: "col-span-6 md:col-span-3 row-span-2",
  },
  {
    id: "c3",
    image: "/images/community-3.jpg",
    alt: "AK Fitness Studio member celebrating personal lifting record",
    title: "Member Personal Record Milestone",
    gridClass: "col-span-6 md:col-span-4 row-span-3",
  },
  {
    id: "c4",
    image: "/images/community-4.jpg",
    alt: "AK Fitness Studio community members supporting each other",
    title: "Supportive Training Community",
    gridClass: "col-span-6 md:col-span-3 row-span-2",
  },
  {
    id: "c5",
    image: "/images/community-5.jpg",
    alt: "High-intensity athletic conditioning group workout",
    title: "High-Intensity Group Conditioning",
    gridClass: "col-span-6 md:col-span-5 row-span-3",
  },
  {
    id: "c6",
    image: "/images/community-6.jpg",
    alt: "Coaches and members posing together at AK Fitness Studio",
    title: "AK Fitness Studio Family Photo",
    gridClass: "hidden md:block md:col-span-4 row-span-2",
  },
];
