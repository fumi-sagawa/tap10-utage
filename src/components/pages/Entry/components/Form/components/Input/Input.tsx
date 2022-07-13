import * as styles from './Input.styles'

type InputProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
}

export const Input = (props: InputProps) => {
  return (
    <div css={styles.container}>
      <label htmlFor="">{props.label}</label>
      <input type="text" value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
    </div>
  )
}
