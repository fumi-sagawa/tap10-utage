import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import Snd from 'snd-lib'

import { supabase } from '@/lib/supabaseClient'
import { userIdAtom, userInfoAtom, userTeamJpAtom } from '@/store/userInfoStore'
import type { Entry } from '@/types/supabase'

export const usePlay = (userLength: number) => {
  //制限時間
  const timeLimit = 20000

  const [isPlayng, setIsPlaying] = useState<boolean>(false)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [pageStae, setPageState] = useState<'playng' | 'result'>('playng')
  const [tapCount, setTapCount] = useState<number>(0)
  const [userNumber, setUserNumber] = useState<number>(0)
  const [time, setTime] = useState<number>(timeLimit)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [soundNumber, setSoundNumber] = useState(0)
  const userInfo = useAtomValue(userInfoAtom)
  const userTeamJp = useAtomValue(userTeamJpAtom)
  const [snd, setSnd] = useState<Snd>()
  const userId = useAtomValue(userIdAtom)

  //TODO:画像プリロードする

  // ゲームの初期値設定
  const initializeGame = () => {
    setTapCount(0)
    setTime(timeLimit)
  }

  const randamRange = (max: number) => Math.floor(Math.random() * max)
  const changeImage = () => {
    setUserNumber(randamRange(userLength))
  }

  const playSound = (soundNumber: number) => {
    if (soundNumber === 1) {
      snd?.playButton()
    }
    if (soundNumber === 2) {
      snd?.playNotification()
    }
    if (soundNumber === 3) {
      snd?.playSwipe()
    }
    if (soundNumber === 4) {
      snd?.playTap()
    }
    if (soundNumber === 5) {
      snd?.playToggleOn()
    }
  }

  const handleClickTapButton = () => {
    setTapCount((count) => count + 1)
    changeImage()
    if (isSoundOn) {
      if (tapCount === 29) {
        snd?.playCelebration()
      }
      playSound(soundNumber)
    }
  }

  const startGame = () => {
    initializeGame()
    setIsPlaying(true)
    setIsEnd(false)
  }

  const handleClickResult = async () => {
    const { data, error } = await supabase.from<Entry>('entry').upsert({
      id: userId,
      tap_count: tapCount,
      played: true,
    })
    if (data) {
      setPageState('result')
    }
    if (error) {
      alert('エラーが発生しました…🙇‍♂️再度結果を見るボタンを押してください！')
      // throw error
    }
  }

  //カウンター
  const deltaTime = 10
  useEffect(() => {
    if (!isPlayng) {
      return
    }
    const timer = setTimeout(() => {
      if (time === 0) {
        clearInterval(timer)
        setIsPlaying(false)
        setIsEnd(true)
        return
      }
      setTime((time) => time - deltaTime)
    }, deltaTime)
    return () => clearTimeout(timer)
  }, [isPlayng, time])

  //サウンド
  useEffect(() => {
    setSnd(new Snd())
    changeImage()
  }, [])
  useEffect(() => {
    snd?.load(Snd.KITS.SND01)
  }, [snd])

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn)
    if (isSoundOn) {
      return
    }
    //toggleをオンにする際のロジック
    if (soundNumber === 5) {
      setSoundNumber(1)
      return
    }
    setSoundNumber((prev) => prev + 1)
  }

  useEffect(() => {
    if (!isSoundOn) {
      return
    }
    playSound(soundNumber)
    console.log(soundNumber)
  }, [soundNumber])

  return {
    handleClickTapButton,
    startGame,
    isPlayng,
    tapCount,
    userNumber,
    time,
    timeLimit,
    handleClickResult,
    pageStae,
    isSoundOn,
    toggleSound,
    userInfo,
    userTeamJp,
    isEnd,
  }
}
