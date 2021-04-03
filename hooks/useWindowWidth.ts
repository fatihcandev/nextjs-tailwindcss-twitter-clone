import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWidth] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleWindowWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowWidth)
    return () => {
      window.removeEventListener('resize', handleWindowWidth)
    }
  }, [])

  return { windowWidth }
}
export default useWindowWidth
