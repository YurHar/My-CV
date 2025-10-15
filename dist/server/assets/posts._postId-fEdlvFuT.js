import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { e as Route } from "./router-BFMlp6O8.js";
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
function PostComponent() {
  const post = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold underline", children: post.title }),
    /* @__PURE__ */ jsx("div", { className: "text-sm", children: post.body }),
    /* @__PURE__ */ jsx(Link, { to: "/posts/$postId/deep", params: {
      postId: String(post.id)
    }, activeProps: {
      className: "text-black font-bold"
    }, className: "inline-block py-1 text-blue-800 hover:text-blue-600", children: "Deep View" })
  ] });
}
export {
  PostComponent as component
};
