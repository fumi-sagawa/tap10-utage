import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useTeamSelectOption } from '@/hooks/useTeamSelectOption'
import { userInfoAtom } from '@/store/userInfoStore'

export type UserInfo = {
  name: string
  team: string
}

export const useEntry = () => {
  const { loading, selectOptions } = useTeamSelectOption()
  const router = useRouter()

  //ユーザー情報
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)
  const [teamName, setTeamName] = useState('')

  const handleSetUserInfo = (user: { name: string; team: string }) => {
    setUserInfo(user)
    setTeamName(
      selectOptions.filter((item) => item.value === user.team)[0]
        ?.label as string
    )
  }

  const handleEntry = () => {
    //TODO:supabaseに登録
    router.push('/play')
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
