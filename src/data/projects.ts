// src/data/projects.ts

// 1. Define the type for a single project
export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

// 2. Export your projects data with the new type
export const projectsData: Project[] = [
  {
    title: "Wedding Invitation Site",
    image: "/img/markandmyra.jpg", // Path is relative to the 'public' folder
    description:
      "A beautiful, responsive wedding invitation site for me and my wife. Features clean design and minimal navigation.",
    link: "https://thedivinagracias.com",
  },
  {
    title: "Kape Dadiangas - Demo Site",
    image: "/img/project2.png",
    description:
      "A coffee shop advertising demo website show casing my web developement and designing skills.",
    link: "https://kapedadiangas-demo.netlify.app/",
  },
  {
    title: "Pawsitive Start - Demo Site",
    image: "/img/pawsitive.png",
    description: "A website for showcasing pets up for adoption",
    link: "https://pawsitive-demo.netlify.app/",
  },
];
