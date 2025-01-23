# Developer Portfolio Template

This project is a React-based developer portfolio template created using Vite. It is designed to help new developers showcase their projects, skills, and contact information with ease. Follow the instructions below to set up and customize the portfolio to fit your needs.

## Getting Started

### Prerequisites

- Node.js installed on your computer.
- Basic understanding of React and JavaScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/portfolio-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-template
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser at `http://localhost:5173`.

## Customization

### Personal Information

1. Open the `src/components/Hero.tsx` file.
2. Update the following information:
   - **Title**: Your portfolio's headline.
   - **Name**: Your name.
   - **Skill Summary**: A brief summary of your skills.
   - **Resume**: Embed your resume within the `public` folder and link to it here.

### Social Links

1. Open the `src/components/SocialLinks.tsx` file.
2. Update the social media and contact links by replacing the placeholder URLs with your own for platforms such as LinkedIn, GitHub, X (formerly Twitter), and Email.

### Projects

1. Open the `src/data/projectData.tsx` file.
2. Update the `projectData` array with your own project details:
   ```typescript
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
     // Add more project
   ];
   ```

### Technical Skills

1. Open the `src/data/techSkills.tsx` file.
2. Update the `techSkills` array with the technologies you are proficient in:
   ```typescript
   export const techSkills = [
     "React",
     "TypeScript",
     "Node.js",
     "Next.js",
     "Express.js",
     "MongoDb",
   ];
   ```

### Contact Section

1. Open the `src/components/ContactSection.tsx` file.
2. Replace the placeholder email with your actual email address to update the contact link.

Feel free to reach out if you encounter any issues or need assistance!
