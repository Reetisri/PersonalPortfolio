import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { projects } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ p }) {
  return (
    <TiltCard className="glass-card overflow-hidden p-0">
      <div className="h-1.5 w-full bg-gradient-to-r from-violet-500/80 via-purple-400/70 to-violet-300/70" />
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">{p.title}</h3>
          </div>
          <span className="rounded-full border border-violet-500/30 bg-violet-900/40 px-3 py-1 text-xs font-medium text-violet-200">
            <span className="mr-1" aria-hidden="true">
              {p.status.icon}
            </span>
            {p.status.label}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-violet-300/90">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="glass-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-violet-200"
          >
            View on GitHub <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading title="Projects" subtitle="Selected work — built with performance, UX, and motion in mind." />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p) => (
            <motion.div key={p.title} variants={card}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

