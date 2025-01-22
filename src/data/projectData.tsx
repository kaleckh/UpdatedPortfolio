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

export const projectData: Project[] = [
  {
    title: "Designo",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
  {
    title: "Designo",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
  {
    title: "Audiophile",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: audiophileProject,
  },
  {
    title: "Audiophile",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: audiophileProject,
  },
  {
    title: "Designo",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
  {
    title: "Designo",
    description:
      "A responsive multi-page web application where I leveraged SSR in Next Js to enhance performance. Integrated Google maps API for better location display.",
    techUsed: ["TypeScript", "Next.js", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "/",
    image: designoProject,
  },
];
