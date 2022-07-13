import * as styles from './Button.styles'

type ButtonProps = {
  text: string
  type: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} css={styles.button} onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  )
}
