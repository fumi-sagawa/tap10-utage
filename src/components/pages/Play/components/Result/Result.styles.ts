import { css } from '@emotion/react'

export const container = css`
  display: grid;
  justify-items: center;
  gap: 16px;
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
`

export const imageWrapper = css`
  display: grid;
  justify-items: center;
  gap: 16px;
`

export const imageContainer = css`
  width: 200px;
  height: 200px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
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
