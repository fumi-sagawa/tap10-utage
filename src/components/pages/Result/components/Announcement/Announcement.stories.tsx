import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Announcement } from './Announcement'

export default {
  component: Announcement,
} as ComponentMeta<typeof Announcement>

export const Index: ComponentStoryObj<typeof Announcement> = {
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
export const Variation: ComponentStoryObj<typeof Announcement> = {
  args: { onClick: action('クリック') },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
}
