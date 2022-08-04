import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Fukidashi } from './Fukidashi'

export default {
  component: Fukidashi,
} as ComponentMeta<typeof Fukidashi>

export const Index: ComponentStoryObj<typeof Fukidashi> = {
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
