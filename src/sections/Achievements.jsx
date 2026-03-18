import { motion } from 'framer-motion'
import { FaMedal } from 'react-icons/fa'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { achievements, certifications } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Stars() {
  return (
    <div className="mt-2 text-sm">
      <span className="text-amber-300">★★★★★</span>
      <span className="ml-2 text-violet-300/80">5-Star</span>
    </div>
  )
}

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading title="Achievements & Certifications" subtitle="Leadership, consistency, and continuous learning." />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div variants={item}>
            <div className="space-y-4">
              {achievements.map((a) => (
                <TiltCard key={a.title} className="glass-card border-l-4 border-violet-500 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">{a.title}</h3>
                      <div className="mt-1 text-sm text-violet-300/90">{a.meta}</div>
                      {a.accent === 'stars' ? <Stars /> : null}
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15">
                      <FaMedal className="text-violet-200" />
                    </div>
                  </div>
                  <p className="mt-4 text-violet-300/90">{a.detail}</p>
                </TiltCard>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="glass-card p-6 sm:p-7">
              <h3 className="font-heading text-lg font-semibold text-white">Certifications</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {certifications.map((c) => (
                  <TiltCard key={c.title} className="glass-card p-4">
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/15">
                        <span className="text-sm text-violet-200">Logo</span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-heading font-semibold text-white">{c.title}</div>
                        <div className="mt-1 text-sm text-violet-300/90">{c.meta}</div>
                        <div className="mt-2 inline-flex rounded-full border border-violet-500/30 bg-violet-900/40 px-3 py-1 text-xs font-medium text-violet-200">
                          Certified
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

