import * as styles from './TapButton.styles'

type TapButtonProps = {
  isPlaying: boolean
  onClick: () => void
  tapCount: number
}

export const TapButton = (props: TapButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      css={styles.button}
      disabled={!props.isPlaying}
    >
      <span css={styles.buttonText}>{props.tapCount}</span>
      <br />
      タップ
    </button>
  )
}
