import { useEffect, useState } from 'react'

export const useAnnouncement = () => {
  const [phase, setPhase] = useState(0)
  const plusPhase = () => {
    setPhase((prev) => prev + 1)
  }
  // useEffect(() => {
  //   if (phase === 3) {
  //     return
  //   }
  //   const timer = setTimeout(() => {
  //     console.log(phase)
  //     plusPhase()
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // }, [phase])

  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  const animation = async () => {
    await sleep(2000)
    plusPhase()
    await sleep(2000)
    plusPhase()
    await sleep(4000)
    plusPhase()
    await sleep(3000)
    plusPhase()
    await sleep(2000)
    plusPhase()
    await sleep(6000)
    plusPhase()
  }
  useEffect(() => {
    animation()
  }, [])

  return { phase }
}
