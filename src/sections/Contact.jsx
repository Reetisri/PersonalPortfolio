import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import TiltCard from '../components/TiltCard.jsx'
import { profile } from '../data/portfolio.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ContactCard({ href, title, subtitle, icon }) {
  return (
    <TiltCard className="glass-card p-5">
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className="group flex items-center gap-4"
      >
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-200 transition group-hover:text-white">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-heading font-semibold text-white">{title}</div>
          <div className="mt-0.5 truncate text-sm text-violet-300/90">{subtitle}</div>
        </div>
      </a>
    </TiltCard>
  )
}

export default function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <SectionHeading title="Let's Connect" subtitle="Open to internships, collaborations, and interesting projects." />

      <div className="glass-card p-6 sm:p-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div variants={item}>
              <ContactCard href={`mailto:${profile.email}`} title="Email" subtitle={profile.email} icon={<HiOutlineMail className="text-2xl" />} />
            </motion.div>
            <motion.div variants={item}>
              <ContactCard href={profile.linkedin} title="LinkedIn" subtitle="linkedin.com/in/reeti…" icon={<FaLinkedinIn className="text-xl" />} />
            </motion.div>
            <motion.div variants={item}>
              <ContactCard href={profile.github} title="GitHub" subtitle="github.com/reetisri" icon={<FaGithub className="text-xl" />} />
            </motion.div>
            <motion.div variants={item}>
              <ContactCard href={`tel:${profile.phone}`} title="Phone" subtitle={profile.phone} icon={<HiOutlinePhone className="text-2xl" />} />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-10 text-center text-sm text-violet-300/80">
          Designed &amp; Built by <span className="text-violet-200">{profile.name}</span>
        </div>
      </div>
    </Section>
  )
}

