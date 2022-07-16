import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useTeamSelectOption } from '@/hooks/useTeamSelectOption'
import { supabase } from '@/lib/supabaseClient'
import {
  gameKeyAtom,
  userIdAtom,
  userInfoAtom,
  userTeamJpAtom,
} from '@/store/userInfoStore'
import type { Entry } from '@/types/supabase'

export type UserInfo = {
  name: string
  team: string
}

export const useEntry = () => {
  const { loading, selectOptions } = useTeamSelectOption()
  const router = useRouter()

  /* 
  Entry表示時gemeのユニークkey取得
  */
  const [gameKey, setGameKey] = useAtom(gameKeyAtom)
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

  /* 
  ユーザー情報
  */
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [_, setUserId] = useAtom(userIdAtom)
  const [teamNameJp, setTeamNameJp] = useAtom(userTeamJpAtom)

  const handleSetUserInfo = (user: { name: string; team: string }) => {
    setUserInfo(user)
    setTeamNameJp(
      selectOptions.filter((item) => item.value === user.team)[0]
        ?.label as string
    )
  }

  const handleEntry = async () => {
    const { data, error } = await supabase.from<Entry>('entry').insert({
      full_name: userInfo.name,
      team: userInfo.team,
      game_key: gameKey,
    })
    if (error) {
      throw error
    }
    if (data) {
      //ゲームが終了した段階でUpsertする際のユニークキーを入手
      setUserId(data[0].id)
      router.push('/play')
    }
  }

  /* 
  ページ操作
  */
  const [pageState, setPageState] = useState<'input' | 'confirmation'>('input')
  const backToInput = () => {
    setPageState('input')
  }
  const goToComfirmation = () => {
    setPageState('confirmation')
  }

  return {
    pageState,
    goToComfirmation,
    backToInput,
    handleEntry,
    handleSetUserInfo,
    setUserInfo,
    userInfo,
    teamNameJp,
    loading,
    selectOptions,
  }
}
