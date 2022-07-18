import Image from 'next/image'

import { Button } from '@/components/parts/Button'

import { Sound } from './components/Sound'
import { TapButton } from './components/TapButton'
import * as styles from './Game.styles'

type GameProps = {
  isPlayng: boolean
  isEnd: boolean
  time: number
  timeLimit: number
  imageSrc: string
  onClickTapButton: () => void
  tapCount: number
  onClickStart: () => void
  onClickResult: () => void
  onClickToggle: () => void
  isSoundOn: boolean
}

export const Game = (props: GameProps) => {
  return (
    <div css={styles.container}>
      <p>{props.timeLimit / 1000}秒で何回タップできるか？</p>
      <TapButton
        isPlaying={props.isPlayng}
        isEnd={props.isEnd}
        onClick={props.onClickTapButton}
        tapCount={props.tapCount}
        imageSrc={props.imageSrc}
      />
      {/* <Image
        src={props.imageSrc}
        alt="TAMメンバーの素敵な写真"
        objectFit={'cover'}
        height={100}
        width={100}
      /> */}

      <p>
        残り時間 <span id="js-time">{(props.time / 1000).toFixed(2)}</span> 秒
      </p>
      {!props.isEnd && !props.isPlayng && (
        <div>
          <Button onClick={props.onClickStart} text={'START'} type={'button'} />
          <Sound onClick={props.onClickToggle} isOn={props.isSoundOn} />
        </div>
      )}
      {props.isEnd && (
        <div>
          <p>TIME UP!</p>
          <Button
            onClick={props.onClickResult}
            text={'結果を見る'}
            type={'button'}
          />
        </div>
      )}
    </div>
  )
}
