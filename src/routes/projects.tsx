import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Project } from "./api/projects";

export const Route = createFileRoute("/projects")({
  loader: async () => {
    const res = await fetch("/api/projects");
    if (!res.ok) throw new Error("Failed to load projects");
    return (await res.json()) as Project[];
  },
  component: ProjectsPage,
});

function ProjectsPage() {
  const projects = Route.useLoaderData();

  return (
    <section className="min-h-screen text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-10 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 100; // number of characters before truncation
  const isLong = project.description.length > maxLength;
  const displayText = expanded
    ? project.description
    : project.description.slice(0, maxLength) + (isLong ? "..." : "");

  return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
      >
        <h2 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-2">
          {displayText}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-1 text-blue-400 hover:text-blue-300 text-xs font-medium"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 text-sm font-semibold hover:text-blue-300 transition"
          >
            View Project →
          </a>
        )}
      </motion.div>
  );
}
