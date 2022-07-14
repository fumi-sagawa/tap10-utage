import { css } from '@emotion/react'

export const switchButton = (isOn: boolean) => css`
  width: 140px;
  height: 80px;
  background-color: rgba(110, 110, 110, 0.486);
  display: flex;
  justify-content: ${isOn ? 'flex-end' : 'flex-start'};
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`

export const handle = css`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 40px;
`
