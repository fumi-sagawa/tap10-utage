import { motion } from 'framer-motion'

import * as styles from './ToggleSwitch.styles'

type ToggleSwitchProps = {
  isOn: boolean
  onClick: () => void
}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  return (
    <div css={styles.switchButton(props.isOn)} onClick={props.onClick}>
      <motion.div css={styles.handle} layout transition={spring} />
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
