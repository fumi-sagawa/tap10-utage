import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Entry.stories'

const { Index, SelectSuccess, InputSuccess, InputError, EntryOperation } =
  composeStories(stories)

describe('Entry', () => {
  it('選択結果が正しく反映される', async () => {
    const { container } = render(<SelectSuccess />)
    await SelectSuccess.play({ canvasElement: container })
  })
  it('入力結果が正しく反映される', async () => {
    const { container } = render(<InputSuccess />)
    await InputSuccess.play({ canvasElement: container })
  })
  it('空欄にした際にエラーが発生する', async () => {
    const { container } = render(<InputError />)
    await InputError.play({ canvasElement: container })
  })
  it('正しい値を入力しボタンを押下した際に確認画面に遷移する', async () => {
    const { container } = render(<EntryOperation />)
    await EntryOperation.play({ canvasElement: container })
  })
})
