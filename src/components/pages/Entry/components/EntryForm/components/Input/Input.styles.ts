import { css } from '@emotion/react'

export const container = css`
  display: grid;
  gap: 4px;
`

export const inner = css`
  display: grid;
  gap: 4px;
`

export const input = css`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #ddd;
  &::placeholder {
    color: #bbb;
  }
`
