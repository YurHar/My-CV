import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[95vh] text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Floating background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 404 Text Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[6rem] sm:text-[8rem] font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-md text-gray-400 text-lg mb-8"
      >
        {children || 'Oops! The page you’re looking for does not exist or has been moved.'}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 active:scale-95 shadow-lg"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <Link
          to="/"
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:-translate-y-1 active:scale-95 shadow-lg"
        >
          <Home size={18} />
          Start Over
        </Link>
      </motion.div>
    </div>
  )
}
