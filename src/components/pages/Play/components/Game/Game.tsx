import { Button } from '@/components/parts/Button'
import { Spacer } from '@/components/parts/Spacer'

import { Sound } from './components/Sound'
import { TapButton } from './components/TapButton'
import * as styles from './Game.styles'

type GameProps = {
  isPlayng: boolean
  isEnd: boolean
  time: number
  imageSrc: string
  onClickTapButton: () => void
  onClickStart: () => void
  onClickResult: () => void
  onClickToggle: () => void
  isSoundOn: boolean
}

export const Game = (props: GameProps) => {
  return (
    <div css={styles.container}>
      <TapButton
        isPlaying={props.isPlayng}
        isEnd={props.isEnd}
        onClick={props.onClickTapButton}
        imageSrc={props.imageSrc}
      />
      <Spacer margin={24} />
      {!props.isEnd && (
        <p css={styles.time}>
          残り <span>{(props.time / 1000).toFixed(2)}</span>秒
        </p>
      )}
      {!props.isEnd && !props.isPlayng && (
        <>
          <Spacer margin={24} />
          <div css={styles.uiContainer}>
            <Button
              onClick={props.onClickStart}
              text={'スタート！'}
              type={'button'}
            />

            <Sound onClick={props.onClickToggle} isOn={props.isSoundOn} />
            <p css={styles.caution}>※ ONにするとタップ時に音がなります</p>
          </div>
        </>
      )}
      {props.isEnd && (
        <>
          <p css={styles.timeUp}>TIME UP!!</p>
          <Spacer margin={32} />
          <div css={styles.uiContainer}>
            <Button
              onClick={props.onClickResult}
              text={'結果を見る'}
              type={'button'}
            />
          </div>
        </>
      )}
    </div>
  )
}
