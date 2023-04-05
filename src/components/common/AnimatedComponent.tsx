import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface AnimatedComponentProps {
  children: React.ReactNode
  className?: string
  triggerOnce?: boolean
  threshold?: number
  delay?: number
  duration?: number
  easing?: string
  initial?: string
  animate?: string
  exit?: string
}

const AnimatedComponent = ({
  children,
  className,
  triggerOnce = true,
  threshold = 0.5,
  delay = 0,
  duration = 0.5,
  easing = "easeInOut",
  initial = "hidden",
  animate = "visible",
  exit = "hidden",
  ...props
}: AnimatedComponentProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  }

  React.useEffect(() => {
    if (inView) {
      controls.start(animate)
    }
    if (!inView) {
      controls.start(exit)
    }
  }, [controls, inView, animate, exit])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={controls}
      exit={exit}
      variants={fadeInUp}
      transition={{ delay, duration, ease: easing }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedComponent
