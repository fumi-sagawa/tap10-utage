import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { supabase } from '@/lib/supabaseClient'
import type { Game } from '@/types/supabase'

export const useCreate = () => {
  const router = useRouter()
  const [pageState, setPageState] = useState<'create' | 'share'>('create')
  const [shareUrl, setShareUrl] = useState('')
  const [gameKey, setGameKey] = useState('')

  useEffect(() => {
    setGameKey(uuidv4())
  }, [])

  const handleClickCreate = async () => {
    //supabaseでgameを作成
    const { data, error } = await supabase.from<Game>('game').insert({
      finished: false,
      key: gameKey,
    })
    if (error) {
      // TODO:エラーページに飛ばそうかな
      throw error
    }
    if (data) {
      setShareUrl(`${process.env.NEXT_PUBLIC_URL}/entry?key=${gameKey}`)
      setPageState('share')
    }
  }
  const handleClickAdmin = () => {
    router.push(`/dashboard/?key=${gameKey}`)
  }
  return { handleClickCreate, pageState, shareUrl, handleClickAdmin }
}
