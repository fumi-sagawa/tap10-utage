import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Button } from './Button'

export default {
  component: Button,
} as ComponentMeta<typeof Button>

export const Index: ComponentStoryObj<typeof Button> = {
  args: { onClick: action('クリック'), text: 'Sample Text' },
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
