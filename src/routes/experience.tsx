import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Experience } from './api/experience'

export const Route = createFileRoute('/experience')({
  loader: async () => {
    const res = await fetch('/api/experience')
    if (!res.ok) throw new Error('Failed to load projects')
    return (await res.json()) as Experience[]
  },
  component: ExperiencePage,
})

function ExperiencePage() {
  const experiences = Route.useLoaderData()
  return (
    <section className="min-h-screen py-16 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Experience</span>
        </motion.h1>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {exp.role}
                </h2>
                <span className="text-sm text-blue-400 font-medium">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-md text-gray-300 font-medium mb-3">
                {exp.company}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="absolute left-0 top-6 h-10 w-1.5 bg-blue-500 rounded-r-full"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
