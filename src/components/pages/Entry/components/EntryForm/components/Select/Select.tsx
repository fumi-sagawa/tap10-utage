import { useState } from 'react'

import * as styles from './Select.styles'

type SelectProps = {
  label: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onBlur: () => void
  options: { value: string; label: string }[]
  error: string | undefined
}

export const Select = (props: SelectProps) => {
  //プレースホルダの色分け用
  const selected = props.value === '' ? false : true

  return (
    <div css={styles.container}>
      <label htmlFor={props.id}>{props.label}</label>
      <div css={styles.inner}>
        <select
          css={styles.select(selected)}
          value={props.value}
          // onChange={props.onChange}
          onChange={props.onChange}
          onBlur={props.onBlur}
          id={props.id}
        >
          {/* プレースホルダの役割 */}
          <option value="" disabled>
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
