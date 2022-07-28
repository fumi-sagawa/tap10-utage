import * as styles from './Spacer.styles'

type SpacerProps = {
  margin: number
}

export const Spacer = (props: SpacerProps) => {
  return <div css={styles.margin(props.margin)}></div>
}
