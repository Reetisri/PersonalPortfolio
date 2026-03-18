import { motion } from 'framer-motion'
import Container from './Container.jsx'

const sectionVariants = {
  hidden: { x: -80, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <Container>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {children}
        </motion.div>
      </Container>
    </section>
  )
}

