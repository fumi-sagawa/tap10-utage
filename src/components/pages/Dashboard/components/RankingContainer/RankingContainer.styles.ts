import { css } from '@emotion/react'

export const rankingContainer = css`
  display: grid;
  gap: 48px;
  justify-items: center;
`
export const buttonContainer = css`
  display: grid;
  height: 100%;
  justify-items: center;
  align-items: center;
`

export const modalWrapper = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);

  display: grid;
  justify-items: center;
  align-items: center;
`
export const modal = css`
  background-color: white;
  padding: 40px;
  border: 1px solid #333;
  display: grid;
  gap: 16px;
`
export const modalText = css`
  line-height: 1.4;
`

export const modalButtonContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`

export const restart = css`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
`
