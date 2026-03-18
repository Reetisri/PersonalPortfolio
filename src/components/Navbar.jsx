import { useMemo, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function NavLink({ to, label, active, setActive, onClick }) {
  return (
    <ScrollLink
      to={to}
      spy
      smooth
      duration={500}
      offset={-88}
      onSetActive={() => setActive(to)}
      onClick={onClick}
      className={`group relative cursor-pointer px-3 py-2 text-sm font-medium transition-colors ${
        active ? 'text-white' : 'text-violet-200/90 hover:text-white'
      }`}
    >
      <>
        <span className={active ? 'drop-shadow-[0_0_14px_rgba(139,92,246,0.55)]' : ''}>{label}</span>
        <span className="absolute inset-x-3 -bottom-0.5 h-px overflow-hidden">
          <motion.span
            layout
            className="block h-px w-full bg-gradient-to-r from-violet-500 to-violet-300"
            initial={false}
            animate={{ x: active ? 0 : '-110%' }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
          />
        </span>
      </>
    </ScrollLink>
  )
}

export default function Navbar() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const containerClass = useMemo(
    () =>
      'fixed left-0 right-0 top-0 z-40 border-b border-violet-600/30 bg-[rgba(10,10,15,0.8)] backdrop-blur-[20px]',
    [],
  )

  return (
    <header className={containerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <ScrollLink to="hero" smooth duration={500} offset={-88} className="cursor-pointer">
            <div className="glass-card rounded-full px-3 py-1.5">
              <span className="font-heading text-sm font-semibold tracking-wide text-white drop-shadow-[0_0_16px_rgba(139,92,246,0.55)]">
                RS
              </span>
            </div>
          </ScrollLink>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.id} label={item.label} active={active === item.id} setActive={setActive} />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="glass-card grid h-10 w-10 place-items-center rounded-xl md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.div initial={false} animate={open ? 'open' : 'closed'} className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-full rounded bg-violet-200"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-violet-200"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-full rounded bg-violet-200"
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="glass-card overflow-hidden rounded-2xl p-2">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.id}
                      label={item.label}
                      active={active === item.id}
                      setActive={setActive}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

