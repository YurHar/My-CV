import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { b as Route } from "./router-BFMlp6O8.js";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "react";
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
function ExperiencePage() {
  const experiences = Route.useLoaderData();
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen py-16 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(motion.h1, { className: "text-4xl sm:text-5xl font-bold mb-12 text-center", initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: [
      "My ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "Experience" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-8", children: experiences.map((exp, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.1,
      duration: 0.5
    }, viewport: {
      once: true
    }, className: "relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white", children: exp.role }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-400 font-medium", children: exp.period })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-md text-gray-300 font-medium mb-3", children: exp.company }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-4 leading-relaxed", children: exp.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: exp.tech.map((tech) => /* @__PURE__ */ jsx("span", { className: "text-xs font-medium bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md", children: tech }, tech)) }),
      /* @__PURE__ */ jsx("span", { className: "absolute left-0 top-6 h-10 w-1.5 bg-blue-500 rounded-r-full" })
    ] }, exp.id)) })
  ] }) });
}
export {
  ExperiencePage as component
};
