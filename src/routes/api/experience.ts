import { createFileRoute } from "@tanstack/react-router";
import { createMiddleware, json } from "@tanstack/react-start";

export type Experience = {
  id: number | string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

// Example middleware for logging
const experienceLoggerMiddleware = createMiddleware().server(
  async ({ next }) => {
    console.info("➡️ In: /api/experience");
    const result = await next();
    result.response.headers.set("x-experience", "true");
    console.info("⬅️ Out: /api/experience");
    return result;
  }
);

export const Route = createFileRoute("/api/experience")({
  server: {
    middleware: [experienceLoggerMiddleware],
    handlers: {
      GET: async () => {
        const experiences: Experience[] = [
          {
            id: 1,
            role: "Frontend Developer",
            company: "Nork Technology Center",
            period: "2021 – Present",
            description:
              "Developed accessible and responsive web applications using React, Next.js, Tailwind CSS, and Ant Design. Collaborated with cross-functional teams to deliver high-performance, user-friendly applications that enable efficient data management and seamless user interaction. Focused on component reusability and accessibility (WCAG 2.1).",
            tech: [
              "React",
              "Next.js",
              "TypeScript",
              "Ant Design",
              "Tanstack Query",
            ],
          },
          {
            id: 2,
            role: "Frontend Developer",
            company: "SJDevs LTD",
            period: "2024 – 2025",
            description:
              "Implemented user interfaces with React.js based on client specifications. Developed front-end tests using browser automation tools and collaborated with back-end developers to ensure seamless service integration.",
            tech: ["JavaScript", "React", "Redux", "REST API"],
          },
          {
            id: 3,
            role: "Data Manager",
            company: "Sporting Software Solutions LLC",
            period: "2019 – 2020",
            description:
              "Collected and analyzed data across multiple fields to support business operations. Monitored market activity relevant to the company’s sector. Provided critical data to regional branches in the USA, Argentina, Brazil, and other locations. Maintained clear and consistent communication within the team.",
            tech: [],
          },
        ];

        return json(experiences, {
          headers: { "Cache-Control": "public, max-age=60" },
        });
      },
    },
  },
});
