import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { ToggleSwitch } from './ToggleSwitch'

export default {
  component: ToggleSwitch,
} as ComponentMeta<typeof ToggleSwitch>

export const Index: ComponentStoryObj<typeof ToggleSwitch> = {
  args: { onClick: action('クリック'), isOn: false },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
