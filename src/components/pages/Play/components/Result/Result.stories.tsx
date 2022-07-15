import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Result } from './Result'

export default {
  component: Result,
} as ComponentMeta<typeof Result>

export const Index: ComponentStoryObj<typeof Result> = {
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
