import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
function ContactPage() {
  const [contactInfo, setContactInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        setContactInfo(data);
      } catch (err) {
        console.error("Failed to fetch contact info", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("section", { className: "min-h-screen flex items-center justify-center text-white", children: /* @__PURE__ */ jsx("p", { children: "Loading contact info..." }) });
  }
  return /* @__PURE__ */ jsx("section", { className: "min-h-screen py-16 px-6 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs(motion.h1, { className: "text-4xl sm:text-5xl font-bold mb-12 text-center", initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: [
      "Contact ",
      /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "Info" })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { className: "grid gap-6 sm:grid-cols-2", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.8
    }, children: contactInfo.map((info, i) => /* @__PURE__ */ jsxs(motion.a, { href: info.link, target: info.link !== "#" ? "_blank" : void 0, rel: info.link !== "#" ? "noopener noreferrer" : void 0, className: "bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col gap-2", initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.1,
      duration: 0.5
    }, viewport: {
      once: true
    }, children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: info.label }),
      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-lg break-words", children: info.value })
    ] }, info.id)) })
  ] }) });
}
export {
  ContactPage as component
};
