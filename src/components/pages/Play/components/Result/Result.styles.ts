import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const container = css`
  display: grid;
  justify-items: center;
`

export const resultContainer = css`
  display: grid;
`
export const resultText = css`
  font-size: 24px;
  color: ${variables.fontColorWhite};
  font-weight: 600;
  letter-spacing: 0.08em;
`
export const count = css`
  font-size: 108px;
  color: ${variables.fontColorWhite};
  font-weight: 600;
`
export const unit = css`
  font-size: 52px;
  color: ${variables.fontColorWhite};
  font-weight: 600;
`
export const text = css`
  font-size: 20px;
  color: ${variables.fontColorWhite};
  font-weight: 600;
  line-height: calc(35 / 24);
  letter-spacing: 0.08em;
`

export const caution = css`
  font-size: 16px;
  font-weight: 600;
  color: ${variables.fontColorWhite};
  letter-spacing: 0.08em;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 8px;
  &::before {
    content: url(/forbidden.svg);
  }
`

export const imageWrapper = css`
  display: grid;
  justify-items: center;
  gap: 16px;
`

export const imageContainer = css`
  width: 140px;
  height: 140px;
  border-radius: 999px;
  overflow: hidden;
  background-color: white;
`

export const image = css`
  height: 100%;
  width: 100%;
  padding: 20px;
  object-fit: contain;
`

export const profileContainer = css`
  display: grid;
  gap: 8px;
  justify-items: center;
`

export const profileText = css`
  font-size: 16px;
  font-weight: 600;
  color: ${variables.mainColor};
  letter-spacing: 0.08em;
`
export const profileLink = css`
  font-size: 16px;
  font-weight: 600;
  color: ${variables.fontColorWhite};
  letter-spacing: 0.08em;
  text-decoration: underline;
`

export const profileButton = css`
  text-decoration: underline;
`

export const modalButton = css`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: white;
  font-size: 16px;
  border: 2px solid #333;
`

export const modalWrapper = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: minmax(35px, 1fr) minmax(auto, 345px) minmax(35px, 1fr);
  & > * {
    grid-column: 2;
  }
`

export const modalContainer = css``

export const modalImage = css`
  width: 100%;
  object-fit: contain;
`
