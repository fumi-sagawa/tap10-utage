import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  justify-items: center;
  margin-top: 36px;
`
export const caption = css`
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.08em;
  color: ${variables.fontColorWhite};
`
export const time = css`
  color: ${variables.fontColorWhite};
  font-size: 32px;
  font-weight: 600;
`

export const timeUp = css`
  color: ${variables.mainColor};
  font-size: 32px;
  text-align: center;
  letter-spacing: 0.08em;
  font-weight: 600;
`

export const uiContainer = css`
  width: 100%;
  display: grid;
  gap: 20px;
`

export const caution = css`
  color: ${variables.fontColorWhite};
  font-size: 14px;
  text-align: center;
`
