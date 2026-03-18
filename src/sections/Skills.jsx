import { motion } from 'framer-motion'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { skills } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillGroup({ title, items }) {
  return (
    <TiltCard className="glass-card p-6 sm:p-7">
      <div className="mb-4">
        <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="glass-pill">
            {s}
          </span>
        ))}
      </div>
    </TiltCard>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" subtitle="A toolkit for building, shipping, and learning." />

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid gap-5 lg:grid-cols-2">
          <motion.div variants={card}>
            <SkillGroup title="Languages" items={skills.languages} />
          </motion.div>
          <motion.div variants={card}>
            <SkillGroup title="Frameworks & Libraries" items={skills.frameworks} />
          </motion.div>
          <motion.div variants={card}>
            <SkillGroup title="Tools & Platforms" items={skills.tools} />
          </motion.div>
          <motion.div variants={card}>
            <SkillGroup title="Spoken Languages" items={skills.spoken} />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

