import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Sound } from './Sound'

export default {
  component: Sound,
} as ComponentMeta<typeof Sound>

export const Index: ComponentStoryObj<typeof Sound> = {
  args: { onClick: action('クリック'), isOn: false },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
