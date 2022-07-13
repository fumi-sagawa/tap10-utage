import * as styles from './Select.styles'

type SelectProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
}

export const Select = (props: SelectProps) => {
  return (
    <div css={styles.container}>
      <label htmlFor="">{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
