import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, json } from "@tanstack/react-start";

export type Project = {
  id: number | string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

// Example middleware for logging
const projectLoggerMiddleware = createMiddleware().server(async ({ next }) => {
  console.info("➡️ In: /api/projects");
  const result = await next();
  result.response.headers.set("x-projects", "true");
  console.info("⬅️ Out: /api/projects");
  return result;
});

export const Route = createFileRoute("/api/projects")({
  server: {
    middleware: [projectLoggerMiddleware],
    handlers: {
      GET: async () => {
        const projects: Project[] = [
          {
            id: 1,
            title: "Park’n Go – Valet Service Platform",
            description:
              "Implemented dynamic UI components using Vite.js and Ant Design, focusing on mobile-first design",
            tech: ["Vite", "Ant design", "TanStack Query", "styled-components"],
            link: "https://parkngovalet.com/",
          },
          {
            id: 2,
            title: "Platform-for assessing functional abilities of citizens",
            description:
              "Built key UI components and forms with API integration, UX enhancements, and WCAG 2.1 accessibility compliance.",
            tech: ["React", "Ant design", "TanStack Query", "styled-components"],
            link: "https://e-disability.am/",
          },
          {
            id: 3,
            title: "Unified application management system",
            description:
              "System for public social protection services. Built AMS with mID/eID OAuth login, role-based workflows, and super admin management.",
            tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
            link: "https://e-social.am/",
          },
          {
            id: 4,
            title: "NK Housing system",
            description:
              "The program is a state-led initiative to address the profound housing needs of families forcibly displaced from Nagorno-Karabakh. It combines financial support, certificates, and the opportunity to build or buy homes, with the goal to restore housing dignity and stability for vulnerable populations.",
            tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
            link: "https://housing.socservice.am/",
          },
          {
            id: 5,
            title: "Support for displaced families from Nagorno-Karabakh",
            description:
              "This is an online application platform operated by Armenia’s Ministry of Labor and Social Affairs for the state social support initiative. It allows forcibly displaced persons from Artsakh to submit their applications and check eligibility for monthly financial support to cover accommodation and other living‐related expenses.",
            tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
            link: "https://rent.socservice.am/",
          },
          {
            id: 6,
            title: "Association for the Support of Private Preschool Institutions",
            description:
              "Developed a responsive and accessible React.js website for the Association for the Support of Private Preschool Institutions. Implemented dynamic components, form handling with API integration, and efficient state management using hooks and context. Optimized performance with code splitting and lazy loading, applied modular styled-components for styling, and ensured cross-browser compatibility.",
            tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
            link: "https://mnha.am/",
          },
        ];

        return json(projects, {
          headers: { "Cache-Control": "public, max-age=60" },
        });
      },
    },
  },
});
