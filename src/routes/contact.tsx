import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

interface ContactInfo {
  id: number | string;
  label: string;
  value: string;
  link: string;
}

function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("/api/contact");
        const data: ContactInfo[] = await res.json();
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
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <p>Loading contact info...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-400">Info</span>
        </motion.h1>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.id}
              href={info.link}
              target={info.link !== "#" ? "_blank" : undefined}
              rel={info.link !== "#" ? "noopener noreferrer" : undefined}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400 text-sm">{info.label}</span>
              <span className="text-white font-semibold text-lg break-words">{info.value}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
