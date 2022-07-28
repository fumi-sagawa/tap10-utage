import { css } from '@emotion/react'

export const switchButton = (isOn: boolean) => css`
  width: 38px;
  height: 24px;
  background-color: ${isOn ? '#2FE3B3' : 'rgba(256, 256, 256, 0.5)'};
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: 0.3s 0s ease;
`

export const handle = (isOn: boolean) => css`
  position: absolute;
  top: 50%;
  ${isOn ? ' right: 0;' : ' left: 0;'}
  ${isOn
    ? ' transform: translate(40%, -50%);'
    : '  transform: translate(-40%, -50%);'}
  transition:  0.3s 0s ease;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
`
