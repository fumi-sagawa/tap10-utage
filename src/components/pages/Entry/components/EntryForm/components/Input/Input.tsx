import * as styles from './Input.styles'

type InputProps = {
  label: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  error: string | undefined
}

export const Input = (props: InputProps) => {
  return (
    <div css={styles.container}>
      <label htmlFor={props.id}>{props.label}</label>
      <div css={styles.inner}>
        <input
          css={styles.input}
          type="text"
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={'入力してください'}
        />
        {props.error ?? <p>{props.error}</p>}
      </div>
    </div>
  )
}
