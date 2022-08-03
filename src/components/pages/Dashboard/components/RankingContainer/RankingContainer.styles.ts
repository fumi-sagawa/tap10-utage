import { css } from '@emotion/react'

export const rankingContainer = css`
  display: grid;
  gap: 48px;
  justify-items: center;
  padding: 20px 0;
  background-color: #2f75d6;
  color: white;
  //高さがあるコンテンツ分除算
  max-height: calc(100vh - 27px - 40px - 50px - 50px);
  border-radius: 16px;
  overflow-y: auto;
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
  width: 200px;
  top: 40px;
  right: 40px;
  overflow: hidden;
  z-index: 10;
`
