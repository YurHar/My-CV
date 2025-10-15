import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
function Home() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zustand", "REST API", "Git"];
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900", children: [
    /* @__PURE__ */ jsx(motion.div, { className: "absolute w-72 h-72 bg-blue-600/10 rounded-full blur-3xl top-10 left-20", animate: {
      y: [0, 40, 0]
    }, transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsx(motion.div, { className: "absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl bottom-10 right-20", animate: {
      y: [0, -30, 0]
    }, transition: {
      repeat: Infinity,
      duration: 7,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: -30
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.8
    }, className: "text-center z-10", children: [
      /* @__PURE__ */ jsx(motion.img, { src: "https://media.licdn.com/dms/image/v2/D4E03AQH1cNK6xTHJ0Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668925813651?e=1763596800&v=beta&t=qNRoP-jSKzFYRXq8p9btwO0fUfQO523itpg16emwf04", alt: "Profile", className: "w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg", animate: {
        y: [0, -10, 0]
      }, transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      } }),
      /* @__PURE__ */ jsx(motion.h1, { className: "text-4xl font-bold mb-1", initial: {
        scale: 0.9
      }, animate: {
        scale: 1
      }, transition: {
        duration: 0.6
      }, children: "Yuri Harutyunyan" }),
      /* @__PURE__ */ jsx(motion.p, { className: "text-blue-400 mb-6 text-lg", initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.3,
        duration: 0.8
      }, children: "Front-End Developer" }),
      /* @__PURE__ */ jsx(motion.div, { className: "flex justify-center gap-6 mb-8", initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.5,
        duration: 0.8
      }, children: [{
        icon: Github,
        href: "https://github.com/YurHar?tab=repositories"
      }, {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/yuri-harutyunyan/"
      }, {
        icon: Mail,
        href: "mailto:yuri.harutyunyan.a@gmail.com"
      }].map(({
        icon: Icon,
        href
      }) => /* @__PURE__ */ jsx(motion.a, { href, target: "_blank", rel: "noreferrer", className: "hover:text-blue-400 transition", whileHover: {
        scale: 1.2,
        rotate: 5
      }, whileTap: {
        scale: 0.9
      }, children: /* @__PURE__ */ jsx(Icon, { size: 28 }) }, href)) })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.8,
      duration: 0.8
    }, className: "max-w-2xl text-center mb-12 z-10", children: /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "Passionate about creating high-performance, responsive web apps using React, Next.js, and TypeScript. I love transforming design ideas into elegant and interactive user interfaces." }) }),
    /* @__PURE__ */ jsx(motion.div, { initial: "hidden", animate: "visible", variants: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }, className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10", children: skills.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: {
      hidden: {
        opacity: 0,
        y: 20
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }, whileHover: {
      scale: 1.1,
      backgroundColor: "#2563eb"
    }, whileTap: {
      scale: 0.95
    }, className: "bg-slate-800 rounded-xl py-3 px-5 text-center shadow-md cursor-pointer transition", children: skill }, skill)) })
  ] });
}
export {
  Home as component
};
