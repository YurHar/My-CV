import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { f as Route } from "./router-DgKkjbIf.js";
import "@tanstack/react-router-devtools";
import "react";
import "framer-motion";
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
function PostDeepComponent() {
  const post = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "p-2 space-y-2", children: [
    /* @__PURE__ */ jsx(Link, { to: "/posts", className: "block py-1 text-blue-800 hover:text-blue-600", children: "← All Posts" }),
    /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold underline", children: post.title }),
    /* @__PURE__ */ jsx("div", { className: "text-sm", children: post.body })
  ] });
}
export {
  PostDeepComponent as component
};
