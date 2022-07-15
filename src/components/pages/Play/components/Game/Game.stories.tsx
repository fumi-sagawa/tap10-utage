import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Game } from './Game'

export default {
  component: Game,
} as ComponentMeta<typeof Game>

export const Index: ComponentStoryObj<typeof Game> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    //以下にインタラクションを記述
    // userEvent.click(canvas.getByRole('button'))
  },
}
export const Variation: ComponentStoryObj<typeof Game> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
}
