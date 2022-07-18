import { css } from '@emotion/react'

export const wrapper = css`
  padding: 50px;
  display: grid;
  gap: 40px;
  /* grid-template-rows: 40px calc(100vh - 40px - 50px * 2); */
`

export const title = css`
  font-size: 24px;
  font-weight: 600;
`

export const container = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const rankingContainer = css`
  display: grid;
  gap: 48px;
  justify-items: center;
`
