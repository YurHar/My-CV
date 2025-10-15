import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { a as Route } from "./router-BFMlp6O8.js";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "lucide-react";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
function ProjectsPage() {
  const projects = Route.useLoaderData();
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(motion.h1, { className: "text-4xl sm:text-5xl font-bold mb-10 text-center text-white", initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "Projects" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: projects.map((project, i) => /* @__PURE__ */ jsx(ProjectCard, { project, index: i }, project.id)) })
  ] }) });
}
function ProjectCard({
  project,
  index
}) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;
  const isLong = project.description.length > maxLength;
  const displayText = expanded ? project.description : project.description.slice(0, maxLength) + (isLong ? "..." : "");
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, transition: {
    delay: index * 0.1,
    duration: 0.4
  }, viewport: {
    once: true
  }, className: "bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white mb-2", children: project.title }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm mb-2", children: [
      displayText,
      isLong && /* @__PURE__ */ jsx("button", { onClick: () => setExpanded(!expanded), className: "ml-1 text-blue-400 hover:text-blue-300 text-xs font-medium", children: expanded ? "Show less" : "Show more" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tech.map((tech) => /* @__PURE__ */ jsx("span", { className: "text-xs font-medium bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md", children: tech }, tech)) }),
    project.link && /* @__PURE__ */ jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-blue-400 text-sm font-semibold hover:text-blue-300 transition", children: "View Project →" })
  ] });
}
export {
  ProjectsPage as component
};
