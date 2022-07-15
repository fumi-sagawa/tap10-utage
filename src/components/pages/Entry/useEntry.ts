import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useTeamSelectOption } from '@/hooks/useTeamSelectOption'
import { supabase } from '@/lib/supabaseClient'
import { userIdAtom, userInfoAtom } from '@/store/userInfoStore'
import type { Entry } from '@/types/supabase'

export type UserInfo = {
  name: string
  team: string
}

export const useEntry = () => {
  const { loading, selectOptions } = useTeamSelectOption()
  const router = useRouter()

  //ユーザー情報
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [_, setUserId] = useAtom(userIdAtom)
  const [teamName, setTeamName] = useState('')

  const handleSetUserInfo = (user: { name: string; team: string }) => {
    setUserInfo(user)
    setTeamName(
      selectOptions.filter((item) => item.value === user.team)[0]
        ?.label as string
    )
  }

  const handleEntry = async () => {
    const { data, error } = await supabase.from<Entry>('entry').insert({
      full_name: userInfo.name,
      team: userInfo.team,
      game_key: router.query.key as string,
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

  //ページ操作
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
    teamName,
    loading,
    selectOptions,
  }
}
