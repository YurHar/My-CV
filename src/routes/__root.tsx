/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'
import { Menu, X } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Yuri Harutyunyan | Frontend Engineer',
        description:
          'Portfolio of Yuri Harutyunyan — Senior Front-End Developer skilled in React, Next.js, and modern TypeScript.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg' },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const lastMatch = router.state.matches.at(-1)
  const isNotFound = lastMatch?.routeId === '__notFound__' as any

  return (
    <html lang="en" className="h-full text-gray-100">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {!isNotFound && <Header />}
        <main className="flex-1 w-full">{children}</main>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}

/* --------------------------- Header --------------------------- */
function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-800/80 backdrop-blur border-b border-slate-700">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-wide text-white hover:text-blue-400 transition"
        >
          <img
            src="/logo.svg"
            alt="Yuri.dev"
            className="w-[170px] h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-10 text-white text-sm lg:text-base">
          <NavLink to="/" label="Home" exact />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/experience" label="Experience" />
          <NavLink to="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded hover:bg-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-lg">
          <div className="flex flex-col items-center space-y-4 px-6 py-5 text-white text-base">
            <NavLink to="/" label="Home" exact onClick={() => setIsOpen(false)} />
            <NavLink
              to="/projects"
              label="Projects"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/experience"
              label="Experience"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/contact"
              label="Contact"
              onClick={() => setIsOpen(false)}
            />
            <div className="flex gap-4 mt-4">
              <SocialLink href="https://github.com" icon={<GithubIcon />} />
              <SocialLink href="https://linkedin.com" icon={<LinkedinIcon />} />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* --------------------------- Helper Components --------------------------- */

function NavLink({
  to,
  label,
  exact = false,
  onClick,
}: {
  to: string
  label: string
  exact?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      activeProps={{
        className: 'text-blue-400 font-semibold',
      }}
      onClick={onClick}
      className="hover:text-blue-300 transition text-white"
    >
      {label}
    </Link>
  )
}

function SocialLink({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full hover:bg-blue-600/20 transition text-white"
    >
      {icon}
    </a>
  )
}

/* --------------------------- Icons --------------------------- */

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-white hover:text-blue-400 transition"
    >
      <path d="M12 .5C5.648.5.5 5.647.5 12c0 5.094 3.292 9.408 7.865 10.938.575.105.785-.25.785-.553 0-.272-.01-1.163-.016-2.108-3.198.695-3.875-1.54-3.875-1.54-.523-1.33-1.277-1.685-1.277-1.685-1.045-.715.08-.7.08-.7 1.156.082 1.764 1.188 1.764 1.188 1.027 1.758 2.695 1.25 3.352.957.104-.744.402-1.25.732-1.538-2.552-.29-5.237-1.277-5.237-5.68 0-1.255.449-2.283 1.186-3.09-.118-.29-.514-1.46.112-3.045 0 0 .964-.31 3.16 1.18a10.977 10.977 0 0 1 2.88-.388c.978.005 1.962.132 2.88.388 2.194-1.49 3.157-1.18 3.157-1.18.628 1.585.232 2.755.114 3.045.738.807 1.184 1.835 1.184 3.09 0 4.415-2.689 5.387-5.254 5.672.414.358.783 1.063.783 2.143 0 1.547-.014 2.792-.014 3.17 0 .307.207.665.792.552C20.71 21.405 24 17.09 24 12c0-6.353-5.147-11.5-12-11.5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-white hover:text-blue-400 transition"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.9-2.88 4V24h-4V8z" />
    </svg>
  )
}
