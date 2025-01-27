// Import your project photos here
import AlienCafe from "../images/AlienCafe.png";
import SocialMobile from "../images/SocialMobile.png";
import CopiersUtah from "../images/copiers.webp";
import designoProject from "../images/designo.png";
import Jukify from "../images/jukify.png";

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
    image: AlienCafe,
  },
  {
    title: "Twitter Dupe",
    description:
      "I built a fully functional Twitter-inspired app using React Native for the front end and Next.js for the back end, with a PostgreSQL database. It’s got all the core features—tweeting, liking, commenting, and real-time updates—packed into a nice design. This project was a great way to push my skills in full-stack development and show how I can take a complex idea and bring it to life.",
    techUsed: ["TypeScript", "Tailwind", "React Native", "Python", "FastAPI", "SQLAlchemy", "WebSockets", "Postgres"],
    githubPath: "https://github.com",
    liveSitePath: "https://social-mobile.vercel.app/",
    image: SocialMobile,
  },
  {
    title: "Copiers Utah",
    description:
      "I built a website for Copiers Utah designed to simplify the customer experience. The site features an intuitive layout that presents detailed product information and includes a straightforward quote request form. It’s all about making the copier buying process seamless and accessible, helping users confidently find the right fit and reach out for more information. This project highlights my ability to create user-friendly designs that meet both business and customer needs.",
    techUsed: ["Javascript", "Next.js", "CSS"],
    githubPath: "https://github.com",
    liveSitePath: "https://www.copiersutah.com/",
    image: CopiersUtah,
  },
  {
    title: "Jukify",
    description:
      "We created a Spotify Jukebox web app that transforms music listening into a social experience. Users can join rooms, add their favorite songs, and vote on what plays next, making playlist creation collaborative and fun. Using Spotify’s API, the app supports real-time song additions and voting to ensure the playlist matches the room’s vibe. This project showcases my skills in API integration and building dynamic, real-time features for an engaging user experience.",
    techUsed: ["TypeScript", "Next.js", "CSS", "Sockets.io", "Spotify API"],
    githubPath: "https://github.com",
    liveSitePath: "https://www.youtube.com/watch?v=nK6ggr6-on0",
    image: Jukify,
  },
  {
    title: "Ionic Instant Messaging",
    description:
      "I developed a real-time messaging feature for iOS and Android apps using React Ionic, TypeScript, and WebSockets. The feature delivers a seamless chat experience, allowing users to connect instantly for casual conversations or support needs. This project demonstrates my ability to build efficient, real-time communication systems while focusing on user-friendly design and reliable performance.",
    techUsed: ["TypeScript", "TypeScript", "CSS", "Sockets.io"],
    githubPath: "https://github.com",
    liveSitePath: "https://www.linkedin.com/feed/update/urn:li:activity:7221575398046777344/",
    image: designoProject,
  },
];
