import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Game } from './Game'

export default {
  component: Game,
} as ComponentMeta<typeof Game>

export const Index: ComponentStoryObj<typeof Game> = {
  args: {
    isPlayng: false,
    isEnd: false,
    time: 0,
    timeLimit: 10,
    imageSrc: '/sample1.jpg',
    onClickTapButton: action('onClickTapButton'),
    tapCount: 0,
    onClickStart: action('onClickStart'),
    onClickResult: action('onClickResult'),
    onClickToggle: action('onClickToggle'),
    isSoundOn: false,
  },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
}
