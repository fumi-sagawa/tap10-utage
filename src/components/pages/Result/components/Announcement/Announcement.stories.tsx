import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Announcement } from './Announcement'

export default {
  component: Announcement,
} as ComponentMeta<typeof Announcement>

export const Index: ComponentStoryObj<typeof Announcement> = {
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
