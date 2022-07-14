import { Button } from '@/components/parts/Button'

import { TextWithLabel } from './components/TextWithLabel'
import * as styles from './Confirmation.styles'

type ConfirmationProps = {
  team: string
  name: string
  handleClickEntry: () => void
  handleClickBack: () => void
}

export const Confirmation = (props: ConfirmationProps) => {
  return (
    <div>
      <div>
        <TextWithLabel title={'チーム名'} text={props.team} />
        <TextWithLabel title={'名前'} text={props.name} />
      </div>
      <Button
        text={'エントリー'}
        type={'button'}
        onClick={props.handleClickEntry}
      />
      <Button text={'戻る'} type={'button'} onClick={props.handleClickBack} />
    </div>
  )
}
