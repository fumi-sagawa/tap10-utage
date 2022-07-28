import { css } from '@emotion/react'

import { clampFontSize } from '@/styles/function'
import { variables } from '@/styles/variables'

export { wrapper } from '@/styles/variables'

export const container = css`
  display: grid;

  margin-top: 80px;
`

export const title = css`
  display: grid;
  gap: 8px;
`
export const titleCaption = css`
  /* font-size: 26px; */
  font-size: ${clampFontSize(20, 26)};
  font-weight: 600;
  text-align: center;
  color: ${variables.fontColorWhite};
`
export const titleMain = css`
  font-size: ${clampFontSize(44, 57)};
  font-weight: 600;
  text-align: center;
  color: ${variables.mainColor};
`

export const explanation = css`
  margin: 30px 0 40px;
  font-size: 16px;
  text-align: center;
  color: ${variables.fontColorWhite};
`

export const spacer = css`
  height: 82px;
`

export const tamkunContainer = css`
  display: grid;
  place-items: center;
`
export const tamkun = css`
  height: 180px;
  width: 102px;
`
