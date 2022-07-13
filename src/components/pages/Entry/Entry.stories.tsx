import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Entry } from './Entry'

export default {
  component: Entry,
} as ComponentMeta<typeof Entry>

export const Index: ComponentStoryObj<typeof Entry> = {
  args: { text: 'テキスト' },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
export const Variation: ComponentStoryObj<typeof Entry> = {
  args: { text: 'テキスト' },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
}