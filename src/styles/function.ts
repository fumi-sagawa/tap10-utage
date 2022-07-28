import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

//メディアクエリ
export const mq = (key: keyof typeof breakpoints): string =>
  `@media (min-width: ${breakpoints[key]}px)`

//display:none用
export const displayNoneMin = (
  key: keyof typeof breakpoints
): SerializedStyles => css`
  @media (min-width: ${breakpoints[key]}px) {
    display: none;
  }
`
export const displayNoneMax = (
  key: keyof typeof breakpoints
): SerializedStyles => css`
  @media (max-width: ${breakpoints[key]}px) {
    display: none;
  }
`
export const displayNone = (
  minKey: keyof typeof breakpoints | 'none',
  maxKey: keyof typeof breakpoints | 'none'
): SerializedStyles => {
  //min-widthが指定されていたら最小メディアクエリを返す
  const minText = () => {
    if (minKey !== 'none') {
      return `min-width: ${breakpoints[minKey]}px`
    }
    return ''
  }
  //man-widthが指定されていたら最大メディアクエリを返す
  const maxText = () => {
    if (maxKey !== 'none') {
      return `min-width: ${breakpoints[maxKey]}px`
    }
    return ''
  }
  //両方指定されていたらandを返す
  const ampersand = () => {
    if (minKey !== 'none' && maxKey !== 'none') {
      return `and`
    }
    return ''
  }
  return css`
    @media (${minText()}${ampersand()}${maxText()}) {
      display: none;
    }
  `
}

export const clampFontSize = (
  minFontSize: number,
  maxFontSize: number,
  minViewPort = 360,
  maxViewPort = 414
): string => {
  //傾き
  const a = (maxFontSize - minFontSize) / (maxViewPort - minViewPort)
  //切片
  const b = minFontSize - a * minViewPort
  return `clamp(${minFontSize}px, ${b}px + ${a * 100}vw, ${maxFontSize}px)`
}
