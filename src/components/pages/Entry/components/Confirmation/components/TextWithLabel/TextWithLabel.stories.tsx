import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { TextWithLabel } from './TextWithLabel'

export default {
  component: TextWithLabel,
} as ComponentMeta<typeof TextWithLabel>

export const Index: ComponentStoryObj<typeof TextWithLabel> = {
  args: { title: 'タイトルテキスト', text: '本文テキスト' },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
