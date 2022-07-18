import { css } from '@emotion/react'

export const container = css`
  display: grid;
  gap: 40px;
`

export const inner = css`
  display: grid;
  gap: 20px;
  justify-items: center;
`

export const title = css`
  font-size: 24px;
  font-weight: 600;
`

export const scoreList = css`
  display: grid;
  gap: 16px;
`

export const scoreListItem = css`
  font-size: 16px;
  display: grid;
  gap: 8px;
  grid-template-columns: 160px 100px;
`
export const tapCount = css`
  justify-self: end;
`
