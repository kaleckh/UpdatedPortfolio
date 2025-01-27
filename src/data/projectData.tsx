// Import your project photos here
import designoProject from "../images/designo.png";
import audiophileProject from "../images/audiophile1.webp";

export interface Project {
  title: string;
  description: string;
  techUsed: string[];
  githubPath: string;
  liveSitePath: string;
  image: string;
}

// Insert your project data within the objects, all properties must be used
// Add as many projects as needed
export const projectData: Project[] = [
  {
    title: "Alien Cafe",
    description:
      "I created AlienCafe, a social discussion platform built with Ionic React, designed for debates on thesis-driven arguments. Users can share ideas through structured posts, vote on their validity, and engage in discussions to evaluate truthfulness. This project highlights my skills in building interactive platforms that encourage meaningful user engagement and critical thinking.",
    techUsed: ["TypeScript", "Next.js", "React Ionic", "Supabase", "Postgres", "Quill.js", "WebSockets"],
    githubPath: "https://github.com/AlienServices/AlienSocial",
    liveSitePath: "/",
    image: designoProject,
  },
  {
    title: "Twitter Dupe",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
  {
    title: "Copiers Utah",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: audiophileProject,
  },
  {
    title: "Jukify",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: audiophileProject,
  },
  {
    title: "Ionic Instant Messaging",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
];
