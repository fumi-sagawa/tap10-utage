import { css } from '@emotion/react'

export const button = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: #fff;
  background-color: #a0ce00;
  border: none;
  outline: none;
  font-size: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    color: #aaa;
  }
`

export const buttonText = css`
  font-size: 60px;
`
