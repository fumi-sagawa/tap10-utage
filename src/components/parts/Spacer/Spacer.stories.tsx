import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Spacer } from './Spacer'

export default {
  component: Spacer,
} as ComponentMeta<typeof Spacer>

export const Index: ComponentStoryObj<typeof Spacer> = {
  args: { margin: 20 },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
