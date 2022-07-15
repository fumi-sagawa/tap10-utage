import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { TapButton } from './TapButton'

export default {
  component: TapButton,
} as ComponentMeta<typeof TapButton>

export const Index: ComponentStoryObj<typeof TapButton> = {
  args: { isPlaying: false, onClick: action('クリック'), tapCount: 0 },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
