import { css } from '@emotion/react'

import { variables } from '@/styles/variables'

export const fukidashiContainer = css`
  height: 240px;
  display: grid;
  align-content: end;
  &::after {
    content: '';
    justify-self: center;
    border-top: 35px solid white;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
  }
`

export const fukidashi = css`
  padding: 16px 40px;
  background-color: white;
  border-radius: 15px;
  display: grid;
  //フォントの設定
  color: ${variables.backGroundColor};
  font-size: 34px;
  font-weight: 600;
  text-align: center;
`
