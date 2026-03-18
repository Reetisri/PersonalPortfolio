import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import Container from '../components/Container.jsx'
import { profile, roles } from '../data/portfolio.js'
import { Link as ScrollLink } from 'react-scroll'

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const heroItem = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group glass-card grid h-11 w-11 place-items-center rounded-full"
    >
      <span className="text-violet-200 transition-colors group-hover:text-white">{children}</span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] pt-20 sm:pt-24">
      <Container className="flex items-start pt-6 sm:pt-10">
        <motion.div variants={heroStagger} initial="hidden" animate="show" className="mx-auto w-full max-w-3xl text-center">
          <motion.div variants={heroItem} className="mx-auto mb-7">
            <div className="avatar-ring mx-auto w-fit">
              <div className="avatar-inner h-40 w-40 sm:h-56 sm:w-56">
                <img
                  src="/profile.png"
                  alt={profile.name}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={heroItem} className="font-heading text-4xl font-bold sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-violet-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.div variants={heroItem} className="mt-5 text-lg text-violet-200/90 sm:text-xl">
            <TypeAnimation
              sequence={roles.flatMap((r) => [r, 1600])}
              wrapper="span"
              speed={56}
              repeat={Infinity}
              cursor
              style={{ display: 'inline-block' }}
            />
          </motion.div>

          <motion.p variants={heroItem} className="mx-auto mt-6 max-w-2xl text-violet-300/90">
            Building modern, animated web experiences with a love for <span className="text-violet-200">AI</span>,{' '}
            <span className="text-violet-200">Machine Learning</span>, and clean <span className="text-violet-200">full-stack</span>{' '}
            engineering.
          </motion.p>

          <motion.div variants={heroItem} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-88}
              className="cursor-pointer rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-[0_0_22px_rgba(139,92,246,0.35)] transition hover:bg-violet-500"
            >
              View Projects
            </ScrollLink>
            <a
              href="/resume.pdf"
              download
              className="glass-card rounded-xl border border-violet-500/60 px-6 py-3 font-medium text-violet-200 hover:bg-violet-500/20"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex items-center justify-center gap-3">
            <SocialIcon href={profile.github} label="GitHub">
              <FaGithub className="text-lg" />
            </SocialIcon>
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <FaLinkedinIn className="text-lg" />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <HiOutlineMail className="text-xl" />
            </SocialIcon>
            <SocialIcon href={`tel:${profile.phone}`} label="Phone">
              <HiOutlinePhone className="text-xl" />
            </SocialIcon>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

