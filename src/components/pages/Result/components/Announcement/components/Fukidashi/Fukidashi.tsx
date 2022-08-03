import { motion } from 'framer-motion'

import * as styles from './Fukidashi.styles'

type FukidashiProps = {
  key: string
  textContent: React.ReactElement
}

export const Fukidashi = (props: FukidashiProps) => {
  return (
    <motion.div
      key={props.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      css={styles.fukidashiContainer}
    >
      <div css={styles.fukidashi}>{props.textContent}</div>
    </motion.div>
  )
}
