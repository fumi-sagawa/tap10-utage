import { expect } from '@storybook/jest'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import {
  userEvent,
  waitForElementToBeRemoved,
  within,
} from '@storybook/testing-library'

import { Entry } from './Entry'

export default {
  component: Entry,
} as ComponentMeta<typeof Entry>

export const Index: ComponentStoryObj<typeof Entry> = {
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}

export const SelectSuccess: ComponentStoryObj<typeof Entry> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/loading/i))
    await waitForElementToBeRemoved(() => canvas.queryByText(/loading/i))
    userEvent.selectOptions(await canvas.findByLabelText('チーム名'), 'チームA')
    expect(canvas.getByLabelText('チーム名')).toHaveValue('teama')
  },
}

export const InputSuccess: ComponentStoryObj<typeof Entry> = {
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/loading/i))
    await waitForElementToBeRemoved(() => canvas.queryByText(/loading/i))
    await userEvent.type(await canvas.findByLabelText('名前'), 'サンプル名前', {
      delay: 50,
    })
    expect(canvas.getByLabelText('名前')).toHaveValue('サンプル名前')
  },
}

export const InputError: ComponentStoryObj<typeof Entry> = {
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/loading/i))
    await waitForElementToBeRemoved(() => canvas.queryByText(/loading/i))
    await userEvent.type(await canvas.findByLabelText('名前'), 'サンプル名前', {
      delay: 50,
    })
    userEvent.clear(canvas.getByLabelText('名前'))
    expect(await canvas.findByText('入力してください')).toBeInTheDocument()
  },
}

export const EntryOperation: ComponentStoryObj<typeof Entry> = {
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/loading/i))
    await waitForElementToBeRemoved(() => canvas.queryByText(/loading/i))
    userEvent.selectOptions(await canvas.findByLabelText('チーム名'), 'チームA')
    await userEvent.type(canvas.getByLabelText('名前'), 'サンプル名前', {
      delay: 50,
    })
    userEvent.click(canvas.getByRole('button'))
    expect(
      await canvas.findByText('この内容でエントリーしますか？')
    ).toBeInTheDocument()
  },
}
