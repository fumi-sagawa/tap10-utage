import { css } from '@emotion/react'

export const container = css`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr minmax(auto, 300px) 1fr;
  & > * {
    grid-column: 2/3;
  }
`

export const title = css`
  font-size: 18px;
  font-weight: 600;
`

export const explanation = css`
  font-size: 14px;
  font-weight: 600;
`
