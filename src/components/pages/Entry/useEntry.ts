import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { userInfoAtom } from '@/store/userInfoStore'

export type UserInfo = {
  name: string
  team: string
}

export const useEntry = () => {
  const router = useRouter()
  //ユーザー情報
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

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
    setUserInfo,
    userInfo,
  }
}
