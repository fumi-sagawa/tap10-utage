import { useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { supabase } from '@/lib/supabaseClient'
import { gameKeyAtom } from '@/store/userInfoStore'
import type { Game } from '@/types/supabase'

export const useResult = () => {
  const router = useRouter()
  // モーダル操作用
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  // 管理画面起点で画面遷移を操作するためのサブスクリプション
  const gameKey = useAtomValue(gameKeyAtom)
  useEffect(() => {
    console.log('サブスクライブ')
    const subscription = supabase
      .from<Game>(`game:key=eq.${gameKey}`)
      .on('*', (payload) => {
        console.log('Change received!', payload.new.finished)
        // TODO
        if (payload.new.finished === true) {
          router.push(`/result/?key=${gameKey}`)
        }
      })
      .subscribe()
    return () => {
      // アンマウント時にsubscriptionを解除
      if (subscription) {
        supabase.removeSubscription(subscription)
      }
    }
  }, [])
  return { isModalVisible, toggleModal }
}
