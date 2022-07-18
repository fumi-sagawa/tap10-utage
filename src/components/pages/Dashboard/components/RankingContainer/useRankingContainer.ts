import { useRouter } from 'next/router'
import { useState } from 'react'

import { supabase } from '@/lib/supabaseClient'
import type { Entry, Game } from '@/types/supabase'

export const useRankingContainer = (gameKey: string) => {
  const [isResultVisible, setIsResulVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [notPlayedUserLength, setNotPlayedUserLength] = useState<number>()
  const router = useRouter()

  const openModal = async () => {
    //エントリーの取得
    const { data, error } = await supabase
      .from<Entry>('entry')
      .select('*')
      .filter('game_key', 'eq', gameKey)
      .filter('played', 'eq', false)
    if (error) {
      throw error
    }
    if (data) {
      setNotPlayedUserLength(data.length)
    }
    setIsModalVisible(true)
  }
  const closeModal = () => {
    setIsModalVisible(false)
  }

  const handleClickFinishGame = async () => {
    const { data, error } = await supabase
      .from<Game>('game')
      .update({
        finished: true,
      })
      .eq('key', gameKey)
    if (error) {
      // TODO:エラーページに飛ばそうかな
      throw error
    }
    if (data) {
      console.log(data)
      closeModal()
      setIsResulVisible(true)
    }
  }

  const handleClickRestart = () => {
    router.push('/')
  }

  return {
    isResultVisible,
    openModal,
    closeModal,
    isModalVisible,
    notPlayedUserLength,
    handleClickFinishGame,
    handleClickRestart,
  }
}
