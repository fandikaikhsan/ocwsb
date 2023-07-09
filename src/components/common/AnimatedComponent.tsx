"use client"

import React, { useEffect, useRef, useState, ReactNode } from "react"
import { motion, Variants } from "framer-motion"

interface AnimatedComponentProps {
  children: ReactNode
}

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedComponent
