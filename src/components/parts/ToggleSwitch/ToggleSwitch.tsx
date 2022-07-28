import { motion } from 'framer-motion'

import * as styles from './ToggleSwitch.styles'

type ToggleSwitchProps = {
  isOn: boolean
  onClick: () => void
}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  return (
    <div css={styles.switchButton(props.isOn)} onClick={props.onClick}>
      <div css={styles.handle(props.isOn)} />
    </div>
  )
}
