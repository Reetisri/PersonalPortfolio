import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { profile } from '../data/portfolio.js'

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stats = [
  { icon: '🎓', label: 'B.Tech CSE', value: '2023–2027' },
  { icon: '📍', label: 'Location', value: profile.location },
  { icon: '📊', label: 'CGPA', value: profile.cgpa },
  { icon: '🚀', label: 'Batch', value: '2027' },
  { icon: '🌐', label: 'Open to', value: 'Internships' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About"
        subtitle="Curious builder focused on modern web apps, clean engineering, and learning fast."
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="glass-card p-6 sm:p-7">
          <p className="text-violet-300/90">
            I’m <span className="text-violet-200">{profile.name}</span>, a B.Tech CSE student passionate about{' '}
            <span className="text-violet-200">AI</span>, <span className="text-violet-200">Machine Learning</span>, and building{' '}
            <span className="text-violet-200">full-stack</span> products that feel smooth, accessible, and delightful.
          </p>
          <p className="mt-4 text-violet-300/90">{profile.education}</p>
        </div>

        <motion.div variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((s) => (
              <motion.div key={s.label} variants={item}>
                <TiltCard className="glass-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-lg">
                      <span aria-hidden="true">{s.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-violet-300/80">{s.label}</div>
                      <div className="font-heading text-base font-semibold text-white">{s.value}</div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

