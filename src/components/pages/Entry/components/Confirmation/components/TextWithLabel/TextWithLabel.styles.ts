import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  gap: 8px;
`
export const title = css`
  color: ${variables.fontColorWhite};
`

export const text = css`
  padding: 18px 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid ${variables.mainColor};
  background-color: white;
`
