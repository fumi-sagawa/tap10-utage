import * as styles from './Select.styles'

type SelectProps = {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onBlur: () => void
  options: { value: string; label: string }[]
  error: string | undefined
}

export const Select = (props: SelectProps) => {
  return (
    <div css={styles.container}>
      <label htmlFor="">{props.label}</label>
      <div css={styles.inner}>
        <select value={props.value} onChange={props.onChange} onBlur={props.onBlur}>
          {/* プレースホルダの役割 */}
          <option value="" disabled selected style={{ display: 'none' }}>
            選択してください
          </option>
          {props.options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {props.error ?? <p>{props.error}</p>}
      </div>
    </div>
  )
}
