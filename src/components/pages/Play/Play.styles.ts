import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export { wrapper } from '@/styles/variables'

export const container = css`
  display: grid;
  padding: 58px 0;
`

export const title = css`
  font-size: 16px;
  text-align: center;
  color: ${variables.fontColorWhite};
  font-weight: 600;
`

export const caption = css`
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  color: ${variables.fontColorWhite};
`

export const name = css`
  font-size: 16px;
  font-weight: 600;
  color: ${variables.mainColor};
`
