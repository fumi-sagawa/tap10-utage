import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/parts/Button'

import { Sound } from './components/Sound'
import { TapButton } from './components/TapButton'
import * as styles from './Play.styles'
import { usePlay } from './usePlay'

export const Play = () => {
  const router = useRouter()
  const imagePaths = [
    'sample1.jpg',
    'sample2.jpg',
    'sample3.jpg',
    'sample4.jpg',
    'sample5.jpg',
  ]
  const {
    handleClickTapButton,
    startGame,
    isPlayng,
    tapCount,
    userNumber,
    time,
    timeLimit,
    isSoundOn,
    toggleSound,
    userInfo,
    isEnd,
  } = usePlay(imagePaths.length)
  return (
    <div>
      <h1 css={styles.title}>TAM30周年記念ゲームアプリ タップバトル</h1>
      <p>
        {userInfo.team} {userInfo.name} さんの挑戦
      </p>
      <div>
        <p>{timeLimit / 1000}秒で何回タップできるか？</p>
        <TapButton
          isPlaying={isPlayng}
          onClick={handleClickTapButton}
          tapCount={tapCount}
        />
        {/* <Image
        src={imagePaths[userNumber] as string}
        alt="TAMメンバーの素敵な写真"
        objectFit={'cover'}
        height={100}
        width={100}
      /> */}
        <p>
          残り時間 <span id="js-time">{(time / 1000).toFixed(2)}</span> 秒
        </p>
        {isEnd && (
          <>
            <p>TIME UP!</p>
            <Button
              onClick={() => {
                router.push('result')
              }}
              text={'結果を見る'}
              type={'button'}
            />
          </>
        )}
        {!isEnd && !isPlayng && (
          <>
            <Button onClick={startGame} text={'START'} type={'button'} />
            <Sound onClick={toggleSound} isOn={isSoundOn} />
          </>
        )}
      </div>
    </div>
  )
}
