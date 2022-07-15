import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import Snd from 'snd-lib'

import { userInfoAtom } from '@/store/userInfoStore'

export const usePlay = (userLength: number) => {
  //制限時間
  const timeLimit = 5000

  const [isPlayng, setIsPlaying] = useState<boolean>(false)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const [pageStae, setPageState] = useState<'playng' | 'result'>('playng')
  const [tapCount, setTapCount] = useState<number>(0)
  const [userNumber, setUserNumber] = useState<number>(0)
  const [time, setTime] = useState<number>(timeLimit)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [userInfo, _] = useAtom(userInfoAtom)
  const [snd, setSnd] = useState<Snd>()

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

  const handleClickTapButton = () => {
    setTapCount((count) => count + 1)
    changeImage()
    if (isSoundOn) {
      snd?.playButton()
    }
  }

  const startGame = () => {
    initializeGame()
    setIsPlaying(true)
    setIsEnd(false)
  }

  const handleClickResult = () => {
    setPageState('result')
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
  }, [])
  useEffect(() => {
    snd?.load(Snd.KITS.SND01)
  }, [snd])

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn)
  }

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
    isEnd,
  }
}
