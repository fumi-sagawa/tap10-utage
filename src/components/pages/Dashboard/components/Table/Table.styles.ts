import { css } from '@emotion/react'

export const container = css`
  display: grid;
  gap: 16px;
  align-content: start;
`

export const title = css`
  font-size: 16px;
  font-weight: 600;
`

export const table = css`
  //高さがあるコンテンツ分除算
  max-height: calc(100vh - 27px - 40px - 50px - 50px - 18px - 16px);
  overflow-y: auto;
`

export const listItem = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  min-height: 48px;
  align-items: center;
  border-bottom: solid 1px #333;
`

export const playIndicator = (played: boolean) => css`
  color: ${played ? '#74A16A' : '#F86660'};
  ${!played && 'font-weight: 600'};
`
