import { css } from '@emotion/react'

import { clampFontSize } from '@/styles/function'

export const container = css`
  height: auto;
  width: 100%;
  position: relative;
`

export const background = css`
  height: auto;
  width: 100%;
`

const place = css`
  position: absolute;
  /* 全体の高さから相対位置を出す。レスポンシブに対応するため */
  bottom: calc(54 / 403 * 100%);
  left: 50%;
  transform: translate(-50%, 0);
`

export const imageButton = css`
  ${place}
  /* width: 236px;
  height: 236px; */
  width: calc(236 / 344 * 100%);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
`

export const image = css`
  height: 100%;
  width: 100%;
  padding: 20px;
  object-fit: contain;
`

export const button = css`
  ${place}
  /* width: 236px;
  height: 236px; */
  width: calc(236 / 344 * 100%);
  aspect-ratio: 1 / 1;

  color: #fff;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  display: grid;
  justify-items: center;
  align-content: center;
`
export const buttonNumber = css`
  font-size: ${clampFontSize(130, 170)};
  font-weight: 600;
`
export const buttonText = css`
  font-size: ${clampFontSize(36, 52)};
  font-weight: 600;
`
