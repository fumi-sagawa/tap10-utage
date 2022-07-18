import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useDashboard = () => {
  const [gameKey, setGameKey] = useState('')
  const router = useRouter()
  useEffect(() => {
    //型ガード
    if (typeof router.query.key !== 'string') {
      // TODO:エラーページに飛ばそうかな
      return
    }
    if (router.isReady) {
      setGameKey(router.query.key)
    }
  }, [router.isReady, router.query.key, setGameKey])

  return { gameKey }
}
