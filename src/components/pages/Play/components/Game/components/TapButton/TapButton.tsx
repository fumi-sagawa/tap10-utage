import * as styles from './TapButton.styles'

type TapButtonProps = {
  isPlaying: boolean
  isEnd: boolean
  onClick: () => void
  imageSrc: string
}

export const TapButton = (props: TapButtonProps) => {
  return (
    <div css={styles.container}>
      <img css={styles.background} src="/tapbutton_background.svg" alt="" />
      {props.isPlaying || props.isEnd ? (
        <button
          onClick={props.onClick}
          disabled={!props.isPlaying}
          css={styles.imageButton}
        >
          <img
            css={styles.image}
            src={props.imageSrc}
            alt="TAMメンバーの素敵な写真"
          />
        </button>
      ) : (
        <button onClick={props.onClick} css={styles.button}>
          <span css={styles.buttonNumber}>0</span>
          <span css={styles.buttonText}> タップ</span>
        </button>
      )}
    </div>
  )
}
