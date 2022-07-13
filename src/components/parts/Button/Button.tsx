import * as styles from './Button.styles'

type ButtonProps = {
  text: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button css={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
