import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${variables.fontColorWhite};
`
