import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  gap: 8px;
`

export const label = css`
  color: ${variables.fontColorWhite};
`

export const inner = css`
  display: grid;
  gap: 4px;
  position: relative;
  &::after {
    right: 16px;
    top: 20px;
    position: absolute;
    pointer-events: none;
    z-index: 2;
    content: url(/select_arrow.svg);
  }
`

export const select = (selected: boolean) => css`
  padding: 18px 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid ${variables.mainColor};
  background-color: white;
  color: ${selected ? variables.fontColorBlack : '#6C6C6C'};
`
export const error = css`
  color: ${variables.fontColorWhite};
`
