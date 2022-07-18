import Image from 'next/image'
import { relative } from 'path'

import * as styles from './TapButton.styles'

type TapButtonProps = {
  isPlaying: boolean
  isEnd: boolean
  onClick: () => void
  tapCount: number
  imageSrc: string
}

export const TapButton = (props: TapButtonProps) => {
  return (
    <div>
      {props.isPlaying || props.isEnd ? (
        <button
          onClick={props.onClick}
          disabled={!props.isPlaying}
          css={styles.imageButton}
        >
          <Image
            src={props.imageSrc}
            alt="TAMメンバーの素敵な写真"
            layout={'fill'}
            objectFit={'cover'}
          />
        </button>
      ) : (
        <button
          onClick={props.onClick}
          css={styles.button}
          disabled={!props.isPlaying}
        >
          <span css={styles.buttonText}>0</span>
          <span> タップ</span>
        </button>
      )}
    </div>
  )
}
