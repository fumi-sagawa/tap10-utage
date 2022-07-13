import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Confirmation } from './Confirmation'

export default {
  component: Confirmation,
} as ComponentMeta<typeof Confirmation>

export const Index: ComponentStoryObj<typeof Confirmation> = {
  args: { team: 'チーム名テキスト', name: '名前テキスト' },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
