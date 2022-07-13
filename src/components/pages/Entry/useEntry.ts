import { useState } from 'react'

export type UserInfo = {
  name: string
  team: string
}

export const useEntry = () => {
  //ユーザー情報
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', team: '' })
  const handleEntry = () => {
    //TODO:supabaseに登録
    console.log('entry!')
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
