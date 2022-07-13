import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Input } from './Input'

export default {
  component: Input,
} as ComponentMeta<typeof Input>

export const Index: ComponentStoryObj<typeof Input> = {
  args: { label: 'ラベル' },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
