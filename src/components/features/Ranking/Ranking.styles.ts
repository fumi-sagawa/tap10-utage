import { css } from '@emotion/react'

import { clampFontSize } from '@/styles/function'
import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  gap: 48px;
`

export const inner = css`
  display: grid;
  gap: 20px;
`

export const rankingGrid = css`
  display: grid;
  align-items: center;
  /* gap: 16px; */
  grid-template-columns: auto 1fr 180px;
  grid-template-rows: repeat(2, auto);
`
export const titleRank = css`
  font-size: ${clampFontSize(40, 55)};
  font-weight: 600;
  color: ${variables.mainColor};
`

export const titleTeam = css`
  margin-left: ${clampFontSize(10, 16)};
  margin-right: ${clampFontSize(16, 24)};
  font-size: ${clampFontSize(16, 24)};
  font-weight: 600;
  color: ${variables.fontColorWhite};
`
export const titleNumber = css`
  justify-self: start;
  color: ${variables.fontColorWhite};
  font-size: ${clampFontSize(40, 55)};
  letter-spacing: 0.08em;
  font-weight: 600;
`

export const scoreList = css`
  display: grid;
  grid-row: 2 / -1;
  grid-column: -1 / -2;
  gap: 16px;
`

export const scoreListItem = css`
  margin-top: ${clampFontSize(16, 24)};
  font-size: 20px;
  color: ${variables.fontColorWhite};
  display: grid;
  align-items: center;
  grid-template-columns: 100px 72px;
`
export const tapCount = css`
  justify-self: end;
`
