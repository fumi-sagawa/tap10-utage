import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './EntryForm.stories'

const { Index } = composeStories(stories)

describe('EntryForm', () => {
  it('期待される結果を記述', async () => {
    const { container } = render(<Index />)
    await Index.play({ canvasElement: container })
    //以下にテストターゲートと期待される結果を記述
    // const target = screen.getByRole("textbox") as HTMLInputElement;
    // expect(target.value).toEqual("Hello world!");
  })
})
