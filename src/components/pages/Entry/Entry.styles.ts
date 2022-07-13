import { css } from '@emotion/react'

export const container = css`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px) 1fr;
  & > * {
    grid-column: 2/3;
  }
`
