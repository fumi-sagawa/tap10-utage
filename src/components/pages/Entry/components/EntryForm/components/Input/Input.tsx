import * as styles from './Input.styles'

type InputProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  error: string | undefined
}

export const Input = (props: InputProps) => {
  return (
    <div css={styles.container}>
      <label htmlFor="">{props.label}</label>
      <div css={styles.inner}>
        <input type="text" value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        {props.error ?? <p>{props.error}</p>}
      </div>
    </div>
  )
}
