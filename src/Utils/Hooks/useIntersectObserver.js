import { useState, useEffect } from 'react'

const useIntersectObserver = (intersectRef, optionsObject) => {
  const { root = null, rootMargin = '0px', threshold } = optionsObject

  const [isVisible, setIsVisible] = useState(false)

  const handleIntersect = (entries) => {
    const target = entries[0]

    if (target.isIntersecting) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold,
    })
    if (intersectRef.current) observer.observe(intersectRef.current)
    return () => observer.disconnect()
  }, [intersectRef, root, rootMargin, threshold])
  return {
    isVisible,
  }
}

export default useIntersectObserver
