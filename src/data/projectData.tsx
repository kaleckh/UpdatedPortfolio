import designoProject from "../images/designo.png";

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
    title: "Audiophile",
    description:
      "This project is so awesome I am so proud of myself for completing the challenge from frontend mentor and it was pretty easy",
    techUsed: ["JavaScript", "React", "Tailwind"],
    githubPath: "https://github.com",
    liveSitePath: "https://justinalexanderv2.vercel.app",
    image: designoProject,
  },
];
