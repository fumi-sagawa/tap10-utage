import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { EntryForm } from './EntryForm'

export default {
  component: EntryForm,
} as ComponentMeta<typeof EntryForm>

export const Index: ComponentStoryObj<typeof EntryForm> = {
  args: {
    handleClick: action('handleClick'),
    setUserInfo: action('setUserInfo'),
    defaultValues: { name: '', team: '' },
    selectOptions: [
      { label: 'string', value: 'string' },
      { label: 'string', value: 'string' },
      { label: 'string', value: 'string' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   //以下にインタラクションを記述
  //   // userEvent.click(canvas.getByRole('button'))
  // },
}
