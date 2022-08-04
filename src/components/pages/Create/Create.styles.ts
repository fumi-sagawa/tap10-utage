import { css } from '@emotion/react'

import { clampFontSize } from '@/styles/function'

export const title = css`
  font-size: ${clampFontSize(20, 24)};
  font-weight: 600;
`

export const container = css`
  height: 100vh;
  display: grid;
  gap: 16px;
  justify-content: center;
  align-content: center;
`

export const url = css`
  background-color: #333;
  color: white;
  padding: 16px;
  border-radius: 8px;
`
export const urlcontainer = css`
  display: grid;
  gap: 8px;
`
