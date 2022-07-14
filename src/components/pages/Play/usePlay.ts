import { useCallback, useEffect, useState } from 'react'
import Snd from 'snd-lib'

export const usePlay = (userLength: number) => {
  const [isPlayng, setIsPlaying] = useState<boolean>(false)
  const [tapCount, setTapCount] = useState<number>(0)
  const [userNumber, setUserNumber] = useState<number>(0)
  const [time, setTime] = useState<number>(0)
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [snd, setSnd] = useState<Snd>()

  //TODO:画像プリロードする

  // ゲームの初期値設定
  const timeLimit = 5000
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
    snd?.load(Snd.KITS.SND01 as string)
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
    isSoundOn,
    toggleSound,
  }
}
