import { css } from '@emotion/react'

export const variables = {
  maxWidth: '345px',
  backGroundColor: '#2F75D6',
  mainColor: '#FFCC47',
  fontColorWhite: 'white',
  fontColorBlack: 'rgba(0,0,0,0.87)',
}

export const wrapper = css`
  display: grid;
  grid-template-columns: minmax(35px, 1fr) minmax(auto, 345px) minmax(35px, 1fr);
  & > * {
    grid-column: 2;
  }
  &::after {
    content: '';
    background-color: ${variables.backGroundColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* inset: 0; */
    z-index: -1;
  }
`
