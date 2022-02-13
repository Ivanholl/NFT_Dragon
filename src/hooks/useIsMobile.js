import { useState, useEffect } from 'react'


const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => setWidth(window.innerWidth)
  const isMobile = width <= 768

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return isMobile
}

export default useIsMobile
