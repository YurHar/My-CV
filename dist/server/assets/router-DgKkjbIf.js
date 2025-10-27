import { jsxs, jsx } from "react/jsx-runtime";
import { useRouter, useMatch, rootRouteId, ErrorComponent, Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, notFound, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, X, Menu } from "lucide-react";
import { c as createServerFn, a as createServerRpc, g as getRequestHeaders } from "../server.js";
import { json } from "@tanstack/router-core/ssr/client";
const createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { middleware })
      );
    },
    inputValidator: (inputValidator) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { inputValidator })
      );
    },
    client: (client) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { client })
      );
    },
    server: (server) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { server })
      );
    }
  };
};
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error("DefaultCatchBoundary Error:", error);
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
          },
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold`,
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-[95vh] text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-10 left-10",
        animate: { y: [0, 40, 0], scale: [1, 1.1, 1] },
        transition: { duration: 10, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10",
        animate: { y: [0, -40, 0], scale: [1, 1.1, 1] },
        transition: { duration: 12, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        initial: { opacity: 0, y: -40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-[6rem] sm:text-[8rem] font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg",
        children: "404"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.4, duration: 0.8 },
        className: "max-w-md text-gray-400 text-lg mb-8",
        children: children || "Oops! The page you’re looking for does not exist or has been moved."
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.8, duration: 0.8 },
        className: "flex flex-wrap gap-4 justify-center",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.history.back(),
              className: "flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 active:scale-95 shadow-lg",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { size: 18 }),
                "Go Back"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 active:scale-95 shadow-lg",
              children: [
                /* @__PURE__ */ jsx(Home, { size: 18 }),
                "Start Over"
              ]
            }
          )
        ]
      }
    )
  ] });
}
const appCss = "/assets/app-DBXKqTQK.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
const Route$m = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...seo({
        title: "Yuri Harutyunyan | Frontend Engineer",
        description: "Portfolio of Yuri Harutyunyan — Senior Front-End Developer skilled in React, Next.js, and modern TypeScript."
      })
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg" }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  const router2 = useRouter();
  const lastMatch = router2.state.matches.at(-1);
  const isNotFound = lastMatch?.routeId === "__notFound__";
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "h-full text-gray-100", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen flex flex-col font-sans antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900", children: [
      !isNotFound && /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1 w-full", children }),
      /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 bg-slate-800/80 backdrop-blur border-b border-slate-700", children: [
    /* @__PURE__ */ jsxs("nav", { className: "max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "flex items-center gap-2 text-xl font-bold tracking-wide text-white hover:text-blue-400 transition",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/logo.svg",
              alt: "Yuri.dev",
              className: "w-[170px] h-10"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center justify-end flex-1 gap-10 text-white text-sm lg:text-base", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/", label: "Home", exact: true }),
        /* @__PURE__ */ jsx(NavLink, { to: "/projects", label: "Projects" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/experience", label: "Experience" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/contact", label: "Contact" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          "aria-label": "Toggle navigation menu",
          className: "md:hidden p-2 rounded hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white",
          children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-4 px-6 py-5 text-white text-base", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", label: "Home", exact: true, onClick: () => setIsOpen(false) }),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/projects",
          label: "Projects",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/experience",
          label: "Experience",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/contact",
          label: "Contact",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-4", children: [
        /* @__PURE__ */ jsx(SocialLink, { href: "https://github.com", icon: /* @__PURE__ */ jsx(GithubIcon, {}) }),
        /* @__PURE__ */ jsx(SocialLink, { href: "https://linkedin.com", icon: /* @__PURE__ */ jsx(LinkedinIcon, {}) })
      ] })
    ] }) })
  ] });
}
function NavLink({
  to,
  label,
  exact = false,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      activeOptions: { exact },
      activeProps: {
        className: "text-blue-400 font-semibold"
      },
      onClick,
      className: "hover:text-blue-300 transition text-white",
      children: label
    }
  );
}
function SocialLink({
  href,
  icon
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      className: "p-2 rounded-full hover:bg-blue-600/20 transition text-white",
      children: icon
    }
  );
}
function GithubIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "w-6 h-6 text-white hover:text-blue-400 transition",
      children: /* @__PURE__ */ jsx("path", { d: "M12 .5C5.648.5.5 5.647.5 12c0 5.094 3.292 9.408 7.865 10.938.575.105.785-.25.785-.553 0-.272-.01-1.163-.016-2.108-3.198.695-3.875-1.54-3.875-1.54-.523-1.33-1.277-1.685-1.277-1.685-1.045-.715.08-.7.08-.7 1.156.082 1.764 1.188 1.764 1.188 1.027 1.758 2.695 1.25 3.352.957.104-.744.402-1.25.732-1.538-2.552-.29-5.237-1.277-5.237-5.68 0-1.255.449-2.283 1.186-3.09-.118-.29-.514-1.46.112-3.045 0 0 .964-.31 3.16 1.18a10.977 10.977 0 0 1 2.88-.388c.978.005 1.962.132 2.88.388 2.194-1.49 3.157-1.18 3.157-1.18.628 1.585.232 2.755.114 3.045.738.807 1.184 1.835 1.184 3.09 0 4.415-2.689 5.387-5.254 5.672.414.358.783 1.063.783 2.143 0 1.547-.014 2.792-.014 3.17 0 .307.207.665.792.552C20.71 21.405 24 17.09 24 12c0-6.353-5.147-11.5-12-11.5Z" })
    }
  );
}
function LinkedinIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: "w-6 h-6 text-white hover:text-blue-400 transition",
      children: /* @__PURE__ */ jsx("path", { d: "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.9-2.88 4V24h-4V8z" })
    }
  );
}
const $$splitComponentImporter$e = () => import("./users-CeQ6ZCxU.js");
const Route$l = createFileRoute("/users")({
  loader: async () => {
    const res = await fetch("/api/users");
    if (!res.ok) {
      throw new Error("Unexpected status code");
    }
    const data = await res.json();
    return data;
  },
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const Route$k = createFileRoute("/redirect")({
  beforeLoad: () => {
    throw redirect({
      to: "/posts"
    });
  }
});
const $$splitComponentImporter$d = () => import("./projects-DoUVaZJE.js");
const Route$j = createFileRoute("/projects")({
  loader: async () => {
    const res = await fetch("/api/projects");
    if (!res.ok) throw new Error("Failed to load projects");
    return await res.json();
  },
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./experience-WzRjUlaH.js");
const Route$i = createFileRoute("/experience")({
  loader: async () => {
    const res = await fetch("/api/experience");
    if (!res.ok) throw new Error("Failed to load projects");
    return await res.json();
  },
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./deferred-DH5ikdQ8.js");
const personServerFn_createServerFn_handler = createServerRpc("f76e8f8721c12c8547a3ced6a10916f5b5076c1a10dcbeaa607360ce419d0a48", (opts, signal) => {
  return personServerFn.__executeServer(opts, signal);
});
const personServerFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(personServerFn_createServerFn_handler, ({
  data: name
}) => {
  return {
    name,
    randomNumber: Math.floor(Math.random() * 100)
  };
});
const slowServerFn_createServerFn_handler = createServerRpc("fc3988c64f434639dfd4eab3f926b87ee39cc0c14f65b4d0e852c7fd73279a3b", (opts, signal) => {
  return slowServerFn.__executeServer(opts, signal);
});
const slowServerFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(slowServerFn_createServerFn_handler, async ({
  data: name
}) => {
  await new Promise((r) => setTimeout(r, 1e3));
  return {
    name,
    randomNumber: Math.floor(Math.random() * 100)
  };
});
const Route$h = createFileRoute("/deferred")({
  loader: async () => {
    return {
      deferredStuff: new Promise((r) => setTimeout(() => r("Hello deferred!"), 2e3)),
      deferredPerson: slowServerFn({
        data: "Tanner Linsley"
      }),
      person: await personServerFn({
        data: "John Doe"
      })
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const Route$g = createFileRoute("/customScript.js")({
  server: {
    handlers: {
      GET: () => {
        return new Response('console.log("Hello from customScript.js!")', {
          headers: {
            "Content-Type": "application/javascript"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$a = () => import("./contact-DKK2gjV4.js");
const Route$f = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./_pathlessLayout-BhrcpZGS.js");
const Route$e = createFileRoute("/_pathlessLayout")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-Da1S4NvP.js");
const Route$d = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./users.index-Bef-9o5f.js");
const Route$c = createFileRoute("/users/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./posts.index-DU8oxB5n.js");
const Route$b = createFileRoute("/posts/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitNotFoundComponentImporter$1 = () => import("./users._userId-DTkk3LBO.js");
const $$splitComponentImporter$5 = () => import("./users._userId-CaL0MvKM.js");
const $$splitErrorComponentImporter$2 = () => import("./users._userId-CG2IqJzb.js");
const Route$a = createFileRoute("/users/$userId")({
  loader: async ({
    params: {
      userId
    }
  }) => {
    try {
      const res = await fetch("/api/users/" + userId);
      if (!res.ok) {
        throw new Error("Unexpected status code");
      }
      const data = await res.json();
      return data;
    } catch {
      throw new Error("Failed to fetch user");
    }
  },
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const fetchPost_createServerFn_handler = createServerRpc("0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5", (opts, signal) => {
  return fetchPost.__executeServer(opts, signal);
});
const fetchPost = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(fetchPost_createServerFn_handler, async ({
  data,
  context
}) => {
  console.log("Request context:", context);
  console.info(`Fetching post with id ${data}...`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data}`);
  if (!res.ok) {
    if (res.status === 404) {
      throw notFound();
    }
    throw new Error("Failed to fetch post");
  }
  const post = await res.json();
  return post;
});
const fetchPosts_createServerFn_handler = createServerRpc("cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be", (opts, signal) => {
  return fetchPosts.__executeServer(opts, signal);
});
const fetchPosts = createServerFn().handler(fetchPosts_createServerFn_handler, async () => {
  console.info("Fetching posts...");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();
  return posts.slice(0, 10);
});
const $$splitNotFoundComponentImporter = () => import("./posts._postId-zwzcjfuz.js");
const $$splitComponentImporter$4 = () => import("./posts._postId-laD8S-Q0.js");
const $$splitErrorComponentImporter$1 = () => import("./posts._postId-C9z5TBp-.js");
const Route$9 = createFileRoute("/posts/$postId")({
  loader: ({
    params: {
      postId
    }
  }) => fetchPost({
    data: postId
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const userLoggerMiddleware = createMiddleware().server(async ({
  next
}) => {
  console.info("In: /users");
  console.info("Request Headers:", getRequestHeaders());
  const result = await next();
  result.response.headers.set("x-users", "true");
  console.info("Out: /users");
  return result;
});
const testParentMiddleware = createMiddleware().server(async ({
  next
}) => {
  console.info("In: testParentMiddleware");
  const result = await next();
  result.response.headers.set("x-test-parent", "true");
  console.info("Out: testParentMiddleware");
  return result;
});
const testMiddleware = createMiddleware().middleware([testParentMiddleware]).server(async ({
  next
}) => {
  console.info("In: testMiddleware");
  const result = await next();
  result.response.headers.set("x-test", "true");
  console.info("Out: testMiddleware");
  return result;
});
const Route$8 = createFileRoute("/api/users")({
  server: {
    middleware: [testMiddleware, userLoggerMiddleware],
    handlers: {
      GET: async ({
        request
      }) => {
        console.info("GET /api/users @", request.url);
        console.info("Fetching users... @", request.url);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        const list = data.slice(0, 10);
        return json(list.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email
        })));
      }
    }
  }
});
const projectLoggerMiddleware = createMiddleware().server(async ({
  next
}) => {
  console.info("➡️ In: /api/projects");
  const result = await next();
  result.response.headers.set("x-projects", "true");
  console.info("⬅️ Out: /api/projects");
  return result;
});
const Route$7 = createFileRoute("/api/projects")({
  server: {
    middleware: [projectLoggerMiddleware],
    handlers: {
      GET: async () => {
        const projects = [{
          id: 1,
          title: "Park’n Go – Valet Service Platform",
          description: "Implemented dynamic UI components using Vite.js and Ant Design, focusing on mobile-first design",
          tech: ["Vite", "Ant design", "TanStack Query", "styled-components"],
          link: "https://parkngovalet.com/"
        }, {
          id: 2,
          title: "Platform-for assessing functional abilities of citizens",
          description: "Built key UI components and forms with API integration, UX enhancements, and WCAG 2.1 accessibility compliance.",
          tech: ["React", "Ant design", "TanStack Query", "styled-components"],
          link: "https://e-disability.am/"
        }, {
          id: 3,
          title: "Unified application management system",
          description: "System for public social protection services. Built AMS with mID/eID OAuth login, role-based workflows, and super admin management.",
          tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
          link: "https://e-social.am/"
        }, {
          id: 4,
          title: "NK Housing system",
          description: "The program is a state-led initiative to address the profound housing needs of families forcibly displaced from Nagorno-Karabakh. It combines financial support, certificates, and the opportunity to build or buy homes, with the goal to restore housing dignity and stability for vulnerable populations.",
          tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
          link: "https://housing.socservice.am/"
        }, {
          id: 5,
          title: "Support for displaced families from Nagorno-Karabakh",
          description: "This is an online application platform operated by Armenia’s Ministry of Labor and Social Affairs for the state social support initiative. It allows forcibly displaced persons from Artsakh to submit their applications and check eligibility for monthly financial support to cover accommodation and other living‐related expenses.",
          tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
          link: "https://rent.socservice.am/"
        }, {
          id: 6,
          title: "Association for the Support of Private Preschool Institutions",
          description: "Developed a responsive and accessible React.js website for the Association for the Support of Private Preschool Institutions. Implemented dynamic components, form handling with API integration, and efficient state management using hooks and context. Optimized performance with code splitting and lazy loading, applied modular styled-components for styling, and ensured cross-browser compatibility.",
          tech: ["React", "Ant Design", "TanStack Query", "styled-components"],
          link: "https://mnha.am/"
        }];
        return json(projects, {
          headers: {
            "Cache-Control": "public, max-age=60"
          }
        });
      }
    }
  }
});
const experienceLoggerMiddleware = createMiddleware().server(async ({
  next
}) => {
  console.info("➡️ In: /api/experience");
  const result = await next();
  result.response.headers.set("x-experience", "true");
  console.info("⬅️ Out: /api/experience");
  return result;
});
const Route$6 = createFileRoute("/api/experience")({
  server: {
    middleware: [experienceLoggerMiddleware],
    handlers: {
      GET: async () => {
        const experiences = [{
          id: 1,
          role: "Frontend Developer",
          company: "Nork Technology Center",
          period: "2021 – Present",
          description: "Developed accessible and responsive web applications using React, Next.js, Tailwind CSS, and Ant Design. Collaborated with cross-functional teams to deliver high-performance, user-friendly applications that enable efficient data management and seamless user interaction. Focused on component reusability and accessibility (WCAG 2.1).",
          tech: ["React", "Next.js", "TypeScript", "Ant Design", "Tanstack Query"]
        }, {
          id: 2,
          role: "Frontend Developer",
          company: "SJDevs LTD",
          period: "2024 – 2025",
          description: "Implemented user interfaces with React.js based on client specifications. Developed front-end tests using browser automation tools and collaborated with back-end developers to ensure seamless service integration.",
          tech: ["JavaScript", "React", "Redux", "REST API"]
        }, {
          id: 3,
          role: "Data Manager",
          company: "Sporting Software Solutions LLC",
          period: "2019 – 2020",
          description: "Collected and analyzed data across multiple fields to support business operations. Monitored market activity relevant to the company’s sector. Provided critical data to regional branches in the USA, Argentina, Brazil, and other locations. Maintained clear and consistent communication within the team.",
          tech: []
        }];
        return json(experiences, {
          headers: {
            "Cache-Control": "public, max-age=60"
          }
        });
      }
    }
  }
});
const contactLoggerMiddleware = createMiddleware().server(async ({
  next
}) => {
  console.info("➡️ In: /api/contact-info");
  const result = await next();
  result.response.headers.set("x-contact-info", "true");
  console.info("⬅️ Out: /api/contact-info");
  return result;
});
const Route$5 = createFileRoute("/api/contact")({
  server: {
    middleware: [contactLoggerMiddleware],
    handlers: {
      GET: async () => {
        const contactInfo = [{
          id: 1,
          label: "Email",
          value: "yuri.harutyunyan.a@gmail.com",
          link: "mailto:yuri.harutyunyan.a@gmail.com"
        }, {
          id: 2,
          label: "Phone",
          value: "+374 93 597 752",
          link: "tel:+37493597752"
        }, {
          id: 3,
          label: "LinkedIn",
          value: "linkedin.com",
          link: "https://linkedin.com/in/yuri-harutyunyan"
        }, {
          id: 4,
          label: "GitHub",
          value: "github.com",
          link: "https://github.com"
        }, {
          id: 5,
          label: "Location",
          value: "Yerevan, Armenia",
          link: "#"
        }];
        return json(contactInfo, {
          headers: {
            "Cache-Control": "public, max-age=60"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./_nested-layout-BocDAsiI.js");
const Route$4 = createFileRoute("/_pathlessLayout/_nested-layout")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./posts_._postId.deep-CtDJr7EI.js");
const $$splitErrorComponentImporter = () => import("./posts_._postId.deep-C9z5TBp-.js");
const Route$3 = createFileRoute("/posts_/$postId/deep")({
  loader: async ({
    params: {
      postId
    }
  }) => fetchPost({
    data: postId
  }),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const Route$2 = createFileRoute("/api/users/$userId")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        console.info(`Fetching users by id=${params.userId}... @`, request.url);
        try {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + params.userId
          );
          if (!res.ok) {
            throw new Error("Failed to fetch user");
          }
          const user = await res.json();
          return json({
            id: user.id,
            name: user.name,
            email: user.email
          });
        } catch (e) {
          console.error(e);
          return json({ error: "User not found" }, { status: 404 });
        }
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./route-b-CsHX6n6-.js");
const Route$1 = createFileRoute("/_pathlessLayout/_nested-layout/route-b")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./route-a-xd-e2Wm0.js");
const Route = createFileRoute("/_pathlessLayout/_nested-layout/route-a")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UsersRoute = Route$l.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => Route$m
});
const RedirectRoute = Route$k.update({
  id: "/redirect",
  path: "/redirect",
  getParentRoute: () => Route$m
});
const ProjectsRoute = Route$j.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$m
});
const ExperienceRoute = Route$i.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$m
});
const DeferredRoute = Route$h.update({
  id: "/deferred",
  path: "/deferred",
  getParentRoute: () => Route$m
});
const CustomScriptDotjsRoute = Route$g.update({
  id: "/customScript.js",
  path: "/customScript.js",
  getParentRoute: () => Route$m
});
const ContactRoute = Route$f.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$m
});
const PathlessLayoutRoute = Route$e.update({
  id: "/_pathlessLayout",
  getParentRoute: () => Route$m
});
const IndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$m
});
const UsersIndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => UsersRoute
});
const PostsIndexRoute = Route$b.update({
  id: "/posts/",
  path: "/posts/",
  getParentRoute: () => Route$m
});
const UsersUserIdRoute = Route$a.update({
  id: "/$userId",
  path: "/$userId",
  getParentRoute: () => UsersRoute
});
const PostsPostIdRoute = Route$9.update({
  id: "/posts/$postId",
  path: "/posts/$postId",
  getParentRoute: () => Route$m
});
const ApiUsersRoute = Route$8.update({
  id: "/api/users",
  path: "/api/users",
  getParentRoute: () => Route$m
});
const ApiProjectsRoute = Route$7.update({
  id: "/api/projects",
  path: "/api/projects",
  getParentRoute: () => Route$m
});
const ApiExperienceRoute = Route$6.update({
  id: "/api/experience",
  path: "/api/experience",
  getParentRoute: () => Route$m
});
const ApiContactRoute = Route$5.update({
  id: "/api/contact",
  path: "/api/contact",
  getParentRoute: () => Route$m
});
const PathlessLayoutNestedLayoutRoute = Route$4.update({
  id: "/_nested-layout",
  getParentRoute: () => PathlessLayoutRoute
});
const PostsPostIdDeepRoute = Route$3.update({
  id: "/posts_/$postId/deep",
  path: "/posts/$postId/deep",
  getParentRoute: () => Route$m
});
const ApiUsersUserIdRoute = Route$2.update({
  id: "/$userId",
  path: "/$userId",
  getParentRoute: () => ApiUsersRoute
});
const PathlessLayoutNestedLayoutRouteBRoute = Route$1.update({
  id: "/route-b",
  path: "/route-b",
  getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
const PathlessLayoutNestedLayoutRouteARoute = Route.update({
  id: "/route-a",
  path: "/route-a",
  getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
const PathlessLayoutNestedLayoutRouteChildren = {
  PathlessLayoutNestedLayoutRouteARoute,
  PathlessLayoutNestedLayoutRouteBRoute
};
const PathlessLayoutNestedLayoutRouteWithChildren = PathlessLayoutNestedLayoutRoute._addFileChildren(
  PathlessLayoutNestedLayoutRouteChildren
);
const PathlessLayoutRouteChildren = {
  PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRouteWithChildren
};
const PathlessLayoutRouteWithChildren = PathlessLayoutRoute._addFileChildren(
  PathlessLayoutRouteChildren
);
const UsersRouteChildren = {
  UsersUserIdRoute,
  UsersIndexRoute
};
const UsersRouteWithChildren = UsersRoute._addFileChildren(UsersRouteChildren);
const ApiUsersRouteChildren = {
  ApiUsersUserIdRoute
};
const ApiUsersRouteWithChildren = ApiUsersRoute._addFileChildren(
  ApiUsersRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  PathlessLayoutRoute: PathlessLayoutRouteWithChildren,
  ContactRoute,
  CustomScriptDotjsRoute,
  DeferredRoute,
  ExperienceRoute,
  ProjectsRoute,
  RedirectRoute,
  UsersRoute: UsersRouteWithChildren,
  ApiContactRoute,
  ApiExperienceRoute,
  ApiProjectsRoute,
  ApiUsersRoute: ApiUsersRouteWithChildren,
  PostsPostIdRoute,
  PostsIndexRoute,
  PostsPostIdDeepRoute
};
const routeTree = Route$m._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  NotFound as N,
  Route$l as R,
  Route$j as a,
  Route$i as b,
  Route$h as c,
  Route$a as d,
  Route$9 as e,
  Route$3 as f,
  router as r
};
