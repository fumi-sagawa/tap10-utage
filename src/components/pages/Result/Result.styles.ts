import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export { wrapper } from '@/styles/variables'

export const title = css`
  font-size: 16px;
  text-align: center;
  color: ${variables.fontColorWhite};
  font-weight: 600;
`

export const container = css`
  display: grid;
  padding: 80px 0;
`
export const rankingTitle = css`
  font-size: 34px;
  font-weight: 600;
  color: ${variables.fontColorWhite};
  text-align: center;
  margin: 40px 0 24px;
`
