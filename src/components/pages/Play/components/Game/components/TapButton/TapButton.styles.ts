import { css } from '@emotion/react'

export const button = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: #fff;
  background-color: #74a16a;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    color: #aaa;
  }
  display: grid;
  justify-items: center;
  align-content: center;
`

export const buttonText = css`
  font-size: 60px;
`

export const imageButton = css`
  width: 200px;
  height: 200px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`
