import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Game } from './Game'

export default {
  component: Game,
} as ComponentMeta<typeof Game>

export const Index: ComponentStoryObj<typeof Game> = {
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
