import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const button = css`
  background-color: ${variables.mainColor};
  color: ${variables.fontColorBlack};
  font-size: 14px;
  padding: 14px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  border-radius: 999px;
  &:disabled {
    opacity: 0.6;
  }
`
