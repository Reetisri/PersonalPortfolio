import Tilt from 'react-parallax-tilt'
import { useIsTouchDevice } from '../hooks/useIsTouchDevice.js'

export default function TiltCard({ className = '', tiltOnMobile = false, children }) {
  const isTouch = useIsTouchDevice()

  const enableTilt = !isTouch || tiltOnMobile

  if (!enableTilt) {
    return <div className={className}>{children}</div>
  }

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.15}
      glareColor="#8B5CF6"
      scale={1.03}
      gyroscope={isTouch}
      className={className}
    >
      {children}
    </Tilt>
  )
}

