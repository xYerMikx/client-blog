import { useEffect, useRef, useState } from "react"

type ReturnType = [(element: Element | null) => void, IntersectionObserverEntry | null]

interface Options extends IntersectionObserverInit {
  executeOnce?: boolean
}

function useIntersectionObserver({
  root = null,
  rootMargin = "0%",
  threshold = 0,
  executeOnce = false,
}: Options): ReturnType {
  const [ref, setRef] = useState<Element | null>(null)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const hasExecuted = useRef(false)

  const thresholdString = JSON.stringify(threshold)
  useEffect(() => {
    if (!ref || !window.IntersectionObserver || (executeOnce && hasExecuted.current)) {
      return
    }

    const observer = new IntersectionObserver(
      ([obserserEntry]) => {
        setEntry(obserserEntry)

        if (obserserEntry.isIntersecting && executeOnce) {
          observer.disconnect()
          hasExecuted.current = true
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [root, rootMargin, thresholdString, ref, executeOnce, entry, threshold])

  return [setRef, entry]
}

export default useIntersectionObserver
