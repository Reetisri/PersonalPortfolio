import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function Starfield() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const options = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const count = isMobile ? 60 : 120

    return {
      fullScreen: { enable: true, zIndex: -10 },
      detectRetina: true,
      fpsLimit: 60,
      background: { color: 'transparent' },
      particles: {
        number: { value: count, density: { enable: true, area: 900 } },
        color: { value: ['#FFFFFF', '#C4B5FD'] },
        opacity: { value: { min: 0.4, max: 0.7 } },
        size: { value: { min: 1, max: 2.5 } },
        move: {
          enable: true,
          speed: 0.35,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        links: {
          enable: true,
          distance: 120,
          color: 'rgba(167, 139, 250, 0.15)',
          opacity: 1,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
    }
  }, [])

  return <Particles id="tsparticles" init={particlesInit} options={options} />
}

