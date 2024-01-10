import cn from "classnames"

import useIntersectionObserver from "@/hooks/useIntersectionObserver"

import styles from "./aos.module.scss"

interface AnimateOnScrollProps {
  children: React.ReactNode
  mode?: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop"
  delay?: number
}

export function AnimateOnScroll({
  children,
  mode = "rightToLeft",
  delay,
}: AnimateOnScrollProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.15,
    executeOnce: true,
  })

  const addInitial = !entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={cn(
        styles.animatable,
        addInitial
          ? `${styles.animatable__initial} ${styles[`animatable__initial__${mode}`]}`
          : "",
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
